module.exports = (sequelize, Sequelize) => {
    const Service = sequelize.define(
      'service',
      {
        id: {
          type: Sequelize.INTEGER(11),
          primaryKey: true,
          autoIncrement: true,
        },
        service_name: {
          type: Sequelize.STRING(100),
          allowNull: true,
        },
        description: {
          type: Sequelize.STRING(100),
          allowNull: true,
        },
        price: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
      },
      {
        timestamps: false,
        freezeTableName: true,
      }
    );
  
    return Service;
  };