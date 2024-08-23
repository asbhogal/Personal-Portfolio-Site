'use client';

import FadeIn from '@/utils/animations';
import useSWR from 'swr';
import { fetcher } from '@/utils/fetcher';
import { FooterMenu } from '@/payload-types';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const { data: footerMenu, error } = useSWR<FooterMenu>(
    '/api/footer',
    fetcher,
  );
  if (error) return <div>failed to load</div>;
  if (!footerMenu) return <div>loading...</div>;

  return (
    <FadeIn
      as="footer"
      className="Footer"
    >
      <Image
        className="FooterLogo"
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
      <div className="FooterLinks">
        <ul className="FooterUl">
          {footerMenu?.footerMenu?.map((footerItem) => (footerItem.footerMenuItem?.footerMenuItemText === 'Primary'
            ? footerItem?.footerMenuItem?.footerLinks?.map((primary) => (
              <li
                className="FooterLi"
                key={primary.id}
              >
                <Link
                  className="FooterLink"
                  href={primary.footerLinkUrl || ''}
                >
                  {primary.footerLink}
                </Link>
              </li>
            ))
            : null))}
        </ul>
        <ul className="FooterUl">
          {footerMenu?.footerMenu?.map((footerItem) => (footerItem.footerMenuItem?.footerMenuItemText === 'Secondary'
            ? footerItem?.footerMenuItem?.footerLinks?.map((secondary) => (
              <li
                className="FooterLi"
                key={secondary.id}
              >
                <Link
                  className="FooterLink"
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
        className="Copyright"
      >
        <FadeIn as="p">
          ©Aman Singh Bhogal
          {new Date().getFullYear()}
        </FadeIn>
      </FadeIn>
    </FadeIn>
  );
}
