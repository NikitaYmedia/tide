"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
            <div className="navbar-inner">
                <a href="#" className="logo">NØRTH</a>
                <div className="nav-links">
                    <a href="#about">ABOUT</a>
                    <a href="#work">FOLLOW</a>
                    <a href="#contact">CONTACT</a>
                </div>
            </div>
        </nav>
    );
}