import React from "react";
import Hero from "@/app/_components/_trains/Hero";
import Bullet from "@/public/bullet.jpg";
import TrainImage1 from "@/public/bullet-train.jpg";
import TrainImage2 from "@/public/bullet2.jpg";
import TrainImage3 from "@/public/bullet3.jpg";
import { Timeline, TimelineSection } from "@/app/_components/TimeLine";
import Footer from "@/app/_components/Footer";

const BulletTrain = () => {
  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      <Hero title="Bullet Train" image={Bullet} subtitle="Shinkansen (Japan)" />
      <div className="absolute h-96 w-full -mt-80 bg-gradient-to-b from-[#3330] via-[#080808b9] to-[#080808]" />
      <div className="bg-gradient-to-b from-[#070707] to-[#111111]">
        <div className="container mx-auto p-4 space-y-16">
          <Timeline>
            <TimelineSection
              image={TrainImage1}
              title="History"
              text="Bullet trains are high-speed trains that operate in Japan. The first bullet train, the 0 Series Shinkansen, began service in 1964. Since then, Japan has developed several bullet train lines, including the Tokaido Shinkansen, which connects Tokyo and Osaka."
            />
            <TimelineSection
              image={TrainImage2}
              title="Present Day"
              text="The Tokaido Shinkansen is one of the busiest high-speed rail lines in the world. It carries millions of passengers each year and has a reputation for safety and punctuality. Japan continues to invest in its bullet train network, with plans to expand service to more cities and regions."
              flip
            />
            <TimelineSection
              image={TrainImage3}
              title="Future Prospects"
              text="Other countries, including China, France, and Spain, have developed their own high-speed rail networks inspired by Japan's bullet trains. These networks offer fast, efficient, and environmentally friendly transportation options for travelers. As technology advances, the future of high-speed rail looks promising."
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

export default BulletTrain;
