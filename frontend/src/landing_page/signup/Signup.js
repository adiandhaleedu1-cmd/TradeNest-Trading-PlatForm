import React from "react";
import Hero from "./Hero";
import AccountOpen from "../AccountOpen";
import SignupForm from "./SignupFormPage";

export default function Signup() {
    return (
        <section className="pb-5">
            <Hero />
            <SignupForm />
            <AccountOpen />
        </section>
    )
}