import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const SellActionWindow = ({ uid }) => {
    const [stockQuantity, setStockQuantity] = useState(1);
    const [stockPrice, setStockPrice] = useState(0.0);
    const [error, setError] = useState("");

    const generalContext = useContext(GeneralContext);

    const handleSellClick = async () => {
        console.log("Sell Button Clicked.");

        try {
            setError("");

            const token = localStorage.getItem("token");

            const response = await axios.post(`${process.env.REACT_APP_HOST_URL}/newOrder`, {
                name: uid,
                qty: stockQuantity,
                price: stockPrice,
                mode: "Sell",
            },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });

            console.log("Sell response : ", response.data);
            generalContext.refreshData();
            generalContext.closeSellWindow();
        } catch (e) {
            console.log("Sell Error: ",
                e.response?.data || e.message);

            setError(e.response?.data?.message || "Something went wrong.")
        }
    };

    const handleCancelClick = () => {
        generalContext.closeSellWindow();
    };

    return (
        <div className="container" id="buy-window" draggable="true">
            <div className="regular-order">
                <div className="inputs">
                    <fieldset>
                        <legend>Qty.</legend>
                        <input
                            type="number"
                            name="qty"
                            id="qty"
                            onChange={(e) => setStockQuantity(e.target.value)}
                            value={stockQuantity}
                        />
                    </fieldset>
                    <fieldset>
                        <legend>Price</legend>
                        <input
                            type="number"
                            name="price"
                            id="price"
                            step="0.05"
                            onChange={(e) => setStockPrice(e.target.value)}
                            value={stockPrice}
                        />
                    </fieldset>
                </div>
            </div>

            {
                error && (
                    <p className="error-message" style={{ color: "#dc3545" }}>
                        {error}
                    </p>
                )
            }

            <div className="buttons">
                <span>Margin required ₹140.65</span>
                <div>
                    <button type="button" className="btn btn-blue" onClick={handleSellClick}>
                        Sell
                    </button>
                    <button type="button" className="btn btn-grey" onClick={handleCancelClick}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SellActionWindow;