"use client"



import React from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const PathName = usePathname();

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Contact", href: "#contact" },
    ];
    return (
        <div className={styles.maindiv}>
            <header className={styles.navbar}>
                <div className={styles.logo}>
                    <Image src="/image/logo-nav.png" alt="Benzo Technologies Logo" height={80} width={120} />
                </div>

                <nav className={styles.navLinks}>
                    {navLinks.map((link) => (
                        <a href={link.href} key={link.name}>{link.name}</a>
                    ))}
                </nav>

                <a href="#contact" className={styles.navButton}>
                    Get in Touch
                </a>

                <button
                    className={styles["menu-toggle"]}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                >
                    {isOpen ? "" : <Menu size={26} style={{ color: "white" }} />}
                </button>

            </header >
            <div className={`${styles["mobile-menu"]} ${isOpen ? styles.active : ""}`}>
                <button
                    className={styles["menu-toggle"]}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                >
                    {isOpen ? <X size={26} style={{ color: "white" }} /> : ""}
                </button>

                {navLinks.map((link) => (
                    <Link

                        key={link.name}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={styles.Link}


                    >
                        {link.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}
