"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/app/favicon.ico";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
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
        <div className="hidden md:flex flex-1 gap-5 ml-4 -mb-1">
          <div className="text-white hover:text-gray-400">
            <Link href="/">Home</Link>
          </div>
          <div className="text-white hover:text-gray-400">
            <button onClick={toggleDropdown} className="flex items-center">
              Trains{" "}
              <span className="font-bold font-mono ml-1 -mb-2 ">
                {isDropdownOpen ? "˄" : "˅"}
              </span>
            </button>
            {isDropdownOpen && (
              <div className="absolute bg-gray-700 mt-2 rounded shadow-lg">
                <div className="text-white hover:text-gray-400 p-2">
                  <Link href="/trains">All Trains</Link>
                </div>
                <div className="text-white hover:text-gray-400 p-2">
                  <Link href="/trains/20th-Century-Limited">
                    20th Century Limited
                  </Link>
                </div>
                <div className="text-white hover:text-gray-400 p-2">
                  <Link href="/trains/Flying-Scotsman">Flying Scotsman</Link>
                </div>
                <div className="text-white hover:text-gray-400 p-2">
                  <Link href="/trains/Golden-Arrow">Golden Arrow</Link>
                </div>
                <div className="text-white hover:text-gray-400 p-2">
                  <Link href="/trains/Bullet-Train">Bullet Train</Link>
                </div>
                <div className="text-white hover:text-gray-400 p-2">
                  <Link href="/trains/Eurostar">Eurostar</Link>
                </div>
              </div>
            )}
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
              <button onClick={toggleMobileDropdown} className="flex items-center">
                Trains{" "}
                <span className="font-bold font-mono ml-1 -mb-2  ">
                  {isMobileDropdownOpen ? "˄" : "˅"}
                </span>
              </button>
              {isMobileDropdownOpen && (
                <div className="mt-2">
                  <div className="text-white hover:text-gray-400 p-2">
                    <Link href="/trains" onClick={toggleMenu}>
                      All Trains
                    </Link>
                  </div>
                  <div className="text-white hover:text-gray-400 p-2">
                    <Link
                      href="/trains/20th-Century-Limited"
                      onClick={toggleMenu}
                    >
                      20th Century Limited
                    </Link>
                  </div>
                  <div className="text-white hover:text-gray-400 p-2">
                    <Link href="/trains/Flying-Scotsman" onClick={toggleMenu}>
                      Flying Scotsman
                    </Link>
                  </div>
                  <div className="text-white hover:text-gray-400 p-2">
                    <Link href="/trains/Golden-Arrow" onClick={toggleMenu}>
                      Golden Arrow
                    </Link>
                  </div>
                  <div className="text-white hover:text-gray-400 p-2">
                    <Link href="/trains/Bullet-Train" onClick={toggleMenu}>
                      Bullet Train
                    </Link>
                  </div>
                  <div className="text-white hover:text-gray-400 p-2">
                    <Link href="/trains/Eurostar" onClick={toggleMenu}>
                      Eurostar
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;