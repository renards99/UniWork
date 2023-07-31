module.exports = (sequelize, Sequelize) => {
  const Request = sequelize.define(
    "request",
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
      request_name: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      request_description: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      state: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
    },
    {
      freezeTableName: true,
    }
  );

  return Request;
};
