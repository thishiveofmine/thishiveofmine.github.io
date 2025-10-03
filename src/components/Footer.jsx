import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="py-8 my-8 text-gray-400">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="m-0">This Hive Of Mine</p>
                <ul className="flex items-center gap-6">
                    <li>
                        COPYRIGHT {new Date().getFullYear()}. ALL RIGHT RESERVED
                    </li>
                    <li>
                        <Link to="/impressum" className="hover:text-white">
                            Impressum
                        </Link>
                    </li>
                    <li>
                        <Link to="/datenschutz" className="hover:text-white">
                            Datenschutz
                        </Link>
                    </li>
                    <li>
                        <a href="https://wa.me/4917672903809" target="_blank" rel="noreferrer" className="hover:text-white no-underline"><FaWhatsapp /></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/this_hive_of_mine/" target="_blank" rel="noreferrer" className="hover:text-white no-underline"><FaInstagram /></a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/daria.solo.9" target="_blank" rel="noreferrer" className="hover:text-white no-underline"><FaFacebook /></a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}