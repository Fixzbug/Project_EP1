const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    // ✅ ตรวจสอบว่า header มีและขึ้นต้นด้วย "Bearer "
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Missing or invalid token" });
    }

    const token = authHeader.split(" ")[1];

    try {
        // ✅ ตรวจสอบ token ด้วย secret key
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // ✅ แนบ payload เข้า req.user
        next(); // ✅ ไปยัง controller ถัดไป
    } catch (err) {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};
