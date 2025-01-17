"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className={`relative`}>
        <div className="absolute inset-0 bg-scrolling-pattern animate-bg-scroll"></div>
        <Navbar />
        {children}
        <Footer />
      </body>
      <style jsx>{`
        .bg-scrolling-pattern {
          background: url("/download.png")
            repeat 0 0;
          filter: invert(100%) sepia(100%) saturate(100%) hue-rotate(180deg)
            brightness(100%) contrast(100%);
        }

        @keyframes bg-scrolling-reverse {
          100% {
            background-position: 50px 50px;
          }
        }

        @keyframes bg-scrolling {
          0% {
            background-position: 50px 50px;
          }
        }

        :global(.animate-bg-scroll) {
          animation: bg-scrolling-reverse 2.92s infinite;
          animation-timing-function: linear;
        }
      `}</style>
    </html>
  );
}
