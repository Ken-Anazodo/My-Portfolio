import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import gsap from 'gsap';
import {useRef, useEffect} from 'react'
import './App.css';
import Home from './Home/Home';
import GetInTouch from './GetInTouch/GetInTouch';
import FullProject1 from './FullProject1/FullProject1';
import Sketches from './Sketches/Sketches';
import StyleGuide from './StyleGuide/StyleGuide';

function App() {
  const appRef = useRef(null);
  
  useEffect(() => {
    const el22 = appRef.current;

    gsap.to(el22, {duration: 2, css: {visibility: 'visible'}})
  },[])

  
  
  return (
    <div>
    <Router>
       <div className='app bg-zinc-900 invisible min-w-[350px]' ref={appRef}>
        <Routes>
            <Route path= "/" element= {<Home/>} />
            <Route path= "/GetInTouch" element= {<GetInTouch/>} />
            <Route path= "/FullProject1" element= {<FullProject1/>} />
            <Route path= "/Sketches" element= {<Sketches/>} />
            <Route path= "/StyleGuide" element= {<StyleGuide/>} />
        </Routes>  
      </div>
    </Router>
    </div>
  );
}

export default App;
