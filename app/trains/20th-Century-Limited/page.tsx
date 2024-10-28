import React from "react";
import Hero from "@/app/_components/_trains/Hero";
import CenturyLimited20 from "@/public/20thCL.jpg";
import TrainImage1 from "@/public/20th_Century_Limited_north_car_GCT_jeh.jpg";
import TrainImage2 from "@/public/20th_Century_2.jpg";
import TrainImage3 from "@/public/20th_Century_Limited_cropped.jpg";
import { Timeline, TimelineSection } from "@/app/_components/TimeLine";
import Footer from "@/app/_components/Footer";
import OtherTrains from "@/app/_components/OtherTrains";

const CL20th = () => {
  return (
    <div className="min-h-screen  text-white overflow-x-hidden">
      <Hero
        title="20th Century Limited"
        image={CenturyLimited20}
        subtitle="New York Central Railroad (NYC)"
      />
      <div className="absolute h-96 w-full -mt-80 bg-gradient-to-b from-[#3330] via-[#080808b9] to-[#080808] " />
      <div className="bg-gradient-to-b from-[#070707] to-[#111111]">
        <div className="container mx-auto p-4 space-y-16">
          <Timeline>
            <TimelineSection
              image={TrainImage1}
              title="History"
              text="The 20th Century Limited first ran on June 15, 1902. It completed its run from New York to Chicago in 20 hours, four hours less than previous trains, and arrived three minutes ahead of schedule. It offered a barbershop and secretarial services."
            />
            <TimelineSection
              image={TrainImage2}
              title="Present Day"
              text="Amtrak (different train) now operates the Lake Shore Limited between New York Penn Station and Chicago Union Station. It follows a route similar to the 20th Century's, except west of Whiting, Indiana (near Chicago), where it switches to the former Pennsylvania Railroad's Pittsburgh, Fort Wayne and Chicago Railway."
              flip
            />
            <TimelineSection
              image={TrainImage3}
              title="Future Prospects"
              text="There are ongoing discussions about reviving luxury train services similar to the 20th Century Limited. These services aim to provide a unique travel experience combining modern amenities with the charm of historical train journeys."
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

export default CL20th;
