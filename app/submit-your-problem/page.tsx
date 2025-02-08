"use client";

import SignupFormDemo from "../../components/form-demo";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   description: "Provide exciting problem statements for HackJKLU v4.0, the premier hackathon at JK Lakshmipat University. Share your challenge with the next generation of innovators!",
//   keywords: ["hackathon", "HackJKLU", "problem statement", "tech competition", "innovation"],
//   openGraph: {
//     title: "Provide Problem Statements for HackJKLU v4.0",
//     description: "Contribute to HackJKLU v4.0 by submitting your problem statements. Inspire participants to solve real-world challenges.",
//     url: "https://www.hackjklu.com/statement-provider",
//     type: "website",
//   },
//   twitter: {
//     title: "Provide Problem Statements for HackJKLU v4.0",
//     description: "Submit your problem statements to HackJKLU v4.0 and challenge the best minds to innovate and create solutions.",
//     card: "summary_large_image",
//   },
// };

export default function StatementProviderPage() {
  return (
    <>
      <section id="themes" className="bg-[var(--background)] min-h-screen flex items-center justify-center relative">
        {/* Form Container */}
        <div className="relative z-10">
          <SignupFormDemo />
        </div>

        {/* Background Animation */}
        <div className="absolute inset-0 bg-scrolling-pattern animate-bg-scroll"></div>
        <style jsx>{`
        .bg-scrolling-pattern {
          background: url("/download.png") repeat 0 0;
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
      </section>
    </>
  );
}