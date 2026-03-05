/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./header.module.scss";
import Logo from "../../../public/imgs/logo_white.png";

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
          <img src={Logo.src} alt="Trip For Me Logo" />
        </Link>
        <button
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menu"
        >
          <span className={styles.hamburger}></span>
        </button>
      </div>

      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
        <button
          className={styles.closeButton}
          onClick={() => setIsMenuOpen(false)}
        >
          ✕
        </button>
        <ul className={styles.menuList}>
          <li>
            <Link href="/">DESTINATIONS</Link>
          </li>
          <li>
            <Link href="/">EXPERIENCES</Link>
          </li>
          <li>
            <Link href="/">INSPIRATION</Link>
          </li>
          <li>
            <Link href="/">ABOUT</Link>
          </li>
          <li>
            <Link href="/">CONTACT</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
