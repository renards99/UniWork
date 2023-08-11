//todo Company profile
const db = require('../models');
const Company = db.company;
const Op = db.Sequelize.Op;
const QueryTypes = db.Sequelize.QueryTypes;
const responseHandler = require('../handlers/response.handler');

// async checkCompanyExist(req,res){
//   await
// }
module.exports = {
  async addCompany(req, res) {
    try {
      const params = req.body;

      const create_company = await Company.create(params);
      if (create_company) {
        return responseHandler.responseWithData(res, 200, 'Create company successfully!');
      } else {
        return responseHandler.badRequest(res, 'Can not create company, try again!');
      }
    } catch (e) {
      console.log(e);
      return responseHandler.error(res);
    }
  },
  async deleteCompany(req, res) {
    const params = req.body;
    const company_id = params.id;
    try {
      const delete_company = await Company.destroy({
        where: {
          id: company_id,
        },
      });
      if (delete_company) {
        return responseHandler.responseWithData(res, 200, 'Company deleted successfully!');
      } else {
        return responseHandler.badRequest(res, 'Company does not exist!');
      }
    } catch (e) {
      console.log(e);
      return responseHandler.error(res);
    }
  },
  async updateCompany(req, res) {
    const params = req.body;
    try {
      const { company_name, company_description, company_website_url } = params;
      const company_id = params.id;
      const get_company = await Company.findOne({
        where: {
          id: company_id,
        },
      });
      if (!get_company) return responseHandler.badRequest(res, 'Company does not exist');
      const updateCompany = await Company.update(
        { company_name, company_description, company_website_url },
        {
          where: {
            id: company_id,
          },
        },
      );
      if (updateCompany) {
        return responseHandler.responseWithData(res, 200, 'Update Company successfully!');
      } else {
        return responseHandler.badRequest(res, 'Can not update Company!');
      }
    } catch (e) {
      console.log(e);
      return responseHandler.badRequest(res, 'There is something wrong with your request!');
    }
  },
  async getCompanyById(req, res) {
    const params = req.body;
    try {
      const company_id = params.id;
      const get_company = await Company.findOne({
        where: {
          id: company_id,
        },
      });
      if (get_company) return responseHandler.responseWithData(res, 200, get_company);
      else return responseHandler.badRequest(res, 'Company does not exist!');
    } catch (e) {}
  },
  async getAllCompany(req, res) {
    try {
      const get_all_company = await Company.findAll();
      if (get_all_company) {
        return responseHandler.responseWithData(res, 200, get_all_company);
      } else {
        return responseHandler.badRequest(res, 'Can not get all Company!');
      }
    } catch (e) {
      console.log(e);
      return responseHandler.badRequest(res, 'There is something wrong with your request!');
    }
  },
};
