import "../src/scss/index.scss";
import Header from "@/components/Header";
import Cursor from "@/components/Cursor";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
