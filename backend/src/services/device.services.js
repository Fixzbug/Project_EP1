const pool = require('../config/db.config');

exports.getAllDevices = async (callback) => {
    try {
        const result = await pool.query('SELECT * FROM devices ORDER BY id');
        // console.log(result.rows);
        callback(null, result.rows);
    } catch (err) {
        callback(err);
    }
};

exports.getDeviceById = async (id, callback) => {
    try {
        const result = await pool.query('SELECT * FROM devices WHERE device_code = $1', [id]);
        // console.log(result.rows);
        if (!result.rows.length) return callback(null, null);

        const device = result.rows[0];
        callback(null, device);
    } catch (err) {
        callback(err);
    }
};

exports.getDeviceStatus = async (id, callback) => {
    try {
        const result = await pool.query(
            `SELECT time, status, next_action, temperature
             FROM device_status_logs
             WHERE device_code = $1
             ORDER BY time DESC
             LIMIT 100`,
            [id]
        );
        callback(null, result.rows);
    } catch (err) {
        callback(err);
    }
};

exports.getAllDeviceStatuses = async (callback) => {
    try {
        const result = await pool.query(`
            SELECT *
            FROM device_status_logs
            ORDER BY time DESC
            LIMIT 100
        `);
        callback(null, result.rows);
    } catch (err) {
        callback(err);
    }
};
