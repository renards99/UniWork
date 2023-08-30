module.exports = (sequelize, Sequelize) => {
  const User_account = sequelize.define(
    'user_account',
    {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
      },
      fullname: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      role_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: {
            tableName: 'role',
          },
          key: 'id',
        },
        onDelete: 'cascade',
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      date_of_birth: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      mobile_number: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true,
        validate: {
          is: /^[0-9]{10,12}$/, // Validate phone number
        },
      },

      registration_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      is_verified: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      is_banned: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      user_image: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      short_des: {
        type: Sequelize.STRING(1000),
        allowNull: false,
      },
      company_id: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
        references: {
          model: {
            tableName: 'company',
          },
          key: 'id',
        },
        onDelete: 'cascade',
      },
      refresh_access_token: {
        type: Sequelize.STRING(1000),
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    },
  );

  return User_account;
};
