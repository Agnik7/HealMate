import React from "react";
import logo from "../assets/Logo.png";
import { Link, useNavigate, Outlet } from "react-router-dom";
import { motion } from "framer-motion";

export default function Topnav() {
  const navigate = useNavigate();
  return (
    <>
      <div className="up text-[#ffffff]  flex flex-row justify-between items-center  pt-[1rem]">
        <div className="logo  text-[2rem] text-[#ffffff] px-[1rem]  w-[10rem]">
          <Link to="/">
            <motion.img
              src={logo}
              alt="logo"
              className="w-[7rem]"
              initial={{ opacity: 0,rotate:90 }}
              animate={{ opacity: 1 ,rotate:0}}
              transition={{duration:1}}
            />
          </Link>
        </div>
        <Link
          className="register flex flex-row justify-center items-center gap-[3rem]   mx-[3rem] sm:text-[1.5rem] text-[1rem] text-[#ffffff]  "
          data-link-alt="Login"
        >
          <span
            className="hov sm:text-[1.5rem] text-[1rem] text-[#ffffff]   cursor-pointer transition-all ease-linear "
            data-link-alt="Login"
          >
            Login
          </span>
        </Link>
      </div>
      <Outlet />
    </>
  );
}
