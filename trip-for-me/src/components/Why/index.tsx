import styles from "./why.module.scss";
export default function Why() {
  return (
    <section className={styles.why_section}>
      <h2>Por que a Trip For Me?</h2>
      <div className={styles.why_features}>
        <div className={styles.why_feature}>
          <span id={styles.icon_feature_1}></span>
          <p>+20 Anos de Experiência</p>
        </div>
        <div className={styles.why_feature}>
          <span id={styles.icon_feature_2}></span>
          <p>+40 Países Diferentes</p>
        </div>
        <div className={styles.why_feature}>
          <span id={styles.icon_feature_3}></span>
          <p>+300 Clientes Satisfeitos</p>
        </div>
        <div className={styles.why_feature}>
          <span id={styles.icon_feature_4}></span>
          <p>+80 Roteiros Feitos</p>
        </div>
      </div>
    </section>
  );
}
