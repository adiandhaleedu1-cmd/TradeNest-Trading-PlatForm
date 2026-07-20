import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Univers from "./Univers";

export default function ProductPage() {
    return (
        <>
            {/* <h1>ProductPage</h1> */}
            <Hero />
            <LeftSection imgLink="/media/images/kite.png"
                heading="Kite"
                description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                link1="#"
                link2="#"
                link1Text="Try demo"
                link2Text="Learn more" />

            <RightSection imgLink="/media/images/console.png"
                heading="Console"
                description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
                link1="#"
                link1Text="Learn more" />

            <LeftSection imgLink="/media/images/coin.png"
                heading="Coin"
                description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
                link1="#"
                link1Text="Coin" />

            <RightSection imgLink="/media/images/kiteconnect.png"
                heading="Kite Connect API"
                description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
                link1="#"
                link1Text="Kite Connect" />

            <LeftSection imgLink="/media/images/varsity.png"
                heading="Varsity mobile"
                description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
            />
            <p className="text-center fs-5 py-5 my-5">Want to know more about our technology stack? Check out the <a href="#">Zerodha.tech</a> blog.</p>

            <Univers />
        </>
    )
}