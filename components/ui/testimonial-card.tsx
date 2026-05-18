import { broker } from "@/lib/broker-data";

type Testimonial = (typeof broker.testimonials)[number];

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-lg)",
        padding: "var(--space-xl)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-md)",
      }}
    >
      {/* Comillas decorativas */}
      <span
        style={{
          fontFamily: "Georgia, serif",
          fontSize: "48px",
          lineHeight: 1,
          color: "var(--color-accent)",
          userSelect: "none",
        }}
        aria-hidden="true"
      >
        &ldquo;
      </span>

      <p
        style={{
          color: "var(--color-text)",
          fontSize: "16px",
          lineHeight: "1.7",
          margin: 0,
          fontStyle: "italic",
        }}
      >
        {testimonial.text}
      </p>

      <div>
        <p style={{ color: "var(--color-text)", fontWeight: 600, fontSize: "15px", margin: 0 }}>
          {testimonial.name}
        </p>
        <p style={{ color: "var(--color-muted)", fontSize: "13px", margin: "2px 0 0" }}>
          {testimonial.type}
        </p>
      </div>
    </div>
  );
}
