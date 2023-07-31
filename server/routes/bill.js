const bills = require('../controllers').bill;
var router = require('express').Router();

router.post("/bill/create-bill", bills.addBill);

module.exports = router;