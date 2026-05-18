"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { broker } from "@/lib/broker-data";

export default function StickyWhatsapp() {
  const mensaje = encodeURIComponent(
    "Hola Carlos, vi tu página y me interesa conocer más sobre tus propiedades."
  );
  const waUrl = `https://wa.me/${broker.whatsapp}?text=${mensaje}`;

  return (
    <motion.a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.4, ease: "easeOut" }}
      aria-label="Contactar por WhatsApp"
      style={{
        position: "fixed",
        bottom: "var(--space-xl)",
        right: "var(--space-xl)",
        zIndex: 300,
        display: "flex",
        alignItems: "center",
        gap: "var(--space-sm)",
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        borderRadius: "999px",
        padding: "var(--space-sm) var(--space-lg)",
        boxShadow: "var(--shadow-glow)",
        textDecoration: "none",
        transition: "transform var(--transition-fast)",
        cursor: "pointer",
      }}
    >
      <MessageCircle size={20} color="var(--color-accent)" strokeWidth={2} />
      <span
        style={{
          color: "var(--color-accent)",
          fontSize: "14px",
          fontWeight: 600,
          fontFamily: "var(--font-body)",
        }}
      >
        WhatsApp
      </span>
    </motion.a>
  );
}
