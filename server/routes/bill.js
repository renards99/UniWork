const bills = require('../controllers').bill;
var router = require('express').Router();

router.post("/bill/create-bill", bills.addBill);
router.put("/bill/update-bill", bills.updateBill);
router.delete("/bill/delete-bill", bills.deleteBill);
router.post("/bill/get-bill-by-id", bills.showBillById);
router.post("/bill/list-bill", bills.showAllBill);

module.exports = router;