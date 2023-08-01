const bill = require("./bill");
const role = require("./role");
const request = require("./request");
const user_accounts = require("./user_account");
const job_type = require("./job_type");
const company = require("./company");
const job_location = require("./job_location");
const service = require("./service");
const job_post = require("./job_post");
const job_post_application = require("./job_post_application");
module.exports = {
  bill,
  role,
  user_accounts,
  request,
  job_type,
  job_location,
  company,
  service,
  job_post,
  job_post_application,
};
