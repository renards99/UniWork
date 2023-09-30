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
        type: Sequelize.STRING(1000),
        allowNull: false,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    },
  );

  return JobTypes;
};
