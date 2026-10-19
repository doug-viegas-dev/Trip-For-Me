import styles from "./why.module.scss";
export default function Why() {
  return (
    <section className={styles.why_section} aria-label="Indicadores da Trip For Me">
      <div className={styles.why_features} role="list">
        <div className={styles.why_feature} role="listitem">
          <span id={styles.icon_feature_1} aria-hidden="true"></span>
          <p>+20 Anos de Experiência</p>
        </div>
        <div className={styles.why_feature} role="listitem">
          <span id={styles.icon_feature_2} aria-hidden="true"></span>
          <p>+40 Países Diferentes</p>
        </div>
        <div className={styles.why_feature} role="listitem">
          <span id={styles.icon_feature_3} aria-hidden="true"></span>
          <p>+300 Clientes Satisfeitos</p>
        </div>
        <div className={styles.why_feature} role="listitem">
          <span id={styles.icon_feature_4} aria-hidden="true"></span>
          <p>+80 Roteiros Feitos</p>
        </div>
      </div>
    </section>
  );
}
