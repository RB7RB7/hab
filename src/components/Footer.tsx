import { FOOTER } from "@/lib/constants";
import { ArrowRight } from "@/components/ui/Icons";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--bg-alternate)",
        color: "var(--text-alternate)",
      }}
    >
      <div className="padding-global" style={{ paddingTop: "5rem", paddingBottom: "2rem" }}>
        <div className="container-large">
          {/* footer_component */}
          <div className="flex flex-col">
            {/* footer_header - gap 4.5rem */}
            <div className="flex flex-col" style={{ gap: "4.5rem" }}>
              {/* Logo */}
              <a
                href="/"
                className="no-underline"
                style={{ color: "var(--link-alternate)" }}
              >
                <span className="font-heading text-xl font-semibold" style={{ whiteSpace: "nowrap" }}>
                  H.A.B Sales Invest
                </span>
              </a>

              {/* Top wrapper grid - 1fr 1fr → 1fr on mobile */}
              <div className="grid gap-8 footer-top-grid items-start">
                {/* Left content - heading */}
                <div className="flex flex-col gap-6 items-start">
                  <h2
                    className="font-heading whitespace-pre-line"
                    style={{
                      fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
                      lineHeight: 1.1,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {FOOTER.heading}
                  </h2>
                </div>
                {/* Right content - description & CTA */}
                <div
                  className="flex flex-col gap-6 items-start"
                  style={{ maxWidth: "30rem" }}
                >
                  <p
                    className="text-[0.875rem]"
                    style={{ color: "var(--white-500)", lineHeight: 1.5 }}
                  >
                    {FOOTER.description}
                  </p>
                  <a
                    href="#kontakt"
                    className="inline-flex items-center gap-3 text-[0.875rem] font-medium no-underline px-6 py-3"
                    style={{
                      backgroundColor: "var(--swatch--white)",
                      color: "var(--swatch--dark)",
                    }}
                    data-bezel=""
                  >
                    {FOOTER.cta}
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Menu wrapper */}
            <div
              className="grid gap-8 border-t border-b"
              style={{
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(min(100%, 8rem), 1fr))",
                borderColor: "var(--border-alternate)",
                marginTop: "4.5rem",
                paddingTop: "2.5rem",
                paddingBottom: "2.5rem",
              }}
            >
              {FOOTER.columns.map((col) => (
                <div
                  key={col.title}
                  className="flex flex-col gap-6 items-start"
                >
                  <p
                    className="text-label"
                    style={{ textAlign: "left", color: "var(--white-500)" }}
                  >
                    {col.title}
                  </p>
                  <div className="flex flex-col" style={{ gap: "0.75rem" }}>
                    {col.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="text-[0.875rem] font-medium no-underline"
                        style={{
                          color: "var(--white-500)",
                          lineHeight: 1.2,
                        }}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Credit */}
            <div className="flex items-center justify-between flex-wrap gap-4 pt-6">
              <p
                className="text-[0.875rem]"
                style={{ color: "var(--white-500)" }}
              >
                {FOOTER.copyright}
              </p>
              <div
                className="flex flex-wrap gap-x-6 gap-y-1 text-[0.8125rem]"
                style={{ color: "var(--white-500)" }}
              >
                <span>Org.nr 559459-3534</span>
                <span>Krusegatan 19, 212 25 Malmö</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
