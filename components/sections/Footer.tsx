'use client';

import { WebsiteCarbonBadge } from 'react-websitecarbon-badge';
import FadeIn from '@/utils/animations';
import useSWR from 'swr';
import { fetcher } from '@/utils/fetcher';
import { FooterMenu } from '@/payload-types';
import Link from 'next/link';

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
      <FadeIn
        as="div"
        className="Copyright"
      >
        <FadeIn as="p">
          ©Aman Singh Bhogal
          {new Date().getFullYear()}
        </FadeIn>
      </FadeIn>
      <WebsiteCarbonBadge url="www.amansinghbhogal.com" />
      {footerMenu?.footerMenu?.map((footerItem) => (footerItem.footerMenuItem?.footerMenuItemText === 'Primary'
        ? footerItem?.footerMenuItem?.footerLinks?.map((primary) => (
          <li key={primary.id}>
            <Link href={primary.footerLinkUrl || ''}>
              {primary.footerLink}
            </Link>
          </li>
        ))
        : null))}
    </FadeIn>
  );
}
