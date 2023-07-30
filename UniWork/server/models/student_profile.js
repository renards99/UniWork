module.exports = (sequelize, Sequelize) => {
  const Student_profile = sequelize.define(
    "student_profile",
    {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
      },
      first_name: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      last_name: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      short_des: {
        type: Sequelize.STRING(100),
        allowNull: true,
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

  return Student_profile;
};
