import React from 'react';
import Image from 'next/image';
import { TrainCardProps } from '../_types/types';

const TrainCard: React.FC<TrainCardProps> = ({ name, path, imageUrl, onClick }) => {
  return (
    <div
      className="flex flex-col items-center bg-gray-800 text-white text-2xl font-medium mb-4 px-6 py-8 rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 "
      onClick={() => onClick(path)}
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