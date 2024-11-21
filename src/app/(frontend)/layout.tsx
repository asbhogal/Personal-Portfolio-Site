import '@/src/scss/index.scss';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { Footer, Header } from '@/src/components/globals';
import '@splidejs/react-splide/css';
import '@/src/scss/globals/globals.scss';
import '@/src/scss/reset.scss';

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
        <main className="MainContainer">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
