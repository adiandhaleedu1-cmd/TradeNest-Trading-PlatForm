const jwt = require("jsonwebtoken");

const authMiddleWare = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        // console.log("AUTH HEADER:", authHeader);

        if (!authHeader) {
            return res.status(401).json({
                message: "Authentication required.!"
            });
        }

        const token = authHeader.split(" ")[1];
        // console.log("AUTH HEADER:", authHeader);
        // console.log("TOKEN:", token);
        // console.log("TOKEN TYPE:", typeof token);
        // console.log("TOKEN LENGTH:", token?.length);
        // console.log("SECRET EXISTS:", !!process.env.JWT_SECRET);

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.userId = decoded.userId;

        next();
    } catch (e) {
        console.log("JWT ERROR:", e.name);
        console.log("JWT ERROR:", e.message);
        return res.status(401).json({
            message: "Invalid or expired token",
        });
    }
};

module.exports = authMiddleWare;