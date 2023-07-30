module.exports = (sequelize, Sequelize) => {
    const Bill = sequelize.define(
      'bill',
      {
        id: {
            type: Sequelize.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
          },
          service_id: {
            type: Sequelize.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
          },
          job_post_id: {
            type: Sequelize.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
          },
          bill_date: {
            type: Sequelize.DATE,
            allowNull: false,
          },
          total: {
            type: Sequelize.DOUBLE,
            allowNull: false
          },
          createdAt: {
            type: Sequelize.DATE,
            allowNull: false
          },
          updatedAt: {
            type: Sequelize.DATE,
            allowNull: false
          }
      },
      {
        timestamps: false,
        freezeTableName: true,
      }
    );
  
    return Bill;
  };