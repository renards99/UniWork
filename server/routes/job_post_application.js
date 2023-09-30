const job_post_applications = require('../controllers').job_post_application;
var router = require('express').Router();

router.post(
  '/job-post-application/create-job-post-application',
  job_post_applications.createJopPostApplication,
);
router.post(
  '/job-post-application/update-job-post-application',
  job_post_applications.updateJobType,
);
router.post(
  '/job-post-application/list-job-post-application',
  job_post_applications.getListJobApplicationById,
);
router.post(
  '/job-post-application/get-job-post-application-by-candicate-id-and-job-id',
  job_post_applications.getJobApplicationByCandidateId,
);
module.exports = router;
