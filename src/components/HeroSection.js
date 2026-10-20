import React from "react";
import styles from "./HeroSection.module.css";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className={styles.hero} id="home">
            <div className={styles.heroContent}>
                <p className={styles.heroLabel}>
                    INNOVATION · TECHNOLOGY · GROWTH
                </p>

                <h1>Explore Your Brand&apos;s Future</h1>

                <p className={styles.heroDescription}>
                    Technology solutions designed to help
                    businesses innovate, grow, and move forward.
                </p>

                <div className={styles.heroButtons}>
                    <a href="#services" className={styles.primaryButton}>
                        Our Services
                        <ArrowRight size={24} />
                    </a>


                    <a href="#contact" className={styles.secondaryButton}>
                        Talk to an Expert <ArrowRight size={24} />
                    </a>
                </div>
            </div>

            <div className={styles.heroVisual}>
                <div className={styles.visualCube}>
                    <Image src="/image/logo.png" alt="Benzo Technologies" width={200} height={200} style={{ objectFit: "contain" }} priority />
                </div>
            </div>
        </section>
    );
}
