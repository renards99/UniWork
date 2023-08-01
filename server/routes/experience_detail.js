const experience_details = require('../controllers').experience_detail;
var router = require('express').Router();
const middleWare = require('../middleware/permission.middleware');

router.post("/experience-detail/create-experience-detail", experience_details.addExperienceDetail);
router.put("/experience-detail/update-experience-detail", experience_details.updateExperienceDetail);
router.delete("/experience-detail/delete-experience-detail", experience_details.deleteExperienceDetail);
router.post("/experience-detail/get-experience-detail-by-id", experience_details.showExperienceDetailById);
router.post("/experience-detail/list-experience-detail", experience_details.ShowAllExperienceDetail);

module.exports = router;