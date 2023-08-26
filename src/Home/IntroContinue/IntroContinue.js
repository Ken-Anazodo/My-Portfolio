import React from 'react'
import './IntroContinue.css';

import gsap from 'gsap';
import {useEffect} from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// import titleDP from "./img/titleDP.jpg";

gsap.registerPlugin(ScrollTrigger);

const IntroContinue = () => {

	useEffect(() => {

		// aesthetics and stick effects
		gsap.fromTo('.st1', {opacity: 0, x: 0}, {duration: 3, opacity: 1, x: '-45vw', delay:0.2, ease: 'power2.easeIn', 
		scrollTrigger: {
		trigger: '.st1',
		start: "10px 80%",
		 toggleActions: 'play reverse play reverse'
		} }, '0.2')

		gsap.fromTo('.st2', {opacity: 0, y: 0}, {duration: 3, opacity: 1, y: '-43vw', delay:0.2, ease: 'power2.easeIn', 
		scrollTrigger: {
		trigger: '.st2',
		start: "10px 80%",
		 toggleActions: 'play reverse play reverse'
		} }, '0.2')

		gsap.fromTo('.st3', {opacity: 0, y: 0}, {duration: 3, opacity: 1, y: '40vw', delay:0.2, ease: 'power2.easeIn', 
		scrollTrigger: {
		trigger: '.st3',
		start: "10px 80%",
		 toggleActions: 'play reverse play reverse'
		} }, '0.2')

		gsap.fromTo('.st4', {opacity: 0, x: 0}, {duration: 3, opacity: 1, x: '45vw', delay:0.2, ease: 'power2.easeIn', 
		scrollTrigger: {
		trigger: '.st4',
		start: "10px 80%",
		 toggleActions: 'play reverse play reverse'
		} }, '0.2')

		gsap.fromTo('.st5', {opacity: 0, x: 0}, {duration: 3, opacity: 1, x: '-31vw', delay:1, ease: 'power2.easeIn', transition: 0.5,
		scrollTrigger: {
		trigger: '.st5',
		start: "10px 80%",
		 toggleActions: 'play reverse play reverse'
		} }, '0.2')



		// Let's Begin
		gsap.to('.lett1', {duration: 1, y: 0, opacity: 1, delay:1, ease: 'power2.easeIn', 
        scrollTrigger: {
        trigger: '.lett1',
        start: "10px 85%",
		toggleActions: 'play reverse play none'
        } }, '0.2')

		gsap.to('.begg1', {duration: 1, y: 0, opacity: 1, stagger: 0.2, delay:1, ease: 'power2.easeIn', 
        scrollTrigger: {
        trigger: '.begg1',
        start: "10px 85%",
		toggleActions: 'play reverse play none'
        } }, '0.2')




		// The Introduction Effect
		gsap.fromTo('.b1', {opacity: 0, y: '15vw'}, {duration: 2, opacity: 1, y: 0, delay:1.5, ease: 'power2.easeIn',
		scrollTrigger: {
		trigger: '.b1',
		start: "10px 80%",
		 toggleActions: 'play reverse play none'
		} }, '0.2')

		gsap.fromTo('.b2', {opacity: 0, x: '20vw'}, {duration: 2, opacity: 1, x: 0, delay:1.5, ease: 'power2.easeIn', 
		scrollTrigger: {
		trigger: '.b2',
		start: "10px 80%",
		 toggleActions: 'play reverse play none'
		} }, '0.2')

		gsap.fromTo('.b3', {opacity: 0, y: '8vw'}, {duration: 2, opacity: 1, y: 0, delay:3.5, ease: 'power2.easeIn', 
		scrollTrigger: {
		trigger: '.b3',
		start: "10px 99%",
		 toggleActions: 'play reverse play none'
		} }, '0.2')

		gsap.fromTo('.b4', {opacity: 0, x:  '50vw'}, {duration: 2, opacity: 1, x: 0, delay:4.7, ease: 'power2.easeIn', 
		scrollTrigger: {
		trigger: '.b4',
		start: "10px 99%",
		 toggleActions: 'play reverse play none'
		} }, '0.2')

		gsap.fromTo('.chns', {opacity: 0, y: '-15vw'}, {duration: 1, opacity: 1, y: 0, delay:1.5, ease: 'power2.easeIn', 
		scrollTrigger: {
		trigger: '.chns',
		start: "10px 80%",
		 toggleActions: 'play reverse play none'
		} }, '0.2')

		gsap.fromTo('.introd1', {opacity: 0, x: '-15vw'}, {duration: 1, opacity: 1, x: 0, delay:1.5, ease: 'power2.easeIn', 
		scrollTrigger: {
		trigger: '.introd1',
		start: "10px 80%",
		 toggleActions: 'play reverse play none'
		} }, '0.2')

		gsap.fromTo('.introd2', {opacity: 0, y: '12vw'}, {duration: 0.5, opacity: 1, y: 0, delay:2.1, ease: 'power2.easeIn', transition: 1, 
		scrollTrigger: {
		trigger: '.introd2',
		start: "10px 80%",
		 toggleActions: 'play reverse play none'
		} }, '0.2')

		gsap.fromTo('.allEx', {opacity: 0, y: '6vw'}, {duration: 0.5, opacity: 1, y: 0, delay:2.8, ease: 'power2.easeIn', transition: 1, 
		scrollTrigger: {
		trigger: '.allEx',
		start: "10px 99%",
		 toggleActions: 'play reverse play none'
		} }, '0.2')


	}, [])


  return (
	<div>
		<section className='ssec h-screen w-screen px-[3vw] lg:px-[15vw] bg-black py-[5vw]'>
			<div className='h-[80vh] w-full relative overflow-hidden'>
				<div className='h-full w-full'>
					<div className='bgSec h-full w-full opacity-[30%] object-cover'></div>
				</div>
				
				<div className='st1 absolute top-[3vw] left-0'>
					<div className='h-[2vw] lg:h-[1.3vw] w-[55vw] lg:w-[45vw] bg-black'></div>
				</div>

				<div className='st5 absolute top-[45vw] left-0 sm:[display:none]'>
					<div className='h-[2vw] lg:h-[1.3vw] w-[35vw] bg-black'></div>
				</div>

				<div className='st2 absolute top-[0vw] right-[20vw]'>
					<div className='w-[2vw] lg:w-[1.3vw] h-[55vw] lg:h-[30vw] bg-black'></div>
				</div>
				
					<div className='h-full w-full flex justify-center items-center absolute top-[0vw] left-[0vw] overflow-hidden'>
						<div className='redBar b1 h-[35vw] lg:h-[15vw] w-[3.5vw] lg:w-[1.5vw]'></div>
						<div className='pl-[7vw] lg:pl-[5vw]'>
							<div className='redBar b2 mb-[20vw] lg:mb-[9vw] h-[3vw] lg:h-[1vw] w-[8vw] lg:w-[4vw]'></div>
						</div>
					</div>




					<div className='h-full w-full flex justify-center md:justify-start absolute top-0 left-0'>
						<div className='flex justify-center md:justify-start text-zinc-950 lg:text-zinc-900  mt-[7vw] md:mt-[4vw] lg:mt-[2vw] z-20 md:ml-[10vw]'>
							<div>
								<div className='text-center flex justify-center items-center md:flex-col md:justify-start md:items-start lg:flex-row lg:items-center'>
									<div className='lett'>
										<div className='lett1 text-[14vw] md:text-[10vw] lg:text-[6vw] mr-[6vw] lg:mr-[3.5vw] md:h-[13vw]'>LET'S</div>
									</div>
									
									<ul className='begg text-[6.5vw] md:text-[5vw] lg:text-[3vw] lg:mb-[4vw] flex'>
										<li className='begg1 mr-[5.3vw] md:mr-[4.5vw] lg:mr-[3vw]'>B</li>
										<li className='begg1 mr-[5.3vw] md:mr-[4.5vw] lg:mr-[3vw]'>E</li>
										<li className='begg1 mr-[5.3vw] md:mr-[4.5vw] lg:mr-[3vw]'>G</li>
										<li className='begg1 mr-[5.3vw] md:mr-[4.5vw] lg:mr-[3vw]'>I</li>
										<li className='begg1'>N</li>
									</ul>
								</div>
							</div>
						</div>
					</div>






					<div className='h-full w-full flex justify-center items-end absolute top-0 left-0'>
						<div className='allEx flex justify-center items-center text-zinc-950 text-[2.8vw] md:text-[1.9vw] lg:text-[1.1vw] mb-[40vw] md:mb-[20vw] lg:mb-[2vw] z-20'>
							<div>ALL NEW EXCLUSIVE</div>
						</div>

						<div className='ml-[-3vw] [display:none] lg:[display:block]'>
							<div className='b3 redBar lg:w-[1.3vw]  lg:h-[5vw]'></div>
						</div>
					</div>

					<div className='absolute top-[18.5vw] right-0 sm:[display:none]'>
						<div className='redBar b4 h-[2vw] w-[27vw]'></div>
					</div>

					<div className='absolute left-[0vw] bottom-[0vw] h-full w-full flex justify-center items-center theIntrod text-yellow-100 text-[4vw] lg:text-[1.5vw] lg:[display:none'>
						<div>
							<div className='chns ml-[12.7vw] lg:ml-[9.7vw] mb-[5vw] lg:mb-0'>
								<div>查</div>
								<div>看</div>
							</div>
							<div className='mb-[15vw] lg:mb-[6vw] ml-[3vw]'>
								<div className='introd1 mb-[1vw] text-[4vw] lg:text-[1.8vw]'>the</div>
								<div className='introd2 ml-[2vw] text-[4.5vw] lg:text-[3vw]'>INTRODUCTION</div>
							</div>
						</div>
					</div>

					<div className='st3 absolute bottom-[0vw] left-[20vw]'>
						<div className='w-[2vw] lg:w-[1.3vw] h-[55vw] lg:h-[30vw] bg-black'></div>
					</div>

					<div className='st4 absolute bottom-[3vw] right-0'>
						<div className='h-[2vw] lg:h-[1.3vw] w-[55vw] lg:w-[45vw] bg-black'></div>
					</div>

				</div>
		</section>
	</div>
  )
}

export default IntroContinue