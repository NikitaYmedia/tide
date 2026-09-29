"use client";

import { motion } from "framer-motion";

const moments = [
    {
        number: "01",
        title: "DAWN",
        text: "The first light touches the water.",
    },
    {
        number: "02",
        title: "DAY",
        text: "Follow the horizon. Leave everything behind.",
    },
    {
        number: "03",
        title: "DUSK",
        text: "When the world slows down, stay a little longer.",
    },
];

export default function Journey() {
    return (
        <section id="work" className="journey-section">
            <div className="journey-header">
                <h2>
                    FOLLOW<br />THE HORIZON.</h2>
            </div>
            <div className="journey-list">
                {moments.map((moment, index) => (
                    <motion.div
                        key={moment.number}
                        className="journey-item"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                            duration: 0.8,
                            delay: index * 0.15,
                        }}>
                        <span className="journey-number">
                            {moment.number}
                        </span>
                        <h3>{moment.title}</h3>
                        <p>{moment.text}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}