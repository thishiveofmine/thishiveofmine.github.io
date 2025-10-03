import React from "react";

export default function Hero({ lang = "de" }) {
    const isEn = lang === "en";
    return (
        <section className="grid md:grid-cols-12 items-center text-center md:text-left gap-6">
            <div className="md:col-span-7 order-2 md:order-2">
                <h1 className="text-white text-4xl md:text-5xl my-6">
                    {isEn ? "Add color to your miniatures" : "Füge Deinen Miniaturen Farbe hinzu"}
                </h1>
                <h1 className="text-white text-4xl md:text-5xl my-6">
                    {isEn ? "Join us on a mini-adventure" : "Komm mit uns auf ein Mini-Abenteuer"}
                </h1>
            </div>
            <div className="md:col-span-5 order-1 md:order-1">
                <img src="/photo/logo.png" alt="Logo" className="w-full h-auto" />
            </div>
        </section>
    );
}