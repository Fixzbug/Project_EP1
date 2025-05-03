const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const pool = require("../config/db.config");

exports.register = async (data, callback) => {
    try {
        const { email, password } = data;
        const result = await pool.query(
            "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id, email",
            [email, password]
        );
        callback(null, result.rows[0]);
    } catch (err) {
        callback(err);
    }
};

exports.login = async ({ email, password }, callback) => {
    try {
        const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        if (!result.rows.length) return callback({ message: "User not found", code: 401 });

        const userData = result.rows[0];
        const valid = await bcrypt.compare(password, userData.password);
        if (!valid) return callback({ message: "Invalid credentials", code: 403 });

        const token = jwt.sign(
            { id: userData.id, email: userData.email },
            process.env.JWT_SECRET,
            { expiresIn: "12h" }
        );

        callback(null, { token });
    } catch (err) {
        callback(err);
    }
};
