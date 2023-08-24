import React from 'react';
import './BlackIntro.css';

import gsap from 'gsap';
import {useEffect} from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const BlackIntro = () => {

  useEffect(() => {
    
    gsap.fromTo('.introo', {opacity: 1}, {duration: 1.5, opacity: 0, delay: 0.7, ease: 'power2.easeIn', transition: 0.15, 
    scrollTrigger: {
    trigger: '.introo',
    } }, '0.2')

  }, [])
  
  return (
    <section className='bg-black w-screen h-screen'>
      <div className='flex items-center justify-center w-full h-full ml-[1vw] lg:ml-0'>
        <div className='introo  w-full h-full flex flex-col items-center justify-center text-yellow-50'>

          <div className='ml-[11.5vw] lg:ml-[4vw] mb-[-10vw] lg:mb-[-5vw] china text-[2.5vw] lg:text-[1vw] z-20'>
            <div>的</div>
            <div>氏</div>
            <div>族</div>
          </div>

            <div>
              <div className='mb-[-20vw] lg:mb-[-8.5vw] ml-[13vw] lg:ml-[5vw] w-[2.3vw] lg:w-[0.8vw] h-[30vw] lg:h-[14vw] bg-red-900'></div>
            </div>
            <h1 className='blackPort h-[2.7vw] md:h-[1.3vw] lg:h-[1vw] text-[3vw] md:text-[1.4vw] lg:text-[1.1vw]'>PORTFOLIO</h1>
            <p className='k text-[5.5vw] md:text-[3.3vw] lg:text-[1.9vw]'>KENNETH ANAZODO</p>

            <div className='china mr-[30vw] md:mr-[21vw] lg:mr-[10vw] lg:text-[1vw] text-[2.5vw] z-20'>
              <div>首</div>
              <div>席</div>
          </div>

          <div>
            <div className='mr-[30vw]  md:mr-[21vw] lg:mr-[10vw] mt-[-4.5vw] lg:mt-[-2.3vw] bg-red-900 h-[2vw] lg:h-[0.8vw] w-[7vw] lg:w-[3.2vw]'></div>
          </div>
         

        </div>
      </div>
    </section>
  )
}

export default BlackIntro