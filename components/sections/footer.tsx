import { broker } from "@/lib/broker-data";
import { Share2, Globe } from "lucide-react";

const zonas = ["Country Club", "Cholul", "Conkal", "Norte de Mérida", "Gran Santa Fe"];

export default function Footer() {
  const año = 2026;

  return (
    <footer
      style={{
        background: "#0f0f0f",
        borderTop: "1px solid var(--color-border)",
        paddingTop: "var(--space-2xl)",
        paddingBottom: "var(--space-xl)",
        paddingLeft: "var(--space-md)",
        paddingRight: "var(--space-md)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--container)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "var(--space-2xl)",
          marginBottom: "var(--space-2xl)",
        }}
      >
        {/* Col 1 — Identidad */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-sm)" }}>
          <p
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "22px",
              color: "var(--color-text)",
              margin: 0,
              fontWeight: 700,
            }}
          >
            {broker.name}
          </p>
          <p style={{ color: "var(--color-muted)", fontSize: "14px", margin: 0 }}>
            Broker Inmobiliario · Mérida
          </p>
          <p style={{ color: "var(--color-subtle)", fontSize: "13px", margin: "var(--space-sm) 0 0", lineHeight: 1.6 }}>
            Especialista en residencial y lujo en la zona norte de Mérida, Yucatán.
          </p>
        </div>

        {/* Col 2 — Contacto */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-sm)" }}>
          <p style={headingStyle}>Contacto</p>
          <a
            href={`https://wa.me/${broker.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            WhatsApp
          </a>
          <a href={`mailto:${broker.email}`} style={linkStyle}>
            {broker.email}
          </a>
          <div style={{ display: "flex", gap: "var(--space-md)", marginTop: "var(--space-sm)" }}>
            <a href={broker.socials.instagram} target="_blank" rel="noopener noreferrer" style={iconLinkStyle} aria-label="Instagram">
              <Share2 size={18} strokeWidth={1.5} />
            </a>
            <a href={broker.socials.facebook} target="_blank" rel="noopener noreferrer" style={iconLinkStyle} aria-label="Facebook">
              <Globe size={18} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Col 3 — Zonas */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-sm)" }}>
          <p style={headingStyle}>Zonas</p>
          {zonas.map((z) => (
            <span key={z} style={{ color: "var(--color-muted)", fontSize: "14px" }}>{z}</span>
          ))}
        </div>
      </div>

      {/* Banda inferior */}
      <div
        style={{
          maxWidth: "var(--container)",
          margin: "0 auto",
          paddingTop: "var(--space-lg)",
          borderTop: "1px solid var(--color-border)",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "var(--space-sm)",
        }}
      >
        <p style={{ color: "var(--color-subtle)", fontSize: "13px", margin: 0 }}>
          © {año} Carlos Mendoza · Desarrollado por{" "}
          <a
            href="https://byklai.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--color-accent)", textDecoration: "none", fontWeight: 600 }}
          >
            Byklai
          </a>
        </p>
        <p style={{ color: "var(--color-subtle)", fontSize: "13px", margin: 0 }}>
          Mérida, Yucatán · México
        </p>
      </div>
    </footer>
  );
}

const headingStyle: React.CSSProperties = {
  fontSize: "11px",
  fontWeight: 700,
  color: "var(--color-subtle)",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  margin: 0,
};

const linkStyle: React.CSSProperties = {
  color: "var(--color-muted)",
  fontSize: "14px",
  textDecoration: "none",
  transition: "color var(--transition-fast)",
};

const iconLinkStyle: React.CSSProperties = {
  color: "var(--color-muted)",
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
};
