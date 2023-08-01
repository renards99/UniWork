const job_post_applications = require('../controllers').job_post_application;
var router = require('express').Router();

router.post(
  '/job-post-application/create-job-post-application',
  job_post_applications.addJobPostApplication,
);
router.put(
  '/job-post-application/update-job-post-application',
  job_post_applications.updateJobPostApplication,
);
router.delete(
  '/job-post-application/delete-job-post-application',
  job_post_applications.deleteJobPostApplication,
);
router.post(
  '/job-post-application/get-job-post-application-by-id',
  job_post_applications.getJobPostApplicationById,
);
router.post(
  '/job-post-application/get-all-job-post-application',
  job_post_applications.getAllJobPostApplication,
);

module.exports = router;
