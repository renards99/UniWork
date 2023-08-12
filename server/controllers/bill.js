const db = require('../models');
const Bill = db.bill;
const Op = db.Sequelize.Op;
const QueryTypes = db.Sequelize.QueryTypes;
const responseHandler = require('../handlers/response.handler');
const validateHandler = require('../handlers/validate.handler');
function validTotal(num) {
  if (isNaN(num)) {
    return false;
  }
  if (!Number.parseFloat(num)) {
    return false;
  }
  if (Number.parseFloat(num) < 0) {
    return false;
  }
  return true;
}
function validId(input) {
  return Number.isInteger(Number(input));
}
module.exports = {
  async addBill(req, res) {
    const params = req.body;

    if (!validateHandler.validateInput(params)) {
      return responseHandler.badRequest(res, 'Your input is invalid!');
    }
    if (!validTotal(params.total)) {
      return responseHandler.badRequest(
        res,
        'Total number must be number and more than 0! Try again!',
      );
    }
    if (!validId(params.service_id) || !validId(params.job_post_id)) {
      return responseHandler.badRequest(res, 'Id must be integer ! Try again!');
    }
    try {
      const createBill = await Bill.create(params);

      if (createBill) {
        return responseHandler.responseWithData(res, 200, 'Add Bill successfully!');
      } else {
        return responseHandler.badRequest(res, 'Cannot add bill! Try again!');
      }
    } catch (e) {
      return responseHandler.error(res);
    }
  },
  async deleteBill(req, res) {
    const params = req.body;
    const id = params.id;
    if (!validateHandler.validateId(id)) {
      return responseHandler.badRequest(res, 'Id must be integer ! Try again!');
    }
    const destroyBill = await Bill.destroy({
      where: {
        id: id,
      },
    });
    try {
      if (destroyBill) {
        return responseHandler.responseWithData(res, 200, 'Delete Bill successfully!');
      } else {
        return responseHandler.badRequest(res, 'Cannot delete bill! Try again!');
      }
    } catch (e) {
      return responseHandler.error(res);
    }
  },
  async updateBill(req, res) {
    const params = req.body;
    const id = params.id;
    if (!validateHandler.validateId(id)) {
      return responseHandler.badRequest(res, 'Id must be integer ! Try again!');
    }
    const updateB = await Bill.update(params, {
      where: {
        id: id,
      },
    });
    try {
      if (updateB) {
        return responseHandler.responseWithData(res, 200, 'Update Bill successfully!');
      } else {
        return responseHandler.badRequest(res, 'Cannot update bill! Try again!');
      }
    } catch (e) {
      return responseHandler.error(res);
    }
  },
  async showBillById(req, res) {
    const params = req.body;
    const id = params.id;
    if (!validateHandler.validateId(id)) {
      return responseHandler.badRequest(res, 'Id must be integer ! Try again!');
    }
    const getBillById = await Bill.findOne({
      where: {
        id: id,
      },
    });
    try {
      if (getBillById) {
        return responseHandler.responseWithData(res, 200, 'Get Bill successfully!');
      } else {
        return responseHandler.badRequest(res, 'Cannot get bill! Try again!');
      }
    } catch (e) {
      return responseHandler.error(res);
    }
  },
  async showAllBill(req, res) {
    const params = req.body;
    const { service_id, job_post_id, bill_date, total } = params;
    const getBill = await Bill.findAll();
    try {
      if (getBill) {
        return responseHandler.responseWithData(res, 200, 'Get list bill successfully!');
      } else {
        return responseHandler.badRequest(res, 'Cannot get list bill! Try again!');
      }
    } catch (e) {
      return responseHandler.error(res);
    }
  },
};
