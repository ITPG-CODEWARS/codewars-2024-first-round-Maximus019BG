import React from "react";
import Hero from "@/app/_components/_trains/Hero";
import EuStar from "@/public/eurostarBg.jpg";
import TrainImage1 from "@/public/EuStar.jpg";
import TrainImage2 from "@/public/EuStar2.jpg";
import TrainImage3 from "@/public/EuStar3.jpg";
import { Timeline, TimelineSection } from "@/app/_components/TimeLine";
import Footer from "@/app/_components/Footer";

const Eurostar = () => {
  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      <Hero title="Eurostar" image={EuStar} subtitle="Western Europe" />
      <div className="absolute h-96 w-full -mt-80 bg-gradient-to-b from-[#3330] via-[#080808b9] to-[#080808]" />
      <div className="bg-gradient-to-b from-[#070707] to-[#111111]">
        <div className="container mx-auto p-4 space-y-16">
          <Timeline>
            <TimelineSection
              image={TrainImage1}
              title="History"
              text="The history of the Eurostar brand can be traced to the choice in 1986 of a rail tunnel to provide a cross-channel link between Britain and France. A previous attempt to construct a tunnel between the two nations had begun in 1974, but was quickly aborted. Construction began afresh in 1988. Eurotunnel was created to manage and own the tunnel, which was finished in 1993, the official opening taking place on 6 May 1994."
            />
            <TimelineSection
              image={TrainImage2}
              title="Present Day"
              text="Eurostar is a high-speed railway service connecting London with Amsterdam, Avignon, Brussels, Bourg-Saint-Maurice, Disneyland Paris, Lille, Lyon, Marseille, Paris, and Rotterdam. All its trains traverse the Channel Tunnel between the United Kingdom and France, owned and operated separately by ''Getlink''."
              flip
            />
            <TimelineSection
              image={TrainImage3}
              title="Future Prospects"
              text="Eurostar has faced financial difficulties due to the COVID-19 pandemic, which has led to a significant drop in passenger numbers. The company has received financial support from the UK government and its shareholders to help it weather the crisis. Eurostar is working to rebuild its business and restore services to pre-pandemic levels."
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

export default Eurostar;
