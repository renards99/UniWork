//todo student profile
const db = require('../models');
const StudentProfile = db.student_profile;
const Op = db.Sequelize.Op;
const QueryTypes = db.Sequelize.QueryTypes;
const responsehandler = require('../handlers/response.handler');
const validateHandler = require('../handlers/validate.handler');
module.exports = {
  async addStudentProfile(req, res) {
    const params = req.body;
    if (!validateHandler.validateInput(params)) {
      return responseHandler.badRequest(res, 'Your input is invalid!');
    }
    try {
      const createStudentProfile = await StudentProfile.create(params);
      if (createStudentProfile) {
        return responsehandler.responseWithData(res, 200, 'Student profile created');
      } else {
        return responsehandler.badRequest(res, 'Can not create student profile');
      }
    } catch (e) {
      return responsehandler.error(res);
    }
  },

  async deleteStudentProfile(req, res) {
    const params = req.body;
    const { id } = params;

    try {
      const studentProfile = await StudentProfile.destroy({ where: { id } });
      if (studentProfile) {
        return responsehandler.responseWithData(res, 200, 'Student profile deleted successfully');
      } else {
        return responsehandler.badRequest(res, 'Can not delete student profile');
      }
    } catch (e) {
      console.log(e);
      return responsehandler.error(res);
    }
  },
  async updateStudentProfile(req, res) {
    const params = req.body;
    const { id } = params;

    try {
      const studentProfile = await StudentProfile.update(params, { where: { id } });
      if (studentProfile) {
        return responsehandler.responseWithData(res, 200, 'Student profile update successfully');
      } else {
        return responsehandler.badRequest(res, 'Can not update student profile');
      }
    } catch (e) {
      return responsehandler.error(res);
    }
  },
  async showStudentProfileById(req, res) {
    const params = req.body;
    const { user_account_id } = params;

    try {
      const studentProfile = await StudentProfile.findOne({ where: { user_account_id } });
      if (studentProfile) {
        return responsehandler.responseWithData(res, 200, studentProfile);
      } else {
        return responsehandler.badRequest(res, 'Can not get student profile');
      }
    } catch (e) {
      return responsehandler.error(res);
    }
  },
  async showAllStudentProfile(req, res) {
    const params = req.body;
    const { user_account_id } = params;

    try {
      const studentProfile = await StudentProfile.findAll({ where: { user_account_id } });
      if (studentProfile) {
        return responsehandler.responseWithData(res, 200, studentProfile);
      } else {
        return responsehandler.badRequest(res, 'Can not get list student profile');
      }
    } catch (e) {
      return responsehandler.error(res);
    }
  },
};
