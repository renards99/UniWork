const db = require('../models');
const HistoryTransaction = db.history_transaction;
const Op = db.Sequelize.Op;
const QueryTypes = db.Sequelize.QueryTypes;
const responseHandler = require('../handlers/response.handler');
const validateHandler = require('../handlers/validate.handler');
module.exports = {
  async addHistoryTransaction(req, res) {
    const params = req.body;
    const { user_account_id, id, description } = params;

    if (!validId(params.user_account_id) || !validId(params.id)) {
      return responseHandler.badRequest(res, 'Id must be integer ! Try again!');
    }
    const updatedData = {
      user_account_id,
      id,
      description,
    };
    try {
      const createHistoryTransaction = await HistoryTransaction.create(updatedData);

      if (createHistoryTransaction) {
        return responseHandler.responseWithData(res, 200, 'Add history transaction successfully!');
      } else {
        return responseHandler.badRequest(res, 'Cannot add history transaction! Try again!');
      }
    } catch (e) {
      return responseHandler.error(res);
    }
  },
};
