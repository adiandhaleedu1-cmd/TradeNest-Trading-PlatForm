import React from "react";

const pricingData = [{
    imgLink: "/media/images/pricingEquity.svg",
    imgAlt: "0 img",
    heading: "Free equity delivery",
    description: "All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage."
},
{
    imgLink: "/media/images/20rupees-trades.svg",
    imgAlt: "20 img",
    heading: "Intraday and F&O trades",
    description: "Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades."
},
{
    imgLink: "/media/images/pricing0.svg",
    imgAlt: "0 img",
    heading: "Free direct MF",
    description: "All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges."
},
];

export default function Hero() {

    return (
        <section className="container text-center border-bottom py-5 my-5 ">
            <h1>Pricing</h1>
            <p className="py-3 fs-5">Free equity investments and flat ₹20 intraday and F&O trades</p>

            <div className="row px-5 m-5 pt-5 border-top">
                {pricingData.map((data, index) => (
                    <div key={index} className="col-md-4">
                        <img src={data.imgLink} className="p-4 img-fluid" alt={data.imgAlt} />
                        <h3>{data.heading}</h3>
                        <p className="py-3 lh-lg">{data.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}