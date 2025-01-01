import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <Navbar />
        <div className="mt-24">
        {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
