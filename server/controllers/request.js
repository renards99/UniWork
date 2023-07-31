//todo
const db = require("../models");
const Request = db.request;
const Op = db.Sequelize.Op;
const QueryTypes = db.Sequelize.QueryTypes;
const responsehandler = require("../handlers/response.handler");

module.exports = {
  async addRequest(req, res) {
    const params = req.body;
    const { request_name, request_description } = params;
    const createRequest = await Request.create(params);
    try {
      if (createRequest) {
        return responsehandler.responseWithData(
          res,
          "Create request successfully!"
        );
      } else {
        return responsehandler.badRequest(
          res,
          "Cannot create request, try again!"
        );
      }
    } catch (e) {
      return responsehandler.error(res);
    }
  },
  async deleteRequest(req, res) {
    const params = req.body;
    const request_id = params.request_id;
    const createRequest = await Request.create(params);
    try {
      const delete_request = await Request.destroy({
        where: {
          request_id: request_id,
        },
      });
      if (delete_request) {
        return responseHandler.ok(res, "Request deleted successfully!");
      } else {
        return responseHandler.badRequest(res, "Request does not exist!");
      }
    } catch (e) {
      return responsehandler.error(res);
    }
  },
  async updateRequest(req, res) {},
  async showBillById(req, res) {},
  async ShowAllBill(req, res) {},
};
