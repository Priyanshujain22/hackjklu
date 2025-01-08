"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isRootRoute = pathname === "/";

  return (
    <html lang="en">
      <body className="">
        <Navbar />
        <div className={isRootRoute ? "" : "mt-24"}>
          {children}
        </div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
