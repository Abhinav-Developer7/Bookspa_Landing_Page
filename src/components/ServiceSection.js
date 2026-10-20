
import React from "react";
import styles from "./ServiceSection.module.css";
import { ArrowUpRight } from "lucide-react";

const services = [
    {
        number: "01",
        title: "Web Development",
        description:
            "Modern and responsive websites designed around your business needs.",
    },
    {
        number: "02",
        title: "Software Solutions",
        description:
            "Practical software solutions to simplify business operations.",
    },
    {
        number: "03",
        title: "Digital Innovation",
        description:
            "Technology-driven ideas that help businesses grow and evolve.",
    },
];

export default function ServicesSection() {
    return (
        <section className={styles.servicesSection} id="services">
            <div className={styles.servicesContainer}>
                <div className={styles.servicesHeading}>
                    <span className={styles.servicesLabel}>OUR SERVICES</span>

                    <h2>
                        Technology that moves your business forward.
                    </h2>

                    <p>
                        We combine technology and creativity to deliver
                        solutions for modern businesses.
                    </p>
                </div>

                <div className={styles.servicesGrid}>
                    {services.map((service) => (
                        <article
                            className={styles.serviceCard}
                            key={service.number}
                        >
                            <span className={styles.serviceNumber}>
                                {service.number}
                            </span>

                            <h3>{service.title}</h3>

                            <p>{service.description}</p>

                            <a href="#contact" className={styles.serviceLink}>
                                Learn more <span><ArrowUpRight size={18} strokeWidth={2} /></span>
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
