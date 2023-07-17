import React from "react";

const Subject = ({ params }) => {
  return (
    <di className="text-center flex justify-center flex-col items-center h-[80vh]">
      <h1 className="text-[6vw] font-extrabold text-blue-400 ">
        This is Catch-all Segments Practical
      </h1>
      <p>Whatever you put in the URL it will print here</p>
      <h1 className="text-[6.5vw] font-extrabold ">
        Subject {params.subject[0]}
      </h1>
      <h1 className="text-[6.5vw] font-extrabold ">
        Taught by {params.subject[1]}
      </h1>
      <h1 className="text-[6.5vw] font-extrabold ">
        Taught by {params.subject[2]}
      </h1>
      {params.subject.map((item) => (
        <h1 className="text-[6.5vw] font-extrabold text-cyan-400">{item}</h1>
      ))}
    </di>
  );
};

export default Subject;
