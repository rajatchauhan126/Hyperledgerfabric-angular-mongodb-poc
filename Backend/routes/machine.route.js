const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const machine_controller = require('../controllers/machine.controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', machine_controller.test);

router.post('/saveMachine', machine_controller.saveMachine);

router.post('/update_service_detail', machine_controller.update_service_detail);

router.get('/getMachine', machine_controller.getMachine);

//router.post('/downloadfile', machine_controller.downloadfile);

module.exports = router;