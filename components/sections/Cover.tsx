interface CoverProps {
  children: React.ReactNode
}

export default function Cover({ children }: CoverProps) {
  return (
    <section className="Cover">
      {children}
    </section>
  );
}
