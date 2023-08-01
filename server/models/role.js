module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define(
    'role',
    {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
      },

      role_name: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    },
  );

  return Role;
};
