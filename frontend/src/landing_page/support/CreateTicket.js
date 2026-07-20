import React from "react";
import { nanoid } from "nanoid"

const ticketTopic = [
    {
        id: nanoid(),
        icon: "fa-solid fa-circle-plus",
        heading: "Account Opening",
        links: [
            "Getting started",
            "Online",
            "Offline",
            "Charges",
            "Company, Partnership and HUF",
            "Non Resident Indian (NRI)"
        ]
    },
    {
        id: nanoid(),
        icon: "fa-solid fa-circle-user",
        heading: "Your Zerodha Account",
        links: [
            "Login credentials",
            "Your Profile",
            "Account modification and segment addition",
            "CMR & DP ID",
            "Nomination",
            "Transfer and conversion of shares"
        ]
    },
    {
        id: nanoid(),
        icon: "fa-solid fa-chart-simple",
        heading: "Trading and Markets",
        links: [
            "Trading FAQs",
            "Kite",
            "Margins",
            "Product and order types",
            "Corporate actions",
            "Kite features",
        ]
    },
    {
        id: nanoid(),
        icon: "fa-solid fa-wallet",
        heading: "Funds",
        links: [
            "Fund withdrawal",
            "Adding funds",
            "Adding bank accounts",
            "eMandates"
        ]
    },
    {
        id: nanoid(),
        icon: "fa-brands fa-playstation",
        heading: "Console",
        links: [
            "IPO",
            "Portfolio",
            "Funds statement",
            "Profile",
            "Reports",
            "Referral program"
        ]
    },
    {
        id: nanoid(),
        icon: "fa-solid fa-coins",
        heading: "Coin",
        links: [
            "Understanding mutual funds and Coin",
            "Coin app",
            "Coin web",
            "Transactions and reports",
            "National Pension Scheme (NPS)",
        ]
    }
]

export default function CreateTicket() {
    return (
        <section className="container px-5 my-5">
            <div className="row px-5 mx-3">
                <h3>To create a ticket, select a relevant topic</h3>
                {
                    ticketTopic.map((topic) => (
                        <div className="col-md-4" key={topic.id}>
                            <p className="fs-5 py-2 mt-4"><i className={`${topic.icon} me-2 text-muted`}></i>{topic.heading}</p>
                            <ul className="list-unstyled">
                                {
                                    topic.links.map((link, index) => (
                                        <li key={index} className="lh-lg ps-4" style={{ fontSize: ".9rem" }}>
                                            <a href="#">{link}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}