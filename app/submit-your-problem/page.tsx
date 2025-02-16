"use client";

import SignupFormDemo from "@/components/form-demo";

export default function StatementProviderPage() {
  return (
    <section id="themes" className="bg-[var(--background)] min-h-screen flex items-center justify-center relative">
      {/* Form Container */}
      <div className="relative z-10">
        <SignupFormDemo />
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 bg-scrolling-pattern animate-bg-scroll"></div>
    </section>
  );
}
