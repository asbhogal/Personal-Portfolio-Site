interface SubheadingProps {
  subheading: string;
}

export default function Subheading({ subheading }: SubheadingProps) {
  return (
    <h2 className="Subheading">
      {subheading}
    </h2>
  );
}
