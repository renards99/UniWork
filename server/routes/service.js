const services = require('../controllers').service;
var router = require('express').Router();

router.post('/service/create-service', services.addService);
router.put('/service/update-service', services.updateService);
router.delete('/service/delete-service', services.deleteService);
router.post('/service/get-service-by-id', services.getServiceById);
router.post('/service/get-all-service', services.getAllService);

module.exports = router;
