const db = require('../models');
const Service = db.service;
const Op = db.Sequelize.Op;
const QueryTypes = db.Sequelize.QueryTypes;
const responseHandler = require('../handlers/response.handler');
const validateHandler = require('../handlers/validate.handler');
function validPrice(num) {
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
module.exports = {
  async addService(req, res) {
    const params = req.body;
    if (!validateHandler.validateInput(params)) {
      return responseHandler.badRequest(res, 'Your input is invalid!');
    }
    if (!validPrice(params.price)) {
      return responseHandler.badRequest(
        res,
        'price number must be number and more than 0! Try again!',
      );
    }

    try {
      const createService = await Service.create(params);
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
    const id = params.id;
    if (!validateHandler.validateId(id)) {
      return responseHandler.badRequest(res, 'Id must be integer ! Try again!');
    }
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
    const id = params.id;
    if (!validateHandler.validateId(id)) {
      return responseHandler.badRequest(res, 'Id must be integer ! Try again!');
    }
    if (!validPrice(params.price)) {
      return responseHandler.badRequest(
        res,
        'price number must be number and more than 0! Try again!',
      );
    }
    try {
      const updateB = await Service.update(params, {
        where: {
          id: id,
        },
      });
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
    const id = params.id;
    if (!validateHandler.validateId(id)) {
      return responseHandler.badRequest(res, 'Id must be integer ! Try again!');
    }

    try {
      const get_service_by_id = await Service.findOne({
        where: {
          id: id,
        },
      });
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

    try {
      const get_all_service = await Service.findAll();
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
