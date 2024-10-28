import Link from "next/link";
import React from "react";

const OtherTrains = () => {
  return (
    <div className="flex justify-center items-center w-full -mt-16 py-6">
      <button className="z-30 mt-10 bg-teal-800 px-12 text-white py-2 rounded-lg font-semibold hover:bg-teal-900">
        <Link href="/trains"> See other trains </Link>
      </button>
    </div>
  );
};

export default OtherTrains;
