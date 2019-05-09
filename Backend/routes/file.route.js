const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const file_controller = require('../controllers/file.controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', file_controller.test);

router.get('/getfiles', file_controller.getfiles);

router.post('/downloadfile', file_controller.downloadfile);

module.exports = router;