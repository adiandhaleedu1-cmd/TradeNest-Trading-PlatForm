import React from "react";

export default function Hero() {
    return (
        <section style={{ backgroundColor: "#387ed1", color: "white" }}>
            <div className="container p-5">
                <div className="row px-5 py-3">
                    <div className="col-md-12 d-flex justify-content-between">
                        <h5>Support Portal</h5>
                        <a href="#" style={{ color: "white" }}>Track tickets</a>
                    </div>
                </div>

                <div className="row p-5">
                    <div className="col-md-7">
                        <h4 className="pb-4">Search for an answer or browse help topics to create a ticket</h4>
                        <input placeholder="Eg: how do i activate F&O, why ismy order getting rejected..." className="px-5 py-3 mb-4 rounded form-control" /> <br />
                        <a href="" style={{ color: "white" }} className="me-5">Track account opening</a>
                        <a href="" style={{ color: "white" }} className="me-5">Track segment activation</a>
                        <a href="" style={{ color: "white" }} className="me-5">Intraday margins </a>
                        <a href="" style={{ color: "white" }} className="me-5">Kite user manual</a>
                    </div>
                    <div className="col-md-5 ps-5">
                        <h5>Featured</h5>
                        <ol>
                            <li className="lh-lg py-3"><a href="#" style={{ color: "white" }}>Latest Intraday leverages - MIS & CO</a></li>
                            <li className="lh-lg"><a href="#" style={{ color: "white" }}>Surveillance measure on scrips - February 2024</a></li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    )
}