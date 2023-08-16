module.exports = (sequelize, Sequelize) => {
  const JobPost = sequelize.define(
    'job_post',
    {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
      },
      service_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: {
            tableName: 'service',
          },
          key: 'id',
        },
        onDelete: 'cascade',
      },
      job_type_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: {
            tableName: 'job_type',
          },
          key: 'id',
        },
        onDelete: 'cascade',
      },
      post_by_id: {
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
      company_id: {
        type: Sequelize.INTEGER(20),
        allowNull: true,
        references: {
          model: {
            tableName: 'company',
          },
          key: 'id',
        },
        onDelete: 'cascade',
      },
      hire_number: {
        type: Sequelize.INTEGER(10),
        allowNull: true,
      },
      job_description: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      job_location_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: {
            tableName: 'job_location',
          },
          key: 'id',
        },
        onDelete: 'cascade',
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },

      salary_from: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      salary_to: {
        type: Sequelize.DOUBLE,
        allowNull: true,
      },
      view: {
        type: Sequelize.INTEGER(50),
        allowNull: false,
      },
      gender: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      tag: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },

      createdAt: { type: Sequelize.DATE, field: 'created_at' },
      updatedAt: { type: Sequelize.DATE, field: 'updated_at' },
      expired_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      freezeTableName: true,
    },
  );

  return JobPost;
};
