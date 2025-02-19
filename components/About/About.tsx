import Image from "next/image";
import Header from "../Header/Header";
import AboutStrip from "@/components/AboutStrip/AboutStrip";

const About = () => {
  return (
    <section id="about" className="pb-5 relative bg-black/50">
      <AboutStrip />
      <h2 className="text-center my-5 sm:my-10">
        <Header text="About Us" />
      </h2>
      <div className="px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row items-stretch gap-6 lg:gap-8">
          {/* Text Content */}
          <div className="w-full md:w-2/3 order-2 md:order-1 flex flex-col justify-center h-full min-h-[300px] md:min-h-[350px] space-y-4 lg:space-y-6 leading-relaxed">
            <p className="tracking-wide text-base sm:text-lg lg:text-xl text-justify">
              We gladly announce the return of HackJKLU, a premier national-level hackathon hosted by the Council of Technical Affairs at JK Lakshmipat University (JKLU), a leading institution in innovation, technology, and interdisciplinary education. This exciting event spans three days, bringing together top-tier talent from across the nation to solve real-world challenges that impact industries, communities, and the environment.
            </p>
            <p className="tracking-wide text-base sm:text-lg lg:text-xl text-justify">
              This year&apos;s hackathon goes beyond traditional competitions. HackJKLU v4.0 fosters a collaborative ecosystem for interdisciplinary problem-solving and empowers participants to make meaningful contributions to global issues.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/3 flex justify-center items-center order-1 md:order-2 h-full min-h-[300px] md:min-h-[350px]">
            <div className="w-[60%] sm:w-[70%] md:w-[80%] lg:w-[90%] xl:w-[60%] max-w-[350px] h-full">
              <Image
                src="/hackjklu-logo.webp"
                alt="HackJKLU logo"
                width={300}
                height={300}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
