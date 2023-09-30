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
        type: Sequelize.STRING(1000),
        allowNull: true,
      },
      short_des: {
        type: Sequelize.STRING(1000),
        allowNull: false,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    },
  );

  return Student;
};
