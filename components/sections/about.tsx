"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { broker } from "@/lib/broker-data";
import { slideLeft, slideRight } from "@/lib/animations";
import Badge from "@/components/ui/badge";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      style={{
        paddingTop: "var(--section-y)",
        paddingBottom: "var(--section-y)",
        paddingLeft: "var(--space-md)",
        paddingRight: "var(--space-md)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--container)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "var(--space-2xl)",
          alignItems: "center",
        }}
      >
        {/* Imagen */}
        <motion.div
          variants={slideLeft}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            position: "relative",
            aspectRatio: "3/4",
            borderRadius: "var(--radius-xl)",
            overflow: "hidden",
            maxWidth: "480px",
            width: "100%",
            margin: "0 auto",
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80"
            alt="Carlos Mendoza, Broker Inmobiliario"
            fill
            sizes="(max-width: 768px) 100vw, 480px"
            loading="lazy"
            style={{ objectFit: "cover", objectPosition: "top center" }}
          />
        </motion.div>

        {/* Contenido */}
        <motion.div
          variants={slideRight}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{ display: "flex", flexDirection: "column", gap: "var(--space-lg)" }}
        >
          <Badge text="Sobre Carlos" />

          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(28px, 4vw, 44px)",
              color: "var(--color-text)",
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            12 años construyendo confianza en Mérida
          </h2>

          <p style={{ color: "var(--color-muted)", fontSize: "16px", lineHeight: 1.7, margin: 0 }}>
            {broker.bio}
          </p>

          {/* Diferenciadores */}
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "var(--space-sm)" }}>
            {broker.differentiators.map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-sm)", fontSize: "15px", color: "var(--color-text)" }}>
                <CheckCircle size={18} color="var(--color-accent)" strokeWidth={2} style={{ flexShrink: 0, marginTop: "2px" }} />
                {item}
              </li>
            ))}
          </ul>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              gap: "var(--space-xl)",
              paddingTop: "var(--space-md)",
              borderTop: "1px solid var(--color-border)",
              flexWrap: "wrap",
            }}
          >
            {[
              { value: broker.stats.years, label: "años de experiencia" },
              { value: broker.stats.sold, label: "propiedades cerradas" },
              { value: broker.stats.zones, label: "especializadas" },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "32px",
                    color: "var(--color-accent)",
                    margin: 0,
                    fontWeight: 700,
                  }}
                >
                  {stat.value}
                </p>
                <p style={{ color: "var(--color-muted)", fontSize: "13px", margin: "2px 0 0" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
