module.exports = (sequelize, Sequelize) => {
    const JobPost = sequelize.define(
      'job_post',
      {
        id: {
            type: Sequelize.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
          },
          job_type_id: {
            type: Sequelize.INTEGER(11),
            allowNull: false
          },
          job_post_id: {
            type: Sequelize.INTEGER(11),
            allowNull: false
          },
          company_id: {
            type: Sequelize.INTEGER(20),
            allowNull: false
          },
          hire_number: {
            type: Sequelize.STRING(20),
            allowNull: true
          },
          job_description: {
            type: Sequelize.STRING(100),
            allowNull: false
          },
          job_location_id: {
            type: Sequelize.INTEGER(11),
            allowNull: false
          },
          is_active: {
            type: Sequelize.STRING(10),
            allowNull: false
          },
          created_date: {
            type: Sequelize.DATE,
            allowNull: false
          },
          expired_date: {
            type: Sequelize.DATE,
            allowNull: false
          },
          salary: {
            type: Sequelize.STRING(20),
            allowNull: false
          },
          view: {
            type: Sequelize.INTEGER(50),
            allowNull: false
          },
          tag: {
            type: Sequelize.STRING(100),
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
  
    return JobPost;
  };