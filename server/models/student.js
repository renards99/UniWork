module.exports = (sequelize, Sequelize) => {
  const Student = sequelize.define(
    'student',
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
      cv: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    },
  );

  return Student;
};
