const express = require("express");
const router = express.Router();

const authMiddleWare = require("../middlewares/authMiddleware");
const { getAllHoldings } = require("../controllers/holdingController");

router.get("/allHoldings", authMiddleWare, getAllHoldings);

module.exports = router;