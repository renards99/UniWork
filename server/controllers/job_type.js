const db = require('../models');
const Job_type = db.job_type;
const Op = db.Sequelize.Op;
const QueryTypes = db.Sequelize.QueryTypes;
const responseHandler = require('../handlers/response.handler');
const validateHandler = require('../handlers/validate.handler');
module.exports = {
  async addJobType(req, res) {
    try {
      const params = req.body;

      if (!validateHandler.validateInput(params)) {
        return responseHandler.badRequest(res, 'Your input is invalid!');
      }
      const create_job_type = await Job_type.create(params);
      if (create_job_type) {
        return responseHandler.responseWithData(res, 200, 'Create job type successfully!');
      } else {
        return responseHandler.badRequest(res, 'Can not create job type , try again!');
      }
    } catch (e) {
      console.log(e);
      return responseHandler.error(res);
    }
  },
  async deleteJobType(req, res) {
    const params = req.body;
    const job_type_id = params.id;
    if (!validateHandler.validateId(job_type_id)) {
      return responseHandler.badRequest(res, 'Id must be integer ! Try again!');
    }
    try {
      const delete_job_type = await Job_type.destroy({
        where: {
          id: job_type_id,
        },
      });
      if (delete_job_type) {
        return responseHandler.responseWithData(res, 200, 'Job type deleted successfully!');
      } else {
        return responseHandler.badRequest(res, 'Job type does not exist!');
      }
    } catch (e) {
      console.log(e);
      return responseHandler.error(res);
    }
  },
  async updateJobType(req, res) {
    const params = req.body;
    try {
      const job_type_name = params.job_type_name;
      const job_type_id = params.id;
      if (!validateHandler.validateId(job_type_id)) {
        return responseHandler.badRequest(res, 'Id must be integer ! Try again!');
      }

      const getJobType = await Job_type.findOne({
        where: {
          id: job_type_id,
        },
      });
      if (!getJobType) return responseHandler.badRequest(res, 'Job type does not exist!');
      const updateJobType = await Job_type.update(
        { job_type_name },
        {
          where: {
            id: job_type_id,
          },
        },
      );
      if (updateJobType) {
        return responseHandler.responseWithData(res, 200, 'Update job type successfully!');
      } else {
        return responseHandler.badRequest(res, 'Can not update job type!');
      }
    } catch (e) {
      console.log(e);
      return responseHandler.badRequest(res, 'There is something wrong with your request!');
    }
  },
  async jobTypeById(req, res) {
    const params = req.body;
    try {
      const job_type_id = params.id;
      if (!validateHandler.validateId(job_type_id)) {
        return responseHandler.badRequest(res, 'Id must be integer ! Try again!');
      }
      const getJobType = await Job_type.findOne({
        where: {
          id: job_type_id,
        },
      });
      if (getJobType) return responseHandler.responseWithData(res, 200, getJobType);
      else return responseHandler.badRequest(res, 'Can not get job type!');
    } catch (e) {}
  },
  async getAllJobType(req, res) {
    try {
      const get_all_job_type = await Job_type.findAll();
      if (get_all_job_type) {
        return responseHandler.responseWithData(res, 200, get_all_job_type);
      } else {
        return responseHandler.badRequest(res, 'Can not get all job type!');
      }
    } catch (e) {
      console.log(e);
      return responseHandler.badRequest(res, 'There is something wrong with your request!');
    }
  },
};
