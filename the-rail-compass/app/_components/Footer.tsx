"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#1a1a1a] text-white py-4 relative"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">The Rail Compass Team</h1>
          <p className="text-sm mt-2">ul. Studentska 1, Varna, Bulgaria</p>
          <p className="text-sm mt-2">Email: maksimralev27@itpg-varna.bg </p>
          <p className="text-sm">
            &copy; 2024 The Rail Compass. All rights reserved.
          </p>
        </div>
      </div>
      <div className="absolute bottom-4 right-4 flex space-x-4">
        <Link href="/" className="flex gap-2 justify-center items-center hover:text-gray-400 text-sm">
        <Image className="justify-center align-middle items-center content-center" src="/favicon.ico" alt="Home" width={20} height={20} />
          Home
        </Link>
        <Link
          href="https://github.com/Maximus019BG/"
          className="hover:text-gray-400 flex items-center space-x-2"
        >
          <FaGithub />
          <span>GitHub</span>
        </Link>
      </div>
    </motion.footer>
  );
};

export default Footer;
