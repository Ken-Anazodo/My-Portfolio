import React from 'react';
import './StyleGuide.css';

import primary from "./img/primary.jpg";
import secondary from "./img/secondary.png";
import accent from "./img/accent.png";
// import cee from "./img/cee.PNG";



const StyleGuide = () => {
  return (
    <div className='bg-black w-screen min-h-screen p-[3vw] lg:p-0'>
        <div>
                        <div>
                        <div>
                                <div className='stylGuid text-[11vw] lg:text-[9vw] pt-[2vw] flex justify-center items-center'>
                                    <div className='mr-[5.5vw] text-neutral-600'>
                                        <span className='styll'>S</span>
                                        <span className='styll'>T</span>
                                        <span className='styll'>Y</span>
                                        <span className='styll'>L</span>
                                        <span className='styll'>E</span>
                                    </div>

                                    <div className='text-yellow-100 text-[5vw] lg:text-[4vw]'>
                                        <span className='guidd mr-[7vw] lg:mr-[6vw]'>G</span>
                                        <span className='guidd mr-[7vw] lg:mr-[6vw]'>U</span>
                                        <span className='guidd mr-[7vw] lg:mr-[6vw]'>I</span>
                                        <span className='guidd mr-[7vw] lg:mr-[6vw]'>D</span>
                                        <span>E</span>
                                    </div> 
                                </div>
                            </div>
                        </div>


                        <div className='flex justify-center mt-[3vw]'>
                            <div className='styleNote text-[3.5vw] lg:text-[1.35vw] text-stone-400 lg:w-[80vw] text-center'>
                                I developed a color palettes and typography that 
                                effectively convey the brand's identity while also imbuing the product with 
                                an invigorating aesthetic.
                            </div>
                        </div>
                        

                        <span className='flex flex-col lg:flex-row mt-[4vw] justify-center items-center'>
                            <div className='lg:mr-[20vw]'>
                                <span className='color text-[3.5vw] lg:text-[2.5vw] text-yellow-700'>Primary Colors</span>
                                <div className='h-[25vw] lg:h-[10vw] w-[70vw] lg:w-[30vw]'>
                                    <img className='h-full w-full object-cover' src= {primary} alt= "Primary Colors"></img>
                                </div>
                            </div>
                           

                           <div className='mt-[3vw] lg:mt-0'>
                                <span className='color text-[3.5vw] lg:text-[2.5vw] text-yellow-700'>Secondary Colors</span>
                                <div className='h-[25vw] lg:h-[10vw] w-[70vw] lg:w-[30vw]'>
                                    <img className='h-full w-full object-cover' src= {secondary} alt= "Secondary Colors"></img>
                                </div>
                           </div>
                           
                        </span>

                        <div className='flex justify-center'>
                            <div className='mt-[8vw] lg:mt-[5vw] flex flex-col justify-center items-center'>
                                <span className='color text-[3.5vw] lg:text-[2.5vw] text-yellow-700'>Accent Color</span>
                                <div className='h-[25vw] lg:h-[10vw] w-[25vw] lg:w-[10vw]'>
                                    <img className='h-full w-full object-cover' src= {accent} alt= "Accent Color"></img>
                                </div>
                            </div>
                        </div>

 
                        <div className='mt-[8vw]'>
                            <div className='typography text-[4vw] lg:text-[3vw] text-yellow-700 uppercase text-center'>
                                <div>
                                        <span className='typo mr-[5.5vw] lg:mr-[4.5vw]'>T</span>
                                        <span className='typo mr-[5.5vw] lg:mr-[4.5vw]'>Y</span>
                                        <span className='typo mr-[5.5vw] lg:mr-[4.5vw]'>P</span>
                                        <span className='typo mr-[5.5vw] lg:mr-[4.5vw]'>O</span>
                                        <span className='typo mr-[5.5vw] lg:mr-[4.5vw]'>G</span>
                                        <span className='typo mr-[5.5vw] lg:mr-[4.5vw]'>R</span>
                                        <span className='typo mr-[5.5vw] lg:mr-[4.5vw]'>A</span>
                                        <span className='typo mr-[5.5vw] lg:mr-[4.5vw]'>P</span>
                                        <span className='typo mr-[5.5vw] lg:mr-[4.5vw]'>H</span>
                                        <span>Y</span>
                                    </div>
                            </div>

                            <div className='flex justify-center pb-[3vw] mt-[2vw]'>
                                <ul className='typeList text-[3vw] lg:text-[2vw] text-stone-400 pl-[2vw] text-center'>
                                    <li>Sarabun</li>
                                    <li>Cormorant Upright</li>
                                    <li>Bodoni Moda</li>
                                    <li>Inter</li>
                                </ul>
                            </div>
                        </div>

                        {/* <div className='h-full flex items-end justify-center pb-[1vw]'>
                                <div className='year flex justify-center items-center text-[1.2vw]'>
                                    <img className='w-[1vw] h-[1vw] mr-[0.2vw] mb-[0.4vw] lg:mb-[0.1vw]' src= {cee} alt= "copyright"></img>
                                    <div className='text-stone-200'>2023</div>
                                </div>
                            </div> */}
        </div>
    </div>
  )
}

export default StyleGuide