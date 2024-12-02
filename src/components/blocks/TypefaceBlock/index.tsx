import { Project } from '@/payload-types';
import { Subheading } from '../../typography';
import styles from './styles.module.scss';
import { Logo } from '../../graphics';

interface Props {
  typeface: Project['typeface'];
}

export const TypefaceBlock = ({ typeface }: Props) => (
  <div className={styles.container}>
    <Logo
      className={styles.logo}
      width={500}
    />
    <Subheading subheading="typeface" />
    {typeface && typeface[0]?.typeface && typeface[0].image && (
      <img
        src={`/images/media/${typeof typeface[0].image === 'object' && 'filename' in typeface[0].image ? typeface[0].image.filename : ''}`}
        alt={
          typeof typeface[0].image === 'string'
            ? ''
            : typeface[0].image?.altText || ''
        }
      />
    )}
  </div>
);
