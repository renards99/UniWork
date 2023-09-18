require('dotenv').config();
let dateFormat = require('dateFormat');
let crypto = require('crypto');
let querystring = require('qs');

let $ = require('jquery');
const request = require('request');
const moment = require('moment');

const db = require('../models');
const JOB_POST = db.job_post;
const QueryTypes = db.Sequelize.QueryTypes;
const responseHandler = require('../handlers/response.handler');
const tmnCode = process.env.VNPAY_TMNCODE;
const secretKey = process.env.VNPAY_HASH_SECRET;
let vnpUrl = process.env.VNPAY_URL;
let returnUrl = process.env.VNPAY_RETURN_URL;

function sortObject(obj) {
  let sorted = {};
  let str = [];
  let key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      str.push(encodeURIComponent(key));
    }
  }
  str.sort();
  for (key = 0; key < str.length; key++) {
    sorted[str[key]] = encodeURIComponent(obj[str[key]]).replace(/%20/g, '+');
  }
  return sorted;
}

module.exports = {
  async createPayment(req, res) {
    const params = req.body;
    try {
      process.env.TZ = 'Asia/Ho_Chi_Minh';

      let date = new Date();
      let createDate = moment(date).format('YYYYMMDDHHmmss');
      let ipAddr =
        req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;

      let tmnCode = process.env.VNPAY_TMNCODE;
      let secretKey = process.env.VNPAY_HASH_SECRET;
      let vnpUrl = process.env.VNPAY_URL;
      let returnUrl = process.env.VNPAY_RETURN_URL;
      let orderId = moment(date).format('DDHHmmss');
      let amount = parseFloat(params?.price ? params?.price : 0);
      let bankCode = req.body.bankCode ? req.body.bankCode : null;
      let locale = req.body.language;
      if (locale === null || locale === '') {
        locale = 'vn';
      }

      const jobPostDetail = {
        id: orderId,
        title: params.title,
        work_hours: params.work_hours,
        service_id: params.service_id,
        job_type_id: params.job_type_id,
        post_by_id: params.post_by_id,
        company_id: params.company_id,
        hire_number: params.hire_number,
        job_location: params.job_location,
        is_active: params.is_active,
        salary: params.salary,
        view: params.view,
        gender: params.gender,
        state: params.state,
        job_description: params.job_description,
        apply_at: params.apply_at,
        expired_at: params.expired_at,
        created_at: params.created_at,
        updated_at: params.updated_at,
        experience: params.experience,
      };
      let currCode = 'VND';
      let vnp_Params = {};
      vnp_Params['vnp_Version'] = '2.1.0';
      vnp_Params['vnp_Command'] = 'pay';
      vnp_Params['vnp_TmnCode'] = tmnCode;
      vnp_Params['vnp_Locale'] = 'vn';
      vnp_Params['vnp_CurrCode'] = currCode;
      vnp_Params['vnp_TxnRef'] = orderId;
      vnp_Params['vnp_OrderInfo'] = 'Thanh toan cho ma GD:' + orderId;
      vnp_Params['vnp_OrderType'] = 'other';
      vnp_Params['vnp_Amount'] = amount * 100;
      vnp_Params['vnp_ReturnUrl'] = returnUrl;
      vnp_Params['vnp_IpAddr'] = ipAddr;
      vnp_Params['vnp_CreateDate'] = createDate;
      if (bankCode !== null && bankCode !== '') {
        vnp_Params['vnp_BankCode'] = bankCode;
      }
      vnp_Params = sortObject(vnp_Params);

      let querystring = require('qs');
      let signData = querystring.stringify(vnp_Params, { encode: false });
      let crypto = require('crypto');
      let hmac = crypto.createHmac('sha512', secretKey);
      let signed = hmac.update(new Buffer(signData, 'utf-8')).digest('hex');
      vnp_Params['vnp_SecureHash'] = signed;
      vnpUrl += '?' + querystring.stringify(vnp_Params, { encode: false });
      //   const createTransaction = await Transaction.create(dataTransaction);
      const createJob = await JOB_POST.create(jobPostDetail);
      if (params.paymentStatusType) {
        if (createJob) {
          return responseHandler.responseWithData(res, 200, createJob);
        } else {
          return responseHandler.badRequest(res, 'Không thể tạo giao dịch');
        }
      } else {
        if (createJob) {
          return responseHandler.responseWithData(res, 200, { link_payment: vnpUrl });
        } else {
          return responseHandler.badRequest(res, 'Không thể tạo giao dịch');
        }
      }
    } catch (error) {
      return responseHandler.badRequest(res, 'Có lỗi xảy ra khi thao tác. Vui lòng thử lại');
    }
  },

  async returnPaymentResult(req, res) {
    let vnp_Params = req.query;

    let secureHash = vnp_Params['vnp_SecureHash'];

    delete vnp_Params['vnp_SecureHash'];
    delete vnp_Params['vnp_SecureHashType'];

    vnp_Params = sortObject(vnp_Params);

    let signData = querystring.stringify(vnp_Params, { encode: false });
    let hmac = crypto.createHmac('sha512', secretKey);
    let signed = hmac.update(new Buffer(signData, 'utf-8')).digest('hex');

    if (secureHash === signed) {
      if (vnp_Params['vnp_ResponseCode'] == '00') {
        return res.redirect(
          `http://localhost:${process.env.CLIENT_PORT}/employer/post-list?payment_status=${vnp_Params['vnp_ResponseCode']}`,
        );
      } else {
        await JOB_POST.destroy({ where: { id: vnp_Params['vnp_TxnRef'] } });
        return res.redirect(
          `http://localhost:${process.env.CLIENT_PORT}/employer/post-list?payment_status=${vnp_Params['vnp_ResponseCode']}`,
        );
      }
    } else {
      await JOB_POST.destroy({ where: { id: vnp_Params['vnp_TxnRef'] } });
      return res.redirect(
        `http://localhost:${process.env.CLIENT_PORT}/employer/post-list?payment_status=${vnp_Params['vnp_ResponseCode']}`,
      );
    }
  },
  async refundPayment(req, res) {
    process.env.TZ = 'Asia/Ho_Chi_Minh';
    let date = new Date();
    let vnp_TxnRef = req.body.order_id;
    let vnp_TransactionDate = dateFormat(req.body.trans_date, 'yyyyMMddHHmmss');
    let vnp_Amount = 0;
    let vnp_TransactionType = '02';
    let vnp_CreateBy = req.body.user;

    const getTransactionInformation = await Transaction({
      where: {
        created_at: req.body.trans_date,
        id: vnp_TxnRef,
      },
    });
    if (getTransactionInformation) {
      vnp_Amount = getTransactionInformation.ticket_price;
    }
    let vnp_RequestId = dateFormat(date, 'HHmmss');
    let vnp_Version = '2.1.0';
    let vnp_Command = 'refund';
    let vnp_OrderInfo = 'Hoan tien GD ma:' + vnp_TxnRef;

    let vnp_IpAddr =
      req.headers['x-forwarded-for'] ||
      req.connection.remoteAddress ||
      req.socket.remoteAddress ||
      req.connection.socket.remoteAddress;

    let vnp_CreateDate = dateFormat(date, 'yyyymmddHHmmss');

    let vnp_TransactionNo = '0';

    let data =
      vnp_RequestId +
      '|' +
      vnp_Version +
      '|' +
      vnp_Command +
      '|' +
      vnp_TmnCode +
      '|' +
      vnp_TransactionType +
      '|' +
      vnp_TxnRef +
      '|' +
      vnp_Amount +
      '|' +
      vnp_TransactionNo +
      '|' +
      vnp_TransactionDate +
      '|' +
      vnp_CreateBy +
      '|' +
      vnp_CreateDate +
      '|' +
      vnp_IpAddr +
      '|' +
      vnp_OrderInfo;
    let hmac = crypto.createHmac('sha512', secretKey);
    let vnp_SecureHash = hmac.update(new Buffer(data, 'utf-8')).digest('hex');

    let dataObj = {
      vnp_RequestId: vnp_RequestId,
      vnp_Version: vnp_Version,
      vnp_Command: vnp_Command,
      vnp_TmnCode: vnp_TmnCode,
      vnp_TransactionType: vnp_TransactionType,
      vnp_TxnRef: vnp_TxnRef,
      vnp_Amount: vnp_Amount,
      vnp_TransactionNo: vnp_TransactionNo,
      vnp_CreateBy: vnp_CreateBy,
      vnp_OrderInfo: vnp_OrderInfo,
      vnp_TransactionDate: vnp_TransactionDate,
      vnp_CreateDate: vnp_CreateDate,
      vnp_IpAddr: vnp_IpAddr,
      vnp_SecureHash: vnp_SecureHash,
    };

    request(
      {
        url: vnp_Api,
        method: 'POST',
        json: true,
        body: dataObj,
      },
      function (error, response, body) {
        console.log(body);
        responseHandler.responseWithData(res, 200, body);
      },
    );
  },
};
