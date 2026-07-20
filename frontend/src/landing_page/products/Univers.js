import React from "react";

export default function Univers() {
    return (
        <section className="container text-center">
            <h3>The Zerodha Universe</h3>
            <p className="p-4">Extend your trading and investment experience even further with our partner platforms</p>
            <div className="row px-5 pb-5 mx-5 align-items-center">
                <div className="col-md-4 px-5 align-items-center">
                    <div className="p-2">
                        <img src="/media/images/zerodhaFundhouse.png" alt="partner img" className="img-fluid py-4 ps-3" style={{ width: "90%", display: "block" }} />
                        <p className="text-muted" style={{ fontSize: "0.75rem" }}>
                            Our asset management venture
                            that is creating simple and transparent index
                            funds to help you save for your goals.
                        </p>
                    </div>
                    <div className="p-2">
                        <img src="/media/images/streakLogo.png" alt="partner img" className="img-fluid py-4 ps-4" style={{ width: "85%", display: "block" }} />
                        <p className="text-muted" style={{ fontSize: "0.75rem" }}>
                            Systematic trading platform
                            that allows you to create and backtest
                            strategies without coding.
                        </p>
                    </div>
                </div>

                <div className="col-md-4 px-5">
                    <div className="p-2">
                        <img src="/media/images/sensibullLogo.svg" alt="partner img" className="img-fluid py-4 ps-4" style={{ width: "90%", display: "block" }} />
                        <p className="text-muted" style={{ fontSize: "0.75rem" }}>
                            Options trading platform that lets you
                            create strategies, analyze positions, and examine
                            data points like open interest, FII/DII, and more.
                        </p>
                    </div>
                    <div className="p-2">
                        <img src="/media/images/smallcaseLogo.png" alt="partner img" className="img-fluid py-4 ps-3" style={{ width: "95%", display: "block" }} />
                        <p className="text-muted" style={{ fontSize: "0.75rem" }}>
                            Thematic investing platform
                            that helps you invest in diversified
                            baskets of stocks on ETFs.
                        </p>
                    </div>
                </div>

                <div className="col-md-4 px-5 align-items-center">
                    <div className="p-2">
                        <img src="/media/images/goldenpiLogo.png" alt="partner img" className="img-fluid py-3 ps-2" style={{ width: "85%", display: "block" }} />
                        <p className="text-muted" style={{ fontSize: "0.75rem" }}>
                            Investment research platform
                            that offers detailed insights on stocks,
                            sectors, supply chains, and more.
                        </p>
                    </div>
                    <div className="p-2">
                        <img src="/media/images/dittoLogo.png" alt="partner img" className="img-fluid py-4 ps-5" style={{ width: "70%", display: "block" }} />
                        <p className="text-muted" style={{ fontSize: "0.75rem" }}>
                            Personalized advice on life
                            and health insurance. No spam
                            and no mis-selling.
                        </p>
                    </div>
                </div>

                <div className="col-md-12 pt-5">
                    <button type="button" className="btn btn-primary p-2 fs-5 fw-medium" style={{ width: "20%", margin: "0 auto" }}>
                        Sign up now
                    </button>
                </div>
            </div>
        </section>
    )
}