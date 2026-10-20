
import React from "react";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
    return (
        <section className={styles.contactSection} id="contact">
            <div className={styles.contactContainer}>
                <div className={styles.contactContent}>
                    <span className={styles.contactLabel}>
                        LET&apos;S CONNECT
                    </span>

                    <h2>
                        Have a project in mind?
                        <span> Let&apos;s build something great.</span>
                    </h2>

                    <p className={styles.contactDescription}>
                        Have an idea or a business challenge?
                        Get in touch with our team and let&apos;s explore
                        how technology can help you move forward.
                    </p>

                    <a
                        href="mailto:info@example.com"
                        className={styles.contactButton}
                    >
                        Get in touch
                        <ArrowUpRight size={18} />
                    </a>
                </div>

                <div className={styles.contactDetails}>
                    <div className={styles.contactDetail}>
                        <div className={styles.contactIcon}>
                            <Mail size={20} />
                        </div>
                        <div>
                            <h3>Email us</h3>
                            <p>info@example.com</p>
                        </div>
                    </div>

                    <div className={styles.contactDetail}>
                        <div className={styles.contactIcon}>
                            <Phone size={20} />
                        </div>
                        <div>
                            <h3>Call us</h3>
                            <p>Contact our team</p>
                        </div>
                    </div>

                    <div className={styles.contactDetail}>
                        <div className={styles.contactIcon}>
                            <MapPin size={20} />
                        </div>
                        <div>
                            <h3>Our location</h3>
                            <p>Connect with us for details</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

