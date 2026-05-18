"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { broker } from "@/lib/broker-data";
import { fadeUp, stagger } from "@/lib/animations";

export default function Hero() {
  const mensaje = encodeURIComponent(
    "Hola Carlos, vi tu página y me interesa conocer más sobre tus propiedades."
  );
  const waUrl = `https://wa.me/${broker.whatsapp}?text=${mensaje}`;

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-end",
        paddingBottom: "var(--space-3xl)",
      }}
    >
      {/* Imagen de fondo */}
      <Image
        src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&q=80"
        alt="Casa residencial en Mérida"
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />

      {/* Overlay gradiente */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.7) 60%, rgba(10,10,10,1) 100%)",
          zIndex: 1,
        }}
      />

      {/* Contenido */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "var(--container)",
          margin: "0 auto",
          padding: "0 var(--space-md)",
        }}
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          style={{ display: "flex", flexDirection: "column", gap: "var(--space-lg)", maxWidth: "680px" }}
        >
          {/* Badge */}
          <motion.span
            variants={fadeUp}
            style={{
              display: "inline-block",
              alignSelf: "flex-start",
              background: "rgba(201,169,110,0.15)",
              border: "1px solid rgba(201,169,110,0.4)",
              color: "var(--color-accent)",
              fontSize: "12px",
              letterSpacing: "0.08em",
              padding: "6px 16px",
              borderRadius: "999px",
              fontWeight: 500,
              textTransform: "uppercase",
            }}
          >
            Broker Certificado · Mérida, Yucatán
          </motion.span>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(40px, 6vw, 72px)",
              color: "var(--color-text)",
              margin: 0,
              lineHeight: 1.1,
              fontWeight: 700,
            }}
          >
            {broker.hero.headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            style={{
              fontSize: "clamp(16px, 2vw, 20px)",
              color: "var(--color-muted)",
              margin: 0,
              lineHeight: 1.6,
              maxWidth: "520px",
            }}
          >
            {broker.hero.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-md)" }}
          >
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "var(--color-accent)",
                color: "#0a0a0a",
                fontWeight: 700,
                fontSize: "15px",
                padding: "14px 28px",
                borderRadius: "var(--radius-md)",
                textDecoration: "none",
                transition: "background var(--transition-fast)",
                whiteSpace: "nowrap",
              }}
            >
              Contáctame por WhatsApp
            </a>
            <a
              href="#propiedades"
              style={{
                background: "transparent",
                color: "var(--color-text)",
                fontWeight: 600,
                fontSize: "15px",
                padding: "14px 28px",
                borderRadius: "var(--radius-md)",
                border: "1px solid rgba(255,255,255,0.3)",
                textDecoration: "none",
                transition: "border-color var(--transition-fast)",
                whiteSpace: "nowrap",
              }}
            >
              Ver propiedades
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
