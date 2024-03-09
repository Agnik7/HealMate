import React from "react";

export default function Topnav() {
  return (
    <div className="text-[#ffffff]  flex flex-row justify-between items-center  p-[1rem]">
      <div className="logo text-[2rem] text-[#ffffff]">logo</div>
      <div className="register flex flex-row justify-center items-center gap-[3rem]">
        <div className="sign text-[1.5rem] text-[#ffffff]  py-[1rem]  hover:border-b-solid  hover:border-b-[4px]  hover:border-b-[#ffffff] cursor-pointer transition-all ease-linear duration-150">
          Sign Up
        </div>
        <div className="log text-[1.5rem] text-[#ffffff] py-[1rem]  hover:border-b-solid  hover:border-b-[4px]  hover:border-b-[#ffffff] cursor-pointer transition-all ease-linear duration-150">
          Login
        </div>
      </div>
    </div>
  );
}
