/* eslint-disable react/no-unescaped-entities */
import styles from "./about.module.scss";
export default function About() {
  return (
    <section className={styles.about}>
      <h2>O PADRÃO TRIP FOR ME</h2>
      <article className={styles.text_about}>
        <p>
          A Trip For Me nasceu de uma transição natural: o que era hábito
          pessoal tornou-se especialidade técnica. Identificamos um vazio
          latente no mercado de turismo. Em um cenário saturado por informações
          superficiais e fórmulas genéricas de economia, percebemos que faltava
          o essencial: a curadoria fundamentada e a logística impecável. Para o
          viajante que valoriza o tempo e a substância, as promessas de
          "segredos mágicos" de internet não são suficientes.
        </p>
        <p>
          Nossa agência surge como a antítese do movimento de massa.
          Substituímos o ruído dos "caça-likes" por fontes de informação
          qualificadas e um método de organização rigoroso. Acreditamos que a
          verdadeira sofisticação reside na funcionalidade — é o luxo de
          explorar o novo com a certeza absoluta de um retorno confortável, um
          transfer pontual e uma cama impecável ao final do dia.{" "}
        </p>
        <p>
          Não vendemos apenas destinos; entregamos a rede de segurança
          necessária para que a sua única ocupação seja a apreciação do
          extraordinário. Somos obcecados pelos detalhes invisíveis, aqueles que
          garantem que sua jornada seja fluida, profunda e, acima de tudo,
          segura.
        </p>
        <p>Pronto para elevar o seu padrão de viagem? Fale conosco.</p>
      </article>

      <button className="button_dark">ENTRE EM CONTATO</button>
    </section>
  );
}
