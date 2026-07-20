import React from "react";

export default function RightSection({ imgLink, heading, description, link1, link1Text }) {
    return (
        <section className="container py-5">
            <div className="row align-items-center mx-5">
                <div className="col-md-5 pt-5 px-5">
                    <h3>{heading}</h3>
                    <p className="pt-3 lh-lg">{description}</p>
                    <div>
                        {link1 &&
                            <a href={link1}>{link1Text} <i className="fa-solid fa-arrow-right-long"></i> </a>}
                    </div>
                </div>

                <div className="col-md-7">
                    <img src={imgLink} alt="section img" className="img-fluid" />
                </div>
            </div>
        </section>
    )
}