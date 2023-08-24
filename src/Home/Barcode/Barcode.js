import React from 'react';
import './Barcode.css';

import gsap from 'gsap';
import {useEffect} from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import barcodee from "./img/barcodee.png";
import circle from "./img/circle.png";

gsap.registerPlugin(ScrollTrigger);

const Barcode = () => {

    useEffect(() => {
     
     gsap.fromTo('.bCode', {opacity: 0, y: '20vw'}, {duration: 1, opacity: 1, y: 0, delay:0.2, ease: 'power2.easeIn', transition: 1, 
        scrollTrigger: {
        trigger: '.bCode',
        start: "10px 70%"
        } }, '0.2')

        gsap.fromTo('.ycc', {opacity: 0}, {duration: 1, opacity: 1, delay: 1.5, ease: 'power2.easeIn', transition: 1, 
        scrollTrigger: {
        trigger: '.ycc',
        } }, '0.2')

    }, [])
    
  return (
    <div className='bg-stone-200 h-[70vh]'>
        <div className='bCode h-[65vh] flex items-center justify-center'>
            <div>
                <div className='flex justify-center'>
                    <div className='w-[40vw] h-[15vw]'> 
                        <img className='h-full w-full object-cover' src= {barcodee} alt= "barcode"></img>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <div className='mt-[2vw] text-[1.7vw] text-black'>
                        <span className='barcode'>
                            <span className='bar'>11102 </span> 
                            <span className='bar'>100004500</span>  
                            <span className='bar'>00343</span>  
                            <span className='bar'>01</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <div className='ycc flex items-end justify-center'>
            <div className='year flex justify-center items-center text-[2vw] lg:text-[1.2vw]'>
                <img className='w-[1vw] h-[1vw] mr-[0.2vw] mb-[0.15vw] lg:mb-[0.1vw]' src= {circle} alt= "copyright"></img>
                <div>2023</div>
            </div>
        </div>
    </div>
  )
}

export default Barcode