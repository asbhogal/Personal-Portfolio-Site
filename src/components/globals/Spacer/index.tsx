import React from 'react';
import type { JSX } from 'react';

interface Props {
  height: number;
}

export const Spacer = ({ height }: Props): JSX.Element => (
  <div style={{
    height: `calc(100dvw * (${height} / 500))`,
  }}
  />
);
