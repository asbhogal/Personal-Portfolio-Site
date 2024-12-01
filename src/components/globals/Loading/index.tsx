import { Logo } from '../../graphics';
import styles from './styles.module.scss';

export default function Loading() {
  return (
    <div className={styles.container}>
      <Logo className={styles.logo} />
    </div>
  );
}
