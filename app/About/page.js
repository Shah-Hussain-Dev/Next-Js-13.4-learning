import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col h-full bg-cyan-500 items-center justify-center">
      <h1 className="text-[8vw] font-extrabold drop-shadow-l shadow-lg px-6 py-4 bg-blue-500 rounded-xl">
        About Page
      </h1>
      <Link
        href={"/studentlist"}
        className="text-lg bg-red-400 px-5 py-3 shadow-lg rounded-2xl my-4"
      >
        Go to Students List
      </Link>
    </div>
  );
};

export default About;
