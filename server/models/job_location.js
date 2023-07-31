module.exports = (sequelize, Sequelize) => {
    const JobLocation = sequelize.define(
      'job_location',
      {
        id: {
            type: Sequelize.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
          },
          street_address: {
            type: Sequelize.STRING(100),
            allowNull: false
          },
          city: {
            type: Sequelize.STRING(100),
            allowNull: false
          },
          province: {
            type: Sequelize.STRING(100),
            allowNull: false
          },
          zip_code: {
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
  
    return JobLocation;
  };