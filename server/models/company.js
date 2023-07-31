module.exports = (sequelize, Sequelize) => {
    const Company = sequelize.define(
      'company',
      {
        id: {
            type: Sequelize.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
          },
          company_name: {
            type: Sequelize.STRING(100),
            allowNull: false
          },
          company_description: {
            type: Sequelize.STRING(100),
            allowNull: false
          },
          company_website_url: {
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
  
    return Company;
  };