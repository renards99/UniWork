const student_profiles = require('../controllers').student_profile;
var router = require('express').Router();
const middleWare = require('../middleware/permission.middleware');

router.post("/student-profile/create-student-profile", student_profiles.addStudentProfile);
router.put("/student-profile/update-student-profile", student_profiles.updateStudentProfile);
router.delete("/student-profile/delete-student-profile", student_profiles.deleteStudentProfile);
router.post("/student-profile/get-student-profile-by-id", student_profiles.showStudentProfileById);
router.post("/student-profile/list-student-profile", student_profiles.showAllStudentProfile);

module.exports = router;