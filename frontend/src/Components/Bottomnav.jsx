import React from "react";
import { NavLink } from "react-router-dom";

export default function Bottomnav() {
  return (
    <section className="backdrop-blur border-solid border-[3px] border-sap2 w-[22rem] h-[3rem] flex justify-center items-center rounded-[2rem] py-[1.7rem] px-[1rem] z-[999]">
      <nav className="flex flex-row justify-between items-center sm:gap-[3rem] gap-[1.2rem] relative ">
        <NavLink
          to="/pics"
         className={({ isActive }) => {
            return (
              
              (isActive
                ? "refer text-[0.9rem] sm:text-[1rem] text-center  border-solid border-[2.3px] border-sap2  text-sap2 transition-all ease-linear duration-100  rounded-[2rem] p-[0.5rem]"
                : "refer text-[0.9rem] sm:text-[1rem] text-center bg-sap2 text-[#000000] hover:border-solid hover:border-[2.3px] hover:border-sap2 hover:bg-transparent hover:text-sap2 transition-all ease-linear duration-100  rounded-[2rem] p-[0.5rem]")
            );
          }}
          
        >
          Image Input
        </NavLink>
        <NavLink
          to="/disease"
          className={({ isActive }) => {
            return (
              
              (isActive
                ? "refer text-[0.9rem] sm:text-[1rem] text-center  border-solid border-[2.3px] border-sap2  text-sap2 transition-all ease-linear duration-100  rounded-[2rem] p-[0.5rem]"
                : "refer text-[0.9rem] sm:text-[1rem] text-center bg-sap2 text-[#000000] hover:border-solid hover:border-[2.3px] hover:border-sap2 hover:bg-transparent hover:text-sap2 transition-all ease-linear duration-100  rounded-[2rem] p-[0.5rem]")
            );
          }}>
          Text Input
        </NavLink>
        
        
      </nav>
    </section>
  );
}
