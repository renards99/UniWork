const job_post_applications = require('../controllers').job_post_application;
var router = require('express').Router();

router.post(
  '/job-post-application/create-job-post-application',
  job_post_applications.createJopPostApplication,
);

module.exports = router;
