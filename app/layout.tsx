import "../src/scss/index.scss";
import Header from "@/components/sections/Header";
import Cursor from "@/components/features/Cursor";
import ScrollToTop from "@/components/features/ScrollToTop";
import Footer from "@/components/sections/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="root">
        <Header />
        <Cursor />
        <ScrollToTop />
        <main className="MainContainer">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
