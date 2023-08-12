//todo education detail
const db = require('../models');
const EducationDetail = db.educational_detail;
const Op = db.Sequelize.Op;
const QueryTypes = db.Sequelize.QueryTypes;
const responseHandler = require('../handlers/response.handler');
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
      return responseHandler.badRequest(res, 'Cannot input special symbol!');
    }
    if (!validateHandler.validateId(user_account_id)) {
      return responseHandler.badRequest(res, 'Id must be integer ! Try again!');
    }
    try {
      if (!isValidCGPA(cgpa)) {
        return responseHandler.badRequest(res, 'invalid CGPA!');
      }

      if (
        !validateHandler.validateYear(starting_year) ||
        !validateHandler.validateYear(completion_year)
      ) {
        return responseHandler.badRequest(res, 'Year is not proper. Please check!');
      }
      if (starting_year > completion_year) {
        return responseHandler.badRequest(
          res,
          'Starting year must be smaller than completion year!',
        );
      }

      const createEducationDetail = await EducationDetail.create(params);
      if (createEducationDetail) {
        return responseHandler.responseWithData(res, 200, 'Education detail created');
      } else {
        return responseHandler.badRequest(res, 'Can not create education detail');
      }
    } catch (e) {
      return responseHandler.error(res);
    }
  },

  async deleteEducationDetail(req, res) {
    const params = req.body;
    const id = params.id;
    if (!validateHandler.validateId(id)) {
      return responseHandler.badRequest(res, 'Id must be integer ! Try again!');
    }
    try {
      const getEducationDetail = await EducationDetail.destroy({ where: { id } });
      if (getEducationDetail) {
        return responseHandler.responseWithData(res, 200, 'Education detail deleted successfully');
      } else {
        return responseHandler.badRequest(res, 'Can not delete education detail');
      }
    } catch (e) {
      return responseHandler.error(res);
    }
  },
  async updateEducationDetail(req, res) {
    const params = req.body;
    const id = params.id;
    if (!validateHandler.validateId(id)) {
      return responseHandler.badRequest(res, 'Id must be integer ! Try again!');
    }

    try {
      const getEducationDetail = await EducationDetail.update(params, { where: { id } });
      if (getEducationDetail) {
        return responseHandler.responseWithData(res, 200, 'Education detail update successfully');
      } else {
        return responseHandler.badRequest(res, 'Can not update education detail');
      }
    } catch (e) {
      console.log(e);
      return responseHandler.error(res);
    }
  },
  async showEducationDetailById(req, res) {
    const params = req.body;
    const id = params.id;
    if (!validateHandler.validateId(id)) {
      return responseHandler.badRequest(res, 'Id must be integer ! Try again!');
    }
    try {
      const getEducationDetail = await EducationDetail.findOne({
        where: {
          id: id,
        },
      });
      if (getEducationDetail) {
        return responseHandler.responseWithData(res, 200, getEducationDetail);
      } else {
        return responseHandler.badRequest(res, 'Can not get education detail');
      }
    } catch (e) {
      return responseHandler.error(res);
    }
  },
  async ShowAllEducationDetail(req, res) {
    const params = req.body;
    const user_account_id = params.user_account_id;
    if (!validateHandler.validateId(user_account_id)) {
      return responseHandler.badRequest(res, 'Id must be integer ! Try again!');
    }
    try {
      const getEducationDetail = await EducationDetail.findAll({ where: { user_account_id } });
      if (getEducationDetail) {
        return responseHandler.responseWithData(res, 200, getEducationDetail);
      } else {
        return responseHandler.badRequest(res, 'Can not get list education detail');
      }
    } catch (e) {
      return responseHandler.error(res);
    }
  },
};
