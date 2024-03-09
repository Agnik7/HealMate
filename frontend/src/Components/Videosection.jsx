import React from 'react';
import video from "../assets/video/pulse.mp4";
import Topnav from './Topnav';

export default function Videosection() {
  return (
    <section className='w-screen h-screen relative'>
        <div className='absolute top-0 w-full z-[999]'>
        <Topnav/>
        </div>
        <div className="overlay absolute top-0 left-0 w-full h-full"></div>
        <div className='w-full h-full '>
        <video src={video} loop autoPlay muted className='w-[110%] h-full object-cover'></video>
        </div>
        <div className="content w-full h-full absolute top-0 flex justify-center items-center flex-col ">
        <div className="name text-[#ffffff] sm:text-[5rem] text-[4rem] text-center">
            HealMate
        </div>
        <div className="tagline text-[#ffffff]  sm:text-[3rem] text-[2rem] text-center">
            Healthcare,just a click away!!
        </div>
        </div>
    </section>
  )
}
