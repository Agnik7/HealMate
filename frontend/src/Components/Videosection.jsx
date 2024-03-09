import React from "react";
import video from "../assets/video/pulse.mp4";
import Topnav from "./Topnav";
import Bottomnav from "./Bottomnav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faDownLong } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function Videosection() {
  return (
    <section className="w-screen h-screen relative">
      <div className="overlay absolute top-0 left-0 w-full h-full"></div>
      <div className="w-full h-full ">
        <video
          src={video}
          loop
          autoPlay
          muted
          className="w-[110%] h-full object-cover"
        ></video>
      </div>
      <div className="content w-full h-full absolute top-0 flex justify-center items-center flex-col ">
        <motion.div
          className="f text-[#ffffff] sm:text-[5rem] text-[4rem] text-center"
          initial={{ opacity: 1, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          HealMate
        </motion.div>
        <motion.div
          className="f text-[#ffffff]  sm:text-[3rem] text-[2rem] text-center"
          initial={{ opacity: 1, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          Healthcare,just a click away!!
        </motion.div>
        <motion.div
          className="m-[1rem] text-[#ffffff] text-[3rem] "
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 0, y: 35 }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FontAwesomeIcon icon={faDownLong} />
        </motion.div>
      </div>
    </section>
  );
}
