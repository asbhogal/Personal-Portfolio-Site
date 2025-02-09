import '../../styles/index.scss';
import { Analytics } from '@vercel/analytics/react';
import { Footer, Header } from '@/src/components/globals';
import '@splidejs/react-splide/css';
import '@/src/styles/globals/globals.scss';
import '@/src/styles/reset.scss';
import type { JSX } from 'react';
import React from 'react';
import styles from './styles.module.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/ybb2hzd.css"
        />
      </head>
      <body>
        <Header />
        <main
          className={styles.mainContainer}
        >
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
