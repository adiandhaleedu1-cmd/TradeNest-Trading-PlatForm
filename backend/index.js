require("dotenv").config();

const express = require("express");
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;
const MONGO_URL = process.env.MONGO_URL;

const { HoldingModel } = require("./models/HoldingModel");
const { PositionModel } = require("./models/PositionModel");
const { OrderModel } = require("./models/OrderModel");

// app.get("/addPositions", async (req, res) => {
//     let tempPositions = [
//         {
//             product: "CNC",
//             name: "EVEREADY",
//             qty: 2,
//             avg: 316.27,
//             price: 312.35,
//             net: "+0.58%",
//             day: "-1.24%",
//             isLoss: true,
//         },
//         {
//             product: "CNC",
//             name: "JUBLFOOD",
//             qty: 1,
//             avg: 3124.75,
//             price: 3082.65,
//             net: "+10.04%",
//             day: "-1.35%",
//             isLoss: true,
//         },
//     ];

//     tempPositions.forEach((item) => {
//         let newPositions = new PositionModel({
//             product: item.product,
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net: item.net,
//             day: item.day,
//             isLoss: item.isLoss,
//         });
//         newPositions.save();
//     })
//     res.send("Done");
// })

app.get("/allHoldings", async (req, res) => {
    const allHoldings = await HoldingModel.find({});
    await res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
    const allPositions = await PositionModel.find({});
    await res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
    const newOrder = new OrderModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    });

    // console.log(newOrder);
    newOrder.save();
    res.send("Order is saved!!");
});

async function startServer() {
    await mongoose.connect(MONGO_URL);
    console.log("DB connection done!");

    app.listen(PORT, () => {
        console.log(`app is listing at port ${PORT}`);
    });
};

startServer();

// app.listen(PORT, () => {
//     console.log(`app is listing at port ${PORT}`);
//     connectDB();
// });