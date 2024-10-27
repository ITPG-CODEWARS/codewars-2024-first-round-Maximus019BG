"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/app/favicon.ico";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row bg-gray-800 p-4 shadow-md items-center overflow-hidden">
        <div className="flex justify-between w-full md:w-auto items-center">
          <button
            className="text-white 2xl:hidden xl:hidden lg:hidden md:hidden"
            onClick={toggleMenu}
          >
            ☰
          </button>
          <div className="text-white hover:text-gray-400 md:hidden">
            <Link href="/">
              <Image
                src={Logo}
                alt="Logo"
                width={30}
                height={30}
                className="rounded-full"
              />
            </Link>
          </div>
        </div>
        <div className="hidden md:flex flex-1 gap-5 ml-4">
          <div className="text-white hover:text-gray-400">
            <Link href="/">Home</Link>
          </div>
          <div className="text-white hover:text-gray-400">
            <Link href="/trains">Trains</Link>
          </div>
        </div>
        <div className="hidden md:flex text-white hover:text-gray-400">
          <Link href="/">
            <Image
              src={Logo}
              alt="Logo"
              width={30}
              height={30}
              className="rounded-full"
            />
          </Link>
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={toggleMenu}
          ></div>
          <div className="relative bg-gray-800 w-64 p-4 shadow-lg z-50">
            <div className="text-white hover:text-gray-400">
              <Link href="/">Home</Link>
            </div>
            <div className="text-white hover:text-gray-400 mb-4">
              <Link href="/trains" onClick={toggleMenu}>
                Trains
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
