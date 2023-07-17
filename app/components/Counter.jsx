"use client";

import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="flex h-[100vh] justify-center items-center">
      <button
        onClick={() => setCounter(counter + 1)}
        className=" bg-black px-8 py-5 rounded-lg text-white shadow-2xl text-[1.5rem]"
      >
        Increment
      </button>
      <h1 className="text-[8rem] text-red-600 font-extrabold mx-6">
        {counter}
      </h1>
      <button
        onClick={() => setCounter(counter - 1)}
        className=" bg-black px-8 py-5 rounded-lg text-white shadow-2xl text-[1.5rem]"
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
