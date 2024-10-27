import { ReactNode } from "react";
import Image from "next/image";
import { SectionProps } from "../_types/types";

export const Timeline = ({ children }: { children: ReactNode }) => (
  <div className="relative">
    <div className="absolute left-0 transform -translate-x-1/2 h-full border-l-2 border-gray-400 md:left-1/2"></div>
    <div className="space-y-16">{children}</div>
  </div>
);

export const TimelineSection = ({
  image,
  title,
  text,
  flip,
}: SectionProps & { flip?: boolean }) => (
  <div
    className={`relative flex flex-col md:flex-row ${
      flip ? "md:flex-row-reverse" : "md:flex-row"
    } items-center `}
  >
    <div className="w-full md:w-1/2 p-6 transform transition-transform duration-300 hover:scale-105">
      <Image
        src={image.src}
        width={525}
        height={450}
        alt={title}
        className={`rounded-lg shadow-lg max-w-full ${flip ?'ml-14':''}`}
      />
    </div>
    <div className="w-full md:w-1/2 p-6 transform transition-transform duration-300 hover:scale-105">
      <h1
        className={`mb-4 text-4xl font-extrabold text-gray-300 ${ flip ? "" : "ml-14" }`}>
        {title}
      </h1>
      <p className={`text-lg leading-relaxed ${flip ? "" : "ml-14"}`}>{text}</p>
    </div>
    <div className="absolute -ml-[7px] left-0 w-4 h-4 bg-gray-400 rounded-full border-2 border-gray-800 md:left-1/2" />
  </div>
);
