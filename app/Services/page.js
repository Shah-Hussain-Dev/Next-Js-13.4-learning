import Link from "next/link";
import React from "react";

const Services = () => {
  return (
    <div className="flex h-full flex-col bg-orange-500 items-center justify-center">
      <h1 className="text-[8vw] font-extrabold drop-shadow-l shadow-lg px-6 py-4 bg-blue-500 rounded-xl">
        Services Page
      </h1>

      <Link
        className="bg-black py-5 px-12 my-4 text-yellow-300 text-lg font-extrabold drop-shadow-l shadow-lg rounded-xl"
        href={"/Services/Frontend"}
      >
        Frontend
      </Link>

      <Link
        className="bg-black py-5 px-12 my-4 text-yellow-300 text-lg font-extrabold drop-shadow-l shadow-lg rounded-xl"
        href={"/Services/Backend"}
      >
        Backend
      </Link>
    </div>
  );
};

export default Services;
