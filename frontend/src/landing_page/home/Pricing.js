import React from "react";

export default function Pricing() {
    return (
        <section className="container p-5 ">
            <div className="row p-5 align-items-center">
                <div className="col-md-6">
                    <h2>Unbeatable pricing</h2>
                    <p className="pt-3 pe-5">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="/">See pricing <i className="fa-solid fa-arrow-right-long"></i></a>
                </div>

                <div className="col-md-6 text-center d-flex">
                    <div className="border border-2 p-3" style={{ width: "250px" }}>
                        <h1 className="py-2">₹0</h1>
                        <p className="py-3">Free equity delivery and direct mutual funds</p>
                    </div>

                    <div className="border border-2 p-3" style={{ width: "250px" }}>
                        <h1 className="py-2">₹20</h1>
                        <p className="py-3">Intraday and F&O;</p>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}