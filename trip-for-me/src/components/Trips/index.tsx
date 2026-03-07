import styles from "./trips.module.scss";
const tripsData = {
  estilo: [
    {
      title: "Coreia do Sul, onde o legado encontra a inovação",
      heading:
        "Uma imersão pela vanguarda de Seul e o silêncio dos templos sob as cores do outono.",
      img: "/imgs/trip-coreia.jpg",
      duration: "15 dias",
    },
    {
      title: "Buenos Aires: a essência da alma portenha",
      heading:
        "O clima ideal para explorar cortes premium e vinhos premiados com exclusividade e conforto.",
      img: "/imgs/trip-buenos-aires.jpg",
      duration: "6 dias",
    },
    {
      title: "Turquia: história, cores e aventuras",
      heading:
        "Logística impecável para vivenciar o balonismo e os mercados históricos na luz da primavera.",
      img: "/imgs/trip-turquia.jpg",
      duration: "6 dias",
    },
  ],
};

export default function Trips() {
  return (
    <section className={styles.trips_section}>
      <div className={styles.trips_overlay}></div>
      <div className={styles.trips_heading}>
        <h2>FORA DO RADAR</h2>
        <h6>
          Roteiros desenhados para quem busca o luxo do isolamento e a
          autenticidade de lugares pouco explorados.
        </h6>
      </div>
      <div className={styles.trips_grid}>
        {tripsData.estilo.map((trip, index) => (
          <div
            key={index}
            className={styles.trip_card}
            style={{ backgroundImage: `url(${trip.img})` }}
          >
            <p className={styles.trip_duration}>{trip.duration}</p>
            <h3 className={styles.trip_title}>{trip.title}</h3>
            <p className={styles.trip_heading}>{trip.heading}</p>
            <div className={styles.card_overlay}></div>
            <button className={`${styles.button_trip} button_light`}>VER MAIS</button>
          </div>
        ))}
      </div>
    </section>
  );
}
