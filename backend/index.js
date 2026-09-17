require("dotenv").config();

const express = require("express");
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");

const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const authMiddleware = require("./middlewares/authMiddleware");

app.use(cors());
app.use(bodyParser.json());

const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;
const MONGO_URL = process.env.MONGO_URL;

const { HoldingModel } = require("./models/HoldingModel");
const { PositionModel } = require("./models/PositionModel");
const { OrderModel } = require("./models/OrderModel");
const { UserModel } = require("./models/UserModel");
const authMiddleWare = require("./middlewares/authMiddleware");

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

app.get("/allHoldings", authMiddleWare, async (req, res) => {
    const allHoldings = await HoldingModel.find({ userId: req.userId });
    res.json(allHoldings);
});

app.get("/allPositions", authMiddleWare, async (req, res) => {
    const allPositions = await PositionModel.find({ userId: req.userId });
    res.json(allPositions);
});

app.post("/newOrder", authMiddleWare, async (req, res) => {

    const existingHolding = await HoldingModel.findOne({
        userId: req.userId,
        name: req.body.name
    });

    const existingPosition = await PositionModel.findOne({
        userId: req.userId,
        name: req.body.name,
    });

    // Buy Logic
    if (req.body.mode === "Buy") {
        if (existingHolding) {
            const oldQty = existingHolding.qty;
            const oldAvg = existingHolding.avg;

            const newQty = Number(req.body.qty);
            const newPrice = Number(req.body.price);

            existingHolding.avg = ((oldAvg * oldQty) + (newQty * newPrice)) / (oldQty + newQty);

            existingHolding.qty += Number(req.body.qty);
            await existingHolding.save();
        }

        if (existingPosition) {
            const oldQty = existingPosition.qty;
            const oldAvg = existingPosition.avg;

            const newQty = Number(req.body.qty);
            const newPrice = Number(req.body.price);

            existingPosition.avg = ((oldAvg * oldQty) + (newQty * newPrice)) / (oldQty + newQty);

            existingPosition.qty += Number(req.body.qty);
            existingPosition.price = newPrice;
            await existingPosition.save();
        }

        if (!existingHolding) {
            const newHolding = new HoldingModel({
                userId: req.userId,
                name: req.body.name,
                qty: req.body.qty,
                price: req.body.price,
                avg: req.body.price,
            });
            // console.log(newOrder);
            await newHolding.save();
        }

        if (!existingPosition) {
            const newPosition = new PositionModel({
                userId: req.userId,
                 product: "CNC",
                name: req.body.name,
                qty: req.body.qty,
                avg: req.body.price,
                price: req.body.price,
            });
            // console.log(newOrder);
            await newPosition.save();
        }
    }

    // Sell Logic  
    if (req.body.mode === "Sell") {
        if (!existingHolding) {
            return res.status(400).json({
                message: "You don't own this Stock."
            });
        }

        const sellQty = Number(req.body.qty)

        if (existingHolding.qty < sellQty) {
            return res.status(400).json({
                message: "Insufficient Quantity."
            })
        }

        existingHolding.qty -= sellQty;

        if (existingHolding.qty === 0) {
            await HoldingModel.deleteOne({
                _id: existingHolding._id
            });
        } else {
            await existingHolding.save();
        }

        if(!existingPosition){
            return res.status(400).json({
                message:"Position not found."
            });
        }
        existingPosition.qty -= sellQty;

        if (existingPosition.qty === 0) {
            await PositionModel.deleteOne({
                _id: existingPosition._id
            });
        } else {
            await existingPosition.save();
        }
    }

    // Creating New Order
    const newOrder = new OrderModel({
        userId: req.userId,
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    });
    await newOrder.save();
    console.log("NEW ORDER SAVED:", newOrder);
    res.send("Order is saved!!");
});

app.get("/allorders", authMiddleWare, async (req, res) => {
    try {
        console.log("ALL ORDERS USER ID:", req.userId);
        const allOrders = await OrderModel.find({ userId: req.userId });
        console.log("ALL ORDERS FOUND:", allOrders);
        res.status(200).json(allOrders);
    } catch (e) {
        console.log("order err", e.message);
        res.status(500).json({
            message: "Failed to fetch orders."
        });
    }
});

// app.get("/protected", authMiddleware, (req, res) => {
//     res.status(200).json({
//         message: "You have access to protected route",
//         userId: req.userId,
//     });
// });

app.post("/signup", async (req, res) => {

    try {
        const salt = await bcrypt.genSalt(10);
        const encodedPass = await bcrypt.hash(
            req.body.password,
            salt
        );

        // console.log(salt, " - ", encodedPass, " - ", req.body.password);

        const newUser = new UserModel({
            name: req.body.name,
            email: req.body.email,
            password: encodedPass
        })
        // console.log(newUser);
        await newUser.save();
        res.status(201).json({
            message: "Signup Successfull!!"
        });
    }
    catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Signup Failed!!"
        });
    }
});

app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(401).json({
                message: "Invalid Email."
            });
        }

        const isPasswordIsCorrect = await bcrypt.compare(
            password,
            user.password
        );

        if (!isPasswordIsCorrect) {
            return res.status(401).json({
                message: "Invalid Password."
            })
        };

        const jwtToken = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "5h" }
        );

        res.status(200).json({
            message: "Login Successfull..!",
            token: jwtToken
        })
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Something went wrong."
        });
    }
});

app.get("/profile", authMiddleWare, async (req, res) => {
    try {
        console.log("PROFILE USER ID:", req.userId);
        const currUser = await UserModel.findById(req.userId).select("-password");
        console.log("PROFILE USER:", currUser);

        if (!currUser) {
            return res.status(404).json({
                message: "User not Found.",
            })
        }
        return res.status(200).json(currUser);
    }
    catch (e) {
        console.log("profile:", e.message);
        res.status(500).json({
            message: "Failed to feach profile.",
        })
    }
})

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