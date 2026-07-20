import React from "react";

export default function Stats() {
    return (
        <section className="container p-5">
            <div className="row p-5 align-items-center">
                <div className="col-md-6">
                    <h2 className="mb-5">Trust with confidence</h2>

                    <h4 className="mt-4">Customer-first always</h4>
                    <p className="my-2">That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>

                    <h4 className="mt-4">No spam or gimmicks</h4>
                    <p className="my-2">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a href="/">Our philosophies.</a></p>

                    <h4 className="mt-4">The Zerodha universe</h4>
                    <p className="my-2">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h4 className="mt-4">Do better with money</h4>
                    <p className="my-2">With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>

                <div className="col-md-6 px-5">
                    <img src="/media/images/ecosystem.png" alt="ecosystem image" className="img-fluid" style={{ width: "100%" }} />

                    <div className="d-flex justify-content-evenly mt-3">
                        <p>
                            <a href="/">Explore our product <i className="fa-solid fa-arrow-right-long"></i>
                            </a>
                        </p>
                        <p><a href="/">Try kite demo <i className="fa-solid fa-arrow-right-long"></i></a></p>
                    </div>


                </div>
            </div>
        </section>
    )
}