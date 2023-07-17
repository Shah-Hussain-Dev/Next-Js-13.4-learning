import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src="https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif"
        className="h-[89dvh] w-[100vw] object-cover"
      />
      <h1 className="text-[7vw] font-extrabold text-yellow-500">
        Page not Found
      </h1>
    </div>
  );
};

export default NotFound;
