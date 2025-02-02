import { constructClassName } from '@/utils/constructClassName';
import styles from './styles.module.scss';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  name: string;
}

export const Button = ({ children, className, name, ...props }: Props) => (
  <button
    className={constructClassName([
      className,
      styles.button,
    ])}
    name={name}
    type="button"
    {...props}
  >
    {children}
  </button>
);
