module.exports = (sequelize, Sequelize) => {
  const Student_profile = sequelize.define(
    "student_profile",
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
      first_name: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      last_name: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      cv: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );

  return Student_profile;
};
