'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('service', [
      {
        service_name: "Normal",
        description: "Gói dịch vụ cơ bản",
        price: 0
      },
      {
        service_name: "Gold",
        description: "Gói dịch vụ thành viên",
        price: 20000
      },
      {
        service_name: "Platium",
        description: "Gói dịch vụ vip",
        price: 50000
      },
      {
        service_name: "Welcome to school",
        description: "Gói dịch vụ dành cho sinh viên",
        price: 0
      },
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('service', null, {});
  }
};

