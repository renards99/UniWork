const db = require('../models');
const UserLog = db.user_log;
const Op = db.Sequelize.Op;
const sequelize = db.sequelize;
const QueryTypes = db.Sequelize.QueryTypes;
const responsehandler = require('../handlers/response.handler');
const validateHandler = require('../handlers/validate.handler');
module.exports = {
  async getUserLogById(req, res) {
    const params = req.body;
    const user_account_id = params.user_account_id;

    // if (!validateHandler.validateId(user_account_id)) {
    //   return responseHandler.badRequest(res, 'Id must be integer ! Try again!');
    // }
    try {
      const userLog = await UserLog.findAll({
        where: { user_account_id },
        order: [
          ['created_at', 'DESC'], // Order by created_at in descending order
        ],
      });

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
      // Constructing the SQL query
      const query = `
            INSERT INTO user_log (user_account_id, description, created_at)
            VALUES (?, ?, NOW());
        `;

      // Executing the SQL query - replace 'db' with your actual database querying method
      const result = await sequelize.query(query, {
        replacements: [params.user_account_id, params.description],
        type: QueryTypes.INSERT,
      });

      if (result) {
        return responsehandler.responseWithData(res, 200, 'Create user log success');
      } else {
        return responsehandler.badRequest(res, 'Can not create user log');
      }
    } catch (err) {
      console.error(err); // Add this line to log the error details for debugging
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
