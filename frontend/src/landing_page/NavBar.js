import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg border-bottom position-fixed bg-white w-100 top-0 start-0 p-3">

            <div className="container px-5">

                <Link className="navbar-brand hero-logo " to="/"> <img src="/media/images/logo.svg" alt="herologo" style={{ width: "9rem" }} /> </Link>

                <button data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" className="navbar-toggler border-0 shadow-none">
                    <span className="navbar-toggler-icon" ></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav align-items-center ms-auto" style={{ fontSize: "0.95rem" }}>
                        <Link className="nav-link" to="signup" >Signup</Link>
                        <Link className="nav-link" to="about" >About</Link>
                        <Link className="nav-link" to="products" >Products</Link>
                        <Link className="nav-link" to="pricing">Pricing</Link >
                        <Link className="nav-link" to="support" >Support</Link >
                    </div >
                </div >
            </div >
        </nav >
    )
}