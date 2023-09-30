const user_accounts = require('../controllers').user_account;
var router = require('express').Router();
const multer = require('multer');

const upload = multer({ storage: multer.memoryStorage() });

router.post('/login', user_accounts.loginAccount);
router.post('/create-account', user_accounts.createAccount);
router.post('/refresh-token', user_accounts.requestRefreshToken);
router.post('/list-accounts', user_accounts.listAccounts);
router.post('/account-details', user_accounts.getUserDetails);
router.put('/update-account', user_accounts.updateUser);
router.post('/logout', user_accounts.logoutAccount);
router.post('/change-password', user_accounts.changePassword);
router.post('/upload-cv', upload.single('cv_file'), user_accounts.uploadFile);
router.post('/upload-image', upload.single('image_file'), user_accounts.uploadImage);
router.put('/ban-user', user_accounts.banUser);
router.post('/student-details', user_accounts.getUserStudent);
router.post('/send-email', user_accounts.sendEmail);
module.exports = router;
