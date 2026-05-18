"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Calendar, Clock } from "lucide-react";
import { stagger, fadeUp, slideLeft, slideRight } from "@/lib/animations";
import Badge from "@/components/ui/badge";
import { broker } from "@/lib/broker-data";

const features = [
  { icon: Zap, texto: "Información de propiedades al instante" },
  { icon: Calendar, texto: "Verificación de disponibilidad real" },
  { icon: Clock, texto: "Agenda tu cita sin esperar" },
];

const mensajesDemo = [
  { lado: "cliente", texto: "Hola, ¿tienen casas disponibles en Country Club?" },
  { lado: "agente", texto: "¡Hola! Claro, tenemos una casa en Country Club desde MX$4,200,000 con 4 recámaras y alberca. ¿Te gustaría agendar una visita?" },
  { lado: "cliente", texto: "Sí, me interesa. ¿Cuándo podría verla?" },
  { lado: "agente", texto: "Perfecto, tengo disponibilidad mañana de 10am a 1pm. ¿Qué horario te funciona mejor?" },
];

export default function AiFeature() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const mensaje = encodeURIComponent("Hola, quiero información sobre tus propiedades disponibles.");
  const waUrl = `https://wa.me/${broker.whatsapp}?text=${mensaje}`;

  return (
    <section
      ref={ref}
      style={{
        paddingTop: "var(--section-y)",
        paddingBottom: "var(--section-y)",
        paddingLeft: "var(--space-md)",
        paddingRight: "var(--space-md)",
        background: "var(--color-surface-2)",
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
        {/* Contenido */}
        <motion.div
          variants={slideLeft}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{ display: "flex", flexDirection: "column", gap: "var(--space-lg)" }}
        >
          <Badge text="Nuevo · Asistente IA" />

          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(28px, 4vw, 44px)",
              color: "var(--color-text)",
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            Respuestas inmediatas, cualquier hora
          </h2>

          <p style={{ color: "var(--color-muted)", fontSize: "16px", lineHeight: 1.7, margin: 0 }}>
            Mi asistente de IA en WhatsApp responde tus preguntas sobre propiedades, verifica disponibilidad
            y agenda tu cita automáticamente. Disponible 24 horas, 7 días.
          </p>

          {/* Features */}
          <motion.ul
            variants={stagger}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "var(--space-md)" }}
          >
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <motion.li
                  key={f.texto}
                  variants={fadeUp}
                  style={{ display: "flex", alignItems: "center", gap: "var(--space-md)", fontSize: "15px", color: "var(--color-text)" }}
                >
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "36px",
                      height: "36px",
                      borderRadius: "var(--radius-md)",
                      background: "rgba(201,169,110,0.12)",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={16} color="var(--color-accent)" strokeWidth={2} />
                  </span>
                  {f.texto}
                </motion.li>
              );
            })}
          </motion.ul>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              alignSelf: "flex-start",
              background: "var(--color-accent)",
              color: "#0a0a0a",
              fontWeight: 700,
              fontSize: "15px",
              padding: "14px 28px",
              borderRadius: "var(--radius-md)",
              textDecoration: "none",
              marginTop: "var(--space-sm)",
            }}
          >
            Probar el asistente
          </a>
        </motion.div>

        {/* Mockup WhatsApp */}
        <motion.div
          variants={slideRight}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            background: "#111b21",
            borderRadius: "var(--radius-xl)",
            padding: "var(--space-lg)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-md)",
            maxWidth: "420px",
            width: "100%",
            margin: "0 auto",
            border: "1px solid #2a3942",
          }}
        >
          {/* Header WhatsApp */}
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-sm)", paddingBottom: "var(--space-md)", borderBottom: "1px solid #2a3942" }}>
            <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 700, color: "#0a0a0a", flexShrink: 0 }}>
              C
            </div>
            <div>
              <p style={{ color: "#e9edef", fontSize: "15px", fontWeight: 600, margin: 0 }}>Asistente Carlos Mendoza</p>
              <p style={{ color: "#8696a0", fontSize: "12px", margin: 0 }}>en línea</p>
            </div>
          </div>

          {/* Mensajes */}
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-sm)" }}>
            {mensajesDemo.map((msg, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: msg.lado === "cliente" ? "flex-end" : "flex-start",
                }}
              >
                <p
                  style={{
                    background: msg.lado === "cliente" ? "#005c4b" : "#202c33",
                    color: "#e9edef",
                    fontSize: "13px",
                    lineHeight: 1.5,
                    padding: "8px 12px",
                    borderRadius: msg.lado === "cliente" ? "12px 12px 2px 12px" : "12px 12px 12px 2px",
                    margin: 0,
                    maxWidth: "80%",
                  }}
                >
                  {msg.texto}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
