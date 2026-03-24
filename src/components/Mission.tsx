import { FOUNDATION } from "@/lib/constants";

export default function Mission() {
  return (
    <section
      className="padding-global padding-section-large"
      style={{ backgroundColor: "var(--bg-primary)" }}
      data-anim
    >
      <div className="container-large">
        <div className="container-medium">
          <p
            className="font-heading text-center"
            style={{
              fontSize: "clamp(1.5rem, 3vw + 0.25rem, 2.75rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            {FOUNDATION.text}
          </p>
        </div>
      </div>
    </section>
  );
}
