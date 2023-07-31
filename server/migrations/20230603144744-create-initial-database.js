"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("user_account", {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
      },
      role_id: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      date_of_birth: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      mobile_number: {
        type: Sequelize.STRING(20),
        allowNull: false,
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
        type: Sequelize.DATE,
        allowNull: false,
      },
      short_des: {
        type: Sequelize.STRING(1000),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_t: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

    await queryInterface.createTable("role", {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
      },

      role_name: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_t: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

    await queryInterface.createTable("user_log", {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
      },
      user_account_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      last_login_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      last_job_apply_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_t: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

    await queryInterface.createTable("request", {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
      },
      user_account_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
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
      updated_t: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

    await queryInterface.createTable("student_profile", {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
      },
      user_account_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      first_name: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      last_name: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      cv: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_t: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

    await queryInterface.createTable("educational_detail", {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
      },
      user_account_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      educational_detail: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
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
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_t: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

    await queryInterface.createTable("experience_detail", {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
      },
      user_account_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      start_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      end_date: {
        type: Sequelize.DATE,
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
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_t: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

    await queryInterface.createTable("service", {
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
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_t: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

    await queryInterface.createTable("job_post_application", {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
      },
      user_account_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      job_post_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      apply_at: {
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
      updated_t: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

    await queryInterface.createTable("job_post", {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
      },
      service_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      job_type_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      post_by_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      company_id: {
        type: Sequelize.INTEGER(20),
        allowNull: true,
      },
      hire_number: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      job_description: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      job_location_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      is_active: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      created_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      expired_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      salary_from: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      salary_to: {
        type: Sequelize.DOUBLE,
        allowNull: false,
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
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_t: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

    await queryInterface.createTable("job_location", {
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
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_t: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

    await queryInterface.createTable("job_type", {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
      },
      job_type_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_t: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

    await queryInterface.createTable("bill", {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
      },
      service_id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
      },
      job_post_id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
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
        allowNull: false,
      },
      updated_t: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

    await queryInterface.createTable("company", {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
      },
      company_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      company_description: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      company_website_url: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_t: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {},
};
