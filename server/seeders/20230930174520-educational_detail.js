'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('educational_detail', [
      {
        user_account_id: 3,
        major: 'software engineer',
        insitude_university_name: 'FPT university6',
        starting_year: '2020',
        completion_year: '2023',
        description:
          'a third-year student at XYZ University, majoring in software engineer. With a consistent GPA of 3.9, John has distinguished himself as a dedicated and diligent student, balancing both theoretical knowledge and practical applications with finesse.',
      },
      {
        user_account_id: 3,
        major: 'litterature',
        insitude_university_name: 'FPT university5',
        starting_year: '2020',
        completion_year: '2023',
        description:
          'a third-year student at XYZ University, majoring in litterature. With a consistent GPA of 3.9, John has distinguished himself as a dedicated and diligent student, balancing both theoretical knowledge and practical applications with finesse.',
      },
      {
        user_account_id: 5,
        major: 'software engineer',
        insitude_university_name: 'FPT university4',
        starting_year: '2020',
        completion_year: '2023',
        description:
          'a third-year student at XYZ University, majoring in Biology with a focus on molecular and cellular studies. With a consistent GPA of 3.9, John has distinguished himself as a dedicated and diligent student, balancing both theoretical knowledge and practical applications with finesse.',
      },
      {
        user_account_id: 5,
        major: 'software engineer',
        insitude_university_name: 'FPT university3',
        starting_year: '2020',
        completion_year: '2023',
        description:
          'a third-year student at XYZ University, majoring in Biology with a focus on molecular and cellular studies. With a consistent GPA of 3.9, John has distinguished himself as a dedicated and diligent student, balancing both theoretical knowledge and practical applications with finesse.',
      },
      {
        user_account_id: 7,
        major: 'software engineer',
        insitude_university_name: 'FPT university1',
        starting_year: '2020',
        completion_year: '2023',
        description:
          'a third-year student at XYZ University, majoring in Biology with a focus on molecular and cellular studies. With a consistent GPA of 3.9, John has distinguished himself as a dedicated and diligent student, balancing both theoretical knowledge and practical applications with finesse.',
      },
      {
        user_account_id: 7,
        major: 'software engineer',
        insitude_university_name: 'FPT university2',
        starting_year: '2020',
        completion_year: '2023',
        description:
          'a third-year student at XYZ University, majoring in Biology with a focus on molecular and cellular studies. With a consistent GPA of 3.9, John has distinguished himself as a dedicated and diligent student, balancing both theoretical knowledge and practical applications with finesse.',
      },
      {
        user_account_id: 7,
        major: 'software engineer',
        insitude_university_name: 'FPT university',
        starting_year: '2020',
        completion_year: '2023',
        description:
          'a third-year student at XYZ University, majoring in Biology with a focus on molecular and cellular studies. With a consistent GPA of 3.9, John has distinguished himself as a dedicated and diligent student, balancing both theoretical knowledge and practical applications with finesse.',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('educational_detail', null, {});
  },
};
