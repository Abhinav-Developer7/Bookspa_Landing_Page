import React from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";

export default function Navbar() {
    return (
        <header className={styles.navbar}>
            <div className={styles.logo}>
                <Image src="/image/logo-nav.png" alt="Benzo Technologies Logo" height={80} width={120} />
            </div>

            <nav className={styles.navLinks}>
                <a href="#home">Home</a>
                <a href="#about">About Us</a>
                <a href="#services">Services</a>
                {/* <a href="#solutions">Solutions</a> */}
                {/* <a href="#careers">Careers</a> */}
                <a href="#contact">Contact</a>
            </nav>

            <a href="#contact" className={styles.navButton}>
                Get in Touch
            </a>
        </header>
    );
}
