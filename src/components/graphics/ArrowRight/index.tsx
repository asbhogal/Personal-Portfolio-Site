import type { JSX } from 'react';
import React from 'react';

interface Props {
  width?: number;
}

export const ArrowRight = ({ width = 18 }: Props): JSX.Element => (
  <svg
    width={width}
    height={width * (10 / 18)}
    viewBox="0 0 18 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.3441 3.91602H0.333252V6.08268H13.3441V9.33268L17.6666 4.99935L13.3441 0.666016V3.91602Z"
      fill="#C6C0C4"
    />
  </svg>

);
