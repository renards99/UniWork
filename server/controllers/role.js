const db = require('../models');
const Role = db.role;
const Op = db.Sequelize.Op;
const QueryTypes = db.Sequelize.QueryTypes;
const responsehandler = require('../handlers/response.handler');

module.exports = {
  async listRole(req, res) {
    const findRole = await Role.findAll();
    try {
      if (findRole) {
        return responsehandler.responseWithData(res, 'Get list role successfully!', findRole);
      } else {
        return responsehandler.badRequest(res, 'Cannot get list role!');
      }
    } catch (e) {
      return responsehandler.error(res);
    }
  },
};
