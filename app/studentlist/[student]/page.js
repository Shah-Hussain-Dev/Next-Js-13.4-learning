import Link from "next/link";
import React from "react";

const Student = ({ params }) => {
  return (
    <div className="flex flex-col justify-center items-center h-[60vh]">
      <h1 className="text-[3.5rem] font-extrabold text-center">
        Student ID: {params.student}
      </h1>
      <Link
        className="bg-lime-500  px-2  my-4 text-[black] text-[1.5rem] font-extrabold drop-shadow-l shadow-lg rounded-lg"
        href={"/studentlist"}
      >
        Back
      </Link>
    </div>
  );
};

export default Student;
 