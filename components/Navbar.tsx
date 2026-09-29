"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
                <div className="navbar-inner">
                    <a href="#" className="logo" onClick={closeMenu}>NØRTH</a>
                    <div className="nav-links">
                        <a href="#about">ABOUT</a>
                        <a href="#journey">FOLLOW</a>
                        <a href="#contact">CONTACT</a>
                    </div>
                    <button
                        className={`menu-button ${menuOpen ? "menu-button-open" : ""}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>
            <div className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}>
                <div className="mobile-menu-content">
                    <a href="#about" onClick={closeMenu}>ABOUT</a>
                    <a href="#journey" onClick={closeMenu}>FOLLOW</a>
                    <a href="#contact" onClick={closeMenu}>CONTACT</a>
                    <div className="mobile-menu-footer">
                        <span>THE ART OF SLOW LIVING</span>
                        <span>© 2026 TIDE</span>
                    </div>
                </div>
            </div>
        </>
    );
}