import React from "react";
import Hero from "../components/Hero.jsx";
import Section from "../components/Section.jsx";
import Gallery from "../components/Gallery.jsx";

export default function HomeEn() {
    return (
        <>
            <div className="container">
                <Hero lang="en" />
            </div>

            <div className="max-w-[100vw] my-6">
                <div className="container">
                    <div className="grid grid-cols-12">
                        <div className="hidden md:block md:col-span-8">
                            <hr className="hr-gold" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container space-y-8">
                <Section title="Warhammer" img="/photo/warhammer-4.png" reverse={false}>
                    <p className="text-lg text-gray-100">
                        We paint Warhammer 40k, Age of Sigmar, Kill Team, Necromunda,
                        Warcry, Infinity, Warhammer Fantasy, Lord of the Rings, Space Hulk,
                        or Historic systems.
                    </p>
                    <p className="text-lg text-gray-100">
                        Any armies, warbands and gaming miniatures for wargames. From Space
                        Marines to Valkyrie.
                    </p>
                </Section>

                <div className="max-w-[100vw]">
                    <div className="grid grid-cols-12">
                        <div className="md:col-span-8">
                            <hr className="hr-gold" />
                        </div>
                    </div>
                </div>

                <Section title="Board games" img="/photo/board-games-1.png" reverse>
                    <p className="text-lg text-gray-100">
                        We paint miniatures from board games and RPGs: Dungeons and Dragons,
                        Zombicide, Kingdom Death: Monster, Gloomhaven, Blood Rage, Rising
                        Sun, Descent, Mice and Mystics, Nemesis, and others.
                    </p>
                    <p className="text-lg text-gray-100">
                        Whether it's your favorite character or a big monster — every
                        miniature is important.
                    </p>
                </Section>

                <div className="max-w-[100vw]">
                    <div className="grid grid-cols-12">
                        <div className="hidden md:block md:col-span-4" />
                        <div className="md:col-span-8">
                            <hr className="hr-gold" />
                        </div>
                    </div>
                </div>

                <Section title="Terrain" img="/photo/terrain-4.png" reverse={false}>
                    <p className="text-lg text-gray-100">
                        Terrain and Buildings: statues, houses, stairs, platforms, walls,
                        columns, trees, fences, hedges. Create any diorama or scenery.
                    </p>
                    <p className="text-lg text-gray-100">
                        We implement any of your ideas — from a small building to a whole
                        gaming table.
                    </p>
                </Section>

                <div className="max-w-[100vw]">
                    <div className="grid grid-cols-12">
                        <div className="md:col-span-8">
                            <hr className="hr-gold" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-12">
                <h2 className="text-center text-4xl md:text-5xl text-white my-8">
                    How to make miniatures personal?
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <ul className="list-disc list-inside space-y-6">
                        {[
                            "Smooth gradients will diversify sculpt",
                            "Elaboration of facial features and hair style create bright personality of your miniature",
                            "Non-standard painting schema stands out your miniature from many",
                            "Additional details on base will emphasize theme of the miniature",
                        ].map((t) => (
                            <li key={t} className="text-lg text-gray-100">
                                {t}
                            </li>
                        ))}
                    </ul>
                    <img
                        src="/photo/example.png"
                        alt="Example"
                        className="w-full h-auto rounded"
                    />
                </div>
            </div>

            <hr className="hr-gold" />

            <div className="container">
                <Gallery />
            </div>
        </>
    );
}