"use client";

import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section id="contact" className="contact-section">
            <motion.div
                className="contact-content"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1 }}>
                <h2>MADE WITH<br />INTENTION.</h2>
                <div className="creator-info">
                    <div className="creator-column">
                        <span className="creator-label">DESIGN & DEVELOPMENT</span>
                        <p>NIKITA YELTSOV</p>
                    </div>
                    <div className="creator-column">
                        <span className="creator-label">BASED IN</span>
                        <p>DENMARK</p>
                    </div>
                    <div className="creator-column">
                        <span className="creator-label">CONTACT</span>
                        <p>nikitaelcov899@gmail.com</p>
                    </div>
                </div>
                <div className="contact-footer">
                    <span>© 2026 TIDE</span>
                    <span>DESIGNED & DEVELOPED BY NIKITA YELTSOV</span>
                </div>
            </motion.div>
        </section>
    );
}