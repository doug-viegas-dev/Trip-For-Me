/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./header.module.scss";
import Logo from "../../../public/imgs/logo.png";
import LogoWhite from "../../../public/imgs/logo_white.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'; 
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""} ${isVisible ? styles.visible : styles.hidden}`}
    >
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <img
            src={isScrolled ? Logo.src : LogoWhite.src}
            alt="Trip For Me Logo"
          />
        </Link>
        <button
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menu"
        >
          <span
            className={`${styles.hamburger} ${isScrolled ? styles.dark_hamburger : ""}`}
          ></span>
        </button>
      </div>

      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
        <button
          className={styles.closeButton}
          onClick={() => setIsMenuOpen(false)}
        >
          ✕
        </button>
        <img src={Logo.src} alt="Trip For Me Logo" className={styles.navLogo} />

        <ul className={styles.menuList}>
          <li>
            <Link href="/">INTERNACIONAIS</Link>
          </li>
          <li>
            <Link href="/">NACIONAIS</Link>
          </li>
          <li>
            <Link href="/">VIAGEM DO MEU JEITO</Link>
          </li>
          <li>
            <Link href="/">PORQUE A TRIP FOR ME</Link>
          </li>
        </ul>

        <ul className={styles.contact_list}>
          <li>
            <a href="">
              <FontAwesomeIcon icon={faWhatsapp} className={styles.contact_icon} />
            </a>
          </li>
          <li>
            <a href="">
              <FontAwesomeIcon icon={faInstagram} className={styles.contact_icon} />
            </a>
          </li>
          <li>
            <a href="">
              <FontAwesomeIcon icon={faEnvelope} className={styles.contact_icon}/>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
