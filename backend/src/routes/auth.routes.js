const express = require("express");
const authenticateToken = require("../middlewares/auth");
const authController = require("../controllers/auth.controller");

const router = express.Router();

router.post("/register", authController.register); // ✅ ไม่ต้อง log ตรง route
router.post("/login", authController.login);
router.get("/profile", authenticateToken, authController.userProfile);

module.exports = router;
