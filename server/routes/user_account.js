const user_accounts = require("../controllers").user_accounts;
var router = require("express").Router();

router.post("/login", user_accounts.loginAccount);
router.post("/refresh-token", user_accounts.requestRefreshToken);

module.exports = router;
