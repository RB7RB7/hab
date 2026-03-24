"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/constants";
import FacePile from "@/components/ui/FacePile";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="padding-global padding-section-large" data-anim>
      <div className="container-large">
        {/* faq_component - gap 5rem */}
        <div className="flex flex-col gap-20">
          {/* Header - left aligned, max-width 32rem */}
          <div className="flex flex-col gap-6 items-start" style={{ maxWidth: "32rem" }}>
            <p className="text-label" style={{ textAlign: "left" }}>
              Vanliga frågor
            </p>
            <h2
              className="font-heading"
              style={{
                fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Tydliga svar på vanliga frågor.
            </h2>
          </div>

          {/* FAQ list grid - gap 1rem */}
          <div className="grid gap-4" style={{ gridTemplateColumns: "100%" }}>
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className="flex flex-col overflow-hidden"
                  style={{ borderBottom: "1px solid var(--border-primary)" }}
                >
                  {/* Question - padding 1.25rem right 1.5rem */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex items-center justify-between gap-6 text-left w-full"
                    style={{ padding: "1.25rem 1.5rem 1.25rem 0" }}
                  >
                    <span
                      className="font-medium"
                      style={{
                        fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                        lineHeight: 1.2,
                      }}
                    >
                      {item.question}
                    </span>
                    <div
                      className="shrink-0 flex"
                      style={{ width: "1.25rem", alignSelf: "flex-start" }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        style={{
                          transition: "transform 0.3s var(--ease)",
                          transform: isOpen ? "rotate(45deg)" : "rotate(0)",
                        }}
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </div>
                  </button>
                  {/* Answer */}
                  <div className={`faq-content ${isOpen ? "is-open" : ""}`}>
                    <div>
                      <p
                        className="text-[0.9375rem]"
                        style={{
                          color: "var(--text-secondary)",
                          paddingRight: "1.5rem",
                          paddingBottom: "1.25rem",
                          lineHeight: 1.5,
                        }}
                      >
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="self-start">
            <div className="flex items-center gap-4">
              <FacePile count={3} label="Fler frågor? Kontakta oss." />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
