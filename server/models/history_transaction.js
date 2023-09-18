module.exports = (sequelize, Sequelize) => {
  const historyTransaction = sequelize.define(
    'history_transaction',
    {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
      },
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
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    },
  );

  return historyTransaction;
};
