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
        experience,
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
    const { is_active, state } = params;
    try {
      const job_post_id = params.id;
      // if (!validateHandler.validateId(job_post_id)) {
      //   return responseHandler.badRequest(res, 'Id must be integer ! Try again!');
      // }

      // if (!validateHandler.validateInput(params)) {
      //   return responseHandler.badRequest(res, 'Your input is invalid!');
      // }
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
    const { id } = params;
    try {
      if (!validateHandler.validateId(id)) {
        return responseHandler.badRequest(res, 'Id must be integer ! Try again!');
      }
      let query = `select jp.*, c.company_name, ua.user_image, ua.full_name, ua.role_id, ua.email, ua.registration_date, ua.mobile_number, c.tax_code, c.size, c.company_website_url, c.company_location  from job_post as jp 
                    join company as c on c.id = jp.company_id 
                    join user_account as ua on ua.id = jp.post_by_id
                    where jp.id = ${id}`;

      const get_job_post = await sequelize.query(query, {
        type: QueryTypes.SELECT,
      });

      if (get_job_post) return responseHandler.responseWithData(res, 200, get_job_post);
      else return responseHandler.badRequest(res, 'Can not get job post!');
    } catch (e) {}
  },
  async getAllJobPost(req, res) {
    try {
      const params = req.body;
      const { search, state } = params;
      let query = `SELECT jp.*, c.company_name from job_post as jp join company as c on jp.company_id = c.id`;

      if (search || state) {
        query += ' WHERE';
      }

      if (search) {
        query += ` (jp.title like "%${search}%" OR c.company_name LIKE "%${search}%")`;
      }

      if (search && state) {
        query += ' AND';
      }

      if (state) {
        query += ` jp.state like "%${state}%" `;
      }

      query += ' ORDER BY jp.id DESC';

      const get_all_Job_post = await sequelize.query(query, {
        type: QueryTypes.SELECT,
      });

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
  async getAllActiveJobPost(req, res) {
    try {
      const get_all_Job_post = await sequelize.query(
        //   `SELECT jp.*, c.company_name  from job_post as jp   join company as c on jp.company_id = c.id
        // ORDER BY jp.id DESC  limit 5 offset 5 where jp.id=101`,
        `SELECT jp.*, c.company_name  from job_post as jp   join company as c on jp.company_id = c.id where jp.state =2 and jp.is_active=1  ORDER BY RAND ( )  `,
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
  async findAllJobPost(req, res) {
    try {
      const params = req.body;
      const { title, job_location, experience, salary } = params;

      let query = `SELECT jp.*, c.company_name FROM job_post AS jp JOIN company AS c ON c.id = jp.company_id WHERE 1=1 `; // added WHERE 1=1 to make sure the following conditions can be added using AND

      if (title) {
        query += `AND jp.title LIKE "%${title}%" `;
      }

      if (typeof salary !== 'undefined' && salary !== null) {
        if (salary == 0) {
          query += `AND ( jp.salary <= 5000000) `;
        } else if (salary == 1) {
          query += `AND (jp.salary >= 5000000 AND jp.salary <= 7000000) `;
        } else if (salary == 2) {
          query += `AND (jp.salary >= 7000000 AND jp.salary <= 15000000) `;
        } else if (salary == 3) {
          query += `AND (jp.salary >= 15000000 AND jp.salary <= 30000000) `;
        } else if (salary == 3) {
          query += `AND jp.salary >= 30000000 `;
        }
      }

      if (typeof experience !== 'undefined' && experience !== null) {
        query += `AND jp.experience <= ${experience} `;
      }

      if (job_location) {
        query += `AND jp.job_location LIKE "%${job_location}%" `;
      }
      query += `AND jp.is_active =1 and jp.state =2`;
      const getAllPost = await sequelize.query(query, {
        type: QueryTypes.SELECT,
      });

      if (getAllPost) {
        return responseHandler.responseWithData(res, 200, { list_user: getAllPost });
      } else {
        return responseHandler.badRequest(res, "can't get list user");
      }
    } catch (error) {
      return responseHandler.error(res);
    }
  },
  async getAllPostsByCompany(req, res) {
    try {
      const params = req.body;

      const { company_id } = params;
      const getAllPost = await sequelize.query(
        `select jp.*, c.company_name from job_post as jp join company as c on c.id = jp.company_id where c.id = ${company_id}`,
        {
          type: QueryTypes.SELECT,
        },
      );
      if (getAllPost) {
        return responseHandler.responseWithData(res, 200, { list_job: getAllPost });
      } else {
        return responseHandler.badRequest(res, "can't get list user");
      }
    } catch (error) {
      return responseHandler.error(res);
    }
  },
};
