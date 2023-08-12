const db = require('../models');
const Job_location = db.job_location;
const Op = db.Sequelize.Op;
const QueryTypes = db.Sequelize.QueryTypes;
const responseHandler = require('../handlers/response.handler');
const validateHandler = require('../handlers/validate.handler');

module.exports = {
  async addJobLocation(req, res) {
    try {
      const params = req.body;

      console.log(params);
      if (!validateHandler.validateInput(params)) {
        return responseHandler.badRequest(res, 'Your input is invalid!');
      }

      //validate zip code
      if (Number.parseInt(params.zip_code) < 0) {
        return responseHandler.badRequest(res, 'Zip code is invalid!');
      }
      if (!Number.isInteger(params.zip_code)) {
        if (params.zip_code.match(/^[0-9]+$/) == null) {
          return responseHandler.badRequest(res, 'Zip code is invalid!');
        }
      }

      const create_Job_location = await Job_location.create(params);
      if (create_Job_location) {
        return responseHandler.responseWithData(res, 200, 'Create Job location successfully!');
      } else {
        return responseHandler.badRequest(res, 'Can not create Job location , try again!');
      }
    } catch (e) {
      console.log(e);
      return responseHandler.error(res);
    }
  },
  async deleteJobLocation(req, res) {
    const params = req.body;
    const job_location_id = params.id;
    if (!validateHandler.validateId(job_location_id)) {
      return responseHandler.badRequest(res, 'Id must be integer ! Try again!');
    }
    try {
      const delete_Job_location = await Job_location.destroy({
        where: {
          id: job_location_id,
        },
      });
      if (delete_Job_location) {
        return responseHandler.responseWithData(res, 200, 'Job location deleted successfully!');
      } else {
        return responseHandler.badRequest(res, 'Job location does not exist!');
      }
    } catch (e) {
      console.log(e);
      return responseHandler.error(res);
    }
  },
  async updateJobLocation(req, res) {
    const params = req.body;
    const { street_address, city, province, zip_code } = params;
    const job_location_id = params.id;
    if (!validateHandler.validateId(job_location_id)) {
      return responseHandler.badRequest(res, 'Id must be integer ! Try again!');
    }
    try {
      const getJobLocation = await Job_location.findOne({
        where: {
          id: job_location_id,
        },
      });
      if (!getJobLocation) return responseHandler.badRequest(res, 'Job location does not exist!');
      const updateJobLocation = await Job_location.update(
        { street_address, city, province, zip_code },
        {
          where: {
            id: job_location_id,
          },
        },
      );
      if (updateJobLocation) {
        return responseHandler.responseWithData(res, 200, 'Update Job location successfully!');
      } else {
        return responseHandler.badRequest(res, 'Can not update Job location!');
      }
    } catch (e) {
      console.log(e);
      return responseHandler.badRequest(res, 'There is something wrong with your request!');
    }
  },
  async getJobLocationById(req, res) {
    const params = req.body;

    const job_location_id = params.id;
    if (!validateHandler.validateId(job_location_id)) {
      return responseHandler.badRequest(res, 'Id must be integer ! Try again!');
    }
    try {
      const getJobLocation = await Job_location.findOne({
        where: {
          id: job_location_id,
        },
      });
      if (getJobLocation) return responseHandler.responseWithData(res, 200, getJobLocation);
      else return responseHandler.badRequest(res, 'Can not get Job location!');
    } catch (e) {}
  },
  async getAllJobLocation(req, res) {
    try {
      const get_all_Job_location = await Job_location.findAll();
      if (get_all_Job_location) {
        return responseHandler.responseWithData(res, 200, get_all_Job_location);
      } else {
        return responseHandler.badRequest(res, 'Can not get all Job location!');
      }
    } catch (e) {
      console.log(e);
      return responseHandler.badRequest(res, 'There is something wrong with your request!');
    }
  },
};
