import React from "react";

export default function Impressum() {
  return (
    <div className="container py-10 space-y-6">
      <h1 className="text-4xl md:text-5xl">Impressum</h1>

      <p className="text-gray-100">
        <strong>This Hive of Mine, 40547 Dusseldorf Niederkasseler Lohweg 24a</strong>
      </p>
      <p className="text-gray-100">
        <strong>t72903809@gmail.com</strong>
      </p>

      <p className="text-gray-100 max-w-3xl">
        This Hive of Mine ist ein Malstudio, das sich mit filigranen Miniaturen beschäftigt. Wir geben unser Bestes,
        um eine sichere Lieferung und ein reibungsloses Erlebnis zu gewährleisten. Wir übernehmen jedoch keine Verantwortung für
        Schäden während des Versands aufgrund der extremen Empfindlichkeit einiger Miniaturen. Der Kunde, der ein Gemälde bestellt,
        stimmt dem zu.
      </p>
    </div>
  );
}