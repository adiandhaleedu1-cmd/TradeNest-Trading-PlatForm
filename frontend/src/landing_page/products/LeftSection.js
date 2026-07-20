import React from "react";

export default function LeftSection({ imgLink, heading, description, link1, link1Text, link2, link2Text, playStore, appStore }) {
    return (
        <section className="container px-5 pt-5">
            <div className="row">
                <div className="col-md-8 ps-5">
                    <img src={imgLink} alt="section img" className="ps-5 img-fluid" />
                </div>

                <div className="col-md-4 pe-5 pt-5">
                    <h3>{heading}</h3>
                    <p className="pt-3 lh-lg">{description}</p>
                    <div>
                        {link1 &&
                            <a href={link1} className="me-5">{link1Text} <i className="fa-solid fa-arrow-right-long"></i> </a>}
                        {link2 &&
                            <a href={link2}>{link2Text} <i className="fa-solid fa-arrow-right-long"></i> </a>}
                    </div>

                    <div className="pt-4">
                        <a href="#" className="me-2"><img src="/media/images/googlePlayBadge.svg" /></a>
                        <a href="#"><img src="/media/images/appstoreBadge.svg" /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}