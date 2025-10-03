import React from "react";

export default function Section({ title, img, reverse = false, children }) {
    return (
        <section className={`grid md:grid-cols-12 items-center gap-8 my-10`}>
            <div className={`${reverse ? "md:order-2 md:col-span-7" : "md:col-span-7"} text-center`}>
                <h2 className="text-4xl md:text-5xl text-white mb-4">{title}</h2>
                <div className="space-y-4">{children}</div>
            </div>
            <div className={`${reverse ? "md:order-1 md:col-span-5" : "md:col-span-5"}`}>
                <img src={img} alt={title} className="w-full h-auto rounded" />
            </div>
        </section>
    );
}