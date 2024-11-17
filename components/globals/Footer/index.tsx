'use client';

import FadeIn from '@/utils/animations';
import useSWR from 'swr';
import { fetcher } from '@/utils/fetcher';
import { FooterMenu } from '@/payload-types';
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.scss';

export const Footer = () => {
  const { data: footerMenu, error } = useSWR<FooterMenu>(
    '/api/footer',
    fetcher,
  );
  if (error) return <div>failed to load</div>;
  if (!footerMenu) return <div>loading...</div>;

  return (
    <FadeIn
      as="footer"
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
          {footerMenu?.footerMenu?.map((footerItem) => (footerItem.footerMenuItem?.footerMenuItemText === 'Primary'
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
          {footerMenu?.footerMenu?.map((footerItem) => (footerItem.footerMenuItem?.footerMenuItemText === 'Secondary'
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
      <FadeIn
        as="div"
        className={styles.copyright}
      >
        <FadeIn as="p">
          ©Aman Singh Bhogal
          {new Date().getFullYear()}
        </FadeIn>
      </FadeIn>
    </FadeIn>
  );
};
