module.exports = (sequelize, Sequelize) => {
  const Employer = sequelize.define(
    'employer',
    {
      user_account_id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        references: {
          model: {
            tableName: 'user_account',
          },
          key: 'id',
        },
      },
      company_id: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
        references: {
          model: {
            tableName: 'user_account',
          },
          key: 'id',
        },
      },
      job_type_id: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
        references: {
          model: {
            tableName: 'job_type',
          },
          key: 'id',
        },
      },
      facebook_link: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      license: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      other_document: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    },
    {
      timestamps: false,
      tableName: 'employer', // Explicitly specify the table name here
    },
  );

  return Employer;
};
