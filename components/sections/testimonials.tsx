"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { broker } from "@/lib/broker-data";
import { stagger, fadeUp } from "@/lib/animations";
import Badge from "@/components/ui/badge";
import TestimonialCard from "@/components/ui/testimonial-card";

const stats = [
  { value: "340+", label: "propiedades cerradas" },
  { value: "12", label: "años de experiencia" },
  { value: "5", label: "zonas especializadas" },
];

export default function Testimonials() {
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
        background: "var(--color-bg)",
      }}
    >
      <div style={{ maxWidth: "var(--container)", margin: "0 auto" }}>
        {/* Encabezado */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            textAlign: "center",
            marginBottom: "var(--space-2xl)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "var(--space-md)",
          }}
        >
          <Badge text="Lo que dicen mis clientes" />
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(28px, 4vw, 44px)",
              color: "var(--color-text)",
              margin: 0,
            }}
          >
            Resultados que hablan
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "var(--space-lg)",
            marginBottom: "var(--space-2xl)",
          }}
        >
          {broker.testimonials.map((t) => (
            <motion.div key={t.id} variants={fadeUp}>
              <TestimonialCard testimonial={t} />
            </motion.div>
          ))}
        </motion.div>

        {/* Banda de stats */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "var(--space-2xl)",
            paddingTop: "var(--space-xl)",
            borderTop: "1px solid var(--color-border)",
          }}
        >
          {stats.map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "40px",
                  color: "var(--color-accent)",
                  margin: 0,
                  fontWeight: 700,
                }}
              >
                {s.value}
              </p>
              <p style={{ color: "var(--color-muted)", fontSize: "13px", margin: "4px 0 0" }}>
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
