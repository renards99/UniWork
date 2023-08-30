const job_posts = require('../controllers').job_post;
var router = require('express').Router();

router.post('/job-post/create-job-post', job_posts.addJobPost);
router.put('/job-post/update-job-post', job_posts.updateJobPost);
router.delete('/job-post/delete-job-post', job_posts.deleteJobPost);
router.post('/job-post/get-job-post-by-id', job_posts.getJobPostById);
router.post('/job-post/get-all-job-post', job_posts.getAllJobPost);
router.post('/job-post/get-all-post', job_posts.getAllPosts);

module.exports = router;
