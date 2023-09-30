const db = require('../models');
const Student = db.student;
const Op = db.Sequelize.Op;
const QueryTypes = db.Sequelize.QueryTypes;
const responsehandler = require('../handlers/response.handler');
const validateHandler = require('../handlers/validate.handler');
module.exports = {
  async addStudent(req, res) {
    const params = req.body;
    // if (!validateHandler.validateInput(params)) {
    //   return responseHandler.badRequest(res, 'Your input is invalid!');
    // }
    // if (!validateHandler.validateId(params.user_account_id)) {
    //   return responseHandler.badRequest(res, 'Id must be integer ! Try again!');
    // }
    try {
      const createStudent = await Student.create(params);
      if (createStudent) {
        return responsehandler.responseWithData(res, 200, 'Student profile created');
      } else {
        return responsehandler.badRequest(res, 'Can not create student profile');
      }
    } catch (e) {
      return responsehandler.error(res);
    }
  },

  async deleteStudent(req, res) {
    const params = req.body;
    const id = params.id;
    if (!validateHandler.validateId(params.id)) {
      return responseHandler.badRequest(res, 'Id must be integer ! Try again!');
    }
    try {
      const student = await Student.destroy({ where: { id } });
      if (student) {
        return responsehandler.responseWithData(res, 200, 'Student profile deleted successfully');
      } else {
        return responsehandler.badRequest(res, 'Can not delete student profile');
      }
    } catch (e) {
      console.log(e);
      return responsehandler.error(res);
    }
  },
  async updateStudent(req, res) {
    const params = req.body;
    const id = params.id;
    if (!validateHandler.validateId(params.id)) {
      return responsehandler.badRequest(res, 'Id must be integer ! Try again!');
    }
    try {
      const student = await Student.update({cv: params.cv}, { where: { user_account_id: id } });
      if (student) {
        return responsehandler.responseWithData(res, 200, 'Student profile update successfully');
      } else {
        return responsehandler.badRequest(res, 'Can not update student profile');
      }
    } catch (e) {
      console.error(e);
      return responsehandler.error(res);
    }
  },
  async showStudentById(req, res) {
    const params = req.body;
    const id = params.id;
    if (!validateHandler.validateId(id)) {
      return responsehandler.badRequest(res, 'Id must be integer ! Try again!');
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
