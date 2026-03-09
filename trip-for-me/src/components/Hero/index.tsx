import styles from "./hero.module.scss";
export default function Hero() {
  return (
    <section className={styles.hero}>
      <video autoPlay muted loop poster="imgs/video-hero-poster.png" className={styles.video}>
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>
      <div className={styles.content_hero}>
        <h1 className={styles.title_hero}>
          DESCUBRA O MUNDO
          <br />
          DO SEU JEITO
        </h1>
        <h3 className={styles.heading_hero}>
          Experiências únicas para quem não aceita o comum.
        </h3>
        <div className={styles.cta_div}>
          <button className="button_light">EXPLORE NOSSOS PACOTES</button>
          <button className="button_dark">PLANEJE SUA VIAGEM</button>
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        scroll
      </div>
    </section>
  );
}
