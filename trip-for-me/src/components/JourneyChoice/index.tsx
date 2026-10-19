"use client";

import { type KeyboardEvent, useState } from "react";
import styles from "./journeyChoice.module.scss";

const journeys = [
  {
    id: "curadoria",
    title: "CURADORIA COMPLETA",
    titleLines: ["CURADORIA", "COMPLETA"],
    description: "Planejamento personalizado realizado pela Trip For Me.",
    image: "/imgs/trip-coreia.jpg",
  },
  {
    id: "monte",
    title: "MONTE SUA VIAGEM",
    titleLines: ["MONTE SUA", "VIAGEM"],
    description: "Jornada com maior autonomia de escolha e combinação.",
    image: "/imgs/top-solo.jpg",
  },
  {
    id: "avulsos",
    title: "SERVIÇOS AVULSOS",
    titleLines: ["SERVIÇOS", "AVULSOS"],
    description: "Contratação de serviços específicos de viagem.",
    image: "/imgs/trip-buenos-aires.jpg",
  },
];

export default function JourneyChoice() {
  const [selectedJourneyId, setSelectedJourneyId] = useState<string | null>(
    null,
  );

  function selectJourney(id: string) {
    setSelectedJourneyId(id);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLElement>, id: string) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      selectJourney(id);
    }
  }

  return (
    <section
      className={styles.section}
      aria-labelledby="journey-choice-title"
    >
      <div className={styles.inner}>
        <h2 id="journey-choice-title">ESCOLHA SUA JORNADA</h2>

        <div className={styles.grid}>
          {journeys.map((journey) => {
            const titleId = `journey-${journey.id}-title`;
            const descriptionId = `journey-${journey.id}-description`;
            const isSelected = journey.id === selectedJourneyId;

            return (
              <article
                key={journey.id}
                className={`${styles.panel} ${
                  isSelected ? styles.panelActive : ""
                }`}
                role="button"
                tabIndex={0}
                aria-labelledby={titleId}
                aria-describedby={descriptionId}
                aria-pressed={isSelected}
                onClick={() => selectJourney(journey.id)}
                onKeyDown={(event) => handleKeyDown(event, journey.id)}
              >
                <div
                  className={styles.image}
                  style={{ backgroundImage: `url("${journey.image}")` }}
                  aria-hidden="true"
                />
                <div className={styles.overlay} aria-hidden="true" />
                <div className={styles.content}>
                  <h3 id={titleId}>
                    {journey.titleLines.map((line, index) => (
                      <span key={line}>
                        {index > 0 ? " " : ""}
                        {line}
                      </span>
                    ))}
                  </h3>
                  <div className={styles.descriptionReveal}>
                    <p id={descriptionId} className={styles.panelDescription}>
                      {journey.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
