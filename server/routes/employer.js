const employers = require('../controllers').employer;
var router = require('express').Router();
const middleWare = require('../middleware/permission.middleware');

router.post('/employer/get-employer-by-id', employers.getEmployerById);
router.put('/employer/update-employer', employers.updateEmployer);
module.exports = router;
