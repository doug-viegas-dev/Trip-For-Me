"use client";
import { useState } from "react";
import styles from "./top.module.scss";

const categories = [
  { id: "estilo", label: "ESTILO" },
  { id: "popular", label: "EM ALTA" },
];

const cardsData = {
  estilo: [
    { title: "FAMíLIA", img: "/imgs/top-familia.jpg" },
    { title: "CASAL", img: "/imgs/top-casal.jpg" },
    { title: "GRUPO", img: "/imgs/top-grupo.jpg" },
    { title: "LUA DE MEL", img: "/imgs/top-lua-de-mel.jpg" },
    { title: "SOLO", img: "/imgs/top-solo.jpg" },
  ],
  popular: [
    { title: "PORTUGAL", img: "/imgs/top-portugal.jpg" },
    { title: "SAN ANDRES", img: "/imgs/top-san-andres.jpg" },
    { title: "TOSCANA", img: "/imgs/top-toscana.jpg" },
    { title: "PARIS", img: "/imgs/top-paris.jpg" },
    { title: "SUL DA ITÁLIA", img: "/imgs/top-sul-italia.jpg" },
  ],
};
export default function Top() {
  const [activeTab, setActiveTab] = useState("estilo");
  return (
    <section className={styles.top_section}>
      <h2>COMECE SUA JORNADA</h2>
      <nav className={styles.top_nav}>
        {categories.map((category) => (
          <button
            key={category.id}
            className={
              activeTab === category.id ? styles.nav_tab_active : styles.nav_tab
            }
            onClick={() => setActiveTab(category.id)}
          >
            {category.label}
          </button>
        ))}
      </nav>

      <div key={activeTab} className={`${styles.grid} ${styles['grid_' + activeTab]}`}>
        {cardsData[activeTab as keyof typeof cardsData].map((card, index) => (
          <div
            key={index}
            className={styles.card}
            style={{ backgroundImage: `url(${card.img})` }}
          >
            <div className={styles.overlay}>
              <h3>{card.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <button className={`${styles.button_final} button_dark`}>VER MAIS</button>
    
    </section>
  );
}
