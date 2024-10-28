import React from "react";
import Hero from "@/app/_components/_trains/Hero";
import GAbg from "@/public/GAbg.jpg";
import TrainImage1 from "@/public/flying-scotsman.jpg";
import TrainImage2 from "@/public/FS2.jpg";
import TrainImage3 from "@/public/FS3.jpg";
import { Timeline, TimelineSection } from "@/app/_components/TimeLine";
import Footer from "@/app/_components/Footer";
import OtherTrains from "@/app/_components/OtherTrains";

const GoldenArrow = () => {
  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      <Hero title="Golden Arrow (Flèche d&apos;Or)" image={GAbg} subtitle="United Kingdom (UK)" />
      <div className="absolute h-96 w-full -mt-80 bg-gradient-to-b from-[#3330] via-[#080808b9] to-[#080808]" />
      <div className="bg-gradient-to-b from-[#070707] to-[#111111]">
        <div className="container mx-auto p-4 space-y-16">
          <Timeline>
            <TimelineSection
              image={TrainImage1}
              title="History"
              text="The Flèche d&apos;Or was introduced in 1926 as an all-first-class Pullman service between Paris and Calais. On 15 May 1929, the Southern Railway introduced the equivalent between London Victoria and Dover while simultaneously launching a new first class only ship, the Canterbury, for the ferry crossing. The train usually consisted of 10 British Pullman cars, hauled by one of the Southern Railway's Lord Nelson class locomotives, and took 98 minutes to travel between London and Dover."
            />
            <TimelineSection
              image={TrainImage2}
              title="Present Day"
              text="The Golden Arrow was withdrawn in 1972, when the Pullman cars were transferred to the VSOE. The service was briefly revived in 1985 as a luxury charter train, but was withdrawn again in 1994. The Golden Arrow name has since been used for various luxury train services, including the Venice Simplon-Orient-Express and the British Pullman."
              flip
            />
            <TimelineSection
              image={TrainImage3}
              title="Future Prospects"
              text="The Golden Arrow name remains synonymous with luxury train travel and the glamour of the 1920s and 1930s. The Venice Simplon-Orient-Express and British Pullman continue to offer passengers a taste of the Golden Arrow's opulence and elegance. These services provide a unique travel experience that harks back to a bygone era of luxury and sophistication."
            />
          </Timeline>
        </div>
        <OtherTrains />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default GoldenArrow;
