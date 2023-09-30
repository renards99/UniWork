module.exports = (sequelize, Sequelize) => {
  const JobPostApplication = sequelize.define(
    'job_post_application',
    {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
      },
      user_account_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'user_account',
          },
          key: 'id',
        },
      },
      job_post_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'job_post',
          },
          key: 'id',
        },
      },
      cv: {
        type: Sequelize.STRING(1000),
        allowNull: false,
      },
      state: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    },
  );

  return JobPostApplication;
};
