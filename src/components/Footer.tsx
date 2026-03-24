import { FOOTER } from "@/lib/constants";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--bg-alternate)",
        color: "var(--text-alternate)",
      }}
    >
      <div className="padding-global padding-section-large">
        <div className="container-large">
          {/* footer_component */}
          <div className="flex flex-col">
            {/* footer_header - gap 4.5rem */}
            <div className="flex flex-col" style={{ gap: "4.5rem" }}>
              {/* Logo */}
              <a
                href="#"
                className="no-underline"
                style={{ width: "6rem", color: "var(--link-alternate)" }}
              >
                <span className="font-heading text-xl font-semibold">
                  H.A.B.
                </span>
              </a>

              {/* Top wrapper grid - 1fr 1fr → 1fr on mobile */}
              <div className="grid gap-8 footer-top-grid">
                {/* Left content - max-width 27.5rem */}
                <div
                  className="flex flex-col gap-6 items-start"
                  style={{ maxWidth: "27.5rem" }}
                >
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
                  <p
                    className="text-[0.875rem]"
                    style={{ color: "var(--white-500)", lineHeight: 1.5 }}
                  >
                    {FOOTER.description}
                  </p>
                  <a
                    href="#kontakt"
                    className="inline-flex items-center justify-center text-[0.875rem] font-medium no-underline px-6 py-3 border"
                    style={{
                      borderColor: "var(--border-alternate)",
                      color: "var(--link-alternate)",
                    }}
                    data-bezel=""
                  >
                    {FOOTER.cta}
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
            <div className="flex items-center justify-between gap-4 pt-6">
              <p
                className="text-[0.875rem]"
                style={{ color: "var(--white-500)" }}
              >
                {FOOTER.copyright}
              </p>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
