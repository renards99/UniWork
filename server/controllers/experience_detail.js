//todo experience detail
const db = require('../models');
const ExperienceDetail = db.experience_detail;
const Op = db.Sequelize.Op;
const QueryTypes = db.Sequelize.QueryTypes;
const responseHandler = require('../handlers/response.handler');
const validateHandler = require('../handlers/validate.handler');
module.exports = {
  async addExperienceDetail(req, res) {
    const params = req.body;

    if (!validateHandler.validateInput(params)) {
      return responseHandler.badRequest(res, 'Your input is invalid!');
    }
    if (!validateHandler.validateId(params.user_account_id)) {
      return responseHandler.badRequest(res, 'Id must be integer ! Try again!');
    }
    try {
      const createExperienceDetail = await ExperienceDetail.create(params);
      if (createExperienceDetail) {
        return responseHandler.responseWithData(res, 200, 'Experience detail created');
      } else {
        return responseHandler.badRequest(res, 'Can not create experience detail');
      }
    } catch (e) {
      return responseHandler.error(res);
    }
  },

  async deleteExperienceDetail(req, res) {
    const params = req.body;
    const id = params.id;
    if (!validateHandler.validateId(id)) {
      return responseHandler.badRequest(res, 'Id must be integer ! Try again!');
    }

    try {
      const experiencDetail = await ExperienceDetail.destroy({ where: { id } });
      if (experiencDetail) {
        return responseHandler.responseWithData(res, 200, 'Experience detail deleted successfully');
      } else {
        return responseHandler.badRequest(res, 'Can not delete experience detail');
      }
    } catch (e) {
      return responseHandler.error(res);
    }
  },
  async updateExperienceDetail(req, res) {
    const params = req.body;
    const id = params.id;
    const { start_date, end_date, job_title, company_name } = params;
    if (!validateHandler.validateId(id)) {
      return responseHandler.badRequest(res, 'Id must be integer ! Try again!');
    }
    const updatedData = {
      start_date,
      end_date,
      job_title,
      company_name,
    };
    try {
      const experiencDetail = await ExperienceDetail.update(updatedData, { where: { id } });
      if (experiencDetail) {
        return responseHandler.responseWithData(res, 200, 'Experience detail update successfully');
      } else {
        return responseHandler.badRequest(res, 'Can not update experience detail');
      }
    } catch (e) {
      console.log(e);
      return responseHandler.error(res);
    }
  },
  async showExperienceDetailById(req, res) {
    const params = req.body;
    const { user_account_id } = params;
    if (!validateHandler.validateId(user_account_id)) {
      return responseHandler.badRequest(res, 'Id must be integer ! Try again!');
    }
    try {
      const experiencDetail = await ExperienceDetail.findOne({ where: { user_account_id } });
      if (experiencDetail) {
        return responseHandler.responseWithData(res, 200, experiencDetail);
      } else {
        return responseHandler.badRequest(res, 'Can not get experience detail');
      }
    } catch (e) {
      return responseHandler.error(res);
    }
  },
  async ShowAllExperienceDetail(req, res) {
    const params = req.body;
    const user_account_id = params.user_account_id;
    if (!validateHandler.validateId(user_account_id)) {
      return responseHandler.badRequest(res, 'Id must be integer ! Try again!');
    }
    try {
      const experiencDetail = await ExperienceDetail.findAll({ where: { user_account_id } });
      if (experiencDetail) {
        return responseHandler.responseWithData(res, 200, experiencDetail);
      } else {
        return responseHandler.badRequest(res, 'Can not get list experience detail');
      }
    } catch (e) {
      return responseHandler.error(res);
    }
  },
};
