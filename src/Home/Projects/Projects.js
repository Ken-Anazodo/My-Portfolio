import React from 'react';
import './Projects.css';
import gsap from 'gsap';
import {useEffect} from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useEffect(() => {
    gsap.to('.work', {duration: 1, y: 0, opacity: 1, delay:0.2, ease: 'power2.easeIn', 
    scrollTrigger: {
    trigger: '.work',
    start: "10px 90%",
    toggleActions: 'play reverse play none'
    } }, '0.2') 
  
    
  }, [])
  



  return (
    <div>
        <div className='flex workBg items-center justify-center w-screen h-[50vh] sm:h-[70vh] md:h-[20vh] md:mt-[20vw] bg-zinc-900 pb-7vw '>
          <div className='projects text-[15vw]'>
              <div className='work text-stone-400'>WORKS</div>
          </div>
      </div>
    </div>
   
  )
}

export default Projects