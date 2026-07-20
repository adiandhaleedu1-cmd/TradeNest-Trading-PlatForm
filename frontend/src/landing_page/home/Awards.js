import React from "react";

export default function Awards() {
    return (
        <section className="container p-5  mt-5">
            <div className="row mt-5 align-items-center">
                <div className="col-md-6">
                    <img src="/media/images/largestBroker.svg" alt="largestBroker Image" className="img-fluid" style={{ width: "70%", display: "block", margin: "0 auto" }} />
                </div>

                <div className="col-md-6">
                    <h2>Largest stock broker in India</h2>
                    <p className="my-4">2+ Million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in: </p>

                    <div className="row">
                        <div className="col-md-6">
                            <ul>
                                <li>
                                    <p>Futures and Options</p>
                                </li>
                                <li>
                                    <p>Commodity derivatives</p>
                                </li>
                                <li>
                                    <p>Currency derivatives</p>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <ul>
                                <li>
                                    <p>Stocks & IPOs</p>
                                </li>
                                <li>
                                    <p>Direct mutual funds</p>
                                </li>
                                <li>
                                    <p>Bonds and Govt. Securities</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12">
                            <img src="/media/images/pressLogos.png" alt="press logos" className="mt-4 img-fluid" style={{ width: "90%", display: "block", margin: "0 auto" }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}