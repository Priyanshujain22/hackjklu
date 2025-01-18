import Header from "@/components/Header/Header";
import { Card } from "@/components/ui/card";
import { Linkedin, Youtube, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import phoneImg from "@/public/Contact/phone.png";

export default function ContactPage() {
  return (
    <>
      <section className="px-10 md:px-20 relative pt-24">
        <div className="mx-auto space-y-12 text-white">
          <div className="flex items-start pb-8 md:pb-16">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h1 className="text-[42px] md:text-6xl lg:text-8xl font-black leading-tight">
                  How can we
                  <br />
                  Help you?
                </h1>
                <div className="block md:hidden">
                  <Image src={phoneImg} alt="phone" height={100} width={100} />
                </div>
              </div>

              <p className=" text-xl font-medium max-w-lg md:max-w-xl lg:max-w-2xl xl:maw-w-3xl">
                Hacker Experience is what we prioritize! Have questions, need
                assistance, or just want to connect? Feel free to reach out!
              </p>
            </div>
            <div className="hidden md:block mx-auto">
              <Image
                src={phoneImg}
                alt="phone"
                className="md:w-[168px] lg:w-[200px] xl:w-[220px]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-black">Call Us</h2>
              <div className="flex flex-col font-medium">
                <p className="text-base  font-medium">
                  Promotion and Outreach: +91 93511 87511 (Rachit)
                </p>
                <p className="text-base font-medium">
                  Registrations: +91 93133 08922 (Karan)
                </p>
                <p className="text-base font-medium">
                  Hospitality: +91 98282 23577 (Niharika)
                </p>
              </div>
            </div>

            <div className="space-y-2 col-span-2 md:col-span-1">
              <h2 className="text-3xl md:text-4xl font-black">Address</h2>
              <div className="flex flex-col font-medium">
                <p className="text-base  font-medium">
                  JK LAKSHMIPAT UNIVERSITY, P.O. 302 026,
                </p>
                <p className="text-base font-medium">
                  MAHAPURA RD, NEAR MAHINDRA SEZ,
                </p>
                <p className="text-base font-medium">
                  MAHAPURA, RAJASTHAN 302026
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-black">Mail Us</h2>
              <div className="space-y-1 flex flex-col  font-medium">
                <Link target="_blank" href={"mailto:hackjklu@jklu.edu.in"}>
                  hackjklu@jklu.edu.in
                </Link>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-black">Social Media</h2>
              <div className="flex gap-4">
                <Link
                  target="_blank"
                  href={"https://www.instagram.com/hackjklu"}
                >
                  <Instagram size={40} />
                </Link>
                <Link
                  target="_blank"
                  href={"https://www.youtube.com/@CouncilofTechnicalAffairs"}
                >
                  <Youtube size={40} />
                </Link>
                <Link
                  target="_blank"
                  href={"https://www.linkedin.com/in/council-of-technical-affairs-jklu/"}
                >
                  <Linkedin size={40} scale={2} />
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl xl:text-5xl text-center font-black">
              Reaching JK LAKSHMIPAT UNIVERSITY
            </h2>
            <div className="aspect-video w-full rounded-3xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.117070008914!2d75.64722912457951!3d26.836228513374916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4af4fe68f403%3A0x3bf05f95df22b8c4!2sJK%20Lakshmipat%20University!5e0!3m2!1sen!2sin!4v1695563431231!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
