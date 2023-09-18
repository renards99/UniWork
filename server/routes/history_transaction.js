const history_transactions = require('../controllers').history_transaction;
var router = require('express').Router();
const middleWare = require('../middleware/permission.middleware');

router.post(
  '/history-transaction/create-history-transaction',
  history_transactions.addHistoryTransaction,
);

module.exports = router;
