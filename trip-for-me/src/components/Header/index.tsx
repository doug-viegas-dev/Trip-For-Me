/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./header.module.scss";
import Logo from "../../../public/imgs/logo.png";
import LogoWhite from "../../../public/imgs/logo_white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => {
    setIsMenuOpen(false);
    menuButtonRef.current?.focus();
  };

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

  useEffect(() => {
    if (isMenuOpen) {
      closeButtonRef.current?.focus();
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`
    ${styles.header}
    ${isScrolled ? styles.scrolled : ""}
    ${isVisible ? styles.visible : styles.hidden}
    ${isMenuOpen ? styles.menuOpen : ""}
  `}
      >
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            <img
              src={isScrolled ? Logo.src : LogoWhite.src}
              alt="Trip For Me Logo"
            />
          </Link>
          <button
            ref={menuButtonRef}
            className={styles.menuButton}
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="trip-for-me-menu"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            type="button"
          >
            <span
              className={`${styles.hamburger} ${isScrolled ? styles.dark_hamburger : ""}`}
            ></span>
          </button>
        </div>
      </header>
      <button
        type="button"
        className={`${styles.overlay} ${isMenuOpen ? styles.overlayOpen : ""}`}
        onClick={closeMenu}
        aria-label="Fechar menu"
        tabIndex={isMenuOpen ? 0 : -1}
        inert={!isMenuOpen}
      />
      <nav
        id="trip-for-me-menu"
        className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}
        aria-hidden={!isMenuOpen}
        aria-label="Menu principal"
        inert={!isMenuOpen}
      >
        <button
          ref={closeButtonRef}
          className={styles.closeButton}
          onClick={closeMenu}
          aria-label="Fechar menu"
          type="button"
        >
          ✕
        </button>
        <img src={Logo.src} alt="Trip For Me Logo" className={styles.navLogo} />

        <ul className={styles.menuList}>
          <li>
            <Link href="/">INTERNACIONAIS</Link>
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
              <FontAwesomeIcon
                icon={faWhatsapp}
                className={styles.contact_icon}
              />
            </a>
          </li>
          <li>
            <a href="">
              <FontAwesomeIcon
                icon={faInstagram}
                className={styles.contact_icon}
              />
            </a>
          </li>
          <li>
            <a href="">
              <FontAwesomeIcon
                icon={faEnvelope}
                className={styles.contact_icon}
              />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
