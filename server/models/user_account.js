module.exports = (sequelize, Sequelize) => {
  const User_account = sequelize.define(
    'user_account',
    {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
      },
      full_name: {
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
      gender: {
        type: Sequelize.INTEGER(2),
        allowNull: true,
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
          is: /^[0-9]{7,15}$/, // Validate phone number
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
        type: Sequelize.STRING,
        allowNull: false,
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
