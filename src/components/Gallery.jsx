import React from "react";

const colA = ["31.png", "9.png", "11.png", "18.png", "12.png", "13.jpg", "14.jpg", "1.jpg", "16.jpg", "17.jpg", "19.jpg"];
const colB = ["32.png", "20.png", "21.png", "29.png", "24.jpg", "22.jpg", "23.jpg", "25.jpg", "26.jpg", "27.jpg", "28.jpg", "30.jpg"];
const colC = ["33.png", "15.png", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "10.jpg"];

function Col({ files }) {
    return (
        <div className="flex flex-col gap-4">
            {files.map((f) => (
                <img
                    key={f}
                    src={`/photo/tiles/${f}`}
                    alt={f}
                    className="w-full h-auto rounded"
                    loading="lazy"
                />
            ))}
        </div>
    );
}

export default function Gallery() {
    return (
        <section className="mt-8">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                <Col files={colA} />
                <Col files={colB} />
                <Col files={colC} />
            </div>
        </section>
    );
}