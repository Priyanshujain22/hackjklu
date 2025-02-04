import { notFound } from "next/navigation";
import sponsors  from "@/data/sponsors.json";
import Image from "next/image";

interface SponsorPageProps {
  params: { sponsorName: string };
}

export default function SponsorPage({ params }: SponsorPageProps) {
  const sponsor = sponsors.find((s) => s.id === params.sponsorName);

  if (!sponsor) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <div className="max-w-4xl w-full bg-white p-6 rounded-2xl shadow-lg text-center">
        <Image
          src={sponsor.logoUrl}
          alt={sponsor.name}
          width={200}
          height={200}
          className="mx-auto mb-4"
        />
        <h1 className="text-3xl font-bold text-gray-900">{sponsor.name}</h1>
        <p className="text-gray-600 mt-2">{sponsor.description}</p>
        <a
          href={sponsor.website}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700"
        >
          Visit Website
        </a>
      </div>
    </div>
  );
}
