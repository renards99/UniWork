module.exports = (sequelize, Sequelize) => {
  const Educational_detail = sequelize.define(
    "educational_detail",
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
            tableName: "user_account",
          },
          key: "id",
        },
        onDelete: "cascade",
      },
      educational_detail: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      major: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      insitude_university_name: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      starting_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      completion_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      cgpa: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );

  return Educational_detail;
};
