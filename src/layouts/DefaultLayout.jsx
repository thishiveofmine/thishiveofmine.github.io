import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

export default function DefaultLayout() {
    return (
        <div className="min-h-screen bg-hive-dark text-white font-sans antialiased flex flex-col">
            <div className="container">
                <Header />
            </div>

            <main className="flex-1">
                <Outlet />
            </main>

            <div className="container mt-8">
                <Footer />
            </div>
        </div>
    );
}