"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import CL20th from "@/public/20thCL.jpg";
import BulletTrain from "@/public/bullet-train.jpg";
import Eurostar from "@/public/eurostar.jpg";

const FamousTrains = () => {
  const router = useRouter();
  const trains = [
    {
      name: "20th Century Limited",
      path: "/trains/20th-Century-Limited",
      image:  CL20th.src,
    },
    {
      name: "Bullet Train",
      path: "/trains/Bullet-Train",
      image: BulletTrain.src,
    },
    {
      name: "Eurostar",
      path: "/trains/Eurostar",
      image: Eurostar.src,
    },
    {
      name: "20th Century Limited",
      path: "/trains/20th-Century-Limited",
      image:  CL20th.src,
    },
    {
      name: "Bullet Train",
      path: "/trains/Bullet-Train",
      image: BulletTrain.src,
    },
    {
      name: "Eurostar",
      path: "/trains/Eurostar",
      image: Eurostar.src,
    },
    {
      name: "20th Century Limited",
      path: "/trains/20th-Century-Limited",
      image:  CL20th.src,
    },
    {
      name: "Bullet Train",
      path: "/trains/Bullet-Train",
      image: BulletTrain.src,
    },
    {
      name: "Eurostar",
      path: "/trains/Eurostar",
      image: Eurostar.src,
    },
    {
      name: "20th Century Limited",
      path: "/trains/20th-Century-Limited",
      image:  CL20th.src,
    },
    {
      name: "Bullet Train",
      path: "/trains/Bullet-Train",
      image: BulletTrain.src,
    },
    {
      name: "Eurostar",
      path: "/trains/Eurostar",
      image: Eurostar.src,
    },
  ];

  const handleClick = (path: string) => {
    router.push(path);
  };

  return (
    <div className="flex flex-col items-center mb-10 h-full w-full">
      <h1 className="text-4xl font-bold mb-8 text-white">Newest trains</h1>
      <div className="w-full overflow-hidden">
        <motion.ul
          className="flex space-x-4 p-0"
          animate={{ x: ["0%", "-100%", "0%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {trains.map((train, index) => (
            <li
              key={index}
              className="flex-none bg-white text-gray-800 text-2xl font-medium mb-4 p-6 border border-gray-300 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer"
              onClick={() => handleClick(train.path)}
            >
              <Image
                src={train.image}
                alt={train.name}
                width={200}
                height={100}
                className="mb-2 rounded-lg"
              />
              {train.name}
            </li>
          ))}
          {trains.map((train, index) => (
            <li
              key={index + trains.length}
              className="flex-none bg-white text-gray-800 text-2xl font-medium mb-4 p-6 border border-gray-300 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer"
              onClick={() => handleClick(train.path)}
            >
              <Image
                src={train.image}
                alt={train.name}
                width={200}
                height={100}
                className="mb-2 rounded-lg"
              />
              {train.name}
            </li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default FamousTrains;
