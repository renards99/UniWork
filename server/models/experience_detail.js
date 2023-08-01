module.exports = (sequelize, Sequelize) => {
  const ExperienceDetail = sequelize.define(
    'experience_detail',
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
            tableName: 'user_account',
          },
          key: 'id',
        },
        onDelete: 'cascade',
      },
      start_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      end_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      job_title: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      company_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    },
  );

  return ExperienceDetail;
};
