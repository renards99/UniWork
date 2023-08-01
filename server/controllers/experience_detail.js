//todo experience detail
const db = require("../models");
const ExperienceDetail = db.experience_detail;
const Op = db.Sequelize.Op;
const QueryTypes = db.Sequelize.QueryTypes;
const responsehandler = require("../handlers/response.handler");

module.exports = {
  async addExperienceDetail(req, res) {
    const params = req.body;

    try {
      const createExperienceDetail = await ExperienceDetail.create(params);
      if (createExperienceDetail) {
        return responsehandler.responseWithData(res, 200, "Experience detail created")
      } else {
        return responsehandler.badRequest(res, "Can not create experience detail")
      }
    } catch (e) {
      return responsehandler.error(res);
    }
  },

  async deleteExperienceDetail(req, res) {
    const params = req.body;
    const { id } = params;

    try {
      const experiencDetail = await ExperienceDetail.destroy({where: {id}});
      if (experiencDetail) {
        return responsehandler.responseWithData(res, 200, "Experience detail deleted successfully")
      } else {
        return responsehandler.badRequest(res, "Can not delete experience detail")
      }
    } catch (e) {
      return responsehandler.error(res);
    }
  },
  async updateExperienceDetail(req, res) {
    const params = req.body;
    const { id } = params;

    try {
      const experiencDetail = await ExperienceDetail.update(params, {where: {id}});
      if (experiencDetail) {
        return responsehandler.responseWithData(res, 200, "Experience detail update successfully")
      } else {
        return responsehandler.badRequest(res, "Can not update experience detail")
      }
    } catch (e) {
      console.log(e)
      return responsehandler.error(res);
    }
  },
  async showExperienceDetailById(req, res) {
    const params = req.body;
    const { user_account_id } = params;

    try {
      const experiencDetail = await ExperienceDetail.findOne({where: {user_account_id}});
      if (experiencDetail) {
        return responsehandler.responseWithData(res, 200, experiencDetail)
      } else {
        return responsehandler.badRequest(res, "Can not get experience detail")
      }
    } catch (e) {
      return responsehandler.error(res);
    }
  },
  async ShowAllExperienceDetail(req, res) {
    const params = req.body;
    const { user_account_id } = params;

    try {
      const experiencDetail = await ExperienceDetail.findAll({where: {user_account_id}});
      if (experiencDetail) {
        return responsehandler.responseWithData(res, 200, experiencDetail)
      } else {
        return responsehandler.badRequest(res, "Can not get list experience detail")
      }
    } catch (e) {
      return responsehandler.error(res);
    }
  },
};