const jwt = require('jsonwebtoken');
const responseHandler = require('../handlers/response.handler');

const middleWareController = {
  verifyToken(req, res, next) {
    const token = req.headers.token;
    if (token) {
      const accessToken = token.split(' ')[1];
      jwt.verify(accessToken, process.env.JWT_SECRET_TOKEN, (error, user) => {
        if (error) {
          return responseHandler.unauthorized(res);
        }
        req.user_account = user;
        next();
      });
    } else {
      return responseHandler.unauthorized(res);
    }
  },
  verifyTokenForAdmin(req, res, next) {
    middleWareController.verifyToken(req, res, () => {
      if (req.user_account.role_id == 1) {
        next();
      } else {
        return responseHandler.unauthorized(res);
      }
    });
  },
  verifyTokenForEmployee(req, res, next) {
    middleWareController.verifyToken(req, res, () => {
      if (req.user_account.role_id == 1 || req.user_account.role_id == 2) {
        next();
      } else {
        return responseHandler.unauthorized(res);
      }
    });
  },
  verifyTokenForStudent(req, res, next) {
    middleWareController.verifyToken(req, res, () => {
      if (req.user_account.role_id == 1 || req.user_account.role_id == 3) {
        next();
      } else {
        return responseHandler.unauthorized(res);
      }
    });
  },
  verifyTokenForAllUser(req, res, next) {
    middleWareController.verifyToken(req, res, () => {
      if (
        req.user_account.role_id == 1 ||
        req.user_account.role_id == 3 ||
        req.user_account.role_id == 2
      ) {
        next();
      } else {
        return responseHandler.unauthorized(res);
      }
    });
  },
};
module.exports = middleWareController;
