import Link from "next/link";
import React from "react";

const Backend = () => {
  return (
    <div className="flex h-full flex-col bg-red-500 items-center justify-center">
      <h1 className="text-[8vw] font-extrabold drop-shadow-l shadow-lg px-6 py-4 bg-cyan-500 rounded-xl">
        Backend Page
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

export default Backend;
