const { PositionModel } = require("../models/PositionModel");

const getAllPositions = async (req, res) => {
    try {
        const allPositions = await PositionModel.find({ userId: req.userId });
        res.json(allPositions);
    }
    catch (e) {
        console.log("Positions ERROR:", e);

        res.status(500).json({
            message: "Failed to fetch positions."
        });
    }
}

module.exports = { getAllPositions };