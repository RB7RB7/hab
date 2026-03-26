/**
 * Coded illustrations for the three service/feature sections.
 * Designed to match the clean, dark-on-light aesthetic of the site.
 */

const cardStyle: React.CSSProperties = {
  backgroundColor: "#fff",
  borderRadius: "0.75rem",
  padding: "1.25rem",
  boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.04)",
};

const labelStyle: React.CSSProperties = {
  fontSize: "0.625rem",
  fontWeight: 600,
  letterSpacing: "0.08em",
  textTransform: "uppercase" as const,
  color: "#999",
};

const valueStyle: React.CSSProperties = {
  fontSize: "1.5rem",
  fontWeight: 700,
  color: "#222",
  lineHeight: 1.2,
};

const smallText: React.CSSProperties = {
  fontSize: "0.75rem",
  color: "#888",
  lineHeight: 1.4,
};

/* ─── 1. Prospektering Pipeline Funnel ─── */
export function ProspektingIllustration() {
  const steps = [
    { label: "Målgrupp", count: "2 400", width: "100%", opacity: 1 },
    { label: "Kontaktade", count: "840", width: "78%", opacity: 0.85 },
    { label: "Kvalificerade", count: "310", width: "56%", opacity: 0.7 },
    { label: "Möten bokade", count: "128", width: "38%", opacity: 0.55 },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", width: "100%", maxWidth: "22rem" }}>
      {/* Header card */}
      <div style={cardStyle}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.25rem" }}>
          <span style={labelStyle}>Pipeline – Q1</span>
          <span style={{ fontSize: "0.625rem", color: "#22c55e", fontWeight: 600 }}>+34%</span>
        </div>
        <div style={valueStyle}>128 möten</div>
        <span style={smallText}>bokade med beslutsfattare</span>
      </div>

      {/* Funnel */}
      <div style={{ ...cardStyle, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <span style={labelStyle}>Prospekteringstratt</span>
        {steps.map((step) => (
          <div key={step.label} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  width: step.width,
                  height: "2rem",
                  backgroundColor: "#222",
                  opacity: step.opacity,
                  borderRadius: "0.25rem",
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: "0.625rem",
                }}
              >
                <span style={{ fontSize: "0.6875rem", color: "#fff", fontWeight: 500 }}>{step.label}</span>
              </div>
            </div>
            <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#222", minWidth: "2.5rem", textAlign: "right" }}>
              {step.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── 2. Lead Hantering & Closing Dashboard ─── */
export function LeadClosingIllustration() {
  const leads = [
    { name: "Andersson & Co", status: "Förhandling", score: 92, color: "#22c55e" },
    { name: "NordTech AB", status: "Offert skickad", score: 78, color: "#eab308" },
    { name: "Bygg & Montage", status: "Uppföljning", score: 65, color: "#eab308" },
    { name: "FastService Syd", status: "Ny lead", score: 41, color: "#999" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", width: "100%", maxWidth: "22rem" }}>
      {/* Stats row */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
        <div style={cardStyle}>
          <span style={labelStyle}>Konvertering</span>
          <div style={{ ...valueStyle, marginTop: "0.125rem" }}>38%</div>
          <span style={{ fontSize: "0.625rem", color: "#22c55e", fontWeight: 600 }}>↑ 12% denna månad</span>
        </div>
        <div style={cardStyle}>
          <span style={labelStyle}>Snittid till avslut</span>
          <div style={{ ...valueStyle, marginTop: "0.125rem" }}>14 d</div>
          <span style={{ fontSize: "0.625rem", color: "#22c55e", fontWeight: 600 }}>↓ 6 dagar</span>
        </div>
      </div>

      {/* Lead list */}
      <div style={{ ...cardStyle, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
        <span style={labelStyle}>Aktiva leads</span>
        {leads.map((lead) => (
          <div
            key={lead.name}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0.5rem 0",
              borderBottom: "1px solid #f0f0f0",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "0.125rem" }}>
              <span style={{ fontSize: "0.8125rem", fontWeight: 600, color: "#222" }}>{lead.name}</span>
              <span style={{ fontSize: "0.6875rem", color: "#999" }}>{lead.status}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              {/* Score bar */}
              <div style={{ width: "3rem", height: "0.375rem", backgroundColor: "#f0f0f0", borderRadius: "1rem" }}>
                <div
                  style={{
                    width: `${lead.score}%`,
                    height: "100%",
                    backgroundColor: lead.color,
                    borderRadius: "1rem",
                  }}
                />
              </div>
              <span style={{ fontSize: "0.6875rem", fontWeight: 600, color: "#222" }}>{lead.score}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── 3. Strategi & Säljträning Growth Chart ─── */
export function StrategiIllustration() {
  // Simple bar chart data (monthly revenue growth)
  const months = [
    { label: "Jan", before: 30, after: 30 },
    { label: "Feb", before: 32, after: 38 },
    { label: "Mar", before: 28, after: 48 },
    { label: "Apr", before: 35, after: 62 },
    { label: "Maj", before: 30, after: 75 },
    { label: "Jun", before: 33, after: 90 },
  ];

  const maxVal = 100;

  const milestones = [
    "Försäljningsanalys genomförd",
    "Ny strategi implementerad",
    "Säljträning slutförd",
    "Team presterar självständigt",
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", width: "100%", maxWidth: "22rem" }}>
      {/* Growth chart card */}
      <div style={cardStyle}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.75rem" }}>
          <span style={labelStyle}>Försäljningstillväxt</span>
          <span style={{ fontSize: "0.625rem", color: "#22c55e", fontWeight: 600 }}>+187%</span>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: "0.5rem", height: "8rem" }}>
          {months.map((m) => (
            <div key={m.label} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "0.25rem", height: "100%" }}>
              <div style={{ flex: 1, display: "flex", alignItems: "flex-end", gap: "0.125rem", width: "100%" }}>
                <div
                  style={{
                    flex: 1,
                    height: `${(m.before / maxVal) * 100}%`,
                    backgroundColor: "#e0e0e0",
                    borderRadius: "0.1875rem 0.1875rem 0 0",
                    minHeight: "0.25rem",
                  }}
                />
                <div
                  style={{
                    flex: 1,
                    height: `${(m.after / maxVal) * 100}%`,
                    backgroundColor: "#222",
                    borderRadius: "0.1875rem 0.1875rem 0 0",
                    minHeight: "0.25rem",
                  }}
                />
              </div>
              <span style={{ fontSize: "0.5625rem", color: "#999" }}>{m.label}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: "1rem", marginTop: "0.75rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
            <div style={{ width: "0.5rem", height: "0.5rem", backgroundColor: "#e0e0e0", borderRadius: "0.125rem" }} />
            <span style={{ fontSize: "0.625rem", color: "#999" }}>Före</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
            <div style={{ width: "0.5rem", height: "0.5rem", backgroundColor: "#222", borderRadius: "0.125rem" }} />
            <span style={{ fontSize: "0.625rem", color: "#999" }}>Efter H.A.B.</span>
          </div>
        </div>
      </div>

      {/* Milestones */}
      <div style={{ ...cardStyle, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <span style={labelStyle}>Milstolpar</span>
        {milestones.map((m, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
            <div
              style={{
                width: "1.25rem",
                height: "1.25rem",
                borderRadius: "50%",
                backgroundColor: "#222",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                <path d="M3 8.5L6.5 12L13 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span style={{ fontSize: "0.75rem", color: "#444", lineHeight: 1.3 }}>{m}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
