import Image from 'next/image';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import styles from './styles.module.scss';
import { Link } from '../Link';
import { FadeIn } from '../FadeIn';
import { WebsiteCarbon } from '../WebsiteCarbon';

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
      <FadeIn>
        <Image
          className={styles.footerLogo}
          src="/logos/logo-faint.svg"
          role="img"
          aria-hidden="true"
          width={500}
          height={500}
          alt="The letter 'A' in elegant notation"
        />
      </FadeIn>
      <div className={styles.footerLeftContent}>
        <div>
          <p className={styles.name}>Aman Singh Bhogal</p>
          <FadeIn className={styles.footerBottom}>
            <div
              className={styles.copyright}
            >
              <p>
                ©Aman Singh Bhogal
                {' '}
                {new Date().getFullYear()}
              </p>
            </div>
            <WebsiteCarbon />
          </FadeIn>
        </div>
        <div className={styles.footerLinks}>
          {footerMenu?.map((footerItem) => (footerItem.footerMenuItem?.footerMenuItemText === 'Primary' && (
            <ul
              className={styles.footerUl}
              key={footerItem.id}
            >
              {footerMenu?.map((primaryFooterItem) => (primaryFooterItem.footerMenuItem?.footerMenuItemText === 'Primary'
                ? primaryFooterItem?.footerMenuItem?.footerLinks?.map((primary) => (
                  <li
                    key={primary.id}
                    className={styles.footerLi}
                  >
                    <FadeIn>
                      <Link
                        href={primary.footerLinkUrl || ''}
                      >
                        {primary.footerLink}
                      </Link>
                    </FadeIn>
                  </li>
                ))
                : null))}
            </ul>
          )))}
          <ul className={styles.footerUl}>
            {footerMenu?.map((footerItem) => (footerItem.footerMenuItem?.footerMenuItemText === 'Secondary'
              ? footerItem?.footerMenuItem?.footerLinks?.map((secondary) => (
                <li
                  className={styles.footerLi}
                  key={secondary.id}
                >
                  <FadeIn>
                    <Link
                      href={secondary.footerLinkUrl || ''}
                    >
                      {secondary.footerLink}
                    </Link>
                  </FadeIn>
                </li>
              ))
              : null))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
