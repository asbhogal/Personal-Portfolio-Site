import '@/scss/index.scss';
import Cursor from '@/components/features/Cursor';
import ScrollToTop from '@/components/features/ScrollToTop';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { Footer, Header } from '@/components/globals';
import '@splidejs/react-splide/css';
import '@/scss/globals/globals.scss';
import '@/scss/reset.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="root">
        <Analytics />
        <SpeedInsights />
        <Header />
        <Cursor />
        <ScrollToTop />
        <main className="MainContainer">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
