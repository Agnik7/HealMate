import React, { useState } from "react";
import Bottomnav from "./Bottomnav";
import avatar from "../assets/avatar.png";
import loc from "../assets/loc-removebg-preview.png";
import symptoms from "../assets/symptoms.png";
import generate from "../assets/arrow-removebg-preview.png";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa"; // Import hamburger icon
import "animate.css";

const Diseases_search = () => {
  const [showLeftSection, setShowLeftSection] = useState(false);

  const toggleLeftSection = () => {
    setShowLeftSection(!showLeftSection);
  };

  return (
    <div>
      <div className="flex w-screen h-screen bg-dark justify-center overflow-x-hidden">
        {showLeftSection && (
          <div className=" animate__animated animate__fadeIn bg-sap   w-1/2 md:w-1/4 text-[10px] leftSection sm:text-[16px] h-[615px] m-2 rounded-tr-lg rounded-bl-lg flex flex-col items-center relative z-20">
            <img
              src={avatar}
              className="sm:w-[160px] sm:h-[160px] w-[80px] h-[80px] mt-[50px] mb-[35px]"
              alt="Avatar"
            />
            <div className="text-light mb-2">Previous Searches</div>
            <ul className="list-disc text-light">
              <li>Rickets</li>
              <li>Osteoporosis</li>
              <li>Rickets</li>
              <li>Osteoporosis</li>
            </ul>
          </div>
        )}
        <div className="w-3/4 relative z-0 flex flex-col items-center">
          <div className="flex">
            <Link to="/">
              <div>
                <img
                  src={logo}
                  className="w-[110px] mx-6 mt-4 hidden xl:block"
                  alt="Logo"
                />
              </div>
            </Link>
            <div className="flex flex-col justify-center items-center mx-auto lg:mx-0 mt-10 md:mt-0">
              <div className=" animate__animated animate__slideInRight md:w-[760px] md:h-[375px] rounded-xl m-7 pt-5 pl-4 bg-sap w-[300px] h-[400px] ">
                <div className="text-light mb-2">
                  Disease based on your symptoms :-
                </div>
                <li className="ml-5 list-disc text-light">Malaria</li>
                <div className="ml-5 mt-6 text-light">
                  List of doctors based on your Location
                </div>
                <ul className="ml-5 list-decimal text-light pl-6">
                  <li className="mt-2">
                    <div>Name:</div> <div>Phone No:</div> <div>Address:</div>
                  </li>
                  <li className="mt-2">
                    <div>Name:</div> <div>Phone No:</div> <div>Address:</div>
                  </li>
                </ul>
              </div>
              <div className="flex ml-3 mt-2  animate__animated animate__slideInLeft">
                <div className="relative mr-5">
                  <img
                    src={loc}
                    alt="Location"
                    className="absolute left-0 top-1/2 transform -translate-y-1/2"
                    style={{
                      width: "30px",
                      height: "30px",
                      marginLeft: "10px",
                      marginRight: "2px",
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Location"
                    className="md:w-[150px] w-[100px] ml-1 md:h-12 h-10 bg-sap2 rounded-xl px-3 pl-10 md:pb-2 placeholder-light text-light  hover:bg-sap text-[10px]  md:text-[16px] "
                  />
                </div>
                <div className="relative mr-5">
                  <img
                    src={symptoms}
                    alt="Location"
                    className="absolute left-0 top-1/2 transform -translate-y-1/2"
                    style={{
                      width: "30px",
                      height: "30px",
                      marginLeft: "10px",
                      marginRight: "2px",
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Symptoms..."
                    className="md:w-[150px] w-[100px] ml-1 md:h-12 h-10 bg-sap2 rounded-xl px-3 pl-10 md:pb-2 placeholder-light text-light  hover:bg-sap text-[10px]  md:text-[16px] "
                  />
                </div>
                <button
                  id="submit"
                  className="md:w-[50px] w-[30px] rounded-full bg-sap2 hover:bg-sap "
                >
                  <img src={generate} alt="Generate" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="down fixed bottom-[3rem] w-[100%] flex justify-center items-center">
        <Bottomnav />
      </div>
      <div
        className="fixed top-0 left-0 z-50 m-4 cursor-pointer"
        onClick={toggleLeftSection}
      >
        <FaBars size={24} color="#fff" />
      </div>
    </div>
  );
};

export default Diseases_search;
