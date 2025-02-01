
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

export const WebsiteCarbon = async () => {
  const data = await fetch('https://api.websitecarbon.com/site?url=https%3A%2F%2Fwoodandhorn.studio%2F', {
    cache: 'force-cache',
  });

  const json: WebsiteCarbonData = await data.json();

  return (
    <div className={styles.container}>
      <div className={styles.containerInner}>
        <p className={styles.title}>Website Carbon: </p>
      </div>
      <p className={styles.carbonCount}>
        <Link
          title="View the carbon footprint of this website"
          aria-label="View the carbon footprint of this website"
          href="https://www.websitecarbon.com/website/woodandhorn-studio/"
          target="_blank"
        >
          {json.statistics.co2.grid.grams.toFixed(2)}
          g
          {' '}
          of  CO₂
        </Link>
      </p>
    </div>
  );
};
