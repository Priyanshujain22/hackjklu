// "use client";

// import { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import Header from "../Header/Header";
// import VariableFontCursorProximity from "../ui/VariableFontCursorProximity";
// import AboutStrip from "@/components/AboutStrip/AboutStrip";

// const About = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [isLargeScreen, setIsLargeScreen] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsLargeScreen(window.innerWidth >= 1024);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <section id="about" className="relative" ref={containerRef}>
//       <AboutStrip />
//       <h2 className="text-center my-5 sm:my-10">
//         <Header text="About Us" />
//       </h2>
//       <div className="px-4 sm:px-8 lg:px-16">
//         <div className="text-sm lg:text-base flex flex-col md:flex-row items-center my-4 sm:my-6 lg:my-8">
//           <div className="w-full lg:p-6 leading-relaxed order-2 md:order-1">
//             <div>
//               {isLargeScreen ? (
//                 <>
//                   <div className="mb-4">
//                     <VariableFontCursorProximity
//                       label={`We gladly announce the return of HackJKLU, a premier national-level hackathon hosted by Council of Technical Affairs at JK Lakshmipat University (JKLU), a leading institution in innovation, technology, and interdisciplinary education. This exciting event takes place within the span of 3 days bringing together top-tier talent from across the nation to solve real-world challenges that impact industries, communities, and the environment.`}
//                       className="tracking-wide text-sm sm:text-base lg:text-lg"
//                       fromFontVariationSettings="'wght' 400, 'slnt' 0"
//                       toFontVariationSettings="'wght' 900, 'slnt' -10"
//                       falloff="gaussian"
//                       radius={70}
//                       containerRef={containerRef}
//                     />
//                   </div>
//                   <div>
//                     <VariableFontCursorProximity
//                       label={`This year's hackathon goes beyond traditional competitions—HackJKLU v4.0 fosters a collaborative ecosystem for interdisciplinary problem-solving and empowers participants to make meaningful contributions to global issues.`}
//                       className="tracking-wide text-sm sm:text-base lg:text-lg"
//                       fromFontVariationSettings="'wght' 400, 'slnt' 0"
//                       toFontVariationSettings="'wght' 900, 'slnt' -10"
//                       falloff="gaussian"
//                       radius={70}
//                       containerRef={containerRef}
//                     />
//                   </div>
//                 </>
//               ) : (
//                 <>
//                   <div className="mb-4">
//                     <p className="tracking-wide text-sm sm:text-base lg:text-lg text-justify">
//                       We gladly announce the return of HackJKLU, a premier national-level hackathon hosted by Council of Technical Affairs at JK Lakshmipat University (JKLU), a leading institution in innovation, technology, and interdisciplinary education. This exciting event takes place within the span of 3 days bringing together top-tier talent from across the nation to solve real-world challenges that impact industries, communities, and the environment.
//                     </p>
//                   </div>
//                   <div>
//                     <p className="tracking-wide text-sm sm:text-base lg:text-lg text-justify">
//                       This year&apos;s hackathon goes beyond traditional competitions—HackJKLU v4.0 fosters a collaborative ecosystem for interdisciplinary problem-solving and empowers participants to make meaningful contributions to global issues.
//                     </p>
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>
//           <div className="w-full flex items-center justify-center order-1 md:order-2 mb-6 sm:mb-8 lg:mb-10">
//             <Image
//               src="/hackjklu-logo.png"
//               alt="HackJKLU logo"
//               width={300}
//               height={300}
//               className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px]"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;



import Image from "next/image";
import Header from "../Header/Header";
import AboutStrip from "@/components/AboutStrip/AboutStrip";

const About = () => {
  return (
    <section id="about" className="relative">
      <AboutStrip />
      <h2 className="text-center my-5 sm:my-10">
        <Header text="About Us" />
      </h2>
      <div className="px-10 lg:px-16">
        <div className="text-sm lg:text-base flex flex-col md:flex-row items-center my-4 sm:my-6 lg:my-8">
          <div className="w-full lg:p-6 leading-relaxed order-2 md:order-1">
            <div className="mb-4">
              <p className="tracking-wide text-base sm:text-lg lg:text-xl text-justify">
                We gladly announce the return of HackJKLU, a premier national-level hackathon hosted by Council of Technical Affairs at JK Lakshmipat University (JKLU), a leading institution in innovation, technology, and interdisciplinary education. This exciting event takes place within the span of 3 days bringing together top-tier talent from across the nation to solve real-world challenges that impact industries, communities, and the environment.
              </p>
            </div>
            <div>
              <p className="tracking-wide text-base sm:text-lg lg:text-xl text-justify">
                This year&apos;s hackathon goes beyond traditional competitions HackJKLU v4.0 fosters a collaborative ecosystem for interdisciplinary problem-solving and empowers participants to make meaningful contributions to global issues.
              </p>
            </div>
          </div>
          <div className="w-full flex items-center justify-center order-1 md:order-2 mb-6 sm:mb-8 lg:mb-10">
            <div className=" w-[100%] sm:w-[50%] md:w-[90%] lg:w-[98%] xl:w-[45%] max-w-[400px]">
              <Image
                src="/hackjklu-logo.png"
                alt="HackJKLU logo"
                width={300}
                height={300}
                className="object-contain w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
