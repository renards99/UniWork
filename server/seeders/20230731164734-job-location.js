'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('job_location', [
      {
        street_address: "số 48 Tố Hữu",
        city: "Hà Nội",
        province: "Hà Nội",
        zip_code: "0333"
      },
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('job_location', null, {});
  }
};

