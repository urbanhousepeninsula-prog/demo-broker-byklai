"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, XCircle, Check, X, Zap } from "lucide-react";
import { slideLeft, slideRight, fadeUp } from "@/lib/animations";
import Badge from "@/components/ui/badge";

const incluye = [
  "Dominio gratis por 1 año (.com o .com.mx sujeto a disponibilidad)",
  "Hosting y despliegue profesional en Vercel",
  "Certificado SSL gratuito",
  "Landing profesional de una página",
  "Formulario estructurado de 5 bloques",
  "CRM conectado a Google Sheets",
  "Diseño responsive mobile y desktop",
  "Contacto directo a WhatsApp con notificación automática al broker cuando llega un lead",
  "Optimización básica de velocidad",
  "Entrega en 72 horas",
  "1 correo profesional con tu dominio (via Zoho Mail)",
];

const noIncluye = [
  "Branding o identidad visual",
  "Diseño de logotipo",
  "Ecommerce o tienda online",
  "Automatizaciones avanzadas",
  "Copywriting avanzado",
  "SEO avanzado",
  "Integración de pasarelas de pago",
  "Desarrollo multi página",
  "Producción de contenido",
  "Dominios premium o de alto valor",
];

export default function Includes() {
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
          <Badge text="¿Qué incluye?" />
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(28px, 4vw, 44px)",
              color: "var(--color-text)",
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            Todo lo que necesitas para salir en 72 horas
          </h2>
          <p style={{ color: "var(--color-muted)", fontSize: "16px", margin: 0 }}>
            Sin sorpresas. Sin costos ocultos. Sin letra pequeña.
          </p>
        </motion.div>

        {/* Columnas */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "var(--space-lg)",
            marginBottom: "var(--space-xl)",
          }}
        >
          {/* Columna Incluye */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            style={{
              background: "var(--color-surface-2)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-lg)",
              padding: "32px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-sm)", marginBottom: "var(--space-lg)" }}>
              <CheckCircle size={20} color="#4ade80" strokeWidth={2} />
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "18px", color: "#4ade80", margin: 0, fontWeight: 700 }}>
                Incluye
              </h3>
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {incluye.map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "flex-start",
                    marginBottom: "12px",
                  }}
                >
                  <Check
                    size={18}
                    color="#4ade80"
                    strokeWidth={2.5}
                    style={{ flexShrink: 0, marginTop: "2px" }}
                  />
                  <span style={{ fontSize: "14px", color: "#cccccc", lineHeight: 1.6 }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Columna No incluye */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            style={{
              background: "var(--color-surface-2)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-lg)",
              padding: "32px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-sm)", marginBottom: "var(--space-lg)" }}>
              <XCircle size={20} color="var(--color-subtle)" strokeWidth={2} />
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "18px", color: "var(--color-subtle)", margin: 0, fontWeight: 700 }}>
                No incluye
              </h3>
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {noIncluye.map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "flex-start",
                    marginBottom: "12px",
                  }}
                >
                  <X
                    size={18}
                    color="var(--color-subtle)"
                    strokeWidth={2.5}
                    style={{ flexShrink: 0, marginTop: "2px" }}
                  />
                  <span style={{ fontSize: "14px", color: "#666666", lineHeight: 1.6 }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Upsell agente IA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            borderRadius: "var(--radius-md)",
            padding: "20px 24px",
            marginTop: "24px",
            marginBottom: "var(--space-lg)",
            display: "flex",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <Zap size={20} color="var(--color-accent)" strokeWidth={2} style={{ flexShrink: 0 }} />
          <div style={{ flex: 1, minWidth: "200px" }}>
            <p style={{ fontSize: "14px", fontWeight: 600, color: "var(--color-text)", margin: 0 }}>
              ¿Quieres más automatización?
            </p>
            <p style={{ fontSize: "13px", color: "var(--color-muted)", margin: "2px 0 0" }}>
              Agrega el Agente IA en WhatsApp que responde y agenda citas automáticamente.
            </p>
          </div>
          <span
            style={{
              background: "var(--color-surface-2)",
              border: "1px solid var(--color-border)",
              borderRadius: "999px",
              padding: "6px 14px",
              fontSize: "12px",
              color: "var(--color-accent)",
              fontWeight: 600,
              whiteSpace: "nowrap",
            }}
          >
            desde MX$499/mes
          </span>
        </motion.div>

        {/* Nota legal */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            textAlign: "center",
            fontSize: "12px",
            color: "var(--color-subtle)",
            maxWidth: "560px",
            margin: "0 auto",
            lineHeight: 1.6,
          }}
        >
          Dominio gratis sujeto a disponibilidad y validación de costo comercial. No aplica para
          dominios premium. El cliente proporciona 3 opciones y Byklai confirma disponibilidad.
        </motion.p>
      </div>
    </section>
  );
}
