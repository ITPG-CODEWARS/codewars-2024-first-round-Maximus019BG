"use client";
import React, { useRef, useEffect } from "react";
import Hero from "@/app/_components/_type1/Hero";
import CenturyLimited20 from "@/public/20thCL.jpg";
import Image from "next/image";
import TrainImage1 from "@/public/20th_Century_Limited_north_car_GCT_jeh.jpg";
import TrainImage2 from "@/public/20th_Century_2.jpg";
import TrainImage3 from "@/public/20th_Century_Limited_cropped.jpg";

const CL20th = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      let isScrolling = false;

      const onWheel = (event: WheelEvent) => {
        event.preventDefault();
        if (!isScrolling) {
          isScrolling = true;
          requestAnimationFrame(() => {
            scrollContainer.scrollBy({
              left: event.deltaY * 3, //multiplier for scroll speed
              behavior: "smooth",
            });
            isScrolling = false;
          });
        }
      };

      scrollContainer.addEventListener("wheel", onWheel);

      return () => {
        scrollContainer.removeEventListener("wheel", onWheel);
      };
    }
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      className="overflow-x-auto whitespace-nowrap h-screen w-screen flex no-scrollbar"
      style={{
        scrollBehavior: "smooth",
      }}
    >
      <div className="inline-block w-screen">
        <Hero
          title="20th Century Limited"
          image={CenturyLimited20}
          subtitle="New York Central Railroad (NYC)"
        />
      </div>
      <div className="relative w-screen mr-80">
        <div className="inline-block p-4 flex items-center">
          <div className="p-4 flex items-center mx-auto">
            <Image
              src={TrainImage1.src}
              width={350}
              height={350}
              alt="Train"
              className="mr-4 rounded-lg shadow-lg"
            />
            <div className="max-w-lg w-96 text-left">
              <h1 className="mb-4 text-3xl font-bold leading-relaxed">
                History
              </h1>
              <p className="text-lg leading-relaxed">
                The 20th Century Limited first ran on June 15, 1902. It
                completed
                <br />
                its run from New York to Chicago in 20 hours, four hours less
                than
                <br />
                previous trains, and arrived three minutes ahead of schedule. It
                <br />
                offered a barbershop and secretarial services.
              </p>
            </div>
          </div>
        </div>
        <div className="inline-block p-4 flex items-center">
          <div className="p-4 flex items-center max-w-screen-lg mx-auto">
            <Image
              src={TrainImage2.src}
              width={350}
              height={300}
              alt="Train"
              className="mr-4 rounded-lg shadow-lg"
            />
            <div className=" text-left">
              <h1 className="mb-4  text-3xl font-bold leading-relaxed">
                Present day
              </h1>
              <p className="text-lg leading-relaxed">
                Amtrak (different train) now operates the Lake Shore
                <br /> Limited betweenNew York Penn Station and Chicago Union
                <br /> Station. It follows a route similar to the 20th
                Century&apos;s,
                <br /> except west of Whiting, Indiana (near Chicago), where it
                <br /> switches to the former Pennsylvania Railroad&apos;s
                Pittsburgh, <br />
                Fort Wayne and Chicago Railway.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-screen inline-block p-4 flex items-center justify-center ml-10">
        <div className="p-4 flex items-center">
          <Image
            src={TrainImage3.src}
            width={350}
            height={300}
            alt="Train"
            className="mr-4 rounded-lg shadow-lg"
          />
          <div className=" text-left">
            <h1 className="mb-4  text-3xl font-bold leading-relaxed px-4">
              Future Prospects
            </h1>
            <p className="text-lg leading-relaxed px-4">
              There are ongoing discussions about reviving <br />luxury train
               services similar to the <br />20th Century Limited. These
               services aim<br /> to provide a unique travel experience
               combining<br /> modern amenities with the charm of<br />
               historical train journeys.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CL20th;