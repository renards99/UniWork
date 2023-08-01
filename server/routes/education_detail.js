const education_details = require('../controllers').education_detail;
var router = require('express').Router();
const middleWare = require('../middleware/permission.middleware');

router.post('/education-detail/create-education-detail', education_details.addEducationDetail);
router.put('/education-detail/update-education-detail', education_details.updateEducationDetail);
router.delete('/education-detail/delete-education-detail', education_details.deleteEducationDetail);
router.post(
  '/education-detail/get-education-detail-by-id',
  education_details.showEducationDetailById,
);
router.post('/education-detail/list-education-detail', education_details.ShowAllEducationDetail);

module.exports = router;
