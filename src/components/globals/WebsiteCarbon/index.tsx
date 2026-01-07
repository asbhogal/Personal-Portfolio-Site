
import React from 'react';
import type { JSX } from 'react';
import { Link } from '../Link';
import styles from './styles.module.scss';

export interface WebsiteCarbonData {
  url: string;
  green: boolean;
  bytes: number;
  cleanerThan: number;
  rating: string;
  statistics: {
    adjustedBytes: number;
    energy: number;
    co2: {
      grid: {
        grams: number;
        litres: number;
      };
      renewable: {
        grams: number;
        litres: number;
      }
    };
    timestamp: number;
  }
}

export const WebsiteCarbon = async (): Promise<JSX.Element> => {
  const data = await fetch(`https://api.websitecarbon.com/site?url=${process.env.API_BASE_URL}`, {
    cache: 'force-cache',
  });


  const json = await data.json() as unknown as WebsiteCarbonData;

  return (
    <div className={styles.container}>
      <div className={styles.containerInner}>
        <p className={styles.title}>Website Carbon: </p>
      </div>
      <p className={styles.carbonCount}>
        <Link
          title="View the carbon footprint of this website"
          aria-label="View the carbon footprint of this website"
          href={`https://www.websitecarbon.com/website/${process.env.API_BASE_URL}/`}
          target="_blank"
        >
          { }
          {typeof json.statistics?.co2.grid.grams === 'number' ? json.statistics.co2.grid.grams.toFixed(2) : ''}
          g
          {' '}
          of  CO₂
        </Link>
      </p>
    </div>
  );
};
