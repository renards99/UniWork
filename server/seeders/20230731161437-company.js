'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('company', [
      {
        company_name: 'BSS Group',
        company_description: 'BSS – LET’S FIRE AT YOUR NEW HOME!',
        company_website_url: 'https://bssgroup.vn/',
      },
      {
        company_name: 'FPT Software',
        company_description: 'WE ARE a comprehensive IT consulting & service provider',
        company_website_url: 'https://fptsoftware.com/',
      },
      {
        company_name: 'SamSung',
        company_description: 'Không có mô tả',
        company_website_url: 'https://www.samsung.com/',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('company', null, {});
  },
};
