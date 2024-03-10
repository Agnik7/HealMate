import React from "react";
import gif from "../assets/heart.gif";

const Loader = () => {
  return (
    <div className="w-screen h-screen bg-dark flex flex-col justify-center items-center loader">
      <img className="w-[250px] h-[150px]" src={gif} />
      <p className="text-light mt-4">Finding best doctors...</p>
    </div>
  );
};

export default Loader;
