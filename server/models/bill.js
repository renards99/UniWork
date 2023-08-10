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
      total: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      createdAt: { type: Sequelize.DATE, field: 'created_at' },
      updatedAt: { type: Sequelize.DATE, field: 'updated_at' },
    },
    {
      freezeTableName: true,
    },
  );

  return Bill;
};
