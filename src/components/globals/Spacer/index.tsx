interface Props {
  height: number;
}

export const Spacer = ({ height }: Props) => (
  <div style={{
    height: `calc(100dvw * (${height} / 500))`,
  }}
  />
);
