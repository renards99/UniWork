'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('role', [
      {
        role_name: 'Quản trị viên',
      },
      {
        role_name: 'Nhà tuyển dụng',
      },
      {
        role_name: 'Ứng viên',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('role', null, {});
  },
};
