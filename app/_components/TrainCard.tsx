import React from 'react';
import Image from 'next/image';

interface TrainCardProps {
  name: string;
  path: string;
  imageUrl: string;
  onClick: (path: string) => void;
}

const TrainCard: React.FC<TrainCardProps> = ({ name, path, imageUrl, onClick }) => {
  return (
    <div
      className="flex flex-col items-center bg-gray-800 text-white text-2xl font-medium mb-4 p-6 rounded-lg "
      onClick={() => onClick(path)}
      role="button"
      aria-label={`View details of ${name}`}
    >
      <Image
        src={imageUrl}
        alt={name}
        width={400}
        height={300}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <div>{name}</div>
    </div>
  );
};

export default TrainCard;