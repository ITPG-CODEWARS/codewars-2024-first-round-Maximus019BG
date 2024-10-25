import React, { memo } from 'react';
import TrainCard from './TrainCard';

interface TrainListProps {
  trains: { name: string; path: string; imageUrl: string }[];
  onTrainClick: (path: string) => void;
}

const TrainList: React.FC<TrainListProps> = memo(({ trains, onTrainClick }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-4 rounded-lg shadow-lg">
      {trains.map(({ name, path, imageUrl }, index) => (
        <TrainCard
          key={index}
          name={name}
          path={path}
          imageUrl={imageUrl}
          onClick={onTrainClick}
        />
      ))}
    </div>
  );
});

TrainList.displayName = 'TrainList';

export default TrainList;