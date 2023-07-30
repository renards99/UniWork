module.exports = (sequelize, Sequelize) => {
  const Banned_user = sequelize.define(
    "banned_user",
    {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
      },
      user_name: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      reason: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      banned_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      banned_by: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );

  return Banned_user;
};
