"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { TESTIMONIALS } from "@/lib/constants";
import { ASSETS } from "@/lib/assets";
import { ArrowRight } from "@/components/ui/Icons";

import "swiper/css";

export default function Testimonials() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section
      id="kundröster"
      className="padding-global padding-section-large"
      style={{ backgroundColor: "var(--bg-secondary)" }}
      data-anim
    >
      <div className="container-large">
        <div className="flex flex-col" style={{ gap: "5rem" }}>
          {/* Header */}
          <div className="flex items-start justify-between flex-wrap gap-6">
            <div className="flex flex-col gap-6" style={{ maxWidth: "30rem" }}>
              <p className="text-label" style={{ textAlign: "left" }}>
                Kundröster
              </p>
              <h2
                className="font-heading whitespace-pre-line"
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                }}
              >
                {TESTIMONIALS.headline}
              </h2>
            </div>

            {/* Nav buttons */}
            <div className="hidden sm:flex items-center gap-4">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="flex items-center justify-center border"
                style={{
                  width: "3rem",
                  height: "3rem",
                  padding: "0.75rem",
                  borderColor: "var(--border-secondary)",
                  backgroundColor: "var(--dark-50)",
                  color: "var(--text-primary)",
                }}
                aria-label="Föregående"
              >
                <ArrowRight size={20} className="rotate-180" />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="flex items-center justify-center border"
                style={{
                  width: "3rem",
                  height: "3rem",
                  padding: "0.75rem",
                  borderColor: "var(--border-secondary)",
                  backgroundColor: "var(--dark-50)",
                  color: "var(--text-primary)",
                }}
                aria-label="Nästa"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Swiper */}
          <Swiper
            modules={[Navigation, Keyboard]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            slidesPerView={1}
            spaceBetween={0}
            keyboard={{ enabled: true, onlyInViewport: true }}
            className="w-full overflow-hidden"
          >
            {TESTIMONIALS.items.map((item, i) => (
              <SwiperSlide key={i} className="h-auto">
                <div className="grid w-full h-full gap-6 testimonial-card-grid">
                  {/* Image */}
                  <div className="overflow-hidden" style={{ minHeight: "34rem" }}>
                    <img
                      src={ASSETS.testimonials[i % ASSETS.testimonials.length]}
                      alt={item.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Content */}
                  <div
                    className="flex flex-col justify-between items-start p-6"
                    style={{
                      backgroundColor: "var(--bg-alternate)",
                      color: "var(--text-alternate)",
                      gap: "12rem",
                    }}
                  >
                    <div className="flex flex-col gap-6" style={{ maxWidth: "40rem" }}>
                      <p
                        className="text-label"
                        style={{ textAlign: "left", color: "var(--white-500)" }}
                      >
                        Kundrecension
                      </p>
                      <p
                        className="font-heading"
                        style={{
                          fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
                          lineHeight: 1.2,
                        }}
                      >
                        &ldquo;{item.quote}&rdquo;
                      </p>
                    </div>
                    {/* Author */}
                    <div className="flex items-center gap-6">
                      <img
                        src={ASSETS.testimonials[i % ASSETS.testimonials.length]}
                        alt={item.author}
                        className="shrink-0 object-cover"
                        style={{ width: "5rem", height: "5rem" }}
                      />
                      <div className="flex flex-col gap-1">
                        <p className="text-[0.875rem] font-medium">{item.author}</p>
                        <p className="text-[0.875rem]" style={{ color: "var(--white-700)" }}>
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
