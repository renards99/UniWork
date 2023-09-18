const db = require('../models');
const UserAccount = db.user_account;
const Op = db.Sequelize.Op;
const bcrypt = require('bcrypt');
const QueryTypes = db.Sequelize.QueryTypes;
const sequelize = db.sequelize;
const jwt = require('jsonwebtoken');
const responsehandler = require('../handlers/response.handler');

const generateRefreshToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      role_id: user.role_id,
    },
    process.env.JWT_REFRESH_SECRET_TOKEN,
    { expiresIn: '8h' },
  );
};
const generateAccessToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      role_id: user.role_id,
    },
    process.env.JWT_SECRET_TOKEN,
    { expiresIn: '4h' },
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
                responsehandler.badRequest(
                  res,
                  'Something wrong when trying to refresh. Try again later',
                );
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
                    },
                  );

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

                    return responsehandler.responseWithData(res, 200, {
                      ...getUser,
                      accessToken,
                      message: 'Login successful!',
                    });
                  } else {
                    return responsehandler.badRequest(
                      res,
                      'Something wrong when trying to refresh. Try again later',
                    );
                  }
                } catch (err) {
                  return responsehandler.error(res);
                }
              }
            },
          );
        } else {
          return responsehandler.unauthorized(res);
        }
      } catch (error) {
        responsehandler.badRequest(res, 'Something wrong when trying to refresh. Try again later');
      }
    }
  },
  async listAccounts(req, res) {
    try {
      const params = req.body;
      const { search, role } = params;
      const getAllUsers = await sequelize.query(
        `SELECT user_account.*, role.role_name from user_account join role where user_account.role_id= role.id and (email like "%${search}%" or fullname like"%${search}%" ) and role_name like "%${role}%" order by user_account.id   `,
        {
          type: QueryTypes.SELECT,
        },
      );

      if (getAllUsers) {
        return responsehandler.responseWithData(res, 200, { list_user: getAllUsers });
      } else {
        return responsehandler.badRequest(res, "can't get list user");
      }
    } catch (error) {
      return responsehandler.error(res);
    }
  },
  async getUserDetails(req, res) {
    try {
      const params = req.body;
      const { id } = params;
      const getUser = await sequelize.query(`SELECT * FROM user_account where id = "${id}" `, {
        type: QueryTypes.SELECT,
      });
      if (getUser) {
        return responsehandler.responseWithData(res, 200, { user_details: getUser });
      } else {
        return responsehandler.badRequest(res, "can't get user");
      }
    } catch (error) {
      return responsehandler.error(res);
    }
  },
  async updateUser(req, res) {
    try {
      const params = req.body;
      const { id, full_name, gender, mobile_number } = params;
      const getUser = await sequelize.query(
        `UPDATE user_account SET full_name = "${full_name}", gender = "${gender}",mobile_number ="${mobile_number}" where id = "${id}" `,
        {
          type: QueryTypes.UPDATE,
        },
      );
      if (getUser) {
        return responsehandler.responseWithData(res, 200, 'success');
      } else {
        return responsehandler.badRequest(res, "can't get user");
      }
    } catch (error) {
      return responsehandler.error(res);
    }
  },
  async createAccount(req, res) {
    try {
      const params = req.body;
      const {
        full_name,
        role_id,
        email,
        password,
        gender,
        date_of_birth,
        mobile_number,
        registration_date,
        is_verified,
        is_banned,
        user_image,
        short_des,
      } = params;

      // Check if the user already exists based on the email or mobile number
      const existingUser = await UserAccount.findOne({
        where: {
          [Op.or]: [{ email }, { mobile_number }],
        },
      });

      if (existingUser) {
        return responsehandler.badRequest(res, 'Email or mobile number already in use');
      }

      // Hash the password before storing
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(password, salt);

      const newUser = {
        full_name,
        role_id,
        email,
        password: hashedPassword,
        gender,
        date_of_birth,
        mobile_number,
        registration_date,
        is_verified,
        is_banned,
        user_image,
        short_des,
      };

      const createdUser = await UserAccount.create(newUser);

      if (createdUser) {
        return responsehandler.responseWithData(res, 201, {
          message: 'User created successfully!',
          user_id: createdUser.id,
        });
      } else {
        return responsehandler.badRequest(res, 'Unable to create user');
      }
    } catch (error) {
      console.error(error);
      return responsehandler.error(res);
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
              },
            );

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

              return responsehandler.responseWithData(res, 200, {
                ...getUser,
                accessToken,
                message: 'Login successful!',
              });
            } else {
              return responsehandler.badRequest(
                res,
                'Something wrong when trying to refresh. Try again later',
              );
            }
          } catch (err) {
            console.log(err);
            return responsehandler.error(res);
          }
        }
      } else {
        return responsehandler.badRequest(res, 'User not found');
      }
    } catch (error) {
      console.log(error);
      return responsehandler.error(res);
    }
  },
  async logoutAccount(req, res) {
    const params = req.body;
    const { id } = params;
    try {
      const deleteRefreshToken = await UserAccount.update(
        { refresh_access_token: null },
        { where: { id } },
      );
      if (deleteRefreshToken) {
        res.clearCookie('user_account_data');
        res.clearCookie('refreshAccessToken');
        return responsehandler.ok(res, 'Logout success!');
      } else {
        return responsehandler.badRequest(
          res,
          'Something wrong when trying to refresh. Try again later',
        );
      }
    } catch (err) {
      return responsehandler.badRequest(
        res,
        'Something wrong when trying to refresh. Try again later',
      );
    }
  },
};
