import React from "react";

const NavBar = () => {
  return (
    <div className="flex">
      <div className="flex flex-1 gap-5">
        <div className="">
          <a href="/">Home</a>
        </div>
        <div className="">
          <a href="/about">About</a>
        </div>
        <div className="">
          <a href="/contact">Contact</a>
        </div>
      </div>
      <div className="flex flex-1 gap-5">
        <div className="">
          <a href="/">Language</a>
        </div>
        <div className="">Mode</div>
      </div>
    </div>
  );
};

export default NavBar;
