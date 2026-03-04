/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './header.module.scss';
import Logo from "../../../public/imgs/Logo PNG.png" 

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <img src={Logo.src} alt="Trip For Me Logo"/>
        </Link>
        <button 
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menu"
        >
          <span className={styles.hamburger}></span>
        </button>
      </div>

      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
        <button className={styles.closeButton} onClick={() => setIsMenuOpen(false)}>✕</button>
        <ul className={styles.menuList}>
          <li><Link href="/">DESTINATIONS</Link></li>
          <li><Link href="/">EXPERIENCES</Link></li>
          <li><Link href="/">INSPIRATION</Link></li>
          <li><Link href="/">ABOUT</Link></li>
          <li><Link href="/">CONTACT</Link></li>
        </ul>
      </nav>
    </header>
  );
}