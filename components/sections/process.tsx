"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { stagger, fadeUp } from "@/lib/animations";
import Badge from "@/components/ui/badge";

const pasos = [
  {
    num: "01",
    titulo: "Conversación inicial",
    desc: "Cuéntame qué buscas y en qué zona. Sin compromisos.",
  },
  {
    num: "02",
    titulo: "Selección de opciones",
    desc: "Te presento propiedades alineadas a tu perfil y presupuesto.",
  },
  {
    num: "03",
    titulo: "Cierre acompañado",
    desc: "Te guío en cada paso hasta firmar con tranquilidad.",
  },
];

export default function Process() {
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
        background: "var(--color-surface)",
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
          <Badge text="¿Cómo funciona?" />
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(28px, 4vw, 44px)",
              color: "var(--color-text)",
              margin: 0,
            }}
          >
            Simple, claro y sin sorpresas
          </h2>
        </motion.div>

        {/* Pasos */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "var(--space-lg)",
            position: "relative",
          }}
        >
          {pasos.map((paso, i) => (
            <motion.div
              key={paso.num}
              variants={fadeUp}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-md)",
                position: "relative",
              }}
            >
              {/* Línea conectora (solo desktop, entre pasos) */}
              {i < pasos.length - 1 && (
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: "28px",
                    left: "calc(100% + var(--space-sm))",
                    width: "calc(var(--space-lg))",
                    height: "1px",
                    background: "var(--color-border)",
                    display: "none",
                  }}
                  className="process-connector"
                />
              )}

              {/* Número */}
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "56px",
                  color: "var(--color-accent)",
                  lineHeight: 1,
                  fontWeight: 700,
                  opacity: 0.9,
                }}
              >
                {paso.num}
              </span>

              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "20px",
                    color: "var(--color-text)",
                    margin: "0 0 var(--space-sm)",
                    fontWeight: 700,
                  }}
                >
                  {paso.titulo}
                </h3>
                <p style={{ color: "var(--color-muted)", fontSize: "15px", lineHeight: 1.6, margin: 0 }}>
                  {paso.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Línea conectora visible en desktop via CSS */}
      <style>{`
        @media (min-width: 768px) {
          .process-connector { display: block !important; }
        }
      `}</style>
    </section>
  );
}
