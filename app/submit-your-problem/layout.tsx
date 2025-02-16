import { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Submit Your Problem | HackJKLU v4.0",
    description: "Submit your problem statements and be part of HackJKLU v4.0. Contribute innovative ideas and collaborate with like-minded individuals.",
    keywords: [
        "submit problem",
        "hackathon",
        "HackJKLU",
        "innovation",
        "problem statement",
        "technology event",
        "Jaipur",
        "JK Lakshmipat University"
    ],
    openGraph: {
        title: "Submit Your Problem | HackJKLU v4.0",
        description: "Submit your problem statements and be part of HackJKLU v4.0. Contribute innovative ideas and collaborate with like-minded individuals.",
        url: "https://www.hackjklu.com/submit-your-problem",
        type: "website",
    },
    twitter: {
        title: "Submit Your Problem | HackJKLU v4.0",
        description: "Submit your problem statements and be part of HackJKLU v4.0. Contribute innovative ideas and collaborate with like-minded individuals.",
        card: "summary_large_image",
    },
};

interface SubmitProblemLayoutProps {
    children: ReactNode;
}

export default function SubmitProblemLayout({ children }: SubmitProblemLayoutProps) {
    return <>{children}</>;
}