'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('job_type', [
      {
        job_type_name: 'IT',
      },
      {
        job_type_name: 'Marketing',
      },
      {
        job_type_name: 'Sell',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('job_type', null, {});
  },
};
