const job_posts = require('../controllers').job_post;
var router = require('express').Router();

router.post('/job-post/create-job-post', job_posts.addJobPost);
router.put('/job-post/update-job-post', job_posts.updateJobPost);
router.delete('/job-post/delete-job-post', job_posts.deleteJobPost);
router.post('/job-post/get-job-post-by-id', job_posts.getJobPostById);
router.post('/job-post/get-all-job-post', job_posts.getAllJobPost);
router.post('/job-post/get-all-active-job-post', job_posts.getAllActiveJobPost);
router.post('/job-post/get-all-job-post-by-id', job_posts.getAllJobPostByUserId);
router.post('/job-post/find-all-job', job_posts.findAllJobPost);
router.post('/job-post/get-job-by-company', job_posts.getAllPostsByCompany);
router.post('/job-post/get-job-by-user-id', job_posts.getAllJobPostByCandidateId)

module.exports = router;
