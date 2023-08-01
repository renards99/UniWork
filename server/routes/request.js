const requests = require("../controllers").request;
var router = require("express").Router();

router.post("/request/create-request", requests.addRequest);
router.put("/request/update-request", requests.updateRequest);
router.delete("/request/delete-request", requests.deleteRequest);
router.post("/request/get-request-by-id", requests.showRequestById);
router.post(
  "/request/get-request-by-user-account-id",
  requests.ShowAllRequestByUserAcountId
);

module.exports = router;
