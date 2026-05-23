"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { broker } from "@/lib/broker-data";
import { fadeUp, stagger } from "@/lib/animations";
import Badge from "@/components/ui/badge";

export default function ContactForm() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [interes, setInteres] = useState(broker.properties[0].id);
  const [mensaje, setMensaje] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const resetForm = () => {
    setNombre("");
    setTelefono("");
    setInteres(broker.properties[0].id);
    setMensaje("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const formData = {
      access_key: broker.web3forms_key,
      subject: `🏠 Nuevo lead — ${nombre}`,
      from_name: nombre,
      nombre,
      telefono,
      interes,
      mensaje: mensaje || "Sin mensaje adicional",
      fuente: "Landing web · Byklai",
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(true);
        resetForm();
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const waUrl = `https://wa.me/${broker.whatsapp}?text=${encodeURIComponent("Hola Carlos, me gustaría agendar una llamada para hablar sobre propiedades.")}`;

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
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)" }}
        >
          {/* Nombre */}
          <motion.div variants={fadeUp} style={{ display: "flex", flexDirection: "column", gap: "var(--space-xs)" }}>
            <label style={labelStyle}>Nombre completo</label>
            <input
              type="text"
              required
              placeholder="Tu nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
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
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              style={inputStyle}
            />
          </motion.div>

          {/* Propiedad de interés */}
          <motion.div variants={fadeUp} style={{ display: "flex", flexDirection: "column", gap: "var(--space-xs)" }}>
            <label style={labelStyle}>Propiedad de interés</label>
            <select
              value={interes}
              onChange={(e) => setInteres(e.target.value)}
              style={inputStyle}
            >
              {broker.properties.map((p) => (
                <option key={p.id} value={p.id}>{p.title}</option>
              ))}
              <option value="otra">Otra / No lo sé aún</option>
            </select>
          </motion.div>

          {/* Mensaje */}
          <motion.div variants={fadeUp} style={{ display: "flex", flexDirection: "column", gap: "var(--space-xs)" }}>
            <label style={labelStyle}>
              Mensaje <span style={{ color: "var(--color-subtle)" }}>(opcional)</span>
            </label>
            <textarea
              rows={4}
              placeholder="Cuéntame qué buscas..."
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              style={{ ...inputStyle, resize: "vertical" }}
            />
          </motion.div>

          {/* Botón y feedback */}
          <motion.div
            variants={fadeUp}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-sm)", marginTop: "var(--space-sm)" }}
          >
            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                padding: "16px",
                background: success ? "#166534" : error ? "#7f1d1d" : "var(--color-accent)",
                color: success || error ? "#fff" : "#0a0a0a",
                fontWeight: 700,
                fontSize: "15px",
                borderRadius: "var(--radius-md)",
                border: "none",
                cursor: loading ? "wait" : "pointer",
                transition: "background var(--transition-normal)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              {loading && (
                <span
                  style={{
                    width: "16px",
                    height: "16px",
                    border: "2px solid rgba(0,0,0,0.2)",
                    borderTopColor: "#0a0a0a",
                    borderRadius: "50%",
                    display: "inline-block",
                    animation: "spin 0.7s linear infinite",
                  }}
                />
              )}
              {loading
                ? "Enviando..."
                : success
                ? "¡Mensaje enviado! Te contactamos pronto."
                : error
                ? "Hubo un error. Escríbenos por WhatsApp."
                : "Enviar mensaje"}
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

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
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
