import React from "react";
import Cards from "./Cards";
import AboutUs from "./AboutUs";

const Main: React.FC = () => {
  return (
    <div className="bg-[#080808] text-white mt-10 w-full h-full">
      <div className="w-screen flex justify-center">
        <div className="flex flex-col items-center mr-10 ml-5">
          <h1 className="text-3xl font-bold">
            What can you learn in this website?
          </h1>
          <Cards />
        </div>
      </div>
      <div className="w-screen h-full pr-2">
        <AboutUs />
      </div>
    </div>
  );
};

export default Main;
