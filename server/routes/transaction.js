const transactions = require('../controllers').transaction;
var router = require('express').Router();
const middleWare = require('../middleware/permission.middleware');

router.post('/transaction/create-payment', transactions.createPayment);
router.get('/transaction/result_payment', transactions.returnPaymentResult);
router.post('/transaction/refund-transaction', transactions.refundPayment);

module.exports = router;
