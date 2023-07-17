import Link from "next/link";
import React from "react";

const Frontend = () => {
  return (
    <div className="flex flex-col h-full bg-orange-500 items-center justify-center">
      <h1 className="text-[8vw] font-extrabold drop-shadow-l shadow-lg px-6 py-4 bg-blue-500 rounded-xl">
        Frontend Page
      </h1>
      <Link
        className="bg-lime-500 py-5 px-12 my-4 text-[black] text-lg font-extrabold drop-shadow-l shadow-lg rounded-xl"
        href={"/Services"}
      >
        Back
      </Link>
    </div>
  );
};

export default Frontend;
