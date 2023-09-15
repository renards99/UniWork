const db = require('../models');
const Employer = db.employer;
const Op = db.Sequelize.Op;
const QueryTypes = db.Sequelize.QueryTypes;
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
  async showStudentById(req, res) {
    const params = req.body;
    const id = params.id;
    if (!validateHandler.validateId(id)) {
      return responseHandler.badRequest(res, 'Id must be integer ! Try again!');
    }

    try {
      const student = await Student.findOne({ where: { id } });
      if (student) {
        return responsehandler.responseWithData(res, 200, Student);
      } else {
        return responsehandler.badRequest(res, 'Can not get student profile');
      }
    } catch (e) {
      return responsehandler.error(res);
    }
  },
  async showAllStudent(req, res) {
    const params = req.body;
    const user_account_id = params.user_account_id;

    if (!validateHandler.validateId(user_account_id)) {
      return responseHandler.badRequest(res, 'Id must be integer ! Try again!');
    }

    try {
      const student = await Student.findAll({ where: { user_account_id } });
      if (student) {
        return responsehandler.responseWithData(res, 200, Student);
      } else {
        return responsehandler.badRequest(res, 'Can not get list student profile');
      }
    } catch (e) {
      return responsehandler.error(res);
    }
  },
};
