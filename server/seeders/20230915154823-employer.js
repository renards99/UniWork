'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('employer', [
      {
        user_account_id: 2,
        company_id: 1,
        job_type_id: 1,
        facebook_link: null,
        license: null,
        other_document: null,
      },
      {
        user_account_id: 4,
        company_id: null,
        job_type_id: 2,
        facebook_link: null,
        license: null,
        other_document: null,
      },
      {
        user_account_id: 8,
        company_id: 3,
        job_type_id: 3,
        facebook_link: null,
        license: null,
        other_document: null,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('employer', null, {});
  },
};
