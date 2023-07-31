const db = require("../models");
const UserAccount = db.user_account;
const Op = db.Sequelize.Op;
const bcrypt = require('bcrypt');
const QueryTypes = db.Sequelize.QueryTypes;
const jwt = require('jsonwebtoken');
const responsehandler = require("../handlers/response.handler")


const generateRefreshToken = (user) => {
    return jwt.sign(
      {
        id: user.id,
        role_id: user.role_id,
      },
      process.env.JWT_REFRESH_SECRET_TOKEN,
      { expiresIn: '8h' }
    );
  };
  const generateAccessToken = (user) => {
    return jwt.sign(
      {
        id: user.id,
        role_id: user.role_id,
      },
      process.env.JWT_SECRET_TOKEN,
      { expiresIn: '4h' }
    );
  };

module.exports = {
    async requestRefreshToken(req, res) {
        const params = req.body;
        const { id } = params; 
        const refreshAccessToken = req.cookies.refreshAccessToken;
        if (!refreshAccessToken) {
          return responsehandler.unauthorized(res);
        } else {
          try {
            const getUser = await UserAccount.findOne({
              where: {
                id: id,
              },
            });
            if (getUser && getUser.refresh_access_token == refreshAccessToken) {
              jwt.verify(
                refreshAccessToken,
                process.env.JWT_REFRESH_SECRET_TOKEN,
                async (error, user) => {
                  if (error) {
                    responsehandler.badRequest(res, 'Something wrong when trying to refresh. Try again later');
                  } else {
                    const newAccessToken = generateAccessToken(user);
                    const newRefreshAccessToken = generateRefreshToken(user);
                    await UserAccount.update(
                      { refresh_access_token: newRefreshAccessToken },
                      { where: { id: id } }
                    );
                    res.cookie('refreshAccessToken', newRefreshAccessToken, {
                      httpOnly: true,
                      sameSite: 'strict',
                      secure: false,
                    });
                    return responsehandler.responseWithData(res, 200, newAccessToken);
                  }
                }
              );
            } else {
              return responsehandler.unauthorized(res);
            }
          } catch (error) {
            responsehandler.badRequest(res, 'Something wrong when trying to refresh. Try again later');
          }
        }
      },
    async loginAccount(req, res) {
        try {
            const params = req.body;
            const { user, password } = params;

            const getUser = await UserAccount.findOne({
              where: {
                [Op.or]: [{ email: user }, { mobile_number: user }],
              },
            });

            if (getUser) {
              const validPassword = bcrypt.compareSync(password, getUser.password);
              if (!validPassword) {
                return responsehandler.badRequest(res, 'Password is incorrect!');
              } else {
                const accessToken = generateAccessToken(getUser);
                const refreshAccessToken = generateRefreshToken(getUser);
                try {
                    const updateRefreshToken = await UserAccount.update(
                        {
                          refresh_access_token: refreshAccessToken,
                        },
                        {
                          where: {
                            [Op.or]: [{ email: user }, { mobile_number: user }],
                          },
                        }
                      )

                    if (updateRefreshToken) {
                        res.cookie('refreshAccessToken', refreshAccessToken, {
                            httpOnly: true,
                            path: '/',
                            sameSite: 'strict',
                            secure: false,
                          });
      
                          delete getUser.dataValues.password;
                          delete getUser._previousDataValues.password;
                          delete getUser.dataValues.refresh_access_token;
                          delete getUser._previousDataValues.refresh_access_token;
      
                          return responsehandler.responseWithData(res, {
                              ...getUser,
                              accessToken,
                              message: 'Login successful!',
                            });
                    } else {
                       return responsehandler.badRequest(res, 'Something wrong when trying to refresh. Try again later');
                    }
                } catch (err) {
                    return responsehandler.error(res);
                }
              }
            } else {
              return responsehandler.badRequest(res, 'User not found');
            }
          } catch (error) {
            return responsehandler.error(res);
          }
    },
    async logoutAccount(req, res) {
        const params = req.body;
        const { id } = params;
        try {
          const deleteRefreshToken = await UserAccount.update(
            { refresh_access_token: null },
            { where: { id } }
          );
          if (deleteRefreshToken) {
            res.clearCookie('user_account_data');
            res.clearCookie('refreshAccessToken');
            return responsehandler.ok(res, 'Logout success!');
          } else {
            return responsehandler.badRequest(res, 'Something wrong when trying to refresh. Try again later');
          }
        } catch (err) {
          return responsehandler.badRequest(res, 'Something wrong when trying to refresh. Try again later');
        }
      },
}