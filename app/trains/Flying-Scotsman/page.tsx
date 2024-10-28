import React from "react";
import Hero from "@/app/_components/_trains/Hero";
import FS from "@/public/FS.jpg";
import TrainImage1 from "@/public/flying-scotsman.jpg";
import TrainImage2 from "@/public/FS2.jpg";
import TrainImage3 from "@/public/FS3.jpg";
import { Timeline, TimelineSection } from "@/app/_components/TimeLine";
import Footer from "@/app/_components/Footer";

const FlyingScotsman = () => {
  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      <Hero
        title="Flying Scotsman (LNER)"
        image={FS}
        subtitle="United Kingdom (UK)"
      />
      <div className="absolute h-96 w-full -mt-80 bg-gradient-to-b from-[#3330] via-[#080808b9] to-[#080808]" />
      <div className="bg-gradient-to-b from-[#070707] to-[#111111]">
        <div className="container mx-auto p-4 space-y-16">
          <Timeline>
            <TimelineSection
              image={TrainImage1}
              title="History"
              text=" Between 1949 and 1952 it wore a BR Express Blue livery, after which it was painted in BR Brunswick Green. On 4 June 1950, now under British Railways ownership, Flying Scotsman was allocated to its new base at Leicester Central on the Great Central Railway, running passenger services to and from London Marylebone, London St Pancras, Leicester, Sheffield, and Manchester"
            />
            <TimelineSection
              image={TrainImage2}
              title="Present Day"
              text="The Flying Scotsman is now owned by the National Railway Museum in York, England. It is operated by the museum and is used for special events, excursions, and public displays. The Flying Scotsman is one of the most famous steam locomotives in the world and is a symbol of Britain's railway heritage."
              flip
            />
            <TimelineSection
              image={TrainImage3}
              title="Future Prospects"
              text="The Flying Scotsman continues to captivate railway enthusiasts and the general public alike. It is a living reminder of the golden age of steam travel and a testament to the skill and craftsmanship of the engineers who built and maintained it. The National Railway Museum is committed to preserving the Flying Scotsman for future generations to enjoy."
            />
          </Timeline>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default FlyingScotsman;
