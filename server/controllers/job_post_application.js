const db = require('../models');
const Job_post_application = db.job_post_application;
const Op = db.Sequelize.Op;
const QueryTypes = db.Sequelize.QueryTypes;
const responseHandler = require('../handlers/response.handler');
const validateHandler = require('../handlers/validate.handler');
module.exports = {
  async addJobPostApplication(req, res) {
    try {
      const params = req.body;
      if (!validateHandler.validateInput(params)) {
        return responseHandler.badRequest(res, 'Your input is invalid!');
      }
      const create_Job_post_application = await Job_post_application.create(params);
      if (create_Job_post_application) {
        return responseHandler.responseWithData(
          res,
          200,
          'Create job post application successfully!',
        );
      } else {
        return responseHandler.badRequest(res, 'Can not create job post application , try again!');
      }
    } catch (e) {
      console.log(e);
      return responseHandler.error(res);
    }
  },
  async deleteJobPostApplication(req, res) {
    const params = req.body;
    const job_post_application_id = params.id;
    try {
      const delete_job_post_application = await Job_post_application.destroy({
        where: {
          id: job_post_application_id,
        },
      });
      if (delete_job_post_application) {
        return responseHandler.responseWithData(
          res,
          200,
          'job post application deleted successfully!',
        );
      } else {
        return responseHandler.badRequest(res, 'job post application does not exist!');
      }
    } catch (e) {
      console.log(e);
      return responseHandler.error(res);
    }
  },
  async updateJobPostApplication(req, res) {
    const params = req.body;
    try {
      const job_post_application_id = params.id;
      const getJobPostApplication = await Job_post_application.findOne({
        where: {
          id: job_post_application_id,
        },
      });
      if (!getJobPostApplication)
        return responseHandler.badRequest(res, 'job post application does not exist!');
      const updateJobPostApplication = await Job_post_application.update(params, {
        where: {
          id: job_post_application_id,
        },
      });
      if (updateJobPostApplication) {
        return responseHandler.responseWithData(
          res,
          200,
          'Update job post application successfully!',
        );
      } else {
        return responseHandler.badRequest(res, 'Can not update job post application!');
      }
    } catch (e) {
      console.log(e);
      return responseHandler.badRequest(res, 'There is something wrong with your request!');
    }
  },
  async getJobPostApplicationById(req, res) {
    const params = req.body;
    try {
      const job_post_application_id = params.id;
      const get_job_post_application_by_id = await Job_post_application.findOne({
        where: {
          id: job_post_application_id,
        },
      });
      if (get_job_post_application_by_id)
        return responseHandler.responseWithData(res, 200, get_job_post_application_by_id);
      else return responseHandler.badRequest(res, 'Can not get job post application!');
    } catch (e) {}
  },
  async getAllJobPostApplication(req, res) {
    try {
      const get_all_Job_post_application = await Job_post_application.findAll();
      if (get_all_Job_post_application) {
        return responseHandler.responseWithData(res, 200, get_all_Job_post_application);
      } else {
        return responseHandler.badRequest(res, 'Can not get all job post application!');
      }
    } catch (e) {
      console.log(e);
      return responseHandler.badRequest(res, 'There is something wrong with your request!');
    }
  },
};
