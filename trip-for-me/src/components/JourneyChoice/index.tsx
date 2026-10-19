"use client";

import {
  type KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";
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
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const panelsRef = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const panels = panelsRef.current.filter(
      (panel): panel is HTMLElement => panel !== null,
    );
    let animationFrame: number | null = null;
    let activePanel: HTMLElement | null = null;

    if (!section || !title || panels.length === 0) {
      return;
    }

    const clamp = (value: number) => Math.min(1, Math.max(0, value));
    const revealProgress = (value: number, start: number, end: number) =>
      clamp((value - start) / (end - start));
    const setReveal = (element: HTMLElement, progress: number) => {
      element.style.setProperty("--journey-reveal", String(progress));
      element.style.setProperty(
        "--journey-reveal-offset",
        `${(1 - progress) * 24}px`,
      );
    };
    const getLayoutRect = (element: HTMLElement) => {
      const rect = element.getBoundingClientRect();
      const isInteraction = element.matches(
        ":hover, :focus-visible, .panelActive",
      );
      const revealOffset = isInteraction
        ? 0
        : Number.parseFloat(
            element.style.getPropertyValue("--journey-reveal-offset"),
          ) || 0;

      return {
        bottom: rect.bottom - revealOffset,
        height: rect.height,
        top: rect.top - revealOffset,
      };
    };
    const positionProgress = (top: number, viewportHeight: number) =>
      clamp((viewportHeight - top) / viewportHeight);
    const mobilePositionProgress = (top: number, viewportHeight: number) =>
      clamp((viewportHeight - top) / (viewportHeight * 0.7));

    const updateActivePanel = () => {
      animationFrame = null;

      if (reducedMotionQuery.matches) {
        setReveal(title, 1);
        panels.forEach((panel) => setReveal(panel, 1));
      } else {
        const viewportHeight = window.innerHeight;
        const sectionProgress = positionProgress(
          section.getBoundingClientRect().top,
          viewportHeight,
        );
        setReveal(title, revealProgress(sectionProgress, 0, 0.28));
        panels.forEach((panel, index) => {
          const start = 0.18 + index * 0.12;
          const sequenceProgress = revealProgress(
            sectionProgress,
            start,
            start + 0.34,
          );
          const panelProgress =
            mobileQuery.matches &&
            (sectionProgress < 1 || index === panels.length - 1)
              ? Math.min(
                  sequenceProgress,
                  mobilePositionProgress(
                    getLayoutRect(panel).top,
                    viewportHeight,
                  ),
                )
              : sequenceProgress;

          setReveal(panel, panelProgress);
        });
      }

      if (mobileQuery.matches && !reducedMotionQuery.matches) {
        const viewportCenter = window.innerHeight / 2;
        const measurements = panels.map((panel) => {
          const rect = getLayoutRect(panel);
          const center = rect.top + rect.height / 2;

          return {
            distance: Math.abs(center - viewportCenter),
            panel,
            rect,
          };
        });
        const nearestMeasurement = measurements
          .filter(
            ({ rect }) =>
              rect.bottom >= viewportCenter - window.innerHeight * 0.22 &&
              rect.top <= viewportCenter + window.innerHeight * 0.22,
          )
          .sort((first, second) => first.distance - second.distance)[0];
        const nearest = nearestMeasurement?.panel;
        const current = activePanel
          ? measurements.find(({ panel }) => panel === activePanel)
          : null;
        const currentIsRetained =
          current &&
          current.rect.bottom >= viewportCenter - window.innerHeight * 0.32 &&
          current.rect.top <= viewportCenter + window.innerHeight * 0.32;
        const nextPanel =
          currentIsRetained &&
          (!nearestMeasurement ||
            current.distance <=
              nearestMeasurement.distance + window.innerHeight * 0.08)
            ? activePanel
            : (nearest ?? null);

        if (nextPanel !== activePanel) {
          activePanel?.removeAttribute("data-journey-in-view");
          nextPanel?.setAttribute("data-journey-in-view", "true");
          activePanel = nextPanel;
        }
      } else if (activePanel) {
        activePanel.removeAttribute("data-journey-in-view");
        activePanel = null;
      }
    };

    const scheduleUpdate = () => {
      if (animationFrame === null) {
        animationFrame = window.requestAnimationFrame(updateActivePanel);
      }
    };

    const disconnect = () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      reducedMotionQuery.removeEventListener("change", scheduleUpdate);

      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
        animationFrame = null;
      }

      activePanel?.removeAttribute("data-journey-in-view");
      activePanel = null;
    };

    section.classList.add(styles.revealReady);
    setReveal(title, reducedMotionQuery.matches ? 1 : 0);
    panels.forEach((panel) => setReveal(panel, reducedMotionQuery.matches ? 1 : 0));
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    reducedMotionQuery.addEventListener("change", scheduleUpdate);
    scheduleUpdate();

    return () => {
      disconnect();
      section.classList.remove(styles.revealReady);
    };
  }, []);

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
      ref={sectionRef}
      className={styles.section}
      aria-labelledby="journey-choice-title"
    >
      <div className={styles.inner}>
        <h2 ref={titleRef} id="journey-choice-title">
          ESCOLHA SUA JORNADA
        </h2>

        <div className={styles.grid}>
          {journeys.map((journey, index) => {
            const titleId = `journey-${journey.id}-title`;
            const descriptionId = `journey-${journey.id}-description`;
            const isSelected = journey.id === selectedJourneyId;

            return (
              <article
                key={journey.id}
                ref={(panel) => {
                  panelsRef.current[index] = panel;
                }}
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
