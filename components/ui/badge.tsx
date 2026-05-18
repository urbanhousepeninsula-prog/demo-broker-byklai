interface BadgeProps {
  text: string;
}

export default function Badge({ text }: BadgeProps) {
  return (
    <span
      style={{
        display: "inline-block",
        background: "var(--color-surface-2)",
        border: "1px solid var(--color-border)",
        color: "var(--color-accent)",
        fontSize: "12px",
        letterSpacing: "0.05em",
        padding: "var(--space-xs) var(--space-md)",
        borderRadius: "999px",
        fontFamily: "var(--font-body)",
        fontWeight: 500,
        textTransform: "uppercase",
      }}
    >
      {text}
    </span>
  );
}
