//todo student profile
const db = require("../models");
const Student_profile = db.student_profile;
const Op = db.Sequelize.Op;
const QueryTypes = db.Sequelize.QueryTypes;
const responsehandler = require("../handlers/response.handler");

module.exports = {
  async addStudentProfile(req, res) {
    const params = req.body;
    const { service_id, job_post_id, bill_date, total } = params;
    const createBill = await Bill.create(params);
    try {
    } catch (e) {
      return responsehandler.error(res);
    }
  },
  async deleteBill(req, res) {},
  async updateBill(req, res) {},
  async showBillById(req, res) {},
  async ShowAllBill(req, res) {},
};
