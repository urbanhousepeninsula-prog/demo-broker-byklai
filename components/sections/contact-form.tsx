"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { broker } from "@/lib/broker-data";
import { fadeUp, stagger } from "@/lib/animations";
import Badge from "@/components/ui/badge";

export default function ContactForm() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const mensaje = encodeURIComponent("Hola Carlos, me gustaría agendar una llamada para hablar sobre propiedades.");
  const waUrl = `https://wa.me/${broker.whatsapp}?text=${mensaje}`;

  return (
    <section
      id="contacto"
      ref={ref}
      style={{
        paddingTop: "var(--section-y)",
        paddingBottom: "var(--section-y)",
        paddingLeft: "var(--space-md)",
        paddingRight: "var(--space-md)",
        background: "var(--color-surface)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Gradiente radial decorativo */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,169,110,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "var(--narrow)", margin: "0 auto", position: "relative" }}>
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
          <Badge text="Agenda una llamada" />
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(28px, 4vw, 44px)",
              color: "var(--color-text)",
              margin: 0,
            }}
          >
            Hablemos de tu próxima propiedad
          </h2>
          <p style={{ color: "var(--color-muted)", fontSize: "16px", margin: 0 }}>
            Respondo en menos de 24 horas.
          </p>
        </motion.div>

        {/* Formulario */}
        <motion.form
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          onSubmit={(e) => e.preventDefault()}
          style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)" }}
        >
          {/* Nombre */}
          <motion.div variants={fadeUp} style={{ display: "flex", flexDirection: "column", gap: "var(--space-xs)" }}>
            <label style={labelStyle}>Nombre completo</label>
            <input
              type="text"
              required
              placeholder="Tu nombre"
              style={inputStyle}
            />
          </motion.div>

          {/* Teléfono */}
          <motion.div variants={fadeUp} style={{ display: "flex", flexDirection: "column", gap: "var(--space-xs)" }}>
            <label style={labelStyle}>Teléfono</label>
            <input
              type="tel"
              required
              placeholder="+52 999 000 0000"
              style={inputStyle}
            />
          </motion.div>

          {/* Propiedad de interés */}
          <motion.div variants={fadeUp} style={{ display: "flex", flexDirection: "column", gap: "var(--space-xs)" }}>
            <label style={labelStyle}>Propiedad de interés</label>
            <select style={inputStyle}>
              {broker.properties.map((p) => (
                <option key={p.id} value={p.id}>{p.title}</option>
              ))}
              <option value="otra">Otra / No lo sé aún</option>
            </select>
          </motion.div>

          {/* Mensaje */}
          <motion.div variants={fadeUp} style={{ display: "flex", flexDirection: "column", gap: "var(--space-xs)" }}>
            <label style={labelStyle}>Mensaje <span style={{ color: "var(--color-subtle)" }}>(opcional)</span></label>
            <textarea
              rows={4}
              placeholder="Cuéntame qué buscas..."
              style={{ ...inputStyle, resize: "vertical" }}
            />
          </motion.div>

          {/* Botón desactivado */}
          <motion.div variants={fadeUp} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-sm)", marginTop: "var(--space-sm)" }}>
            <button
              type="button"
              disabled
              style={{
                width: "100%",
                padding: "16px",
                background: "var(--color-accent)",
                color: "#0a0a0a",
                fontWeight: 700,
                fontSize: "15px",
                borderRadius: "var(--radius-md)",
                border: "none",
                opacity: 0.5,
                cursor: "not-allowed",
              }}
            >
              Disponible próximamente
            </button>

            <p style={{ color: "var(--color-muted)", fontSize: "14px", margin: 0 }}>
              ¿Prefieres escribir ahora? →{" "}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--color-accent)", fontWeight: 600, textDecoration: "none" }}
              >
                Escríbeme por WhatsApp
              </a>
            </p>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
}

const labelStyle: React.CSSProperties = {
  fontSize: "13px",
  fontWeight: 600,
  color: "var(--color-muted)",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
};

const inputStyle: React.CSSProperties = {
  background: "var(--color-surface-2)",
  border: "1px solid var(--color-border)",
  borderRadius: "var(--radius-md)",
  padding: "12px var(--space-md)",
  color: "var(--color-text)",
  fontSize: "15px",
  width: "100%",
  outline: "none",
  fontFamily: "var(--font-body)",
  boxSizing: "border-box",
};
