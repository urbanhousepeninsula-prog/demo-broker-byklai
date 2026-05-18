"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { broker } from "@/lib/broker-data";
import { stagger, fadeUp } from "@/lib/animations";
import Badge from "@/components/ui/badge";

export default function Faq() {
  const [abierto, setAbierto] = useState<string | null>(null);
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
      <div style={{ maxWidth: "var(--narrow)", margin: "0 auto" }}>
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
          <Badge text="Preguntas frecuentes" />
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(28px, 4vw, 44px)",
              color: "var(--color-text)",
              margin: 0,
            }}
          >
            Resolvemos tus dudas
          </h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{ display: "flex", flexDirection: "column", gap: "var(--space-sm)" }}
        >
          {broker.faq.map((item) => {
            const estaAbierto = abierto === item.id;
            return (
              <motion.div
                key={item.id}
                variants={fadeUp}
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                }}
              >
                {/* Pregunta */}
                <button
                  onClick={() => setAbierto(estaAbierto ? null : item.id)}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "var(--space-md)",
                    padding: "var(--space-lg)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "var(--color-text)",
                    }}
                  >
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: estaAbierto ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ flexShrink: 0, color: "var(--color-accent)" }}
                  >
                    {estaAbierto ? (
                      <Minus size={18} strokeWidth={2} />
                    ) : (
                      <Plus size={18} strokeWidth={2} />
                    )}
                  </motion.span>
                </button>

                {/* Respuesta */}
                <AnimatePresence initial={false}>
                  {estaAbierto && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <p
                        style={{
                          color: "var(--color-muted)",
                          fontSize: "15px",
                          lineHeight: 1.7,
                          margin: 0,
                          padding: "0 var(--space-lg) var(--space-lg)",
                        }}
                      >
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
