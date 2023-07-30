module.exports = (sequelize, Sequelize) => {
  const Bus = sequelize.define(
    "bus",
    {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
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

  return Bus;
};
