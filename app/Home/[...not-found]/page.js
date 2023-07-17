import React from "react";

const HomeNotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src="https://cdn.dribbble.com/users/381530/screenshots/3949858/404.gif"
        className="h-[90vh] w-[100vw] object-contains"
      />
      <h1 className="text-[7vw] font-extrabold text-yellow-500">
        Page not Found
      </h1>
    </div>
  );
};

export default HomeNotFound;
