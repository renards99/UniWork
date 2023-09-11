const user_logs = require('../controllers').user_log;
var router = require('express').Router();
const middleWare = require('../middleware/permission.middleware');

console.log(2, user_logs)

router.post('/user-log/create-user-log', user_logs.createUserLog);
router.put('/user-log/update-user-log', user_logs.updateUserLog);
router.delete('/user-log/delete-user-log', user_logs.deleteUserLog);
router.post('/user-log/get-user-log-by-id', user_logs.getUserLogById);

module.exports = router;
