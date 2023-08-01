const db = require('../models');
const UserLog = db.user_log;
const Op = db.Sequelize.Op;
const QueryTypes = db.Sequelize.QueryTypes;
const responsehandler = require('../handlers/response.handler');

module.exports = {
  async getUserLogById(req, res) {
    const params = req.body;
    const { user_account_id } = params;
    try {
      const userLog = await UserLog.findOne({ where: { user_account_id } });
      if (userLog) {
        return responsehandler.responseWithData(res, 200, userLog);
      } else {
        return responsehandler.badRequest(res, 'Can not get user log');
      }
    } catch (err) {
      return responsehandler.error(res);
    }
  },
  async createUserLog(req, res) {
    const params = req.body;
    try {
      const userLog = await UserLog.create(params);
      if (userLog) {
        return responsehandler.responseWithData(res, 200, 'Create user log success');
      } else {
        return responsehandler.badRequest(res, 'Can not create user log');
      }
    } catch (err) {
      return responsehandler.error(res);
    }
  },
  async updateUserLog(req, res) {
    const params = req.body;
    const { user_account_id } = params;
    try {
      const userLog = await UserLog.update(params, { where: { user_account_id } });
      if (userLog) {
        return responsehandler.responseWithData(res, 200, 'Update user log success');
      } else {
        return responsehandler.badRequest(res, 'Can not update user log');
      }
    } catch (err) {
      return responsehandler.error(res);
    }
  },
  async deleteUserLog(req, res) {
    const params = req.body;
    const { user_account_id } = params;
    try {
      const userLog = await UserLog.destroy({ where: { user_account_id } });
      if (userLog) {
        return responsehandler.responseWithData(res, 200, 'Delete user log success');
      } else {
        return responsehandler.badRequest(res, 'Can not delete user log');
      }
    } catch (err) {
      return responsehandler.error(res);
    }
  },
};
