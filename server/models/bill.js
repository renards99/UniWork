module.exports = (sequelize, Sequelize) => {
  const Bill = sequelize.define(
    'bill',
    {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
      },
      service_id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        references: {
          model: {
            tableName: 'service',
          },
          key: 'id',
        },
        onDelete: 'cascade',
      },
      job_post_id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        references: {
          model: {
            tableName: 'job_post',
          },
          key: 'id',
        },
        onDelete: 'cascade',
      },
      bill_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      total: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    },
    {
      freezeTableName: true,
    },
  );

  return Bill;
};
