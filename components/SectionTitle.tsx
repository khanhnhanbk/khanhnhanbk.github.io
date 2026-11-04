// Long titles break after the comma: one clause per line.
function Clauses({ text }: { text: string }) {
  const parts = text.split(/(?<=,) /);
  if (parts.length === 1) return <>{text}</>;
  return parts.map((part, i) => (
    <span key={i} className="block">
      {part}
    </span>
  ));
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  center = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div
      data-reveal
      className={`print:break-after-avoid print:break-inside-avoid ${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}
    >
      <p className="pill">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-[-0.01em] text-ink sm:text-4xl">
        <Clauses text={title} />
      </h2>
      {subtitle && <p className="mt-4 text-lg leading-relaxed text-muted">{subtitle}</p>}
    </div>
  );
}
