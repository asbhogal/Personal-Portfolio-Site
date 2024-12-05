import { constructClassName } from '@/utils/constructClassName';
import styles from './styles.module.scss';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  type?: 'primary' | 'secondary';
  children: React.ReactNode
  href: string;
}

export const Link = ({ children, href, type = 'primary', ...rest }: Props) => (
  <a
    href={href}
    className={constructClassName([
      styles[type],
    ])}
    {...rest}
  >
    {children}
  </a>
);
