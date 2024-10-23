"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const FamousTrains = () => {
  const router = useRouter();
  const trains = [
    { name: '20th Century Limited', path: '/trains/20th-Century-Limited' },
    { name: 'Trans-Siberian Express', path: '/trains/Trans-Siberian-Express' },
    { name: 'Orient Express', path: '/trains/Orient-Express' },
    { name: 'Flying Scotsman', path: '/trains/Flying-Scotsman' },
    { name: 'Golden Arrow', path: '/trains/Golden-Arrow' },
    { name: 'Blue Train', path: '/trains/Blue-Train' },
    { name: 'Bullet Train', path: '/trains/Bullet-Train' },
    { name: 'TGV', path: '/trains/TGV' },
    { name: 'Eurostar', path: '/trains/Eurostar' }
  ];

  const handleClick = (path: string) => {
    router.push(path);
  };

  return (
    <div className="flex flex-col items-center mb-10 h-full ml-[1%] w-[98%]">
      <h1 className="text-4xl font-bold mb-8 text-white">Chose a train you would like to see</h1>
      <div className="w-full overflow-hidden">
        <motion.ul
          className="flex space-x-4 p-0"
          animate={{ x: ['0%', '-100%'] }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        >
          {trains.map((train, index) => (
            <li
              key={index}
              className="flex-none bg-white text-gray-800 text-2xl font-medium mb-4 p-6 border border-gray-300 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer"
              onClick={() => handleClick(train.path)}
            >
              {train.name}
            </li>
          ))}
          {trains.map((train, index) => (
            <li
              key={index + trains.length}
              className="flex-none bg-white text-gray-800 text-2xl font-medium mb-4 p-6 border border-gray-300 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer"
              onClick={() => handleClick(train.path)}
            >
              {train.name}
            </li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default FamousTrains;