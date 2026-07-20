import React from "react";

export default function Education() {
    return (
        <section className="container">
            <div className="row  align-items-center p-5 pt-0">
                <div className="col-md-6">
                    <img src="/media/images/education.svg" alt="education image" className="img-fluid" />
                </div>

                <div className="col-md-6">
                    <h4>Free and open market education</h4>

                    <p className="pt-4 pe-5">Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href="/">Varsity <i className="fa-solid fa-arrow-right-long"></i></a>

                    <p className="pt-4 pe-5">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="/">TradingQ&A  <i className="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </div>
        </section>
    )
}