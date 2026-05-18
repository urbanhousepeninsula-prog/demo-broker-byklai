"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp } from "@/lib/animations";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
  id?: string;
}

export default function SectionWrapper({
  children,
  className = "",
  narrow = false,
  id,
}: SectionWrapperProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id={id}
      ref={ref}
      style={{
        paddingTop: "var(--section-y)",
        paddingBottom: "var(--section-y)",
        paddingLeft: "var(--space-md)",
        paddingRight: "var(--space-md)",
      }}
      className={className}
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{
          maxWidth: narrow ? "var(--narrow)" : "var(--container)",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {children}
      </motion.div>
    </section>
  );
}
