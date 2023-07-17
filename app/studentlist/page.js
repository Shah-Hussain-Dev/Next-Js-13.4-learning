import Link from "next/link";
import React from "react";

const StudentList = () => {
  const data = [
    {
      name: "Shah ",
      id: 1,
    },
    {
      name: "Shweta ",
      id: 2,
    },
    {
      name: "Hasnain ",
      id: 3,
    },
    {
      name: "Shamshad ",
      id: 4,
    },
  ];
  return (
    <div>
      <h1 className="text-[3.5rem] text-center my-4 font-extrabold">
        StudentList
      </h1>
      <ul className="flex justify-center flex-col gap-6 items-center  ">
        {data.map((student) => (
          <li key={student.id}>
            <Link
              className="bg-yellow-500 px-3 py-3 my-4 rounded-lg shadow-2xl"
              href={`/studentlist/${student.name}`}
            >{`student Id: ${student.name}`}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
