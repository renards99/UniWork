const roles = require('../controllers').role;
var router = require('express').Router();

router.post('/role/list-role', roles.listRole);

module.exports = router;
