'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('user_account', [
      {
        role_id: 1,
        email: "hunglq@gmail.com",
        password: "$2b$10$kX81peifItpACbY.bKCGrOZqCESNmevMwFGi8MPeIH4E3nb9c3WrC",
        date_of_birth: "2001-04-22",
        registration_date: "2023-07-31",
        mobile_number: "0984234657",
        is_verified: true,
        is_banned: false,
        user_image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&psig=AOvVaw1wkv00c9PQhVr-wCoFnaX7&ust=1690907381255000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNifk4KvuYADFQAAAAAdAAAAABAE',
        short_des: 'Nhà sáng lập công ty BSS',
      },
      {
        role_id: 2,
        email: "nghiant@gmail.com",
        password: "$2b$10$kX81peifItpACbY.bKCGrOZqCESNmevMwFGi8MPeIH4E3nb9c3WrC",
        mobile_number: "0984262451",
        date_of_birth: "2001-04-22",
        registration_date: "2023-07-31",
        is_verified: true,
        is_banned: false,
        user_image: 'https://cdn.love-shayari.co/wp-content/uploads/2021/10/sun-rise.jpg',
        short_des: 'Nhà sáng lập công ty Google',
      },
      {
        role_id: 3,
        email: "abc@gmail.com",
        password: "$2b$10$kX81peifItpACbY.bKCGrOZqCESNmevMwFGi8MPeIH4E3nb9c3WrC",
        mobile_number: "09123562451",
        date_of_birth: "2001-04-22",
        registration_date: "2023-07-31",
        is_verified: true,
        is_banned: false,
        user_image: "https://img.freepik.com/premium-photo/image-colorful-galaxy-sky-generative-ai_791316-9864.jpg?w=2000",
        short_des: 'Sinh viên trường đại học FPT',
      }
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('user_account', null, {});
  }
};
