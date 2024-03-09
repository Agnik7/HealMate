import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Videosection from './Components/Videosection'
import Bottomnav from './Components/Bottomnav';
import {Routes, Route, useLocation, Navigate,BrowserRouter} from 'react-router-dom';
import Diseases_search from './Components/Diseases_search'
import Teams from './Components/Teams'
import Home from './Components/Home'
import Picturesearch from './Components/Picturesearch'

function App() {
  

  return (
    <>
    {/*<section >
    
    
    <Routes>
        <Route path='/' index element={<Videosection/>}/>
        
        
      </Routes>
    </section>  */}
    <section className='main relative'>
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />}/>
        <Route path='/pics' element={<Picturesearch />} />
        <Route path='/disease' element={<Diseases_search />} />
        <Route path='/teams' element={<Teams/>} />
          
        
      </Routes>
    </BrowserRouter>
    
    </section>
        
    </>
  )
}

export default App
