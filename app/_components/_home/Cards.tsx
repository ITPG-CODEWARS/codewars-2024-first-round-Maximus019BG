"use client";
import React, { useEffect, useRef } from "react";

const Cards = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("animate-fadeIn", entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    const section = sectionRef.current;
    const children = section?.querySelectorAll("div") || [];
    children.forEach((child) => observer.observe(child));

    return () => {
      children.forEach((child) => observer.unobserve(child));
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="lg:flex md:flex-row gap-6 transition-opacity duration-1000 w-full mt-7 mb-5 overflow-x-hidden"
    >
      <div className="lg:w-1/3 py-10 px-4 bg-[#1a1a1a] rounded-lg mb-8 transform transition duration-500 delay-100 hover:scale-105 hover:shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">About Trains</h2>
        <p>
          Trains have been a crucial part of transportation for centuries. They
          offer a reliable and efficient means of travel for both passengers and
          freight. From steam engines to modern high-speed trains, the evolution
          of trains has been remarkable.
        </p>
      </div>
      <div className="lg:w-1/3 bg-[#1a1a1a] p-6 rounded-lg mb-8 transform transition duration-500 delay-300 hover:scale-105 hover:shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">History of Trains</h2>
        <p>
          The history of trains dates back to the early 19th century with the
          invention of the steam locomotive. Over the years, trains have evolved
          significantly, with advancements in technology leading to the
          development of electric and high-speed trains.
        </p>
      </div>
      <div className="lg:w-1/3 bg-[#1a1a1a] p-6 rounded-lg mb-8 transform transition duration-500 delay-500 hover:scale-105 hover:shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">Types of Trains</h2>
        <p>
          There are various types of trains, including passenger trains, freight
          trains, high-speed trains, and more. Each type serves a specific
          purpose and is designed to meet different transportation needs.
        </p>
      </div>

    </section>
  );
};

export default Cards;
