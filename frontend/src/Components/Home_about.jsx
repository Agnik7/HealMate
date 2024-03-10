import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import pic from "../assets/ai.avif";
import pic2 from "../assets/pic2.webp";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";

import pic5 from "../assets/pic5.jpg";
import pic6 from "../assets/pic6.png";
import pic7 from "../assets/pic7.png";
import pic8 from "../assets/pic8.png";
import camera from "../assets/cam.png";
import mic from "../assets/mic.png";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { NavLink } from "react-router-dom";

export default function Home_about() {
  return (
    <div className="box">
      <div className="  min-h-[110vh] sm:w-[80%] w-full flex flex-col justify-center items-center m-auto ">
        <motion.p
          className="text-[#ffffff] text-center w-full mb-[1.5rem] para md:text-[1.3rem] text-[1rem]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Uncertain symptoms? Snap a picture for a possible condition match, then find nearby doctors for the best next step!

        </motion.p>
        <div className="m-[1rem]  flex  md:justify-between justify-center flex-col items-center gap-[2rem]  ">
          <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-center   glass_one rounded-[2rem]">
            <div className="text-[#ffffff] text-center glow m-[0.5rem] text-[1.3rem] md:w-[50%] w-[90%] ">
              <p>
                Perfectly analyse the image and provide the best medical support
              </p>
              <span className="flex justify-center items-center ">
                <img src={camera} alt="img" className="w-[4rem]" />
                <NavLink to="/pics" className="underline">Try it out</NavLink>
              </span>
            </div>
            <div className="lg:w-[30rem] ">
              <Carousel
                infiniteLoop={true}
                autoPlay={true}
                transitionTime={300}
                dynamicHeight={true}
                interval={2000}
                showThumbs={false}
              >
                <div className="rounded-[2rem]">
                  <img
                    src={pic}
                    className="rounded-[1rem] w-[15rem] h-[30rem]"
                  />
                </div>
                <div>
                  <img
                    src={pic2}
                    className="rounded-[1rem] w-[15rem] h-[30rem]"
                  />
                  
                </div>
                <div>
                  <img
                    src={pic3}
                    className="rounded-[1rem] w-[15rem] h-[30rem]"
                  />
                </div>
                <div>
                  <img
                    src={pic4}
                    className="rounded-[1rem] w-[15rem] h-[30rem]"
                  />
                </div>
                <div>
                  <img
                    src={pic5}
                    className="rounded-[1rem] w-[15rem] h-[30rem]"
                  />
                </div>
              </Carousel>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col-reverse lg:justify-between justify-center items-center max-w-[80rem]  glass_one rounded-[0.7rem]">
            <div className="lg:w-[30rem]">
              <Carousel
                infiniteLoop={true}
                autoPlay={true}
                transitionTime={300}
                dynamicHeight={true}
                interval={2000}
                showThumbs={false}
              >
                <div>
                  <img
                    src={pic6}
                    className="rounded-[1rem] w-[15rem] h-[30rem]"
                  />
                </div>
                <div>
                  <img
                    src={pic7}
                    className="rounded-[1rem] w-[15rem] h-[30rem]"
                  />
                </div>
                <div>
                  <img
                    src={pic8}
                    className="rounded-[1rem] w-[15rem] h-[30rem]"
                  />
                </div>
              </Carousel>
            </div>
            <div className="text-[#ffffff] text-center glow m-[2rem] text-[1.3rem]  md:w-[50%] w-[90%]">
              <p>
                Not a visual symptom?No worries!Just describe your symptoms and
                let HealMate take care of the rest
              </p>
              <span className="flex justify-center items-center ">
                <img src={camera} alt="img" className="w-[4rem]" />
                <NavLink to="/disease" className="underline">Try it out</NavLink>
              </span>
            </div>
          </div>
        </div>
        <motion.div
          className="text-[1.5rem] italic text-[#ffffff] text-center w-screen mt-[1.5rem] z-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Marquee pauseOnHover={true} autoFill={true}>
            Join us and discover the power of AI-Powered Diagnosis ,redefining
            the way you approach wellness.{"  "}
          </Marquee>
        </motion.div>
      </div>
    </div>
  );
}
