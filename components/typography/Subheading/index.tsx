import styles from './styles.module.scss';

interface Props {
  subheading: string;
}

export const Subheading = ({ subheading }: Props) => (
  <h2 className={styles.subheading}>
    {subheading}
  </h2>
);
