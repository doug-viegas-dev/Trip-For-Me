import styles from "./ready.module.scss";

export default function Ready() {
    return (
        <section className={styles.ready_section}>
                <h2>PRONTO PARA DESCOBRIR O INEXPLORADO?</h2>
                <button className="button_dark">COMEÇAR AGORA</button>
        </section>
    )
}