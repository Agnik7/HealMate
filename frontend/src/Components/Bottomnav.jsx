import React from "react";
import { NavLink } from "react-router-dom";

export default function Bottomnav() {
  return (
    <section className="backdrop-blur border-solid border-[3px] border-[#23B740] w-[25rem] h-[3rem] flex justify-center items-center rounded-[2rem] py-[1.7rem] px-[1rem]">
      <nav className="flex flex-row justify-between items-center sm:gap-[3rem] gap-[1.5rem] relative ">
        <NavLink
          to="/pics"
         className={({ isActive }) => {
            return (
              
              (isActive
                ? "refer text-[0.8rem] sm:text-[1rem] text-center  border-solid border-[2.3px] border-[#23B740] bg-[#000000] text-[#23B740] transition-all ease-linear duration-100  rounded-[2rem] p-[0.5rem]"
                : "refer text-[0.8rem] sm:text-[1rem] text-center bg-[#23B740] text-[#000000] hover:border-solid hover:border-[2.3px] hover:border-[#23B740] hover:bg-transparent hover:text-[#23B740] transition-all ease-linear duration-100  rounded-[2rem] p-[0.5rem]")
            );
          }}
          
        >
          Field A
        </NavLink>
        <NavLink
          to="/disease"
          className={({ isActive }) => {
            return (
              
              (isActive
                ? "refer text-[0.8rem] sm:text-[1rem] text-center  border-solid border-[2.3px] border-[#23B740] bg-[#000000] text-[#23B740] transition-all ease-linear duration-100  rounded-[2rem] p-[0.5rem]"
                : "refer text-[0.8rem] sm:text-[1rem] text-center bg-[#23B740] text-[#000000] hover:border-solid hover:border-[2.3px] hover:border-[#23B740] hover:bg-transparent hover:text-[#23B740] transition-all ease-linear duration-100  rounded-[2rem] p-[0.5rem]")
            );
          }}>
          Field B
        </NavLink>
        <NavLink
          to="/teams"
          className={({ isActive }) => {
            return (
              
              (isActive
                ? "refer text-[0.8rem] sm:text-[1rem] text-center  border-solid border-[2.3px] border-[#23B740] bg-[#000000] text-[#23B740] transition-all ease-linear duration-100  rounded-[2rem] p-[0.5rem]"
                : "refer text-[0.8rem] sm:text-[1rem] text-center bg-[#23B740] text-[#000000] hover:border-solid hover:border-[2.3px] hover:border-[#23B740] hover:bg-transparent hover:text-[#23B740] transition-all ease-linear duration-100  rounded-[2rem] p-[0.5rem]")
            );
          }}
        >
          Teams
        </NavLink>
        
      </nav>
    </section>
  );
}
