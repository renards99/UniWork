const db = require('../models');
const Bill = db.bill;
const Op = db.Sequelize.Op;
const QueryTypes = db.Sequelize.QueryTypes;
const responsehandler = require('../handlers/response.handler');

module.exports = {
  async addBill(req, res) {
    const params = req.body;
    const createBill = await Bill.create(params);
    try {
      if (createBill) {
        return responsehandler.responseWithData(res, 200, 'Add Bill successfully!');
      } else {
        return responsehandler.badRequest(res, 'Cannot add bill! Try again!');
      }
    } catch (e) {
      return responsehandler.error(res);
    }
  },
  async deleteBill(req, res) {
    const params = req.body;
    const { id } = params;
    const destroyBill = await Bill.destroy({
      where: {
        id: id,
      },
    });
    try {
      if (destroyBill) {
        return responsehandler.responseWithData(res, 200, 'Delete Bill successfully!');
      } else {
        return responsehandler.badRequest(res, 'Cannot delete bill! Try again!');
      }
    } catch (e) {
      return responsehandler.error(res);
    }
  },
  async updateBill(req, res) {
    const params = req.body;
    const { id } = params;
    const updateB = await Bill.update(params, {
      where: {
        id: id,
      },
    });
    try {
      if (updateB) {
        return responsehandler.responseWithData(res, 200, 'Update Bill successfully!');
      } else {
        return responsehandler.badRequest(res, 'Cannot update bill! Try again!');
      }
    } catch (e) {
      return responsehandler.error(res);
    }
  },
  async showBillById(req, res) {
    const params = req.body;
    const { id } = params;
    const getBillById = await Bill.findOne({
      where: {
        id: id,
      },
    });
    try {
      if (getBillById) {
        return responsehandler.responseWithData(res, 200, 'Get Bill successfully!');
      } else {
        return responsehandler.badRequest(res, 'Cannot get bill! Try again!');
      }
    } catch (e) {
      return responsehandler.error(res);
    }
  },
  async showAllBill(req, res) {
    const params = req.body;
    const { service_id, job_post_id, bill_date, total } = params;
    const getBill = await Bill.findAll();
    try {
      if (getBill) {
        return responsehandler.responseWithData(res, 200, 'Get list bill successfully!');
      } else {
        return responsehandler.badRequest(res, 'Cannot get list bill! Try again!');
      }
    } catch (e) {
      return responsehandler.error(res);
    }
  },
};
