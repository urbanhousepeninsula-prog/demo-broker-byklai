"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { broker } from "@/lib/broker-data";
import { stagger, fadeUp } from "@/lib/animations";
import Badge from "@/components/ui/badge";
import PropertyCard from "@/components/ui/property-card";

export default function Properties() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="propiedades"
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
          <Badge text="Propiedades disponibles" />
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(28px, 4vw, 44px)",
              color: "var(--color-text)",
              margin: 0,
            }}
          >
            Encuentra tu lugar ideal
          </h2>
        </motion.div>

        {/* Grid con stagger */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "var(--space-lg)",
          }}
        >
          {broker.properties.map((property) => (
            <motion.div key={property.id} variants={fadeUp}>
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
