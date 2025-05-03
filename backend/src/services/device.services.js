const pool = require('../config/db.config');
const redis = require('../config/redis');

exports.getAllDevices = async (callback) => {
    try {
        const result = await pool.query('SELECT * FROM devices ORDER BY id');
        callback(null, result.rows);
    } catch (err) {
        callback(err);
    }
};

exports.getDeviceById = async (id, callback) => {
    try {
        let cached = await redis.get(`device:${id}`);
        if (cached) return callback(null, JSON.parse(cached));

        const result = await pool.query('SELECT * FROM devices WHERE device_code = $1', [id]);
        if (!result.rows.length) return callback(null, null);

        const device = result.rows[0];
        await redis.set(`device:${id}`, JSON.stringify(device), 'EX', 60);
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
