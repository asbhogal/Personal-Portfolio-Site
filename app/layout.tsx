import "../src/scss/index.scss";
import Header from "@/components/Header";
import Cursor from "@/components/Cursor";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";

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
