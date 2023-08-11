const db = require('../models');
const Service = db.service;
const Op = db.Sequelize.Op;
const QueryTypes = db.Sequelize.QueryTypes;
const responseHandler = require('../handlers/response.handler');
const validateHandler = require('../handlers/validate.handler');
module.exports = {
  async addService(req, res) {
    const params = req.body;
    if (!validateHandler.validateInput(params)) {
      return responseHandler.badRequest(res, 'Your input is invalid!');
    }
    const createService = await Service.create(params);
    try {
      if (createService) {
        return responseHandler.responseWithData(res, 200, 'Add Service successfully!');
      } else {
        return responseHandler.badRequest(res, 'Cannot add Service! Try again!');
      }
    } catch (e) {
      console.log(e);
      return responseHandler.error(res);
    }
  },
  async deleteService(req, res) {
    const params = req.body;
    const { id } = params;
    const destroyService = await Service.destroy({
      where: {
        id: id,
      },
    });
    try {
      if (destroyService) {
        return responseHandler.responseWithData(res, 200, 'Delete Service successfully!');
      } else {
        return responseHandler.badRequest(res, 'Cannot delete Service! Try again!');
      }
    } catch (e) {
      return responseHandler.error(res);
    }
  },
  async updateService(req, res) {
    const params = req.body;
    const { id } = params;
    const updateB = await Service.update(params, {
      where: {
        id: id,
      },
    });
    try {
      if (updateB) {
        return responseHandler.responseWithData(res, 200, 'Update Service successfully!');
      } else {
        return responseHandler.badRequest(res, 'Cannot update Service! Try again!');
      }
    } catch (e) {
      return responseHandler.error(res);
    }
  },
  async getServiceById(req, res) {
    const params = req.body;
    const { id } = params;
    const get_service_by_id = await Service.findOne({
      where: {
        id: id,
      },
    });
    try {
      if (get_service_by_id) {
        return responseHandler.responseWithData(res, 200, get_service_by_id);
      } else {
        return responseHandler.badRequest(res, 'Cannot get Service! Try again!');
      }
    } catch (e) {
      return responseHandler.error(res);
    }
  },
  async getAllService(req, res) {
    const params = req.body;
    const { service_id, job_post_id, Service_date, total } = params;
    const get_all_service = await Service.findAll();
    try {
      if (get_all_service) {
        return responseHandler.responseWithData(res, 200, get_all_service);
      } else {
        return responseHandler.badRequest(res, 'Cannot get list Service! Try again!');
      }
    } catch (e) {
      return responseHandler.error(res);
    }
  },
};
