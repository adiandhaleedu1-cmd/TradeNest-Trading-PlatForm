const { HoldingModel } = require("../models/HoldingModel");

const getAllHoldings = async (req, res) => {
    try {
        const allHoldings = await HoldingModel.find({
            userId: req.userId
        });
        res.json(allHoldings);
    }
    catch (e) {
        console.log("Holdings ERROR:", e);

        res.status(500).json({
            message: "Failed to fetch holdings."
        });
    }
};

module.exports = { getAllHoldings };