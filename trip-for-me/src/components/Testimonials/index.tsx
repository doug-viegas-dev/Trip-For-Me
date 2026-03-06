"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import styles from "./testimonials.module.scss";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Ana Silva",
    text: "A viagem dos meus sonhos! Organização impecável.",
    role: "Viajante",
  },
  {
    id: 2,
    name: "Bruno Costa",
    text: "Melhor suporte que já tive em agências de turismo.",
    role: "Nômade Digital",
  },
  {
    id: 3,
    name: "Carla Souza",
    text: "Roteiros exclusivos que não achei em nenhum outro lugar.",
    role: "Aventureira",
  },
  {
    id: 4,
    name: "Ana Silva",
    text: "A viagem dos meus sonhos! Organização impecável.",
    role: "Viajante",
  },
  {
    id: 5,
    name: "Bruno Costa",
    text: "Melhor suporte que já tive em agências de turismo.",
    role: "Nômade Digital",
  },
  {
    id: 6,
    name: "Carla Souza",
    text: "Roteiros exclusivos que não achei em nenhum outro lugar.",
    role: "Aventureira",
  },
];

export default function Testimonials() {
  return (
  <section className={styles.testimonial_section}>
    <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={3} // Mobile
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        breakpoints={{
          768: { slidesPerView: 2 }, // Tablet
          1024: { slidesPerView: 3 } // Desktop
        }}
        className={styles.mySwiper}
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <div className={styles.card}>
              <p>&quot;{item.text}&quot;</p>
              <div className={styles.author}>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
  </section>
  )
}
