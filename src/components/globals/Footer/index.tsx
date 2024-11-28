import Link from 'next/link';
import Image from 'next/image';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import styles from './styles.module.scss';

export const Footer = async () => {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.findGlobal({
    slug: 'footer-menu',
  });

  const { footerMenu } = data;

  return (
    <footer
      className={styles.footer}
    >
      <Image
        className={styles.footerLogo}
        src="/logos/logo-faint.svg"
        role="img"
        aria-hidden="true"
        width={500}
        height={500}
        alt="The letter 'A' in elegant notation"
      />
      {/*       <WebsiteCarbonBadge url="www.amansinghbhogal.com" />
 */}
      {' '}
      <div className={styles.footerLinks}>
        <ul className={styles.footerUl}>
          {footerMenu?.map((footerItem) => (footerItem.footerMenuItem?.footerMenuItemText === 'Primary'
            ? footerItem?.footerMenuItem?.footerLinks?.map((primary) => (
              <li
                className={styles.footerLi}
                key={primary.id}
              >
                <Link
                  className={styles.footerLink}
                  href={primary.footerLinkUrl || ''}
                >
                  {primary.footerLink}
                </Link>
              </li>
            ))
            : null))}
        </ul>
        <ul className={styles.footerUl}>
          {footerMenu?.map((footerItem) => (footerItem.footerMenuItem?.footerMenuItemText === 'Secondary'
            ? footerItem?.footerMenuItem?.footerLinks?.map((secondary) => (
              <li
                className={styles.footerLi}
                key={secondary.id}
              >
                <Link
                  className={styles.footerLink}
                  href={secondary.footerLinkUrl || ''}
                >
                  {secondary.footerLink}
                </Link>
              </li>
            ))
            : null))}
        </ul>
      </div>
      <div
        className={styles.copyright}
      >
        <p>
          ©Aman Singh Bhogal
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};
