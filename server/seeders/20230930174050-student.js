'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('student', [
      {
        user_account_id: 3,
        cv: null,
        description:
          'a third-year student at XYZ University, majoring in Biology with a focus on molecular and cellular studies. With a consistent GPA of 3.9, John has distinguished himself as a dedicated and diligent student, balancing both theoretical knowledge and practical applications with finesse.',
      },
      {
        user_account_id: 3,
        cv: null,
        description:
          'a third-year student at XYZ University, majoring in Biology with a focus on molecular and cellular studies. With a consistent GPA of 3.9, John has distinguished himself as a dedicated and diligent student, balancing both theoretical knowledge and practical applications with finesse.',
      },
      {
        user_account_id: 3,
        cv: null,
        description:
          'a third-year student at XYZ University, majoring in Biology with a focus on molecular and cellular studies. With a consistent GPA of 3.9, John has distinguished himself as a dedicated and diligent student, balancing both theoretical knowledge and practical applications with finesse.',
      },
      {
        user_account_id: 3,
        cv: null,
        description:
          'a third-year student at XYZ University, majoring in Biology with a focus on molecular and cellular studies. With a consistent GPA of 3.9, John has distinguished himself as a dedicated and diligent student, balancing both theoretical knowledge and practical applications with finesse.',
      },
      {
        user_account_id: 8,
        cv: null,
        description:
          'a third-year student at XYZ University, majoring in Biology with a focus on molecular and cellular studies. With a consistent GPA of 3.9, John has distinguished himself as a dedicated and diligent student, balancing both theoretical knowledge and practical applications with finesse.',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('student', null, {});
  },
};
