import React from "react";

export default function AccountOpen() {
    return (
        <section className="container text-center">
            <h2 className="mt-5">
                Open a Zerodha account
            </h2>

            <p className="mt-4 mb-5">
                Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
            </p>

            <button type="button" className="btn btn-primary p-2 fs-5 fw-medium" style={{ width: "20%", margin: "0 auto" }} onClick={() => window.location.href = "/signup"}>
                Sign up now
            </button>
        </section>
    )
}