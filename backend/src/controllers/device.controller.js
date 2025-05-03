const deviceService = require('../services/device.services');

exports.getAllDevices = (req, res, next) => {
    deviceService.getAllDevices((err, results) => {
        if (err) return next(err);
        res.json(results);
    });
};

exports.getDeviceById = (req, res, next) => {
    const id = req.params.id;
    deviceService.getDeviceById(id, (err, device) => {
        if (err) return next(err);
        if (!device) return res.status(404).json({ error: 'Device not found' });
        res.json(device);
    });
};

exports.getDeviceStatus = (req, res, next) => {
    const id = req.params.id;
    deviceService.getDeviceStatus(id, (err, logs) => {
        if (err) return next(err);
        res.json(logs);
    });
};

exports.getAllDeviceStatuses = (req, res, next) => {
    deviceService.getAllDeviceStatuses((err, logs) => {
        if (err) return next(err);
        res.json(logs);
    });
};
