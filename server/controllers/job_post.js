const db = require('../models');
const Job_post = db.job_post;
const Op = db.Sequelize.Op;
const QueryTypes = db.Sequelize.QueryTypes;
const responseHandler = require('../handlers/response.handler');

const sequelize = db.sequelize;

const validateHandler = require('../handlers/validate.handler');
module.exports = {
  async addJobPost(req, res) {
    try {
      const params = req.body;
      const {
        title,
        work_hours,
        service_id,
        job_type_id,
        post_by_id,
        company_id,
        hire_number,
        job_location,
        is_active,
        salary,
        view,
        gender,
        state,
      } = params;
      if (!validateHandler.validateId(service_id, job_type_id, post_by_id, company_id)) {
        return responseHandler.badRequest(res, 'Id must be integer ! Try again!');
      }
      if (!validateHandler.validateGender(gender)) {
        return responseHandler.badRequest(res, 'Invalid gender input!');
      }

      if (!validateHandler.validateInput(params)) {
        return responseHandler.badRequest(res, 'Your input is invalid!');
      }
      const create_Job_post = await Job_post.create(params);
      if (create_Job_post) {
        return responseHandler.responseWithData(res, 200, 'Create job post successfully!');
      } else {
        return responseHandler.badRequest(res, 'Can not create job post , try again!');
      }
    } catch (e) {
      console.log(e);
      return responseHandler.error(res);
    }
  },
  async deleteJobPost(req, res) {
    const params = req.body;
    const job_post_id = params.id;
    try {
      const delete_Job_post = await Job_post.destroy({
        where: {
          id: job_post_id,
        },
      });
      if (delete_Job_post) {
        return responseHandler.responseWithData(res, 200, 'job post deleted successfully!');
      } else {
        return responseHandler.badRequest(res, 'job post does not exist!');
      }
    } catch (e) {
      console.log(e);
      return responseHandler.error(res);
    }
  },
  async updateJobPost(req, res) {
    const params = req.body;
    const is_active = params.is_active;
    try {
      const job_post_id = params.id;
      if (!validateHandler.validateId(job_post_id)) {
        return responseHandler.badRequest(res, 'Id must be integer ! Try again!');
      }

      if (!validateHandler.validateInput(params)) {
        return responseHandler.badRequest(res, 'Your input is invalid!');
      }
      const updatedData = {
        is_active,
      };
      const getJobPost = await Job_post.findOne({
        where: {
          id: job_post_id,
        },
      });
      if (!getJobPost) return responseHandler.badRequest(res, 'job post does not exist!');
      const updateJobPost = await Job_post.update(updatedData, {
        where: {
          id: job_post_id,
        },
      });
      if (updateJobPost) {
        return responseHandler.responseWithData(res, 200, 'Update job post successfully!');
      } else {
        return responseHandler.badRequest(res, 'Can not update job post!');
      }
    } catch (e) {
      console.log(e);
      return responseHandler.badRequest(res, 'There is something wrong with your request!');
    }
  },
  async getJobPostById(req, res) {
    const params = req.body;
    try {
      const job_post_id = params.id;
      if (!validateHandler.validateId(job_post_id)) {
        return responseHandler.badRequest(res, 'Id must be integer ! Try again!');
      }
      const get_job_post = await Job_post.findOne({
        where: {
          id: job_post_id,
        },
      });
      if (get_job_post) return responseHandler.responseWithData(res, 200, get_job_post);
      else return responseHandler.badRequest(res, 'Can not get job post!');
    } catch (e) {}
  },
  async getAllJobPost(req, res) {
    try {
      const get_all_Job_post = await sequelize.query(
        `SELECT jp.*, c.company_name  from job_post as jp   join company as c on jp.company_id = c.id 
      ORDER BY jp.id ASC  limit 5 offset 5`,
        {
          type: QueryTypes.SELECT,
        },
      );
      if (get_all_Job_post) {
        return responseHandler.responseWithData(res, 200, get_all_Job_post);
      } else {
        return responseHandler.badRequest(res, 'Can not get all job post!');
      }
    } catch (e) {
      console.log(e);
      return responseHandler.badRequest(res, 'There is something wrong with your request!');
    }
  },
  async getAllJobPostByUserId(req, res) {
    try {
      const params = req.body;
      const { user_account_id } = params;
      const get_all_Job_post = await sequelize.query(
        `SELECT jp.*, c.company_name  from job_post as jp  join company as c on jp.company_id = c.id WHERE jp.post_by_id=${user_account_id}
      ORDER BY jp.id DESC ;`,
        {
          type: QueryTypes.SELECT,
        },
      );
      if (get_all_Job_post) {
        return responseHandler.responseWithData(res, 200, get_all_Job_post);
      } else {
        return responseHandler.badRequest(res, 'Can not get all job post!');
      }
    } catch (e) {
      console.log(e);
      return responseHandler.badRequest(res, 'There is something wrong with your request!');
    }
  },
  //
  // SELECT user_account.*, role.role_name from user_account join role where user_account.role_id= role.id and (email like "%${search}%" or fullname like"%${search}%" ) and role_name like "%${role}%" order by user_account.id
  //
  async getAllPosts(req, res) {
    try {
      const params = req.body;

      const { search, role } = params;
      const getAllPost = await sequelize.query(
        `SELECT job_post.id as "main_id", 
       job_post.*, 
       company.*, 
       job_type.*
      FROM job_post 
      JOIN company ON job_post.company_id = company.id
      JOIN job_type ON job_post.job_type_id = job_type.id where (title like "%${search}%"or company_name like "%${search}%" or job_type_name like "%${search}%")
      and state like "%${role}%"
      ORDER BY job_post.id ASC;`,
        {
          type: QueryTypes.SELECT,
        },
      );
      if (getAllPost) {
        return responseHandler.responseWithData(res, 200, { list_user: getAllPost });
      } else {
        return responseHandler.badRequest(res, "can't get list user");
      }
    } catch (error) {
      return responseHandler.error(res);
    }
  },
};
