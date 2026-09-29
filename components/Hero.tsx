"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="hero">
            <video
                className="hero-video"
                src="/video/6414_Waves_Shore_1280x720.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"/>
            <div className="hero-overlay" />
            <div className="hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}>
                    <p className="hero-eyebrow">THE ART OF SLOW LIVING</p>
                    <h1 className="hero-title">TIDE</h1>
                </motion.div>
            </div>
        </section>
    );
}