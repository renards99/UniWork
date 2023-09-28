module.exports = (sequelize, Sequelize) => {
  const Educational_detail = sequelize.define(
    'educational_detail',
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
      educational_detail: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      major: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      insitude_university_name: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      starting_year: {
        type: Sequelize.INTEGER(5),
        allowNull: false,
      },
      completion_year: {
        type: Sequelize.INTEGER(5),
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    },
  );

  return Educational_detail;
};
