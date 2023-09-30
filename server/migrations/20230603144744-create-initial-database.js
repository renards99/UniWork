'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('role', {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
      },
      role_name: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
    });

    await queryInterface.createTable('company', {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
      },
      type: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      company_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      company_email: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      company_location: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      company_phone_number: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true,
        validate: {
          is: /^[0-9]{10,12}$/, // Validate phone number
        },
      },
      tax_code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      size: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      company_description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      company_website_url: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
    });

    await queryInterface.createTable('user_account', {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
      },
      full_name: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      role_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: {
            tableName: 'role',
          },
          key: 'id',
        },
        onDelete: 'cascade',
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      gender: {
        type: Sequelize.INTEGER(2),
        allowNull: true,
      },
      date_of_birth: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      mobile_number: {
        type: Sequelize.STRING(100),
        allowNull: true,
        unique: true,
        validate: {
          is: /^[0-9]{10,12}$/, // Validate phone number
        },
      },
      registration_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      is_verified: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      is_banned: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      user_image: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      refresh_access_token: {
        type: Sequelize.STRING(1000),
      },
    });

    await queryInterface.createTable('user_log', {
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
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });

    await queryInterface.createTable('request', {
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
      request_name: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      request_description: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      state: {
        type: Sequelize.STRING(20),
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
    });

    await queryInterface.createTable('student', {
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
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      short_des: {
        type: Sequelize.STRING(1000),
        allowNull: false,
      },
    });

    await queryInterface.createTable('educational_detail', {
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
      educational_detail: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      major: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      insitude_university_name: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      starting_year: {
        type: Sequelize.INTEGER(5),
        allowNull: false,
      },
      completion_year: {
        type: Sequelize.INTEGER(5),
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });

    await queryInterface.createTable('experience_detail', {
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
      start_date: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      end_date: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      job_title: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      company_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });

    await queryInterface.createTable('service', {
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
    });

    await queryInterface.createTable('job_type', {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
      },
      job_type_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
    });

    await queryInterface.createTable('job_location', {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
      },
      street_address: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      province: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      zip_code: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
    });

    await queryInterface.createTable('job_post', {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: Sequelize.STRING(1000),
        allowNull: false,
      },
      experience: {
        type: Sequelize.INTEGER(2),
        allowNull: false,
      },
      work_hours: {
        type: Sequelize.INTEGER,
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
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      job_description: {
        type: Sequelize.STRING(10000),
        allowNull: false,
      },
      job_requirement: {
        type: Sequelize.STRING(1000),
        allowNull: true,
      },
      job_benefit: {
        type: Sequelize.STRING(1000),
        allowNull: true,
      },
      job_location: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      is_active: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      salary: {
        type: Sequelize.DOUBLE,
        defaultValue: 0,
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
        type: Sequelize.STRING(20),
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
        type: Sequelize.STRING,
        allowNull: false,
      },
      expired_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

    await queryInterface.createTable('bill', {
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
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
    await queryInterface.createTable('employer', {
      user_account_id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        references: {
          model: {
            tableName: 'user_account',
          },
          key: 'id',
        },
      },
      company_id: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
        references: {
          model: {
            tableName: 'company',
          },
          key: 'id',
        },
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
      },
      facebook_link: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      license: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      other_document: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    });

    await queryInterface.createTable('job_post_application', {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
      },
      user_account_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'user_account',
          },
          key: 'id',
        },
      },
      job_post_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'job_post',
          },
          key: 'id',
        },
      },
      state: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    });

    await queryInterface.createTable('history_transaction', {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
      },
      user_account_id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        references: {
          model: {
            tableName: 'user_account',
          },
          key: 'id',
        },
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
    await queryInterface.sequelize.query(`
        CREATE EVENT IF NOT EXISTS update_state
        ON SCHEDULE EVERY 1 DAY
        STARTS TIMESTAMP(CURRENT_DATE)
        DO
        UPDATE your_table
        SET state = 3
        WHERE CURRENT_DATE > DATE(expired_at) AND state != 3;
    `);
  },

  down: async (queryInterface, Sequelize) => {},
};
