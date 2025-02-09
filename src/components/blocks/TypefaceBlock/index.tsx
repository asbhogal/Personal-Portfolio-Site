import type { JSX } from 'react';
import React from 'react';
import type { Project } from '@/payload-types';
import { Subheading } from '../../typography';
import styles from './styles.module.scss';
import { Logo } from '../../graphics';

interface Props {
  typeface: Project['typeface'];
}

export const TypefaceBlock = ({ typeface }: Props): JSX.Element => (
  <div className={styles.container}>
    <Logo
      className={styles.logo}
      width={500}
    />
    <Subheading subheading="typeface" />
    {/* eslint-disable-next-line @typescript-eslint/strict-boolean-expressions */}
    {typeface?.[0] && typeface[0].typeface !== undefined && typeface[0].image && (
      <img
        src={
          typeof typeface[0].image === 'string'
            ? typeface[0].image
            : typeface[0].image.url ?? ''
        }
        alt={
          typeof typeface[0].image === 'string'
            ? ''
            : typeface[0].image.altText || ''
        }
      />
    )}
  </div>
);
