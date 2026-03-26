"use client";

import { useState } from "react";
import { NAV_LINKS, BANNER } from "@/lib/constants";
import { Menu, XMark } from "@/components/ui/Icons";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-[9999]" style={{ backgroundColor: "var(--bg-secondary)" }}>
      {/* navbar_component */}
      <div
        style={{
          borderBottom: "1px solid var(--border-primary)",
          backgroundColor: "var(--bg-secondary)",
          display: "flex",
          alignItems: "center",
          width: "100%",
          minHeight: "4.5rem",
          padding: "1rem var(--padding-global)",
        }}
      >
        {/* navbar_container */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            maxWidth: "88rem",
            height: "100%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {/* Logo */}
          <a
            href="/"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "3rem",
              paddingLeft: 0,
              color: "var(--link-primary)",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            <span className="font-heading" style={{ fontSize: "1.25rem", fontWeight: 600, letterSpacing: "-0.02em" }}>
              H.A.B Sales Invest
            </span>
          </a>

          {/* navbar_menu (desktop) */}
          <div className="desktop-menu" style={{ alignItems: "center", display: "flex", flex: 1 }}>
            {/* navbar_menu-links */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize: "0.875rem",
                    padding: "0.25rem 0.75rem",
                    textDecoration: "none",
                    color: "var(--text-primary)",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Spacer */}
            <div style={{ flex: 1 }} />

            {/* navbar_menu-buttons */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginLeft: "1rem" }}>
              <a
                href="#kontakt"
                style={{
                  fontSize: "0.875rem",
                  padding: "0.25rem 0.75rem",
                  textDecoration: "none",
                  color: "var(--text-primary)",
                }}
              >
                Kontakt
              </a>
              <a
                href="#kontakt"
                data-bezel=""
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  textDecoration: "none",
                  padding: "0.75rem 1.5rem",
                  backgroundColor: "var(--swatch--dark)",
                  color: "var(--swatch--white)",
                }}
              >
                Kom igång
              </a>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="mobile-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Meny"
            style={{ padding: 0, color: "var(--text-primary)", background: "none", border: "none" }}
          >
            {menuOpen ? <XMark size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`mobile-nav-menu ${menuOpen ? "is-open" : ""}`}
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        <div style={{ padding: "1.25rem var(--padding-global)", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: "0.875rem", textDecoration: "none", color: "var(--text-primary)", padding: "0.25rem 0" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.875rem",
              fontWeight: 500,
              textDecoration: "none",
              padding: "0.75rem 1.5rem",
              marginTop: "0.5rem",
              backgroundColor: "var(--swatch--dark)",
              color: "var(--swatch--white)",
            }}
          >
            Kom igång
          </a>
        </div>
      </div>

      {/* Banner - below navbar, sticky together */}
      <div
        className="border-b flex flex-col items-center justify-center py-4"
        style={{
          borderColor: "var(--border-primary)",
          backgroundColor: "var(--bg-secondary)",
        }}
      >
        <div className="padding-global">
          <div className="flex items-center justify-center gap-2">
            <div
              className="w-2 h-2 shrink-0"
              style={{ backgroundColor: "var(--swatch--dark)" }}
            />
            <p className="text-label">{BANNER.text}</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
