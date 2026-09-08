require("dotenv").config();

const express = require("express");
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");

const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

app.use(cors());
app.use(bodyParser.json());

const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;
const MONGO_URL = process.env.MONGO_URL;

const { HoldingModel } = require("./models/HoldingModel");
const { PositionModel } = require("./models/PositionModel");
const { OrderModel } = require("./models/OrderModel");
const { UserModel } = require("./models/UserModel");

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
            { expiresIn: "1h" }
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