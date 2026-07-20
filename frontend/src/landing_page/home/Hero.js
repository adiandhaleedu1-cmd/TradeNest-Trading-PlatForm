import React from "react";

export default function Hero() {
    return (
        <section className="container">
            <div className="row text-center mt-5 pt-5">
                <img src="/media/images/homeHero.png" alt="Hero Image" className="mb-5 img-fluid" style={{ width: "70%", display: "block", margin: "0 auto" }} />

                <h1 className="mt-5">
                    Invest in everything
                </h1>

                <p className="mt-3 mb-5">
                    Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
                </p>

                <button type="button" className="btn btn-primary p-2 fs-5 fw-medium mx-auto" style={{ width: "20%" }}>
                    Sign up for free
                </button>
            </div>
        </section>
    )
}