import styles from './styles.module.scss';

interface Props {
  children: React.ReactNode;
}

export const VisuallyHidden = ({ children }: Props) => (
  <div className={styles.visuallyHidden}>
    {children}
  </div>
);
