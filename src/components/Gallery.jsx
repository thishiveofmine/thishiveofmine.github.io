import React from "react";
import Masonry from "../components/ui/Masonry.jsx";

// Use Vite's glob API (Vite 4/5+): eager + return URLs directly (using query/import instead of deprecated as)
const modules = import.meta.glob("../assets/tiles/*.{png,jpg,jpeg,webp}", { eager: true, query: "?url", import: "default" });

// modules is: { './foo.png': '/assets/foo.hash.png', ... }
const files = Object.entries(modules)
  .map(([k, url]) => ({ path: url, name: k.split('/').pop() }))
  .sort((a, b) => a.name.localeCompare(b.name));

// Build items array for Masonry. height is optional — Masonry will use a default if not present.
const items = files.map((f, i) => ({
  id: String(i + 1),
  img: f.path,
  url: f.path,
  // height: undefined, // allow Masonry to compute a sensible default
}));

export default function Gallery() {
  if (!items.length) {
    return (
      <section className="mt-8">
        <p className="text-gray-400">No images found in <code>src/assets/tiles</code>.</p>
      </section>
    );
  }

  return (
    <section className="mt-8">
      <Masonry
        items={items}
        gapX={16}
        gapY={16}
        ease="power3.out"
        duration={0.6}
        stagger={0.05}
        animateFrom="bottom"
        scaleOnHover={true}
        hoverScale={0.95}
        blurToFocus={true}
        colorShiftOnHover={false}
      />
    </section>
  );
}