import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Header() {
    return (
        <header className="py-4">
            <div className="grid lg:grid-cols-12 gap-4 items-center">
                <div className="lg:col-span-2">
                    <img src="/photo/avatar.png" alt="Avatar" className="w-full max-w-[160px]" />
                </div>
                <div className="lg:col-span-6">
                    <h1 className="text-white">
                        <Link to="/" className="no-underline text-white text-4xl md:text-5xl">
                            This Hive Of Mine
                        </Link>
                        <p className="text-white/90 text-xl md:text-2xl">Miniaturen Bemalservice in Deutschland</p>
                    </h1>
                </div>
                <div className="lg:col-span-4">
                    <div className="flex justify-end items-center gap-4 text-white text-4xl">
                        <a href="https://wa.me/4917672903809" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="no-underline"><FaWhatsapp /></a>
                        <a href="https://www.instagram.com/this_hive_of_mine/" target="_blank" rel="noreferrer" aria-label="Instagram" className="no-underline"><FaInstagram /></a>
                        <a href="https://www.facebook.com/daria.solo.9" target="_blank" rel="noreferrer" aria-label="Facebook" className="no-underline"><FaFacebook /></a>
                        <Link to="/en" className="text-white text-3xl no-underline">🇬🇧</Link>
                        <Link to="/" className="text-white text-3xl no-underline">🇩🇪</Link>
                    </div>
                </div>
            </div>
        </header>
    );
}