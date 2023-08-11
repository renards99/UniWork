//todo education detail
const db = require('../models');
const EducationDetail = db.educational_detail;
const Op = db.Sequelize.Op;
const QueryTypes = db.Sequelize.QueryTypes;
const responsehandler = require('../handlers/response.handler');
const validateHandler = require('../handlers/validate.handler');
const regex = require('../handlers/regex.handler');
function isValidCGPA(input) {
  const validGrades = ['A', 'B', 'C', 'D', 'E', 'F'];

  if (/^\d+(\.\d+)?$/.test(input)) {
    const numValue = parseFloat(input);
    return numValue >= 0 && numValue <= 10;
  } else if (validGrades.includes(input.toUpperCase())) {
    return true;
  }

  return false;
}
module.exports = {
  async addEducationDetail(req, res) {
    const params = req.body;
    if (!validateHandler.validateInput(params)) {
      return responseHandler.badRequest(res, 'Your input is invalid!');
    }
    const {
      user_account_id,
      educational_detail,
      major,
      insitude_university_name,
      starting_year,
      completion_year,
      cgpa,
    } = params;

    if (
      !regex.regexNormalString.test(user_account_id) ||
      !regex.regexNormalString.test(educational_detail) ||
      !regex.regexNormalString.test(major) ||
      !regex.regexNormalString.test(insitude_university_name) ||
      !regex.regexNormalString.test(starting_year) ||
      !regex.regexNormalString.test(completion_year) ||
      !regex.regexNormalString.test(cgpa)
    ) {
      return responsehandler.badRequest(res, 'Cannot input special symbol!');
    }

    try {
      if (!isValidCGPA(cgpa)) {
        return responsehandler.badRequest(res, 'invalid CGPA!');
      }

      if (
        !validateHandler.validateYear(starting_year) ||
        !validateHandler.validateYear(completion_year)
      ) {
        return responsehandler.badRequest(res, 'Year is not proper. Please check!');
      }
      if (starting_year > completion_year) {
        return responsehandler.badRequest(
          res,
          'Starting year must be smaller than completion year!',
        );
      }

      const createEducationDetail = await EducationDetail.create(params);
      if (createEducationDetail) {
        return responsehandler.responseWithData(res, 200, 'Education detail created');
      } else {
        return responsehandler.badRequest(res, 'Can not create education detail');
      }
    } catch (e) {
      return responsehandler.error(res);
    }
  },

  async deleteEducationDetail(req, res) {
    const params = req.body;
    const { id } = params;

    try {
      const educationDetail = await EducationDetail.destroy({ where: { id } });
      if (educationDetail) {
        return responsehandler.responseWithData(res, 200, 'Education detail deleted successfully');
      } else {
        return responsehandler.badRequest(res, 'Can not delete education detail');
      }
    } catch (e) {
      return responsehandler.error(res);
    }
  },
  async updateEducationDetail(req, res) {
    const params = req.body;
    const { id } = params;

    try {
      const educationDetail = await EducationDetail.update(params, { where: { id } });
      if (educationDetail) {
        return responsehandler.responseWithData(res, 200, 'Education detail update successfully');
      } else {
        return responsehandler.badRequest(res, 'Can not update education detail');
      }
    } catch (e) {
      console.log(e);
      return responsehandler.error(res);
    }
  },
  async showEducationDetailById(req, res) {
    const params = req.body;
    const { user_account_id } = params;

    try {
      const educationDetail = await EducationDetail.findOne({ where: { user_account_id } });
      if (educationDetail) {
        return responsehandler.responseWithData(res, 200, educationDetail);
      } else {
        return responsehandler.badRequest(res, 'Can not get education detail');
      }
    } catch (e) {
      return responsehandler.error(res);
    }
  },
  async ShowAllEducationDetail(req, res) {
    const params = req.body;
    const { user_account_id } = params;

    try {
      const educationDetail = await EducationDetail.findAll({ where: { user_account_id } });
      if (educationDetail) {
        return responsehandler.responseWithData(res, 200, educationDetail);
      } else {
        return responsehandler.badRequest(res, 'Can not get list education detail');
      }
    } catch (e) {
      return responsehandler.error(res);
    }
  },
};
