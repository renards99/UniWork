const db = require('../models');
const Job_post = db.job_post;
const Op = db.Sequelize.Op;
const QueryTypes = db.Sequelize.QueryTypes;
const responseHandler = require('../handlers/response.handler');

module.exports = {
  async addJobPost(req, res) {
    try {
      const params = req.body;
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
    try {
      const job_post_id = params.id;
      const getJobPost = await Job_post.findOne({
        where: {
          id: job_post_id,
        },
      });
      if (!getJobPost) return responseHandler.badRequest(res, 'job post does not exist!');
      const updateJobPost = await Job_post.update(params, {
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
      const Job_post_id = params.id;
      const get_job_post = await Job_post.findOne({
        where: {
          id: Job_post_id,
        },
      });
      if (get_job_post) return responseHandler.responseWithData(res, 200, get_job_post);
      else return responseHandler.badRequest(res, 'Can not get job post!');
    } catch (e) {}
  },
  async getAllJobPost(req, res) {
    try {
      const get_all_Job_post = await Job_post.findAll();
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
};
