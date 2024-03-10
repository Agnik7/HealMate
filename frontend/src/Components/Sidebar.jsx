import React, { useState } from 'react'

import Toggle from './Toggle';
import { motion } from "framer-motion";
import avatar from "../assets/avatar.png";

export default function Sidebar() {
    const [open,setOpen]=useState(false);
    const variants=
    {
        open:{
            clipPath:"circle(1220px at 50px 50px)",
            backgroundColor:"#81AB5F",
            opacity:"0.9",
           transition:
           {
            
            type:"spring",
            stiffness:20,
            duration:0.2,
            
           }
        },
        closed:
        {
           clipPath:"circle(30px at 33px 45px)",
           transition:
           {
            
            type:"spring",
            stiffness:400,
            damping:40,
           }
        }
    }
  return (
    <motion.div className='flex z-[999] flex-col backdrop-blur-lg justify-center items-center hover:bg-red-500 bg-[#ffffff] text-[#000000] fixed top-0 left-0 py-[2rem]' animate={open?"open":"closed"}>
        <motion.div className='bg-sap hover:bg-red-500 text-[#000000] backdrop-blur-lg fixed top-0 left-[1px] w-[20rem] h-[100vh]' variants={variants}>
        
           <div className="w-full grid place-items-center">
            <img
              src={avatar}
              className="w-[80px] h-[80px]  mt-[50px] mb-[35px]"
              alt="Avatar"
            />

           </div>
           <div className="w-full grid place-items-center">
            <div className="text-[black] mb-2">Previous Searches</div>
            <ul className="list-disc text-[black]">
              <li>Rickets</li>
              <li>Osteoporosis</li>
              <li>Rickets</li>
              <li>Osteoporosis</li>
            </ul>
            </div>
            
        </motion.div>
        
            <Toggle setOpen={setOpen} check={open}/>
        
    </motion.div>
  )
}