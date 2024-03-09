import React from 'react'

export default function Bottomnav() {
  return (
    <section className='bg-red-300 w-[25rem] h-[3rem] flex justify-center items-center rounded-[1rem]'>
      <nav className='flex flex-row justify-center items-center gap-[2rem] relative'>
        <a href="#" className='bg-green-300  rounded-[1rem] p-[0.5rem]'>Home</a>
        <a href="#" className='bg-green-300  rounded-[1rem] p-[0.5rem]'>Field A</a>
        <a href="#" className='bg-green-300  rounded-[1rem] p-[0.5rem]'>Field B</a>
        <a href="#" className='bg-green-300  rounded-[1rem] p-[0.5rem]'>Teams</a>
        <div className='animation start-home absolute h-[10rem] bg-blue-300 top-0 width-[150px] z-[999] left-0'></div>

      </nav>
    </section>
  )
}
