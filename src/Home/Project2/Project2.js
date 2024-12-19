import React from 'react'
import './Project2.css';


import img1 from "./img/zt.png";
import img2 from "./img/hb.png";

const Project2 = () => {
  return (
	<div class="project2 px-[5vw] lg:px-[2vw] text-stone-400">
			<div class="project2-content xl:flex xl:align-middle w-[100%]">

				 {/* group 1 */}
				<div class="group1">
					<div class="work-desc xl:[display:none]">
						<ul class="my-work">
							<li className='text-stone-500'>Let's Jump In</li>
						</ul>

						<div class="my-work1">
							<p className='text-stone-400'>Take a look at my Projects</p>
						</div>
					</div>
					<div class="proj-container">
						<div className='zeroOnee mt-[6vw] sm:mt-[3vw] text-[8vw]  xl:text-[4vw] text-stone-600'> 03</div>
						<a className='link' href='https://zodoterminal.pythonanywhere.com' aria-label='zodo terminal' target="_blank" rel="noopener noreferrer">
							<div className="proj proj1">
								<img className='w-full h-full object-cover' src= {img1} alt= "zodo terminal"></img>
							</div>
						</a>

						<div>
							<div class="proj-year-name text-stone-500">
								<p class="work-year">2024</p>
								<ul class="work-title">
									<li>Zodo Terminal</li>
								</ul>
							</div>
							
							<div class="proj-descr">
								<p>E-commerce Web Application</p>
							</div>
						</div>
					</div>
				</div>


				<div class="group2">
					<div class="work-desc [display:none]  xl:[display:block]">
						<ul class="my-work">
							<li className='text-stone-500'>Let's Jump In</li>
						</ul>

						<div class="my-work1">
							<p className='text-stone-400'>Take a look at my Projects</p>
						</div>
					</div>

					<div class="proj-container">
						<div className='zeroOnee mt-[3vw] text-[8vw] xl:text-[4vw] text-stone-600'> 02</div>
						<a className='link' href='https://hbstudios.vercel.app' aria-label='zodo terminal' target="_blank" rel="noopener noreferrer">
							<div className="proj proj4">
								<img className='w-full h-full object-cover' src={img2} alt= "Hb Studios"></img>
							</div>
						</a>

						<div>
							<div class="proj-year-name text-stone-500">
								<p class="work-year">2023</p>
								<ul class="work-title">
									<li>HeadBorn Studios</li>
								</ul>
							</div>
							
							<div class="proj-descr">
								<p>Portfolio Web Application</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
  )
}

export default Project2