import { FEATURES } from "@/lib/constants";
import {
  ProspektingIllustration,
  LeadClosingIllustration,
  StrategiIllustration,
} from "@/components/ui/FeatureIllustrations";

const featureIllustrations = [
  <ProspektingIllustration key="prospekting" />,
  <LeadClosingIllustration key="leads" />,
  <StrategiIllustration key="strategi" />,
];

export default function Services() {
  return (
    <section id="tjanster">
      {FEATURES.map((item, i) => (
        <div
          key={item.title}
          className="padding-global padding-section-large"
          data-anim
        >
          <div className="container-large">
            <div
              className={`grid gap-6 feature-grid ${item.reverse ? "is-reverse" : ""}`}
            >
              {/* Content side */}
              <div
                className={`flex flex-col gap-6 justify-center items-start ${
                  item.reverse ? "order-2 lg:order-2" : "order-2 lg:order-1"
                }`}
              >
                <div style={{ width: "80%", maxWidth: "100%" }}>
                  <h2
                    className="font-heading whitespace-pre-line mb-6"
                    style={{
                      fontSize: "clamp(1.75rem, 3vw, 2.75rem)",
                      lineHeight: 1.1,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {item.title}
                  </h2>
                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.5 }}>
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Illustration side */}
              <div
                className={`flex items-center justify-center overflow-hidden ${
                  item.reverse ? "order-1 lg:order-1" : "order-1 lg:order-2"
                }`}
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  minHeight: "36rem",
                  padding: "2rem",
                }}
              >
                {featureIllustrations[i]}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
