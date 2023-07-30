module.exports = (sequelize, Sequelize) => {
    const JobTypes = sequelize.define(
      'job_type',
      {
        id: {
          type: Sequelize.INTEGER(11),
          primaryKey: true,
          autoIncrement: true,
        },
        job_type_name: {
          type: Sequelize.STRING(100),
          allowNull: false
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
  
    return JobTypes;
  };