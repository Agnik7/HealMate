import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <div className="error w-screen h-screen overflow-hidden  justify-center items-center text-center">
          <div className=" mx-auto py-[150px] text-center">
          <h2 className="mb-5 text-9xl leading-none relative">
            <span className="text-[#ffffff] text-center glow m-[2rem] text-[6rem] md:w-[50%] w-[90%]">ERROR</span>
          </h2>
            <p className="text-[#ffffff] glow m-[2rem] text-[2.5rem]">
            An unknown error has occurred. Go back to home page</p>

          <div className="text-[2rem] w-4xl mx-auto text-center mt-9 inline-block py-2 px-6 btn rounded-lg
           text-light font-semibold transition duration-300 ease-in-out hover:bg-sap2 hover:text-dark
            shadow-2xl" style={{ boxShadow: '0px 8px 8px -4px rgba(0, 0, 0, 0.2), 0px 0px 4px 0px rgba(0, 0, 0, 0.2)' }}>
  <NavLink to='/'>Go Back</NavLink>
</div>
</div>
      </div>
  );
};

export default Error;