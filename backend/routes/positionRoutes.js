const express = require("express");
const router = express.Router();

const authMiddleWare = require("../middlewares/authMiddleware");
const { getAllPositions } = require("../controllers/positionController");

router.get("/allPositions", authMiddleWare, getAllPositions);

module.exports = router;