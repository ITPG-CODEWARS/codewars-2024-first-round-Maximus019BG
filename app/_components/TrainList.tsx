import React, { memo } from "react";
import TrainCard from "./TrainCard";
import { TrainListProps } from "../_types/types";


const TrainList: React.FC<TrainListProps> = memo(({ trains, onTrainClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 rounded-lg mb-10">
      {trains.map(({ name, path, imageUrl, smallText }, index) => (
        <div key={index}>
          <TrainCard
            name={name}
            path={path}
            smallText={smallText}
            imageUrl={imageUrl}
            onClick={onTrainClick}
          />
        </div>
      ))}
      <div className="flex flex-col items-center justify-center bg-gradient-to-r from-gray-800 to-gray-900 text-white text-2xl font-medium mb-4 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">Coming Soon</h1>
          <p className="text-lg">More trains coming soon</p>
        </div>
      </div>
    </div>
  );
});

TrainList.displayName = "TrainList";

export default TrainList;