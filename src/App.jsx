import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout.jsx";
import HomeDe from "./pages/HomeDe.jsx";
import HomeEn from "./pages/HomeEn.jsx";
import Impressum from "./pages/Impressum.jsx";
import Datenschutz from "./pages/Datenschutz.jsx";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<DefaultLayout />}> 
          <Route path="/" element={<HomeDe />} />
          <Route path="/en" element={<HomeEn />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}