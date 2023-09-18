module.exports = (sequelize, Sequelize) => {
  const JobPost = sequelize.define(
    'job_post',
    {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: Sequelize.STRING(1000),
        allowNull: false,
      },
      work_hours: {
        type: Sequelize.STRING(100),
        allowNull: false,
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
            tableName: 'employer',
          },
          key: 'user_account_id',
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
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      job_description: {
        type: Sequelize.STRING(10000),
        allowNull: false,
      },
      job_location: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },

      salary: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      view: {
        type: Sequelize.INTEGER(50),
        allowNull: false,
      },
      gender: {
        type: Sequelize.INTEGER(2),
        allowNull: true,
      },
      state: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      apply_at: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
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
