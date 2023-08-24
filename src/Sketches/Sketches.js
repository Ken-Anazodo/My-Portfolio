import React from 'react'
import './Sketches.css';
import pWireframe from "./img/pWireframe.png";

const Sketches = () => {
  return (
    <section className='p-[4vw] bg-black min-h-screen'>
      <div className='pWireframe text-[6vw] mt-[3vw] lg:mt-0'>
          <div className='stylGuid text-[10vw] lg:text-[9vw] text-yellow-100 pt-[2vw] flex justify-center items-center '>
              <div className='mr-[5.5vw] text-neutral-500'>
                  <span className='pap'>P</span>
                  <span className='pap'>A</span>
                  <span className='pap'>P</span>
                  <span className='pap'>E</span>
                  <span className='pap'>R</span>
              </div>

              <div className='text-yellow-200 text-[3vw]'>
                  <span className='wir'>W</span>
                  <span className='wir'>I</span>
                  <span className='wir'>R</span>
                  <span className='wir'>E</span>
                  <span className='wir'>F</span>
                  <span className='wir'>R</span>
                  <span className='wir'>A</span>
                  <span className='wir'>M</span>
                  <span>E</span>
              </div> 
         </div>
      </div>
      
      <div className='flex justify-center mt-[3vw] lg:mt-0'>
        <div className='pWireframeNote text-[3.5vw] lg:text-[1.35vw] text-stone-400 text-justify lg:text-center lg:w-[80vw]'>
            During the early stages, I created sketches of the main screens and concepts 
            based on the tabs in the user flow. By utilizing paper and sticky notes, 
            I was able to easily make corrections and improvements, leading to a more efficient 
            iteration process.
        </div>
      </div>
      <div className='flex justify-center mt-[10vw] lg:mt-[3vw]'>
        <div className='w-[70vw] h-[80vw] border-neutral-500 border-4'> 
          <img className='h-full w-full object-cover' src= {pWireframe} alt= "Paper Wireframe"></img>
        </div>
      </div>
    </section>
  )
}

export default Sketches