const students = require('../controllers').student;
var router = require('express').Router();
const middleWare = require('../middleware/permission.middleware');

router.post('/student/create-student', students.addStudent);
router.put('/student/update-student', students.updateStudent);
router.delete('/student/delete-student', students.deleteStudent);
router.post('/student/get-student-by-id', students.showStudentById);
router.post('/student/list-student', students.showAllStudent);

module.exports = router;
