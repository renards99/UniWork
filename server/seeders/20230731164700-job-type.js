'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('job_type', [
      { job_type_name: 'Agency (Design/Development)' },
      { job_type_name: 'Agency (Marketing/Advertising)' },
      { job_type_name: 'Bán lẻ - Hàng tiêu dùng - FMCG' },
      { job_type_name: 'Bảo hiểm' },
      { job_type_name: 'Bảo trì / Sửa chữa' },
      { job_type_name: 'Bất động sản' },
      { job_type_name: 'Chứng khoán' },
      { job_type_name: 'Cơ khí' },
      { job_type_name: 'Cơ quan nhà nước' },
      { job_type_name: 'Du lịch' },
      { job_type_name: 'Dược phẩm / Y tế / Công nghệ sinh học' },
      { job_type_name: 'Điện tử / Điện lạnh' },
      { job_type_name: 'Giải trí' },
      { job_type_name: 'Giáo dục / Đào tạo' },
      { job_type_name: 'In ấn / Xuất bản' },
      { job_type_name: 'Internet / Online' },
      { job_type_name: 'IT - Phần cứng' },
      { job_type_name: 'IT - Phần mềm' },
      { job_type_name: 'Kế toán / Kiểm toán' },
      { job_type_name: 'Khác' },
      { job_type_name: 'Logistics - Vận tải' },
      { job_type_name: 'Luật' },
      { job_type_name: 'Marketing / Truyền thông / Quảng cáo' },
      { job_type_name: 'Môi trường' },
      { job_type_name: 'Năng lượng' },
      { job_type_name: 'Ngân hàng' },
      { job_type_name: 'Nhà hàng / Khách sạn' },
      { job_type_name: 'Nhân sự' },
      { job_type_name: 'Nông Lâm Ngư nghiệp' },
      { job_type_name: 'Sản xuất' },
      { job_type_name: 'Tài chính' },
      { job_type_name: 'Thiết kế / kiến trúc' },
      { job_type_name: 'Thời trang' },
      { job_type_name: 'Thương mại điện tử' },
      { job_type_name: 'Tổ chức phi lợi nhuận' },
      { job_type_name: 'Tự động hóa' },
      { job_type_name: 'Tư vấn' },
      { job_type_name: 'Viễn thông' },
      { job_type_name: 'Xây dựng' },
      { job_type_name: 'Xuất nhập khẩu' },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('job_type', null, {});
  },
};
