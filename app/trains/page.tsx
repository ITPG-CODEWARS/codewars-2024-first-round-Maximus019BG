"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import TrainList from '../_components/TrainList';
import CL20th from '@/public/20thCL.jpg';
import FlyingScotsman from '@/public/flying-scotsman.jpg';
import GoldenArrow from '@/public/golden-arrow.jpg';
import BulletTrain from '@/public/bullet-train.jpg';
import Eurostar from '@/public/eurostar.jpg';

const TrainsPage = () => {
  const router = useRouter();
  const trains = [
    { name: '20th Century Limited', path: '/trains/20th-Century-Limited', imageUrl: CL20th.src },
    { name: 'Flying Scotsman', path: '/trains/Flying-Scotsman', imageUrl: FlyingScotsman.src },
    { name: 'Golden Arrow', path: '/trains/Golden-Arrow', imageUrl: GoldenArrow.src },
    { name: 'Bullet Train', path: '/trains/Bullet-Train', imageUrl: BulletTrain.src },
    { name: 'Eurostar', path: '/trains/Eurostar', imageUrl: Eurostar.src }
  ];

  const handleTrainClick = (path: string) => {
    router.push(path);
  };

  return (
    <div className="flex flex-col items-center h-full w-full bg-gradient-to-br from-[#061719] via-black to-black">
      <h1 className="text-4xl font-bold mb-8 mt-5 text-white ">Choose a train you would like to see</h1>
      <TrainList trains={trains} onTrainClick={handleTrainClick} />
    </div>
  );
};

export default TrainsPage;