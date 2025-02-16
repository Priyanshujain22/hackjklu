import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="fixed inset-0 bg-scrolling-pattern animate-bg-scroll"></div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}