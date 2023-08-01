const job_locations = require("../controllers").job_location;
var router = require("express").Router();

router.post("/job-location/create-job-location", job_locations.addJobLocation);
router.put(
  "/job-location/update-job-location",
  job_locations.updateJobLocation
);
router.delete(
  "/job-location/delete-job-location",
  job_locations.deleteJobLocation
);
router.post(
  "/job-location/get-job-location-by-id",
  job_locations.getJobLocationById
);
router.post(
  "/job-location/get-all-job-location",
  job_locations.getAllJobLocation
);

module.exports = router;
