interface AccoladeProps {
  accolade?: {
    award?: string | null;
    awardingBody?: string | null;
    date?: string | null;
    id?: string | null;
  }[] | null;
}

export default function Accolades({ accolade }: AccoladeProps) {
  if (!accolade || accolade.length === 0) {
    return null;
  }

  return (
    <div>
      {accolade.map((item) => (
        <div key={item.id}>
          <h3>{item.award}</h3>
          <p>{item.awardingBody}</p>
          <p>{item.date}</p>
        </div>
      ))}
    </div>
  );
}
