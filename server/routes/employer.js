const employers = require('../controllers').employer;
var router = require('express').Router();
const middleWare = require('../middleware/permission.middleware');

router.post('/employer/get-employer-by-id', employers.getEmployerById);
router.put('/employer/update-employer', employers.updateEmployer);
router.post('/employer/create-employer', employers.createEmployer);
module.exports = router;
