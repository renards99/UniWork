const job_types = require("../controllers").job_type;
var router = require("express").Router();

router.post("/job-type/create-job-type", job_types.addJobType);
router.put("/job-type/update-job-type", job_types.updateJobType);
router.delete("/job-type/delete-job-type", job_types.deleteJobType);
router.post("/job-type/get-job-type-by-id", job_types.jobTypeById);
router.post("/job-type/get-all-job-type", job_types.getAllJobType);

module.exports = router;
