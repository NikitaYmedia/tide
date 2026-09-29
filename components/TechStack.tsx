"use client";

import { motion } from "framer-motion";

const technologies = [
    "NEXT.JS",
    "REACT",
    "TYPESCRIPT",
    "FRAMER MOTION",
    "CSS",
    "VERCEL",
];

export default function TechStack() {
    return (
        <section className="tech-section">
            <motion.div
                className="tech-container"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}>
                <div className="tech-content">
                    <h2>BUILT WITH</h2>
                    <div className="tech-list">
                        {technologies.map((technology) => (
                            <span key={technology}>{technology}</span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}