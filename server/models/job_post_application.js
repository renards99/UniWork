
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
          type: Sequelize.INTEGER(11),
          allowNull: false,
          references: {
            model: {
              tableName: "user_account",
            },
            key: "id",
          },
          onDelete: "cascade",
        },
        job_post_id: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          references: {
            model: {
              tableName: "job_post",
            },
            key: "id",
          },
          onDelete: "cascade",
        },
        apply_at: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        state: {
          type: Sequelize.STRING(20),
          allowNull: true,
        },
      },
      {
        freezeTableName: true,
      }
    );
  
    return JobPostApplication;
  };