//todo education detail
const db = require('../models');
const EducationDetail = db.educational_detail;
const Op = db.Sequelize.Op;
const QueryTypes = db.Sequelize.QueryTypes;
const responsehandler = require('../handlers/response.handler');

module.exports = {
  async addEducationDetail(req, res) {
    const params = req.body;

    try {
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
