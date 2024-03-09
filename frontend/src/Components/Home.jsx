import React from 'react';
import Videosection from './Videosection';
import Bottomnav from './Bottomnav';
import Topnav from './Topnav';
import Home_about from './Home_about';
import Footer from './Footer';


export default function Home() {
  return (
    <section className='min-h-screen relative w-screen home overflow-x-hidden'>
        <div className='absolute top-0 w-full z-[999]'>
        <Topnav/>
        </div>
        
        <Videosection/>
        <div className='homebtn min-h-[110vh]'>
            <div className="grady h-[10vh]"></div>
            <Home_about/>
            <Footer/>
        </div>
        
        <div className="down fixed bottom-[1rem] w-[100%] flex justify-center items-center">
            <Bottomnav/>
        </div>
      
    </section>
  )
}
