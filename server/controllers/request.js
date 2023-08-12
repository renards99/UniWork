const db = require('../models');
const Request = db.request;
const Op = db.Sequelize.Op;
const QueryTypes = db.Sequelize.QueryTypes;
const responseHandler = require('../handlers/response.handler');
const validateHandler = require('../handlers/validate.handler');
module.exports = {
  async addRequest(req, res) {
    try {
      const params = req.body;
      if (!validateHandler.validateId(params.user_account_id)) {
        return responseHandler.badRequest(res, 'Id must be integer ! Try again!');
      }
      if (!validateHandler.validateState(params.state)) {
        return responseHandler.badRequest(res, 'Invalid state input!');
      }
      if (!validateHandler.validateInput(params)) {
        return responseHandler.badRequest(res, 'Your input is invalid!');
      }
      const createRequest = await Request.create(params);
      if (createRequest) {
        return responseHandler.responseWithData(res, 200, 'Create request successfully!');
      } else {
        return responseHandler.badRequest(res, 'Cannot create request, try again!');
      }
    } catch (e) {
      console.log(e);
      return responseHandler.error(res);
    }
  },
  async deleteRequest(req, res) {
    const params = req.body;
    const request_id = params.id;
    if (!validateHandler.validateId(request_id)) {
      return responseHandler.badRequest(res, 'Id must be integer ! Try again!');
    }
    try {
      const delete_request = await Request.destroy({
        where: {
          id: request_id,
        },
      });
      if (delete_request) {
        return responseHandler.responseWithData(res, 200, 'Request deleted successfully!');
      } else {
        console.log(e);
        return responseHandler.badRequest(res, 'Request does not exist!');
      }
    } catch (e) {
      return responseHandler.error(res);
    }
  },

  async updateRequest(req, res) {
    const params = req.body;
    try {
      const { request_name, request_description, state } = params;
      const request_id = params.id;
      if (!validateHandler.validateId(request_id)) {
        return responseHandler.badRequest(res, 'Id must be integer ! Try again!');
      }
      if (!validateHandler.validateState(state)) {
        return responseHandler.badRequest(res, 'Invalid state input!');
      }

      const getRequest = await Request.findOne({
        where: {
          id: request_id,
        },
      });
      if (!getRequest) return responseHandler.badRequest(res, 'Request does not exist!');
      const updateRequest = await Request.update(
        { request_name, request_description, state },
        {
          where: {
            id: request_id,
          },
        },
      );
      if (updateRequest) {
        return responseHandler.responseWithData(res, 200, 'Update request successfully!');
      } else {
        return responseHandler.badRequest(res, 'Cannot update request!');
      }
    } catch (e) {
      console.log(e);
      return responseHandler.badRequest(res, 'There is something wrong with your request!');
    }
  },
  async showRequestById(req, res) {
    const params = req.body;
    try {
      const request_id = params.id;
      if (!validateHandler.validateId(request_id)) {
        return responseHandler.badRequest(res, 'Id must be integer ! Try again!');
      }
      const getRequestById = await Request.findOne({
        where: {
          id: request_id,
        },
      });
      if (getRequestById) {
        return responseHandler.responseWithData(res, 200, getRequestById);
      } else {
        return responseHandler.badRequest(res, 'Request does not exist!');
      }
    } catch (error) {
      return responseHandler.badRequest(res, 'There is something wrong with your request!');
    }
  },
  async ShowAllRequestByUserAcountId(req, res) {
    const params = req.body;
    try {
      const user_account_id = params.user_account_id;
      if (!validateHandler.validateId(user_account_id)) {
        return responseHandler.badRequest(res, 'Id must be integer ! Try again!');
      }
      const getRequestByUserId = await Request.findAll({
        where: {
          user_account_id: user_account_id,
        },
      });
      if (getRequestByUserId) {
        return responseHandler.responseWithData(res, 200, getRequestByUserId);
      } else {
        return responseHandler.badRequest(res, 'Cannot get request!');
      }
    } catch (error) {
      return responseHandler.badRequest(res, 'There is something wrong with your request!');
    }
  },
};
