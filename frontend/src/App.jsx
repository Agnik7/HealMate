import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Videosection from './Components/Videosection'
import Bottomnav from './Components/Bottomnav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section className='main relative'>
    <Videosection/>
    <div className="down absolute bottom-[3rem]  w-full  flex justify-center items-center">
    <Bottomnav/>
    </div>
    </section>  
        
    </>
  )
}

export default App
