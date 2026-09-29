"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <motion.div
                    className="about-text"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1, ease: "easeOut" }}>

                    <h2>FIND YOUR<br />WAY TO<br />THE SEA.</h2>
                    <p className="about-description">
                        There is a different rhythm by the ocean.
                        Slower mornings, endless horizons and places
                        where time seems to disappear.</p>
                </motion.div>
                <motion.div
                    className="about-image-wrapper"
                    initial={{ opacity: 0, y: 100, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}>
                    <img
                        src="/images/intro.jpg"
                        alt="Beach at sunset"
                        className="about-image" />
                </motion.div>
            </div>
        </section>
    );
}