
import React from "react";
import { ArrowUpRight } from "lucide-react";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
    return (
        <section className={styles.aboutSection} id="about">
            <div className={styles.aboutContainer}>
                <div className={styles.aboutContent}>
                    <span className={styles.aboutLabel}>
                        ABOUT BENZO
                    </span>

                    <h2>
                        We turn technology into meaningful business solutions.
                    </h2>

                    <p>
                        We believe technology should make businesses
                        simpler, smarter, and more efficient. Our focus
                        is on creating practical digital solutions that
                        help businesses move forward.
                    </p>

                    <a href="#contact" className={styles.aboutButton}>
                        Let&apos;s Work Together
                        <ArrowUpRight size={18} strokeWidth={2} />
                    </a>
                </div>

                {/* <div className={styles.aboutVisual}>
                    <div className={styles.aboutVisualInner}>
                        <span className={styles.aboutSymbol}>B.</span>
                        <span className={styles.aboutVisualCaption}>
                            INNOVATION · TECHNOLOGY · GROWTH
                        </span>
                    </div>
                </div> */}
            </div>
        </section>
    );
}
