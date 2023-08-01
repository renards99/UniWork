const companies = require("../controllers").company;
var router = require("express").Router();

router.post("/company/create-company", companies.addCompany);
router.put("/company/update-company", companies.updateCompany);
router.delete("/company/delete-company", companies.deleteCompany);
router.post("/company/get-company-by-id", companies.getCompanyById);
router.post("/company/get-all-company", companies.getAllCompany);

module.exports = router;
