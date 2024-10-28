import React from "react";
import Image from "next/image";
import { TrainCardProps } from "../_types/types";

const TrainCard: React.FC<TrainCardProps> = ({
  name,
  smallText,
  path,
  imageUrl,
  onClick,
}) => {
  return (
    <div className="flex flex-col items-center bg-gray-800 text-white text-2xl font-medium mb-4 px-6 py-8 rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 ">
      <Image
        src={imageUrl}
        alt={name}
        width={400}
        height={300}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <div>{name}</div>
      <div className="text-sm text-gray-400">{smallText}</div>
      <div className="text-sm text-gray-400">
        <button
          className="z-30 mt-5 bg-teal-800 px-5 text-white py-2 rounded-lg font-semibold hover:bg-teal-900"
          onClick={() => onClick(path)}
        >
          Read more
        </button>
      </div>
    </div>
  );
};

export default TrainCard;
