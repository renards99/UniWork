
module.exports = (sequelize, Sequelize) => {
    const JobPostActivity = sequelize.define(
      'job_post_activity',
      {
        id: {
            type: Sequelize.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
          },
          user_account_id: {
            type: Sequelize.INTEGER(11),
            allowNull: false
          },
          job_post_id: {
            type: Sequelize.INTEGER(11),
            allowNull: false
          },
          apply_date: {
            type: Sequelize.STRING(20),
            allowNull: false
          },
          state: {
            type: Sequelize.STRING(20),
            allowNull: true
          },
          createdAt: {
            type: Sequelize.DATE,
            allowNull: false
          },
          updatedAt: {
            type: Sequelize.DATE,
            allowNull: false
          }
      },
      {
        timestamps: false,
        freezeTableName: true,
      }
    );
  
    return JobPostActivity;
  };