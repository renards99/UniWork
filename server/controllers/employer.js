const db = require('../models');
const Employer = db.employer;
const Op = db.Sequelize.Op;
const QueryTypes = db.Sequelize.QueryTypes;
const sequelize = db.sequelize;
const responsehandler = require('../handlers/response.handler');
const validateHandler = require('../handlers/validate.handler');
module.exports = {
  async updateEmployerProfile(req, res) {
    const params = req.body;
    const { full_name, gender, mobile_number, job_type_id, facebook_link } = params;
    const id = params.id;
    if (!validateHandler.validateId(params.id)) {
      return responseHandler.badRequest(res, 'Id must be integer ! Try again!');
    }
    try {
      const Employer = await Employer.update(params, { where: { id } });
      if (student) {
        return responsehandler.responseWithData(res, 200, 'Student profile update successfully');
      } else {
        return responsehandler.badRequest(res, 'Can not update student profile');
      }
    } catch (e) {
      return responsehandler.error(res);
    }
  },
  async getEmployerById(req, res) {
    const params = req.body;
    const id = params.id;

    try {
      const getEmployer = await sequelize.query(
        `SELECT * 
       FROM employer 
       JOIN user_account ON user_account_id = user_account.id 
       JOIN job_type ON job_type_id = job_type.id 
       LEFT JOIN company ON employer.company_id = company.id 
       WHERE user_account_id = "${id}"`,
        {
          type: QueryTypes.SELECT,
        },
      );

      if (getEmployer.length > 0) {
        // Check if there are any results
        return responsehandler.responseWithData(res, 200, { employer_details: getEmployer });
      } else {
        return responsehandler.badRequest(res, 'Cannot get employer profile');
      }
    } catch (e) {
      return responsehandler.error(res);
    }
  },
  async updateEmployer(req, res) {
    try {
      const params = req.body;
      const { user_account_id, job_type_id, facebook_link, company_id } = params;

      // Construct the SQL update query
      let sqlUpdateQuery = `UPDATE employer SET job_type_id = "${job_type_id}", facebook_link = "${facebook_link}"`;

      // If company_id is not null, then append to the update query
      if (company_id !== null) {
        sqlUpdateQuery += `, company_id="${company_id}"`;
      }

      sqlUpdateQuery += ` WHERE user_account_id = "${user_account_id}"`;

      const getUser = await sequelize.query(sqlUpdateQuery, {
        type: QueryTypes.UPDATE,
      });

      if (getUser) {
        return responsehandler.responseWithData(res, 200, 'success');
      } else {
        return responsehandler.badRequest(res, "can't update user");
      }
    } catch (error) {
      return responsehandler.error(res);
    }
  },
};
