module.exports = (sequelize, Sequelize) => {
  const Company = sequelize.define(
    'company',
    {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
      },
      company_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      company_description: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      company_website_url: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    },
  );

  return Company;
};
