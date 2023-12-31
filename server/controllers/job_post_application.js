const db = require('../models');
const JopPostApplication = db.job_post_application;
const Op = db.Sequelize.Op;
const QueryTypes = db.Sequelize.QueryTypes;
const responseHandler = require('../handlers/response.handler');
const validateHandler = require('../handlers/validate.handler');
const sequelize = db.sequelize;
module.exports = {
  async createJopPostApplication(req, res) {
    try {
      const params = req.body;

      if (!validateHandler.validateInput(params)) {
        return responseHandler.badRequest(res, 'Your input is invalid!');
      }
      const checkExist = await JopPostApplication.findOne({
        where: { user_account_id: params.user_account_id, job_post_id: params.job_post_id },
      });
      console.log(checkExist);
      if (checkExist)
        return responseHandler.responseWithData(
          res,
          200,
          'Sinh viên đã nộp vào công việc này rồi, hãy thử công việc khác',
        );
      const create_job_post_application = await JopPostApplication.create(params);
      if (create_job_post_application) {
        return responseHandler.responseWithData(res, 200, 'Ứng tuyển thành công');
      } else {
        return responseHandler.badRequest(res, 'Ứng tuyển thất bại');
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
      const { user_account_id, job_post_id, state } = params;
      const updateJobType = await JopPostApplication.update(
        { state },
        {
          where: {
            user_account_id,
            job_post_id,
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
  async getListJobApplicationById(req, res) {
    const params = req.body;
    try {
      const { job_post_id } = params;
      if (!validateHandler.validateId(job_post_id)) {
        return responseHandler.badRequest(res, 'Id must be integer ! Try again!');
      }
      console.log(job_post_id);
      const getJobType = await sequelize.query(
        `SELECT * from job_post_application as jpa  join user_account as ua on jpa.user_account_id = ua.id where job_post_id = ${job_post_id}`,
        {
          type: QueryTypes.SELECT,
        },
      );
      console.log(2);
      if (getJobType) return responseHandler.responseWithData(res, 200, getJobType);
      else return responseHandler.badRequest(res, 'Can not get job type!');
    } catch (e) {}
  },

  async getJobApplicationByCandidateId(req, res) {
    const params = req.body;
    try {
      const { user_account_id, job_post_id } = params;
      const getJobType = await sequelize.query(
        `SELECT * from job_post_application as jpa where jpa.user_account_id= ${user_account_id} and jpa.job_post_id = ${job_post_id}`,
        {
          type: QueryTypes.SELECT,
        },
      );
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
