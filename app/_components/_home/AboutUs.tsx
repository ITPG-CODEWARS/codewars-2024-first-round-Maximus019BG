"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const cards = [
    {
        id: 1,
        title: 'Our Mission',
        content: 'At RailCompass, our mission is to provide comprehensive rail guidance and empower people to explore and understand the fascinating world of trains. Whether you are a rail enthusiast, a casual traveler, or someone new to the subject, we strive to offer reliable and insightful information about the railways, their history, and their modern-day significance.'
      },
      {
        id: 2,
        title: 'Why Us?',
        content: 'RailCompass stands out as the go-to platform for train enthusiasts and learners alike. With expert insights, accurate details, and up-to-date information, we provide a user-friendly experience for anyone curious about trains. Whether you’re looking for technical guidance, historical context, or travel tips, RailCompass delivers it all under one roof.'
      },
      {
        id: 3,
        title: 'Our Values',
        content: 'At RailCompass, we are driven by Integrity, Excellence, and Innovation. Integrity ensures that the information we provide is accurate and reliable. Excellence drives us to continually improve our platform and offer the highest quality content. Innovation keeps us ahead, as we embrace the latest developments and emerging trends in the rail industry.'
      }
      
  ];

  const handleCardClick = (id: number) => {
    setSelectedCard(selectedCard === id ? null : id);
  };

  return (
    <div className="flex flex-col items-center mb-10 h-full ml-[1%] w-[98%]">
      <h1 className="text-4xl font-bold mb-8 text-white">About Us</h1>
      <div className="w-full mb-1 space-y-6">
        {cards.map(card => (
          <motion.div
            key={card.id}
            className="text-white px-5 py-6 border-t-2 border-b-2 border-gray-300 cursor-pointer w-full flex justify-between items-center"
            onClick={() => handleCardClick(card.id)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className={`flex flex-col ${selectedCard !== card.id ? 'justify-center' : ''}`}>
              <h2 className="text-3xl font-bold">{card.title}</h2>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: selectedCard === card.id ? 'auto' : 0, opacity: selectedCard === card.id ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="mt-4 overflow-hidden"
              >
                <p className='text-xl'>{card.content}</p>
              </motion.div>
            </div>
            <motion.div
              className="text-3xl"
              animate={{ rotate: selectedCard === card.id ? 45 : 0 }}
              transition={{ duration: 0.5 }}
            >
              +
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;