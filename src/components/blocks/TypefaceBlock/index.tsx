import { Project } from '@/payload-types';
import { Subheading } from '../../typography';
import styles from './styles.module.scss';

interface Props {
  typeface: Project['typeface'];
}

export const TypefaceBlock = ({ typeface }: Props) => (
  <div className={styles.container}>
    <Subheading subheading="typeface" />
    {typeface && typeface[0]?.typeface && (
      <img
        src={
          typeof typeface[0].image === 'string'
            ? typeface[0].image
            : typeface[0].image?.url || ''
        }
        alt={
          typeof typeface[0].image === 'string'
            ? ''
            : typeface[0].image?.altText || ''
        }
      />
    )}
  </div>
);
