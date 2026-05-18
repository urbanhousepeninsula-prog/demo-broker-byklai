"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Shield, Users, Handshake } from "lucide-react";
import { stagger, fadeUp } from "@/lib/animations";
import Badge from "@/components/ui/badge";

const beneficios = [
  {
    id: "local",
    icon: MapPin,
    titulo: "Conocimiento local profundo",
    desc: "Vivo y trabajo en la zona norte. Conozco cada calle, desarrollo y precio real de mercado.",
  },
  {
    id: "transparente",
    icon: Shield,
    titulo: "Proceso transparente sin sorpresas",
    desc: "Te explico cada paso antes de darlo. Sin letra chica, sin presiones, sin comisiones ocultas.",
  },
  {
    id: "compradores",
    icon: Users,
    titulo: "Red de compradores pre-calificados",
    desc: "Si vendes, tienes acceso a mi base de clientes activos listos para adquirir hoy.",
  },
  {
    id: "cierre",
    icon: Handshake,
    titulo: "Acompañamiento hasta el cierre",
    desc: "No desaparezco después de mostrarte la propiedad. Estoy contigo hasta firmar en notaría.",
  },
];

export default function Benefits() {
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
          <Badge text="¿Por qué trabajar conmigo?" />
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(28px, 4vw, 44px)",
              color: "var(--color-text)",
              margin: 0,
            }}
          >
            Lo que me distingue
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "var(--space-lg)",
          }}
        >
          {beneficios.map((b) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.id}
                variants={fadeUp}
                style={{
                  background: "var(--color-surface-2)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "var(--space-xl)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-md)",
                }}
              >
                <Icon size={28} color="var(--color-accent)" strokeWidth={1.5} />
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "18px",
                    color: "var(--color-text)",
                    margin: 0,
                    fontWeight: 700,
                  }}
                >
                  {b.titulo}
                </h3>
                <p style={{ color: "var(--color-muted)", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>
                  {b.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
