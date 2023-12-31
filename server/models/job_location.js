module.exports = (sequelize, Sequelize) => {
  const JobLocation = sequelize.define(
    'job_location',
    {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
      },
      street_address: {
        type: Sequelize.STRING(1000),
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING(1000),
        allowNull: false,
      },
      province: {
        type: Sequelize.STRING(1000),
        allowNull: false,
      },
      zip_code: {
        type: Sequelize.STRING(1000),
        allowNull: true,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    },
  );

  return JobLocation;
};
