const user_accounts = require('../controllers').user_accounts;
var router = require('express').Router();

console.log(user_accounts);

router.post('/login', user_accounts.loginAccount);
router.post('/create-account', user_accounts.createAccount);
router.post('/refresh-token', user_accounts.requestRefreshToken);
router.post('/list-accounts', user_accounts.listAccounts);
router.post('/account-details', user_accounts.getUserDetails);
router.put('/update-account', user_accounts.updateUser);

module.exports = router;
