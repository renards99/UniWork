const db = require("../models");
const Bill = db.bill;
const Op = db.Sequelize.Op;
const QueryTypes = db.Sequelize.QueryTypes;
const responsehandler = require("../handlers/response.handler")

module.exports = {
    async addBill(req, res) {
        const params = req.body;
        const { service_id, job_post_id, bill_date, total } = params
        const createBill = await Bill.create(params);
        try {
            if (createBill) {
                return responsehandler.responseWithData(res, "Add Bill successfully!");
            } else {
                return responsehandler.badRequest(res, "Cannot add bill! Try again!");
            }
        } catch (e) {
            return responsehandler.error(res);
        }
    },
    async deleteBill(req, res) {},
    async updateBill(req, res) {},
    async showBillById(req, res) {},
    async ShowAllBill(req, res) {},
};
