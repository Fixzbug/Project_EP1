const bcrypt = require("bcryptjs");
const userServices = require("../services/user.services");

exports.register = (req, res, next) => {
    console.log("📦 req.body:", req.body); // ✅ log ตรงนี้
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    const salt = bcrypt.genSaltSync(10);
    req.body.password = bcrypt.hashSync(password, salt);

    userServices.register(req.body, (error, results) => {
        if (error) {
            let statusCode = 500;
            let message = "Internal server error";

            // ✅ Handle duplicate key (PostgreSQL code 23505)
            if (error.code === "23505") {
                statusCode = 409; // HTTP 409 Conflict
                message = "Email already exists";
            }

            return res.status(statusCode).json({ message });
        }

        return res.status(201).json({
            message: "User registered successfully",
            data: results,
        });
    });
};


exports.login = (req, res, next) => {
    console.log("📦 req.body:", req.body); // ✅ log ตรงนี้
    const { email, password } = req.body;

    // ✅ Validate input
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    userServices.login({ email, password }, (error, results) => {
        if (error) {
            return res.status(error.code || 500).json({
                message: error.message || "Login failed",
            });
        }

        return res.status(200).json({
            message: "Login successful",
            data: results,
        });
    });
};

exports.userProfile = (req, res, next) => {
    const userId = req.user?.id;

    if (!userId) {
        return res.status(400).json({ message: "Invalid token payload" });
    }

    userServices.getUserProfile(userId, (error, result) => {
        if (error) {
            return res.status(error.code || 500).json({
                message: error.message || "Failed to fetch user profile",
            });
        }

        return res.status(200).json({
            message: "User profile fetched",
            data: result,
        });
    });
};
