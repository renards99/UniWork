const uc = require('../controllers').user_account;
var router = require('express').Router();
const multer = require('multer');

const upload = multer({ storage: multer.memoryStorage() });

router.post('/login', uc.loginAccount);
router.post('/create-account', uc.createAccount);
router.post('/refresh-token', uc.requestRefreshToken);
router.post('/list-accounts', uc.listAccounts);
router.post('/account-details', uc.getUserDetails);
router.put('/update-account', uc.updateUser);
router.post('/logout', uc.logoutAccount);
router.post('/change-password', uc.changePassword);

router.post('/upload-cv', upload.single('cv_file'), uc.uploadFile);
router.post('/upload-image', upload.single('image_file'), uc.uploadImage);
router.post('/send-email', uc.sendEmail);

module.exports = router;
