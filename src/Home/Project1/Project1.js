import React from 'react';
import './Project1.css';
import {Link} from 'react-router-dom';

import gsap from 'gsap';
import {useRef, useEffect} from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import img6 from "./img/img6.png";
import img2 from "./img/img2.png";
import arr3 from "./img/arr3.png";
import iron1 from "./img/iron1.png";

gsap.registerPlugin(ScrollTrigger);


const Project1 = () => {

  const frontModelReveal = useRef(null);
  const homeMockUpReveal = useRef(null);
  
  useEffect(() => {
    const elfrontModelReveal = frontModelReveal.current;
    const elhomeMockUpReveal = homeMockUpReveal.current;




    // Model Reveal
    gsap.to(elfrontModelReveal, {width: '0%', duration: 2, ease: 'power2.easeInOut', 
  scrollTrigger: {
    trigger: elfrontModelReveal,
    // start: "10px 60%",
    scrub: true
  }}, .2)

  gsap.fromTo('.lP', {y: '-10vw', opacity: 0}, {duration: 1, y: 0, opacity: 1, stagger: 0.2, delay:0.2, ease: 'power2.easeIn', 
  scrollTrigger: {
    trigger: '.lP',
    start: "10px 90%"
  } }, '0.2')

// 01 Small Screen
  gsap.fromTo('.z1', {opacity: 0, x: '15vw'}, {duration: 1, opacity: 1, x: 0, delay:0.2, ease: 'power2.easeIn', transition: 1, 
  scrollTrigger: {
  trigger: '.z1',
  start: "10px 70%"
  } }, '0.2')

// 01 Large Screen
  gsap.fromTo('.z11', {opacity: 0, x: '10vw'}, {duration: 1, opacity: 1, x: 0, delay:0.2, ease: 'power2.easeIn', transition: 1, 
  scrollTrigger: {
  trigger: '.z11',
  start: "10px 70%"
  } }, '0.2')


  // Lumiere Reveal Small Screens
  gsap.to('.lumi', {duration: 1, y: 0, opacity: 1, delay:0.2, ease: 'power2.easeIn', 
  scrollTrigger: {
  trigger: '.lumi',
  start: "10px 50%"
  } }, '0.2') 

  // Lumiere Reveal Large Screens
  gsap.to('.lumii', {duration: 1, y: 0, opacity: 1, delay:0.2, ease: 'power2.easeIn', 
  scrollTrigger: {
  trigger: '.lumii',
  start: "10px 50%"
  } }, '0.2') 

  // COUTURE REVEAL Small Screens
  gsap.to('.cou11', {duration: 1, y: 0, opacity: 1, delay:0.2, ease: 'power2.easeIn', stagger: 0.3, 
  scrollTrigger: {
  trigger: '.cou11',
  start: "10px 90%"
  } }, '0.2') 

  // COUTURE REVEAL Large Screens
  gsap.to('.cou1', {duration: 1, y: 0, opacity: 1, delay:0.2, ease: 'power2.easeIn', stagger: 0.3, 
  scrollTrigger: {
  trigger: '.cou1',
  start: "10px 90%"
  } }, '0.2') 

  // Fashion House  Small Screens
  gsap.to('.fah', {duration: 1, y: 0, opacity: 1, delay:0.2, ease: 'power2.easeIn', 
  scrollTrigger: {
  trigger: '.fah',
  start: "10px 90%"
  } }, '0.2') 

  // Fashion House Large Screens
  gsap.to('.fahh', {duration: 1, y: 0, opacity: 1, delay:0.2, ease: 'power2.easeIn',
  scrollTrigger: {
  trigger: '.fahh',
  start: "10px 90%"
  } }, '0.2') 

  // NEW SECTION
  gsap.fromTo('.newSecGroup', {opacity: 0, x: '15vw'}, {duration: 1, opacity: 1, x: 0, delay:0.2, ease: 'power2.easeIn', transition: 1, 
  scrollTrigger: {
  trigger: '.newSecGroup',
  start: "10px 95%"
  } }, '0.2')

  // Mock Up 
  gsap.to(elhomeMockUpReveal, {height: '0%', duration: 2, ease: 'power2.easeInOut', 
  scrollTrigger: {
    trigger: elhomeMockUpReveal,
    start: "10px 80%",
  }}, .2)

  // A UX CASE STUDY
  gsap.to('.aUx1', {duration: 0.5, y: 0, opacity: 1, delay:0.2, ease: 'power2.easeIn', 
  scrollTrigger: {
  trigger: '.aUx1',
  start: "10px 90%"
  } }, '0.2') 

  // Lumiere Couture UI Design
  gsap.to('.lumDes', {duration: 0.5, y: 0, opacity: 1, delay:0.2, ease: 'power2.easeIn', stagger: 0.3,  
  scrollTrigger: {
  trigger: '.lumDes',
  start: "10px 90%"
  } }, '0.2') 

  gsap.fromTo('.lcBody', {opacity: 0}, {duration: 1, opacity: 1, delay:0.2, ease: 'power2.easeIn', transition: 1, 
  scrollTrigger: {
  trigger: '.lcBody',
  start: "10px 80%"
  } }, '0.2')

  // Learn More
  gsap.to('.lm1', {duration: 0.5, y: 0, opacity: 1, delay:0.2, ease: 'power2.easeIn', 
  scrollTrigger: {
  trigger: '.lm1',
  start: "10px 90%"
  } }, '0.2') 

  // Barcode Small screen
  gsap.fromTo('.smBarcode', {opacity: 0, y: '15vw'}, {duration: 1, opacity: 1, y: 0, delay:0.2, ease: 'power2.easeIn', transition: 1, 
  scrollTrigger: {
  trigger: '.smBarcode',
  start: "10px 80%"
  } }, '0.2')


  }, [])
  
  
  return (
    <div className='lg:w-screen bg-zinc-900 lg:px-[2vw] text-stone-200'>
        <div className='bg-black pb-[10vw] lg:pb-[6vw] pt-[5vw] lg:pt-[0vw]'>
            

            <div className='lg:flex lg:px-5'>

              {/* Small Screen */}
                  <div className='lg:[display:none]'>
                    <div className='zeroOnee z1 text-center text-[20vw] text-stone-600'> 01</div>
                      <div className='mt-[3vw]'>
                        <div className='flex flex-col justify-center items-center md:ml-[2vw]'>
                          <div className='lumie'>
                            <div className='lum1 lumi text-[18vw] text-neutral-600 h-[20vw]'>LUMIÈRE</div>
                          </div>
                         
                          <div className='couture flex couu text-[12vw] text-center mr-[3vw] text-yellow-600 mt-[2vw] mb-[2vw]'>
                            <div className='couture1 cou11'>C</div>
                            <div className='couture1 cou11'>O</div>
                            <div className='couture1 cou11'>U</div>
                            <div className='couture1 cou11'>T</div>
                            <div className='couture1 cou11'>U</div>
                            <div className='couture1 cou11'>R</div>
                            <div className='couture1 cou11'>E</div>
                          </div>
                          <div className='faH'>
                              <div className='fh fah text-[17vw] h-[18vw] md:h-[18vw] lg:h-[0vw] z-20'>Fashion House</div>
                          </div>
                         
                        </div>
                      </div>
                  </div>

              <div>
                <div className='flex md:flex-none justify-center pl-1 pr-3 md:pl-0 md:pr-0'>
                  <div className='lg:mt-[6vw] w-[100vw] md:w-[80vw] lg:w-[40vw] h-[90vh] md:h-[130vw] lg:h-[60vw] relative'>
                      <div className='w-full h-full'>
                          <div className='w-full h-full absolute'>
                              <img className='pic w-full h-full object-cover' src= {img6} alt= "model"></img>
                          </div>
                          <div className='w-full h-full absolute z-20 bg-black' ref={frontModelReveal}>
                            <div className='w-full h-full flex justify-center items-center'>
                                                <div className='lumProjectt text-yellow-200 text-[3vw] lg:text-[1.7vw]'>
                                                    <div className='lP mb-[12vw] lg:mb-[3.9vw]'>P</div>
                                                    <div className='lP mb-[12vw] lg:mb-[3.9vw]'>R</div>
                                                    <div className='lP mb-[12vw] lg:mb-[3.9vw]'>O</div>
                                                    <div className='lP mb-[12vw] lg:mb-[3.9vw]'>J</div>
                                                    <div className='lP mb-[12vw] lg:mb-[3.9vw]'>E</div>
                                                    <div className='lP mb-[12vw] lg:mb-[3.9vw]'>C</div>
                                                    <div className='lP'>T</div>
                                                </div>
                                            </div>

                          </div>
                      </div>
                    </div> 
                </div>

                <div className='newSecGroup flex flex-col items-center justify-center lg:ml-[1.7vw] mt-[-25vw] md:mt-[0vw]'>
                  <div className='new1 text-[17vw] lg:text-[8vw] text-stone-400'>
                    <div className='text-center h-[11vw] lg:h-[5.3vw]'>NEW</div>
                    <div className='text-center h-[13vw] lg:h-[6.5vw]'>NEW</div>
                  </div>

                  <div className='content text-[24vw] lg:text-[11vw] text-stone-500'>
                    <div>Contents</div>
                  </div>


                                          {/* BARCODE DESIGN Large Screen */}
                  <div className='[display:none] lg:[display:block]'>
                        <div className='flex justify-center '>
                          <div className='w-[23vw] h-[8vw]'> 
                            <img className='h-full w-full object-cover ' src= {iron1} alt= "batch"></img>
                          </div>
                        </div>

                        <div className='flex justify-center'>
                          <div className='mt-[1vw] text-[1.2vw] text-stone-200'>
                            <span className='batchChief mr-[1vw] md:mr-[0.8vw]'>
                                THE CLAN CHIEF
                            </span>

                            <span className='batchChief1'>Portfolio</span>
                          </div>
                        </div>
                  </div>
                </div>
              </div>
                    
                <div>
                  {/* Large Screen */}
                  <div className='[display:none] lg:[display:block]'>
                    <div className='zeroOnee z11 text-center text-[15vw] text-stone-600'> 01</div>
                      <div className='mt-[3vw]'>
                        <div className='flex flex-col justify-center items-center ml-[2vw]'>
                          <div className='lumiee'>
                              <div className='lum1 lumii text-[9vw] text-neutral-600 h-[10vw]'>LUMIÈRE</div>
                          </div>
                          <div className='couture cou flex text-[3vw] text-center mr-[3vw] text-yellow-600'>
                            <div className='couture1 cou1'>C</div>
                            <div className='couture1 cou1'>O</div>
                            <div className='couture1 cou1'>U</div>
                            <div className='couture1 cou1'>T</div>
                            <div className='couture1 cou1'>U</div>
                            <div className='couture1 cou1'>R</div>
                            <div className='couture1 cou1'>E</div>
                          </div>
                          <div className='faHH'>
                              <div className='fh fahh text-[8vw]'>Fashion House</div>
                          </div>
                          
                        </div>
                        </div>
                    </div>
                    

                    {/* MOCK UP */}
                    <div className='flex justify-center md:flex-none mr-[7.5vw] lg:mr-[0vw] mt-[3vw] sm:mt-[0vw]'>
                      <div className='md:ml-[4vw] w-[100vw] lg:w-[50vw] h-[50vh] md:h-[80vh] lg:h-[58.5vw] relative'>
                          <div  className='w-full h-full'>
                              <div className='w-full h-full absolute'>
                                  <img className='pic w-full h-full object-cover' src= {img2} alt= "mockup"></img>
                              </div>
                              <div className='w-full h-full absolute z-20 bg-black' ref={homeMockUpReveal}></div>
                          </div>
                       
                      </div>
                    </div>


                                                {/* BARCODE DESIGN Small Screen */}
                  <div className='smBarcode lg:[display:none] mt-[7vw] mr-[1.5vw]'>
                        <div className='flex justify-center'>
                          <div className='w-[60vw] lg:w-[20vw] h-[17vw] lg:h-[8vw]'> 
                            <img className='h-full w-full object-cover ' src= {iron1} alt= "batch"></img>
                          </div>
                        </div>

                        <div className='flex justify-center'>
                          <div className='mt-[1vw] text-[2.7vw] lg:text-[1.2vw] text-stone-200'>
                            <span className='batchChief mr-[1vw] lg:mr-[0.8vw]'>
                                THE CLAN CHIEF
                            </span>

                            <span className='batchChief1'>Portfolio</span>
                          </div>
                        </div>
                  </div>
                    
                </div>
            </div>




            <section className='lg:mt-[1vw] mt-[12vw]'>
                <div className='mb-[2vw]'>
                    <div className='caseStudy w-[vw] text-[3.5vw]'>
                      <div className='aUx'>
                          <div className='aUx1 text-[12vw] lg:text-[9vw] h-[15vw] lg:h-[10.5vw] text-yellow-600 text-center'>A UX CASE STUDY</div> 
                      </div>
                      <div className='lumDesH flex justify-center items-center'>
                          <div className='lum3 lumDes text-stone-400 uppercase text-[4.5vw] lg:text-[3.5vw]'>Lumière Couture</div>
                          <div className='ui lumDes text-[2.2vw] lg:text-[1.8vw] ml-[1vw]'>UI Design</div>
                      </div>
                    </div>
                </div>

              <div className='flex justify-center'>
                <div className='lcBody w-[80vw] font-normal text-justify lg:text-center text-neutral-500 xl:text-[1.25vw]'>
                  <p>
                    Lumière Couture is a high-end fashion house App that offers a unique 
                    blend of art, photography, fashion, and lifestyle. 
                    Lumière Couture is a brand and fashion house
                    known for its exquisite craftsmanship, attention to detail, and 
                    unique designs that cater to women who appreciate luxury, sophistication, 
                    and elegance.
                  </p>
                  <p className='pt-[1vw]'>
                    As the Sole UX designer, I designed the app from scratch with the support and vision of the co-founders.
                    The project is focused on creating a comprehensive digital presence that reflects the brand's values, 
                    aesthetics, and offerings. The project will enable Lumière Couture to reach a broader audience, increase sales and revenue, 
                    and establish itself as a leading fashion house in the industry.</p>
                </div>
              </div>
             

              <Link to="/FullProject1">
                  <div className='ml-[2vw] flex justify-center items-center mt-[5vw]'>
                    <div className='lm'>
                        <div className='lm1 text-stone-400 hover:text-neutral-700'>
                            <span className='l text-[3.5vw] lg:text-[2.5vw]'>L</span>
                            <span className='learnMore mr-[1.5vw] tracking-widest text-[3vw] lg:text-[2vw]'>EARN MORE</span>
                        </div>
                    </div>
                    <div className='animate-ping'><img className='w-[2.5vw] lg:w-[2vw] h-[2.5vw] lg:h-[2vw]' src= {arr3} alt= "arrow"></img></div>
                  </div>
              </Link>
            </section>
        </div>
    </div>
  )
}

export default Project1