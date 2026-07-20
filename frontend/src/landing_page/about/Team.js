import React from "react";

export default function Team() {
    return (
        <section className="container">
            <h2 className="text-center">Founder</h2>
            <div className="row p-5 mx-5">
                <div className="col-md-5">
                    <img src="/media/images/nithinKamath.jpg" alt="founder Image" className="rounded-circle img-fluid" style={{ width: "75%", display: "block", margin: "auto" }} />
                    <p className="text-center mt-4 fs-5">Nithin Kamath</p>
                    <p className="text-center text-muted">Founder, CEO</p>
                </div>

                <div className="col-md-7 p-5">
                    <p className="lh-lg">
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p className="lh-lg">
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p className="lh-lg">
                        Playing basketball is his zen.
                    </p>
                    <p className="lh-lg">
                        Connect on <a href="#">Homepage</a> / <a href="#">TradingQnA</a> / <a href="#">Twitter</a>
                    </p>
                </div>
            </div>
        </section>
    )
}