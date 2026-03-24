import { COMPARISON } from "@/lib/constants";
import { Check, XMark } from "@/components/ui/Icons";
import FacePile from "@/components/ui/FacePile";

function CellValue({ value }: { value: boolean | string }) {
  if (typeof value === "boolean") {
    return value ? (
      <div className="flex items-center justify-center w-6 h-6">
        <Check size={20} style={{ color: "var(--swatch--white)" }} />
      </div>
    ) : (
      <div className="flex items-center justify-center w-6 h-6">
        <XMark size={20} style={{ color: "var(--white-500)" }} />
      </div>
    );
  }
  return (
    <span style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)" }}>{value}</span>
  );
}

export default function Comparison() {
  return (
    <section
      id="varfor"
      className="padding-global padding-section-large"
      style={{
        backgroundColor: "var(--bg-alternate)",
        color: "var(--text-alternate)",
      }}
    >
      <div className="container-large">
        {/* comparison_component - gap 5rem */}
        <div className="flex flex-col" style={{ gap: "5rem" }}>
          {/* Header - centered, max-width 35rem */}
          <div
            className="flex flex-col gap-6 self-center text-center"
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
              {COMPARISON.headline}
            </h2>
          </div>

          {/* Table */}
          <div data-anim className="overflow-x-auto">
            {/* Header row */}
            <div
              className="comparison-row"
              style={{ borderBottom: "1px solid var(--white-100)" }}
            >
              <div />
              <div className="flex items-center gap-2">
                <div
                  className="flex items-center justify-center shrink-0"
                  style={{
                    width: "1.25rem",
                    height: "1.25rem",
                    backgroundColor: "var(--swatch--white)",
                  }}
                >
                  <span
                    className="text-[0.5rem] font-bold"
                    style={{ color: "var(--swatch--dark)" }}
                  >
                    H
                  </span>
                </div>
                <span
                  className="font-heading font-medium"
                  style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)" }}
                >
                  H.A.B.
                </span>
              </div>
              <div>
                <span
                  style={{
                    color: "var(--white-500)",
                    fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                  }}
                >
                  Konkurrent
                </span>
              </div>
            </div>

            {/* Data rows */}
            {COMPARISON.rows.map((row) => (
              <div
                key={row.feature}
                className="comparison-row"
                style={{ borderBottom: "1px solid var(--white-100)" }}
              >
                <div
                  style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)" }}
                >
                  {row.feature}
                </div>
                <div>
                  <CellValue value={row.hab} />
                </div>
                <div>
                  <CellValue value={row.competitor} />
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center justify-center gap-4 self-center">
            <FacePile count={3} dark />
            <p
              className="text-[0.875rem]"
              style={{ color: "var(--white-700)" }}
            >
              Anslut dig till 100+ företag
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}
