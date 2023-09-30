'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('experience_detail', [
      {
        user_account_id: 3,
        job_title: 'software engineer',
        company_name: 'FPT software',
        start_date: '2020',
        end_date: '2023',
        description: 'a third-year student at FPT software, majoring in software engineer.',
      },
      {
        user_account_id: 3,
        job_title: 'litterature',
        company_name: 'FPT software',
        start_date: '2020',
        end_date: '2023',
        description: 'a third-year student at FPT software, majoring in litterature.',
      },
      {
        user_account_id: 4,
        job_title: 'software engineer',
        company_name: 'FPT software',
        start_date: '2020',
        end_date: '2023',
        description:
          'a third-year student at FPT software, majoring in Biology with a focus on molecular and cellular studies.',
      },
      {
        user_account_id: 4,
        job_title: 'software engineer',
        company_name: 'FPT software',
        start_date: '2020',
        end_date: '2023',
        description:
          'a third-year student at FPT software, majoring in Biology with a focus on molecular and cellular studies.',
      },
      {
        user_account_id: 8,
        job_title: 'software engineer',
        company_name: 'FPT software',
        start_date: '2020',
        end_date: '2023',
        description:
          'a third-year student at FPT software, majoring in Biology with a focus on molecular and cellular studies.',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('experience_detail', null, {});
  },
};
