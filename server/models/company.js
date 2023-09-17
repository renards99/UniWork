module.exports = (sequelize, Sequelize) => {
  const Company = sequelize.define(
    'company',
    {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
      },
      type: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      company_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      company_email: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      company_phone_number: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true,
        validate: {
          is: /^[0-9]{10,12}$/, // Validate phone number
        },
      },
      tax_code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      size: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      company_location: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      company_description: {
        type: Sequelize.STRING,
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
