import React from "react";
import image from "../GHQ.png"

export default function Home(){
    return (
        <main>
            <img src={image} alt="GHQ" className="absolute object-cover w-full h-full" />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-blue-900 font-bold cursive leading-none lg:leading-snug home-name">This is a test sandbox for WWT digital.</h1>
            </section>
        </main>
    )
}