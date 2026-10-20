
import React from "react";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import styles from "./FooterSection.module.css";

export default function Footer() {
    return (
        <footer className={styles.siteFooter}>
            <div className={styles.footerContainer}>
                <div className={styles.footerMain}>
                    <div className={styles.footerBrand}>
                        <a href="#" className={styles.footerLogo}>
                            Benzo<span>.</span>
                        </a>

                        <p>
                            Building meaningful digital experiences
                            through technology and innovation.
                        </p>
                    </div>

                    <div className={styles.footerLinks}>
                        <h3>Explore</h3>
                        <a href="#about">About us</a>
                        <a href="#services">Our services</a>
                        <a href="#contact">Contact</a>
                    </div>

                    <div className={styles.footerConnect}>
                        <h3>Let&apos;s connect</h3>

                        <a
                            href="mailto:info@example.com"
                            className={styles.footerEmail}
                        >
                            Get in touch
                            <ArrowUpRight size={16} />
                        </a>

                        <div className={styles.footerSocials}>
                            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FaLinkedin size={18} />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <FaInstagram size={18} />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <FaFacebook size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <p>
                        © 2026 Benzo Technologies.
                        Developed by Tortillon Technologies. All rights reserved.
                    </p>

                    <a href="#home" className={styles.footerBackTop}>
                        Back to top <ArrowUp size={14} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
