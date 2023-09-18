module.exports = (sequelize, Sequelize) => {
  const JobPostApplication = sequelize.define(
    'job_post_application',
    {
      user_account_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      job_post_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    },
  );

  return JobPostApplication;
};
