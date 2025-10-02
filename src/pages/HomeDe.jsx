import React from "react";
import Hero from "../components/Hero.jsx";
import Section from "../components/Section.jsx";
import Gallery from "../components/Gallery.jsx";

export default function HomeDe() {
  return (
    <>
      <div className="container">
        <Hero lang="de" />
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
            Wir bemalen Figuren aus Spielsystemen wie Warhammer 40k, Age of
            Sigmar, Kill Team, Necromunda, Warcry, Infinity, Warhammer
            Fantasy, Lord of the Rings, Space Hulk oder historische Systeme.
          </p>
          <p className="text-lg text-gray-100">
            Alle Armeen, Warbands und Gaming für Wargames. Von Space Marines
            bis Valkyrie.
          </p>
        </Section>

        <div className="max-w-[100vw]">
          <div className="grid grid-cols-12">
            <div className="md:col-span-8">
              <hr className="hr-gold" />
            </div>
          </div>
        </div>

        <Section title="Brettspiele" img="/photo/board-games-1.png" reverse>
          <p className="text-lg text-gray-100">
            Wir bemalen Figuren aus Brettspielen und Rollenspielen: Dungeons
            and Dragons, Zombicide, Kingdom Death: Monster, Gloomhaven, Blood
            Rage, Rising Sun, Descent, Mice and Mystics, Nemesis und andere.
          </p>
          <p className="text-lg text-gray-100">
            Ob Lieblingsfigur oder großes Monster - jede Miniatur ist wichtig.
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
            Gelände und Gebäude: Statuen, Häuser, Treppen, Plattformen,
            Mauern, Säulen, Bäume, Zäune, Hecken. Erfinde ein beliebiges
            Diorama oder eine Landschaft.
          </p>
          <p className="text-lg text-gray-100">
            Vom kleinen Gebäude bis zum ganzen Spieltisch setzen wir jede
            deiner Ideen um.
          </p>
        </Section>

        <div className="max-w-[100vw]">
          <div className="grid grid-cols-12">
            <div className="md:col-span-8">
              <hr className="hr-gold" />
            </div>
          </div>
        </div>

        <Section title="Bases" img="/photo/base-3.png" reverse>
          <p className="text-lg text-gray-100">
            Verschiedene thematische Bases: Feld, Meeresboden, Lava, Dünen,
            Marsoberfläche, Wüste, Schnee und Eis, Schlachtfeld, verlassene
            Gebäude, Trümmer, Apokalypse, Friedhof.
          </p>
          <p className="text-lg text-gray-100">
            Die am häufigsten verwendeten Materialien sind Sand, Gras, Blumen,
            Büsche, Schnee, Totenköpfe usw.
          </p>
        </Section>
      </div>

      <div className="container my-12">
        <h2 className="text-center text-4xl md:text-5xl text-white my-8">
          Wie bemale ich Ihre Miniatur einzigartig?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ul className="list-disc list-inside space-y-6">
            {[
              "Sanfte Farbübergänge verschönern die Oberflächentextur der Miniatur",
              "Die detaillierte Ausarbeitung des Gesichtes und der Haare verleihen der Miniatur eine einzigartige Persönlichkeit",
              "Ein ungewöhnliches Farbschema hebt deine Miniatur von vielen anderen ab",
              "Die zusätzlichen Details auf der Base betonen und unterstützen das Thema der Miniatur",
            ].map((t) => (
              <li key={t} className="text-lg text-gray-100">
                {t}
              </li>
            ))}
          </ul>
          <img src="/photo/example.png" alt="Example" className="w-full h-auto rounded" />
        </div>
      </div>

      <hr className="hr-gold" />

      <div className="container">
        <Gallery />
      </div>
    </>
  );
}