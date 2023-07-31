module.exports = (sequelize, Sequelize) => {
  const User_log = sequelize.define(
    "user_log",
    {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
      },
      last_login_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      last_job_apply_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );

  return User_log;
};
