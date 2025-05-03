const express = require('express');
const router = express.Router();
const deviceController = require('../controllers/device.controller');

router.get('/devices', deviceController.getAllDevices);
router.get('/device/:id', deviceController.getDeviceById);
router.get('/device/:id/status', deviceController.getDeviceStatus);
router.get('/devices/status', deviceController.getAllDeviceStatuses);

module.exports = router;
