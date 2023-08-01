const bill = require('./bill');
const role = require('./role');
const request = require('./request');
const user_accounts = require('./user_account');
const user_log = require('./user_log');
const student_profile = require('./student_profile');
const education_detail = require('./education_detail');
const experience_detail = require('./experience_detail');
const job_type = require('./job_type');
const company = require('./company');
const job_location = require('./job_location');
const service = require('./service');
const job_post = require('./job_post');
const job_post_application = require('./job_post_application');

module.exports = {
  bill,
  role,
  user_accounts,
  user_log,
  student_profile,
  education_detail,
  experience_detail,
  request,
  job_type,
  job_location,
  company,
  service,
  job_post,
  job_post_application,
};
