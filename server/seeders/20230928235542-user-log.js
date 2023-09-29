'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('user_log', [
      {
        user_account_id: 1,
        description: 'đã duyệt bài đăng',
        created_at: '2023-02-01 16:21:13',
      },
      {
        user_account_id: 1,
        description: 'đã duyệt bài đăng',
        created_at: '2023-05-01 16:21:13',
      },
      {
        user_account_id: 1,
        description: 'đã duyệt bài đăng',
        created_at: '2023-04-01 16:21:13',
      },
      {
        user_account_id: 4,
        description: 'bài đăng đã được duyệt',
        created_at: '2023-01-01 16:21:13',
      },
      {
        user_account_id: 8,
        description: 'bài đăng đã được duyệt',
        created_at: '2023-01-01 16:21:13',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('job_post', null, {});
  },
};
