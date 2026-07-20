import React from "react";

const calculatorData = [
    "Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.",
    "Digital contract notes will be sent via e-mail.",
    "Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.",
    "For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).",
    "For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).",
    "If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order."
];

export default function Brokerage() {
    return (
        <section className="container py-5 mt-5">
            <div className="row px-5">
                <div className="col-md-8 ps-5">
                    <a href="#" className="fs-5" style={{ paddingLeft: "10rem" }}>Brokerage calculator</a>
                    <ul className="lh-lg pt-5 text-muted ps-5" style={{ fontSize: ".75rem" }}>
                        {calculatorData.map((data, index) => (
                            <li key={index}>{data}</li>
                        ))}
                    </ul>
                </div>

                <div className="col-md-4">
                    <a href="#" className="fs-5">List of charges</a>
                </div>
            </div>
        </section>
    )
}