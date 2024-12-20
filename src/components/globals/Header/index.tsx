import { getPayload } from 'payload';
import configPromise from '@payload-config';
import styles from './styles.module.scss';
import { Logo } from '../../graphics';
import { Link } from '../Link';
import { FadeIn } from '../FadeIn';

export const Header = async () => {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.findGlobal({
    slug: 'header-menu',
  });

  const { headerMenu } = data;

  return (
    <FadeIn>
      <header className={styles.header}>
        <Link
          aria-label="Home"
          href="/"
        >
          <Logo width={40} />
        </Link>
        <nav>
          <ul className={styles.headerUl}>
            {headerMenu?.map((headerItem) => (
              <li
                key={headerItem.id}
                className={styles.headerLi}
              >
                <Link href={headerItem.linkUrl || ''}>
                  {headerItem.linkText}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </FadeIn>
  );
};
