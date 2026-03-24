import { STATS } from "@/lib/constants";

export default function WhyChooseUs() {
  return (
    <section
      id="resultat"
      className="padding-global padding-section-large"
      data-anim
    >
      <div className="container-large">
        {/* Stats component - gap 5rem */}
        <div className="flex flex-col gap-20">
          {/* Header - centered, max-width 35rem */}
          <div
            className="flex flex-col items-center self-center gap-6 text-center"
            style={{ maxWidth: "35rem" }}
          >
            <h2
              className="font-heading whitespace-pre-line"
              style={{
                fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              {STATS.headline}
            </h2>
            <p style={{ color: "var(--text-secondary)" }}>
              {STATS.subtitle}
            </p>
            {/* Star rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center" style={{ width: "6.25rem" }}>
                {[0, 1, 2, 3, 4].map((i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="var(--swatch--dark)">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-[0.875rem]" style={{ color: "var(--text-secondary)" }}>
                {STATS.rating}
              </p>
            </div>
          </div>

          {/* Stats grid - auto-fit minmax(18rem, 1fr) gap 16px */}
          <div
            className="grid gap-4"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 18rem), 1fr))",
            }}
            data-anim-stagger
          >
            {STATS.items.map((item) => (
              <div
                key={item.title}
                className="flex flex-col justify-between items-start p-6"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  gap: "3rem",
                }}
              >
                {/* Top */}
                <div className="flex flex-col gap-2">
                  <p className="text-label" style={{ textAlign: "left" }}>
                    {item.label}
                  </p>
                  <p
                    className="text-[0.875rem]"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {item.description}
                  </p>
                </div>
                {/* Bottom */}
                <div className="flex flex-col gap-4">
                  <div
                    className="font-heading"
                    style={{
                      fontSize: "clamp(2.25rem, 5vw, 4.5rem)",
                      lineHeight: 1,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {item.number}
                  </div>
                  <p className="font-medium" style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)", lineHeight: 1.2 }}>
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
