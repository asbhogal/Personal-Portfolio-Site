interface Props {
  children: React.ReactNode
}

export const Cover = ({ children }: Props) => (
  <section className="Cover">
    {children}
  </section>
);
