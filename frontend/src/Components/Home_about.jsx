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

export default function Home_about() {
  return (
    <div>
      <div className="box  min-h-[110vh] sm:w-[80%] w-full flex flex-col justify-center items-center m-auto ">
        <motion.p
          className="text-[#ffffff] text-center w-full mb-[1.5rem] para"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Say goodbye to the uncertainty of self-diagnosis and endless internet
          searches. Our revolutionary platform utilizes advanced AI algorithms
          to accurately diagnose health conditions based on your symptoms or
          even a simple picture.
        </motion.p>
        <div className="info  flex  justify-center  items-center gap-[2rem] flex-wrap-reverse lg:flex-nowrap ">
          <motion.div
            className="left text-[#ffffff] text-center backdrop-blur p-[1rem] border-solid border-[2.3px] border-[#23B740] rounded-[2rem] m-[1rem] "
            initial={{ opacity: 0.5, x: -500 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
          >
            <motion.div>
              "Welcome to our revolutionary disease recognition platform! Simply
              upload an image of your symptoms or provide the disease name, and
              watch as our cutting-edge technology swiftly identifies the
              ailment. But wait, there's more! With just a click, discover all
              the nearby doctors specialized in treating your condition,
              tailored to your location. Get the help you need, right at your
              fingertips. Experience health care like never before!"
            </motion.div>
            <div className="w-full flex flex-col justify-center items-center gap-[1rem] m-[1rem]">
              <button className="btn glass flex flex-row justify-center items-center text-center    text-[#ffffff] transition-all ease-linear duration-100  rounded-[2rem] p-[0.5rem] hover:text-[#000000] hover:bg-transparent hover:border-solid hover:border-[2px] hover:border-[#23B740]">
                Discover by Snapping shots{" "}
                <img src={camera} className="w-[2rem] text-[#000000]" />
              </button>
              <button className="btn glass flex flex-row justify-center items-center text-center    text-[#ffffff] transition-all ease-linear duration-100  rounded-[2rem] p-[0.4rem] hover:text-[#000000] hover:bg-transparent hover:border-solid hover:border-[2px] hover:border-[#23B740]">
                Discover by disease name{" "}
                <img src={mic} className="w-[2.5rem]" />
              </button>
            </div>
          </motion.div>
          <motion.div
            className="right   m-auto md:m-[1rem]   h-[30rem]"
            initial={{ opacity: 0.5, x: 500 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
          >
            <Carousel
              infiniteLoop={true}
              autoPlay={true}
              transitionTime={300}
              dynamicHeight={true}
              interval={2000}
              showThumbs={false}
            >
              <div className="rounded-[2rem]">
                <img src={pic} className="rounded-[1rem] w-[15rem] h-[30rem]" />
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
          </motion.div>
        </div>
        <motion.p
          className="join italic text-[#ffffff] text-center w-screen mt-[1.5rem] para"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Marquee pauseOnHover={true} autoFill={true}>
          Join us and discover the power of AI-Powered Diagnosis
          
          ,redefining the way you approach wellness.{"  "}
          </Marquee>
        </motion.p>
      </div>
    </div>
  );
}
