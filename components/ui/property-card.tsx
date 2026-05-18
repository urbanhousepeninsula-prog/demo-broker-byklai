"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { broker } from "@/lib/broker-data";

type Property = (typeof broker.properties)[number];

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const mensaje = encodeURIComponent(
    `Hola Carlos, vi tu página y me interesa conocer más sobre ${property.title} en ${property.location}.`
  );
  const waUrl = `https://wa.me/${broker.whatsapp}?text=${mensaje}`;

  return (
    <div
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "border-color var(--transition-normal)",
      }}
    >
      {/* Imagen con zoom en hover */}
      <div style={{ position: "relative", overflow: "hidden", aspectRatio: "16/10" }}>
        <Image
          src={property.image}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          loading="lazy"
          style={{ objectFit: "cover", transition: "transform var(--transition-slow)" }}
          className="property-card-img"
        />
        {/* Badge de precio */}
        <span
          style={{
            position: "absolute",
            top: "var(--space-md)",
            left: "var(--space-md)",
            background: "var(--color-accent)",
            color: "#0a0a0a",
            fontSize: "13px",
            fontWeight: 600,
            padding: "var(--space-xs) var(--space-sm)",
            borderRadius: "var(--radius-sm)",
          }}
        >
          {property.price}
        </span>
      </div>

      {/* Contenido */}
      <div style={{ padding: "var(--space-lg)", display: "flex", flexDirection: "column", gap: "var(--space-sm)", flex: 1 }}>
        <h3
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "20px",
            color: "var(--color-text)",
            margin: 0,
          }}
        >
          {property.title}
        </h3>
        <p style={{ color: "var(--color-muted)", fontSize: "14px", margin: 0 }}>
          {property.location}
        </p>

        {/* Features */}
        <ul style={{ listStyle: "none", padding: 0, margin: "var(--space-sm) 0 0", display: "flex", flexDirection: "column", gap: "var(--space-xs)" }}>
          {property.features.map((feat) => (
            <li key={feat} style={{ display: "flex", alignItems: "center", gap: "var(--space-xs)", fontSize: "14px", color: "var(--color-muted)" }}>
              <CheckCircle size={14} color="var(--color-accent)" strokeWidth={2} />
              {feat}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginTop: "auto",
            paddingTop: "var(--space-lg)",
            display: "block",
            textAlign: "center",
            background: "var(--color-accent)",
            color: "#0a0a0a",
            fontWeight: 600,
            fontSize: "14px",
            padding: "var(--space-sm) var(--space-md)",
            borderRadius: "var(--radius-md)",
            textDecoration: "none",
            transition: "background var(--transition-fast)",
          }}
        >
          Consultar por WhatsApp
        </a>
      </div>

      <style>{`
        .property-card-img:hover { transform: scale(1.05); }
      `}</style>
    </div>
  );
}
