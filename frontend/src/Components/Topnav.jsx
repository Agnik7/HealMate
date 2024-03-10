import React,{useState} from "react";
import logo from "../assets/Logo.png";
import { Link, useNavigate, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import {useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
export default function Topnav({userEmail,setUserEmail,userPicture, setUserPicture}) {
  const navigate = useNavigate();
  const baseURL = import.meta.env.VITE_BASE_URL;
  const [show,setShow] = useState("");
  const [isLoggedIn,setIsLoggedIn] = useState(false);

  
  const handleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
        const body = {
            access_token: tokenResponse.access_token,
        };

        try {
            const res = await axios.post(`${baseURL}/login`, body);

            if (res.status === 200) {
              console.log(res.data)
                localStorage.setItem('userData', JSON.stringify(res.data.user));
                setIsLoggedIn(true);
                setShow(res.data.user.picture);
                setUserEmail(res.data.user.email);
                setUserPicture(res.data.user.picture);
            } else {
                navigate('/error');
            }
        } catch (err) {
            console.log(err);
            navigate('/error');
        }
    },
});

const handleLogout = async()=>{
  await axios.post(`${baseURL}/logout`)
  .then((res)=>{
      setIsLoggedIn(false);
      localStorage.removeItem('userData');
      navigate('/');
  })
}
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
        {
          isLoggedIn?(
            <img src={show} alt="" className="rounded-full w-[3rem] cursor-pointer md:w-[4rem] relative right-[5%]" onClick={handleLogout} />
          ):(
            <Link
            className="register flex flex-row justify-center items-center gap-[3rem]   mx-[3rem] sm:text-[1.5rem] text-[1rem] text-[#ffffff]  "
            data-link-alt="Login"
            onClick={handleLogin}
          >
            <span
              className="hov sm:text-[1.5rem] text-[1rem] text-[#ffffff]   cursor-pointer transition-all ease-linear "
              data-link-alt="Login"
            >
              Login
            </span>
          </Link>
          )
        }
        
      </div>
      <Outlet />
    </>
  );
}
