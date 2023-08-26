import React from 'react';
import {Link} from 'react-router-dom'; 
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import './FullProject1.css';
import ClanChief from './ClanChiefIntro/ClanChief';

import gsap from 'gsap';
import {useRef, useEffect} from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type'


import img6 from "./img/img6.png";
import Arrow2 from "./img/Arrow2.png";
import img8 from "./img/img8.png";
import empathise from "./img/empathise.png";
import idea from "./img/idea.png";
import def from "./img/def.png";
import proto from "./img/proto.png";
import testing from "./img/testing.png";
import img18 from "./img/img18.jpg";
import img19 from "./img/img19.jpg";
import InfoArch1 from "./img/InfoArch1.jpg";
import Userflow from "./img/Userflow.jpg";
import img17 from "./img/img17.jpg";
import wireframe from "./img/wireframe.jpg";
import Mac from "./img/Mac.png";
import macWireframe1 from "./img/macWireframe1.jpg";
import lum from "./img/lum.jpg";
import lum1 from "./img/lum1.jpg";
import HomePage from "./img/HomePage.jpg";
import Cart1 from "./img/Cart1.jpg";
import Cart from "./img/Cart.jpg";
import lumModel2 from "./img/lumModel2.jpg";
import ConceptPage from "./img/ConceptPage.jpg";
import lumModel from "./img/lumModel.jpg";
import LabPage from "./img/LabPage.jpg";
import StorePage from "./img/StorePage.jpg";
import ContactPage from "./img/ContactPage.jpg";
import HomePage1 from "./img/HomePage1.jpg";
import StorePage1 from "./img/StorePage1.jpg";
import ConceptPage1 from "./img/ConceptPage1.jpg";
import SignUp from "./img/SignUp.jpg";
import LogIn from "./img/LogIn.jpg";
import LabPage1 from "./img/LabPage1.jpg";
import ContactPage1 from "./img/ContactPage1.jpg";
import Nav from "./img/Nav.jpg";
import Cart11 from "./img/Cart11.jpg";
import Cartt from "./img/Cartt.jpg";
import Basket from "./img/Basket.jpg";
import PaypalEmail from "./img/PaypalEmail.jpg";
import PaypalPassword from "./img/PaypalPassword.jpg";
import ConfirmationPage from "./img/ConfirmationPage.jpg";
import PaymentPage from "./img/PaymentPage.jpg";
import protoPic from "./img/protoPic.png";
import iron1 from "./img/iron1.png";
import circle from "./img/circle.png";
import cee from "./img/cee.PNG";

// import protoVideo from "./vid/protoVid.mov";
// import problem from "./vid/problem.mp4";
// import problem1 from "./vid/problem1.mp4";
// import fashion2 from "./vid/fashion2.mp4";

// import class4 from "./vid/class4.mp4";


gsap.registerPlugin(ScrollTrigger);










const FullProject1 = () => {

    const intro = useRef(null);
    const myNo = useRef(null);
    const projectDate = useRef(null);
    const lumC = useRef(null);
    const caseStudy = useRef(null);
    const caseStudy1 = useRef(null);
    const tools = useRef(null);
    const duration = useRef(null);
    const role = useRef(null);
    const role1 = useRef(null);
    const ux = useRef(null);
    const ux1 = useRef(null);
    const overviewSec = useRef(null);
    const fashHouse = useRef(null);
    const ecom = useRef(null);
    const mockupReveal = useRef(null);
    const modelReveal = useRef(null);
    const goalsParent = useRef(null);
    const problemParent = useRef(null);
    const soluParent = useRef(null);
    const discoverGroup1 = useRef(null);
    const discoverGroup2 = useRef(null);
    const discoverGroup3 = useRef(null);
    const designThinkProcess = useRef(null);
    const persona1 = useRef(null);
    const persona2 = useRef(null);
    const persona11 = useRef(null);
    const persona21 = useRef(null);
    const prototypeSec = useRef(null);
    const lofi = useRef(null);
    const personaReveal1 = useRef(null);
    const personaReveal2 = useRef(null);
    const personaReveal11 = useRef(null);
    const personaReveal21 = useRef(null);
    const personaReveal31 = useRef(null);
    const lofiReveal = useRef(null);
    const macReveal = useRef(null);

    useEffect(() => {
      const clanIntroRed = intro.current;
      const clanIntroChildRed = clanIntroRed.children[0];

    //   UX Case Study Video Section
    const elprojectDate = projectDate.current;
    const elmyNo = myNo.current;
    const ellumC = lumC.current;
    const elcaseStudy = caseStudy.current;
    const elcaseStudy1 = caseStudy1.current;
    const elcaseStudyChild1 = elcaseStudy.children[0];
    const elcaseStudyChild2 = elcaseStudyChild1.nextSibling;
    const elcaseStudyChild11 = elcaseStudy1.children[0];
    const elcaseStudyChild22 = elcaseStudyChild11.nextSibling;
    const eltools = tools.current;
    const elduration = duration.current;
    const elrole = role.current;
    const elrole1 = role1.current;
    const elux = ux.current;
    const elux1 = ux1.current;
    const elfashHouse = fashHouse.current;
    const elecom = ecom.current;

    // Mock UP Section
    const elmockupReveal = mockupReveal.current;
    const elmodelReveal = modelReveal.current;
    

    //   Persona Section
      const elpsona1 = persona1.current;
      const elpsona2 = persona2.current;
      const elpsona11 = persona11.current;
      const elpsona21 = persona21.current;
      const ellofi = lofi.current;
      const elprototypeSec = prototypeSec.current;
      const elpsonaReveal1 = personaReveal1.current;
      const elpsonaReveal2 = personaReveal2.current;
      const elpsonaReveal11 = personaReveal11.current;
      const elpsonaReveal21 = personaReveal21.current;
      const elpsonaReveal31 = personaReveal31.current;
      const ellofiReveal = lofiReveal.current;


    //   Overview Section
     const eloverviewParent = overviewSec.current;
     const overviewChild1 = eloverviewParent.children[0];
     const overviewChild2 = overviewChild1.nextSibling;
     const overviewChild3 = overviewChild2.nextSibling;

    // Goals Section
    const elgoalsParent = goalsParent.current;
    

    // Problem Section
    const elproblemParent = problemParent.current;
    const problemChild1 =  elproblemParent.children[0];
    const problemChild2 = problemChild1.nextSibling;
    const problemChild3 = problemChild2.nextSibling;
    const problemChild4 = problemChild3.nextSibling;
    const problemChild5 = problemChild4.nextSibling;
    const problemChild6 = problemChild5.nextSibling;
    const problemChild7 = problemChild6.nextSibling;
    const problemChild8 = problemChild7.nextSibling;

    // Soltion Section
    const elsoluParent = soluParent.current;
    const soluChild1 =  elsoluParent.children[0];
    const soluChild2 = soluChild1.nextSibling;

    // Design Thinking Process
    const elDesignThinkProcess = designThinkProcess.current;

    // Discovering the Problem
    const elDiscoverGroup1 = discoverGroup1.current;
    const elDiscoverGroup2 = discoverGroup2.current;
    const elDiscoverGroup3 = discoverGroup3.current;

            // High Fidelity
    // Mac Reveal
    const elmacReveal = macReveal.current;


      

    // UX Case Study Section
      let tl000 = gsap.timeline()

      tl000.fromTo(elux, {opacity:0, x: '40vw'}, {opacity:1, x: 0, duration: 0.5, ease: "power4", transition: 1}, "8")
      .fromTo(elux1, {opacity:0, x: '-60vw'}, {opacity:1, x: 0, duration: 0.5, ease: "power4", transition: 1}, "8")
      .fromTo(elcaseStudyChild2, {opacity:0, y: '-100vw'}, {opacity:1, y: 0, duration: 1, ease: "power4", transition: 1}, "7.9")
      .fromTo(elcaseStudyChild1, {opacity:0, y: '-100vw'}, {opacity:1, y: 0, duration: 1, ease: "power4", transition: 1}, "8.3")
      .fromTo(elcaseStudyChild22, {opacity:0, x: '100vw'}, {opacity:1, x: 0, duration: 1, ease: "power4", transition: 1}, "7.9")
      .fromTo(elcaseStudyChild11, {opacity:0, x: '100vw'}, {opacity:1, x: 0, duration: 1, ease: "power4", transition: 1}, "8.3")
      .fromTo('.exec1', {opacity:0, y: '-100vw'}, {opacity:1, y: 0, duration: 1, ease: "power4", transition: 1}, "8.9")
      .fromTo('.exec2', {opacity:0, x: '50vw'}, {opacity:1, x: 0, duration: 1, ease: "power4", transition: 1}, "8.9")
      .fromTo(elprojectDate, {opacity:0, y: '20vw'}, {opacity:1, y: 0, duration: 0.7, ease: "power4"}, "10.9")
      .fromTo(ellumC, {opacity:0, y: '20vw'}, {opacity:1, y: 0, duration: 0.7, ease: "power4"}, "10.9")
      .fromTo(eltools, {opacity:0, y: '6vw'}, {opacity:1, y: 0, duration: 0.7, ease: "power4"}, "10.9")
      .fromTo(elduration, {opacity:0, y: '6vw'}, {opacity:1, y: 0, duration: 0.7, ease: "power4"}, "10.9")
      .fromTo(elmyNo, {opacity:0, x: '20vw'}, {opacity:1, duration: 1, x: 0, ease: "power4"}, "11.7")
      .fromTo(elrole, {opacity:0, x: '10vw'}, {opacity:1, x: 0, duration: 1, ease: "power4"}, "11.7")
      .fromTo(elrole1, {opacity:0, x: '10vw'}, {opacity:1, x: 0, duration: 1, ease: "power4"}, "11.7")
      .fromTo(elecom, {opacity:0, y: '-10vw'}, {opacity:1, y: 0, duration: 0.5, ease: "power4", transition: 1}, "12.7")
      .fromTo(elfashHouse, {opacity:0, y: '-10vw'}, {opacity:1, y: 0, duration: 0.5, ease: "power4", transition: 1}, "13")
      .fromTo('.uid', {opacity:0}, {opacity:1, duration: 1, ease: "power4", transition: 1}, "14")
      
     


    // Mock Up and Model Section
    gsap.fromTo('.twentyThree', {y: '15vw', opacity: 0}, {duration: 1, y: 0, opacity: 1, delay:0.2, ease: 'power2.easeIn', 
    scrollTrigger: {
      trigger: '.twentyThree',
      start: "10px 90%"
    } }, '0.2')

    gsap.to('.pro', {duration: 1, y: 0, opacity: 1, stagger: 0.3, delay:0.2, ease: 'power2.easeIn', 
    scrollTrigger: {
      trigger: '.pro',
      start: "10px 90%"
    } }, '0.2')

    gsap.to(elmockupReveal, {height: '0%', duration: 2, ease: 'power2.easeInOut', 
      scrollTrigger: {
        trigger: elmockupReveal,
        start: "10px 70%",
      }}, .2)

     gsap.to(elmodelReveal, {width: '0%', duration: 2, ease: 'power2.easeInOut', 
      scrollTrigger: {
        trigger: elmodelReveal,
        start: "10px 50%",
        scrub: true
      }}, .2)

      gsap.fromTo('.ele', {y: '-10vw', opacity: 0}, {duration: 1, y: 0, opacity: 1, stagger: 0.2, delay:0.2, ease: 'power2.easeIn', 
      scrollTrigger: {
        trigger: '.ele',
        start: "10px 90%"
      } }, '0.2')

      gsap.fromTo('.aWeb', {y: '10vw', opacity: 0}, {duration: 1, y: 0, opacity: 1, delay:0.2, ease: 'power2.easeIn', 
      scrollTrigger: {
        trigger: '.aWeb',
        start: "10px 85%"
      } }, '0.2')

      gsap.fromTo('.app1', {y: '10vw', opacity: 0}, {duration: 1, y: 0, opacity: 1, delay:0.2, ease: 'power2.easeIn', 
      scrollTrigger: {
        trigger: '.app1',
        start: "10px 85%"
      } }, '0.2')

      gsap.fromTo('.forLumiere', {y: '10vw', opacity: 0}, {duration: 1, y: 0, opacity: 1, delay:0.2, ease: 'power2.easeIn', 
      scrollTrigger: {
        trigger: '.forLumiere',
        start: "10px 85%"
      } }, '0.2')

      gsap.fromTo('.shortIntro', {y: '10vw', opacity: 0}, {duration: 1, y: 0, opacity: 1, delay:0.2, ease: 'power2.easeIn', 
      scrollTrigger: {
        trigger: '.shortIntro',
        start: "10px 85%"
      } }, '0.2')

      gsap.fromTo('.uxui', {x: '-10vw', opacity: 0}, {duration: 1, x: 0, opacity: 1, delay:0.2, ease: 'power2.easeIn', 
      scrollTrigger: {
        trigger: '.uxui',
        start: "10px 60%"
      } }, '0.2')

      gsap.fromTo('.arr', {opacity: 0}, {duration: 1, opacity: 1, delay:0.2, ease: 'power2.easeIn', transition: 1, 
      scrollTrigger: {
        trigger: '.arr',
        start: "10px 60%"
      } }, '0.2')

      gsap.fromTo('.fash', {y: '15vw', opacity: 0}, {duration: 1, y: 0, opacity: 1, delay:0.2, ease: 'power2.easeIn', 
      scrollTrigger: {
        trigger: '.fash',
        start: "10px 90%"
      } }, '0.2')

      gsap.fromTo('.barcodee', {y: '10vw', opacity: 0}, {duration: 1, y: 0, opacity: 1, delay:0.2, ease: 'power2.easeIn', 
      scrollTrigger: {
        trigger: '.barcodee',
        start: "10px 85%"
      } }, '0.2')

     




    
      let tl444 = gsap.timeline()

      tl444.fromTo(clanIntroRed, { yPercent: 0, translate: 0, display: "block", opacity: 1}, {display: "none", opacity: 0, yPercent: 100, translate: '100%', transition: 1, ease: 'power4.easeOut', duration: 1.5,}, '6')
          .fromTo(clanIntroChildRed, { yPercent: 0, translate: 0, display: "block", opacity: 1}, {display: "none", opacity: 0, yPercent: 100, translate: '-100%', transition: 1, ease: 'power4.easeOut', duration: 1.5}, '6')
        

        // Sarah Reveal (Big Picture)
      gsap.to(elpsonaReveal1, {height: '0%', duration: 0.7, ease: 'power2.easeInOut', 
      scrollTrigger: {
        trigger: elpsonaReveal1,
        start: "10px 50%",
      }}, .2)

      // Olivia Reveal (Big Picture)
      gsap.to(elpsonaReveal2, {height: '0%', duration: 0.7, ease: 'power2.easeInOut', 
      scrollTrigger: {
        trigger: elpsonaReveal2,
        start: "10px 50%",
      }}, .2)

             // Sarah Reveal (Small Picture)      
      gsap.to(elpsonaReveal11, {height: '0%', duration: 0.7, ease: 'power2.easeInOut', 
      scrollTrigger: {
        trigger: elpsonaReveal11,
        start: "10px 50%",
      }}, .2)

       // Olivia Reveal (Small Picture)
       gsap.to(elpsonaReveal21, {height: '0%', duration: 0.7, ease: 'power2.easeInOut', 
       scrollTrigger: {
         trigger: elpsonaReveal21,
         start: "10px 50%",
       }}, .2)

    //    PROTOTYPE REVEAL
        gsap.to(elpsonaReveal31, {width: '0%', duration: 0.7, ease: 'power2.easeInOut', 
        scrollTrigger: {
        trigger: elpsonaReveal31,
        start: "10px 50%",
        }}, .2)

 //    LOFI REVEAL
        gsap.to(ellofiReveal, {width: '0%', duration: 0.7, ease: 'power2.easeInOut', 
        scrollTrigger: {
        trigger: ellofiReveal,
        start: "10px 50%",
        }}, .2)
     

      
    //   Project Overview Section
        gsap.fromTo('.projj', {x: '-20vw', opacity: 0}, {duration: 1, x: 0, opacity: 1, delay:0.2, ease: 'power2.easeIn', 
        scrollTrigger: {
        trigger: '.projj',
        start: "10px 85%"
        } }, '0.2')

        gsap.to('.overview', {duration: 0.5, y: 0, opacity: 1, stagger: 0.2, delay:0.2, ease: 'power2.easeIn', 
        scrollTrigger: {
        trigger: '.overview',
        start: "10px 85%"
        } }, '0.2')
        


         let tl = gsap.timeline()

        //   Overview Children
        tl.fromTo(overviewChild1, {opacity:0, y: '8vw'}, {opacity:1, y: 0, ease: "power3.easeOut", transition: 1, duration: 2, 
        scrollTrigger:{
        trigger: eloverviewParent,
        start: "10px 90%",
        // scrub: true,
        // toggleActions: 'play reverse play reverse'
        }},"0.2" )

        .fromTo(overviewChild2, {opacity:0, y: '8vw'}, {opacity:1, y: 0, ease: "power3.easeOut", transition: 1, duration: 2, 
        scrollTrigger:{
        trigger: overviewChild2,
        start: "10px 90%",
        // scrub: true,
        // toggleActions: 'play reverse play reverse'
        }},"0.2" )

        .fromTo(overviewChild3, {opacity:0, y: '8vw'}, {opacity:1, y: 0, ease: "power3.easeOut", transition: 1, duration: 2, 
        scrollTrigger:{
        trigger: overviewChild3,
        start: "10px 90%",
        // scrub: true,
        // toggleActions: 'play reverse play reverse'
        }},"0.2" )




        // Goals Section
        gsap.fromTo('.theee', {x: '-20vw', opacity: 0}, {duration: 1, x: 0, opacity: 1, delay:0.2, ease: 'power2.easeIn', 
        scrollTrigger: {
        trigger: '.theee',
        start: "10px 85%"
        } }, '0.2')

        gsap.to('.goalss', {duration: 0.5, y: 0, opacity: 1, stagger: 0.2, delay:0.2, ease: 'power2.easeIn', 
        scrollTrigger: {
        trigger: '.goalss',
        start: "10px 85%"
        } }, '0.2')
        
        gsap.fromTo('.aim', {y: '10vw', opacity: 0}, {duration: 1, y: 0, opacity: 1, delay:0.2, ease: 'power2.easeIn', 
        scrollTrigger: {
          trigger: '.aim',
          start: "10px 85%"
        } }, '0.2')


        tl.fromTo(elgoalsParent, {opacity:0, y: '8vw'}, {opacity:1, y: 0, ease: "power3.easeOut", transition: 1, duration: 2, 
        scrollTrigger:{
        trigger: elgoalsParent,
        start: "10px 90%",
        // toggleActions: 'play reverse play reverse'
        }},"0.2" )

    


         // Problem Section
         gsap.fromTo('.thee', {x: '-20vw', opacity: 0}, {duration: 1, x: 0, opacity: 1, delay:0.2, ease: 'power2.easeIn', 
        scrollTrigger: {
        trigger: '.thee',
        start: "10px 85%"
        } }, '0.2')

        gsap.to('.probs', {duration: 0.5, y: 0, opacity: 1, stagger: 0.2, delay:0.2, ease: 'power2.easeIn', 
        scrollTrigger: {
        trigger: '.probs',
        start: "10px 85%"
        } }, '0.2')


         tl.fromTo(problemChild1, {opacity:0, y: '8vw'}, {opacity:1, y: 0, ease: "power3.easeOut", transition: 1, duration: 2, 
         scrollTrigger:{
         trigger: elproblemParent,
         start: "10px 90%",
        //  toggleActions: 'play reverse play reverse'
         }},"0.2" )

           .fromTo(problemChild2, {opacity:0, y: '8vw'}, {opacity:1, y: 0, ease: "power3.easeOut", transition: 1, duration: 2, 
         scrollTrigger:{
         trigger: problemChild2,
         start: "10px 90%",
        //  toggleActions: 'play reverse play reverse'
         }},"0.2" )
 
         .fromTo(problemChild3, {opacity:0, y: '8vw'}, {opacity:1, y: 0, ease: "power3.easeOut", transition: 1, duration: 2, 
         scrollTrigger:{
         trigger: problemChild3,
         start: "10px 90%",
        //  toggleActions: 'play reverse play reverse'
         }},"0.2" )
 
         .fromTo(problemChild4, {opacity:0, y: '8vw'}, {opacity:1, y: 0, ease: "power3.easeOut", transition: 1, duration: 2, 
         scrollTrigger:{
         trigger: problemChild4,
         start: "10px 90%",
        //  toggleActions: 'play reverse play reverse'
         }},"0.2" )
 
         .fromTo(problemChild5, {opacity:0, y: '8vw'}, {opacity:1, y: 0, ease: "power3.easeOut", transition: 1, duration: 2, 
         scrollTrigger:{
         trigger: problemChild5,
         start: "10px 90%",
        //  toggleActions: 'play reverse play reverse'
         }},"0.2" )
 
         .fromTo(problemChild6, {opacity:0, y: '8vw'}, {opacity:1, y: 0, ease: "power3.easeOut", transition: 1, duration: 2, 
         scrollTrigger:{
         trigger: problemChild6,
         start: "10px 90%",
        //  toggleActions: 'play reverse play reverse'
         }},"0.2" )
 
         .fromTo(problemChild7, {opacity:0, y: '8vw'}, {opacity:1, y: 0, ease: "power3.easeOut", transition: 1, duration: 2, 
         scrollTrigger:{
         trigger: problemChild7,
         start: "10px 90%",
        //  toggleActions: 'play reverse play reverse'
         }},"0.2" )

         .fromTo(problemChild8, {opacity:0, y: '8vw'}, {opacity:1, y: 0, ease: "power3.easeOut", transition: 1, duration: 2, 
         scrollTrigger:{
         trigger: problemChild8,
         start: "10px 90%",
        //  toggleActions: 'play reverse play reverse'
         }},"0.2" )
 
       




        //  Solution Section
        gsap.fromTo('.tthe', {x: '-10vw', opacity: 0}, {duration: 1, x: 0, opacity: 1, delay:0.2, ease: 'power2.easeIn', 
        scrollTrigger: {
        trigger: '.tthe',
        start: "10px 85%"
        } }, '0.2')

        gsap.fromTo('.solution', {x: '3vw', opacity: 0}, {duration: 1, x: 0, opacity: 1, delay:0.2, ease: 'power2.easeIn', 
        scrollTrigger: {
        trigger: '.solution',
        start: "10px 85%"
        } }, '0.2')

        gsap.fromTo('.theeee', {x: '-20vw', opacity: 0}, {duration: 1, x: 0, opacity: 1, delay:0.2, ease: 'power2.easeIn', 
        scrollTrigger: {
        trigger: '.theeee',
        start: "10px 85%"
        } }, '0.2')

        gsap.to('.solution1', {duration: 0.5, y: 0, opacity: 1, stagger: 0.2, delay:0.2, ease: 'power2.easeIn', 
        scrollTrigger: {
        trigger: '.solution1',
        start: "10px 85%"
        } }, '0.2')


        
         tl.fromTo(soluChild1, {opacity:0, y: '8vw'}, {opacity:1, y: 0, ease: "power3.easeOut", transition: 1, duration: 2, 
         scrollTrigger:{
         trigger: soluChild1,
         start: "10px 90%",
        //  toggleActions: 'play reverse play reverse'
         }},"0.2" )
 
         .fromTo(soluChild2, {opacity:0, y: '8vw'}, {opacity:1, y: 0, ease: "power3.easeOut", transition: 1, duration: 2, 
         scrollTrigger:{
         trigger: soluChild2,
         start: "10px 90%",
        //  toggleActions: 'play reverse play reverse'
         }},"0.2" )



        
        //  Design Thinking Process
        gsap.to('.designProcess', {duration: 0.5, y: 0, opacity: 1, delay:0.2, ease: 'power2.easeIn', 
        scrollTrigger: {
        trigger: '.designProcess',
        start: "10px 85%"
        } }, '0.2')

        gsap.to('.desig', {duration: 0.7, y: 0, opacity: 1, delay:0.2, stagger: 0.3, ease: 'power2.easeIn',  
        scrollTrigger: {
        trigger: '.desig',
        start: "10px 95%"
        } }, '0.2')

         tl.fromTo(elDesignThinkProcess, {opacity:0, y: '12vw'}, {opacity:1, y: 0, ease: "power3.easeOut", transition: 1, duration: 2, 
         scrollTrigger:{
         trigger: elDesignThinkProcess,
         start: "10px 85%",
        //  toggleActions: 'play reverse play reverse'
         }},"0.2" ) 




        //  Empathize Phase
        gsap.to('.empath', {duration: 1, y: 0, opacity: 1, delay:0.2, ease: 'power2.easeIn', 
        scrollTrigger: {
        trigger: '.empath',
        start: "10px 85%"
        } }, '0.2')


        gsap.to('.empp', {duration: 1, x: 0, opacity: 1, delay:0.2, stagger: 0.2, ease: 'power2.easeIn', 
        scrollTrigger: {
        trigger: '.empp',
        // start: "10px 95%"
        } }, '0.2')




         // Discovering the Problem
         gsap.to('.discover', {duration: 1, y: 0, opacity: 1, delay:0.2, ease: 'power2.easeIn', 
         scrollTrigger: {
         trigger: '.discover',
         start: "10px 95%"
         } }, '0.2')

         tl.fromTo(elDiscoverGroup1, {opacity:0, y: '8vw'}, {opacity:1, y: 0, ease: "power3.easeOut", transition: 1, duration: 2, 
         scrollTrigger:{
         trigger: elDiscoverGroup1,
         start: "10px 90%",
        //  toggleActions: 'play reverse play reverse'
         }},"0.2" )
        


        //  Discovering the Problem Group 2
        gsap.to('.assumption', {duration: 1, y: 0, opacity: 1, delay:0.2, ease: 'power2.easeIn', 
        scrollTrigger: {
        trigger: '.assumption',
        start: "10px 95%"
        } }, '0.2')

        tl.fromTo(elDiscoverGroup2, {opacity:0, y: '8vw'}, {opacity:1, y: 0, ease: "power3.easeOut", transition: 1, duration: 2, 
        scrollTrigger:{
        trigger: elDiscoverGroup2,
        start: "10px 90%",
       //  toggleActions: 'play reverse play reverse'
        }},"0.2" )

   


          //  Discovering the Problem Group 3
          gsap.to('.survey', {duration: 1, y: 0, opacity: 1, delay:0.2, ease: 'power2.easeIn', 
          scrollTrigger: {
          trigger: '.survey',
          start: "10px 95%"
          } }, '0.2')


          tl.fromTo(elDiscoverGroup3, {opacity:0, y: '8vw'}, {opacity:1, y: 0, ease: "power3.easeOut", transition: 1, duration: 2, 
          scrollTrigger:{
          trigger: elDiscoverGroup3,
          start: "10px 90%",
         //  toggleActions: 'play reverse play reverse'
          }},"0.2" )
  
       
        
        // DEFINE PHASE
        gsap.to('.define', {duration: 1, y: 0, opacity: 1, stagger: 0.3, delay:0.2, ease: 'power2.easeIn', 
        scrollTrigger: {
          trigger: '.define',
          start: "10px 90%",
        } }, '0.2')

        gsap.to('.ddef', {duration: 1, x: 0, opacity: 1, stagger: 0.3, delay:0.2, ease: 'power2.easeIn', 
        scrollTrigger: {
          trigger: '.ddef',
          start: "10px 90%",
        } }, '0.2')

       
        // WHO ARE LUMIERE COUTOURE USERS
        gsap.fromTo('.lumUsr', {opacity: 0}, {duration: 1, opacity: 1, delay:0.2, ease: 'power2.easeIn', transition: 1, 
        scrollTrigger: {
        trigger: '.lumUsr',
        start: "10px 20%"
        } }, '0.2')




        // PERSONA SECTION
        gsap.fromTo('.lovesShopC', {x: '15vw', opacity: 0}, {duration: 1, x: 0, opacity: 1, delay:0.2, ease: 'power2.easeIn', 
        scrollTrigger: {
        trigger: '.lovesShopC',
        start: "10px 90%"
        } }, '0.2')

        gsap.fromTo('.busyToShopC', {x: '15vw', opacity: 0}, {duration: 1, x: 0, opacity: 1, delay:0.2, ease: 'power2.easeIn', 
        scrollTrigger: {
        trigger: '.busyToShopC',
        start: "10px 90%"
        } }, '0.2')


        tl.fromTo(elpsona1.firstElementChild, {scale: 1.8}, {scale: 1, transition: 2, duration: 2, scrollTrigger: {
        trigger: elpsona1,
        scrub: true,
      }}, .2)

        .fromTo(elpsona2.firstElementChild, {scale: 1.8}, {scale: 1, transition: 2, duration: 2, scrollTrigger: {
        trigger: elpsona2,
        scrub: true,
      }}, .2)

        .fromTo(elpsona11.firstElementChild, {scale: 1.8}, {scale: 1, transition: 2, duration: 2, scrollTrigger: {
        trigger: elpsona11,
        scrub: true,
      }}, .2)

      .fromTo(elpsona21.firstElementChild, {scale: 1.8}, {scale: 1, transition: 2, duration: 2, scrollTrigger: {
        trigger: elpsona21,
        scrub: true,
      }}, .2)

      gsap.fromTo('.oonnee', {x: '15vw', opacity: 0}, {duration: 1, x: 0, opacity: 1, delay:0.2, ease: 'power2.easeIn', transition: 1, 
      scrollTrigger: {
      trigger: '.oonnee',
      start: "10px 90%"
      } }, '0.2')

      gsap.fromTo('.ttwwoo', {x: '15vw', opacity: 0}, {duration: 1, x: 0, opacity: 1, delay:0.2, ease: 'power2.easeIn', transition: 1, 
      scrollTrigger: {
      trigger: '.ttwwoo',
      start: "10px 90%"
      } }, '0.2')

     



    //   Empathy Mapping
    gsap.to('.em', {duration: 0.7, y: 0, opacity: 1, delay:0.2, stagger: 0.3, ease: 'power2.easeIn',  
    scrollTrigger: {
    trigger: '.em',
    start: "10px 97%"
    } }, '0.2')

    gsap.fromTo('.noOneS', {y: '20vw', opacity: 0}, {duration: 1, y: 0, opacity: 1, delay:0.2, ease: 'power2.easeIn', 
    scrollTrigger: {
    trigger: '.noOneS',
    start: "10px 90%"
    } }, '0.2')

    gsap.fromTo('.noOneL', {y: '20vw', opacity: 0}, {duration: 1, y: 0, opacity: 1, delay:0.2, ease: 'power2.easeIn', 
    scrollTrigger: {
    trigger: '.noOneL',
    start: "10px 90%"
    } }, '0.2')

    gsap.fromTo('.noTwoS', {y: '20vw', opacity: 0}, {duration: 1, y: 0, opacity: 1, delay:0.2, ease: 'power2.easeIn', 
    scrollTrigger: {
    trigger: '.noTwoS',
    start: "10px 90%"
    } }, '0.2')

    gsap.fromTo('.noTwoL', {y: '20vw', opacity: 0}, {duration: 1, y: 0, opacity: 1, delay:0.2, ease: 'power2.easeIn', 
    scrollTrigger: {
    trigger: '.noTwoL',
    start: "10px 90%"
    } }, '0.2')

    gsap.fromTo('.insights', {opacity: 0}, {duration: 1, opacity: 1, delay:0.2, ease: 'power2.easeIn', transition: 1,
    scrollTrigger: {
    trigger: '.insights',
    start: "10px 85%"
    } }, '0.2')

    


    // PROBLEM STATEMENT
    gsap.fromTo('.probText1', {opacity: 0}, {duration: 1, opacity: 1, delay:0.2, ease: 'power2.easeIn', transition: 0.8, 
    scrollTrigger: {
    trigger: '.probText1',
    start: "10px 70%"
    } }, '0.2')

    gsap.fromTo('.probText2', {opacity: 0}, {duration: 1, opacity: 1, delay:0.2, ease: 'power2.easeIn', transition: 0.8, 
    scrollTrigger: {
    trigger: '.probText2',
    start: "10px 40%"
    } }, '0.2')




    // IDEATE PHASE
    gsap.to('.ideate', {duration: 1, y: 0, opacity: 1, delay:0.2, ease: 'power2.easeIn', 
    scrollTrigger: {
      trigger: '.ideate',
      start: "10px 90%",
    } }, '0.2')

    gsap.to('.idphase', {duration: 1, x: 0, opacity: 1, stagger: 0.3, delay:0.2, ease: 'power2.easeIn', 
    scrollTrigger: {
      trigger: '.idphase',
      start: "10px 85%",
    } }, '0.2')




    // INFORMATION ARCHITECTURE
    gsap.fromTo('.infoArch', {opacity: 0}, {duration: 1, opacity: 1, delay:0.2, ease: 'power2.easeIn', transition: 1, 
    scrollTrigger: {
    trigger: '.infoArch',
    start: "10px 90%"
    } }, '0.2')

    gsap.to('.arch', {duration: 1, y: 0, opacity: 1, stagger: 0.2, delay:0.2, ease: 'power2.easeIn', 
    scrollTrigger: {
      trigger: '.arch',
      start: "10px 90%",
    } }, '0.2')

    gsap.fromTo('.infoArchNote', {opacity: 0}, {duration: 1, opacity: 1, delay:0.2, ease: 'power2.easeIn', transition: 1,
    scrollTrigger: {
    trigger: '.infoArchNote',
    start: "10px 85%"
    } }, '0.2')


    // USERFLOW
    gsap.to('.userflow', {duration: 1, y: 0, opacity: 1, stagger: 0.3, delay:0.2, ease: 'power2.easeIn', 
    scrollTrigger: {
      trigger: '.userflow',
      start: "10px 90%",
    } }, '0.2')

    gsap.fromTo('.userflowNote', {opacity: 0,  y: '8vw'}, {duration: 1, opacity: 1,  y: 0, delay:0.2, ease: 'power2.easeIn', 
    scrollTrigger: {
    trigger: '.userflowNote',
    start: "10px 90%"
    } }, '0.2')






    // PROTOTYPE PHASE
    gsap.to('.prototype', {duration: 1, y: 0, opacity: 1, delay:0.2, ease: 'power2.easeIn', 
    scrollTrigger: {
      trigger: '.prototype',
      start: "10px 90%",
    } }, '0.2')

    gsap.to('.protoPhase', {duration: 1, x: 0, opacity: 1, stagger: 0.3, delay: 0.2, ease: 'power2.easeIn', 
    scrollTrigger: {
      trigger: '.protoPhase',
      start: "10px 85%",
    } }, '0.2')

    gsap.fromTo(elprototypeSec.firstElementChild, {scale: 1.8}, {scale: 1, transition: 2, duration: 2, scrollTrigger: {
        trigger: elprototypeSec,
      }}, .2)


    // PAPER WIREFRAMES
    gsap.fromTo('.papr', {x: '-20vw', opacity: 0}, {duration: 1, x: 0, opacity: 1, delay:0.2, ease: 'power2.easeIn', 
    scrollTrigger: {
    trigger: '.papr',
    start: "10px 90%"
    } }, '0.2')

    gsap.to('.papWire', {duration: 0.5, y: 0, opacity: 1, stagger: 0.2, delay:0.2, ease: 'power2.easeIn', 
    scrollTrigger: {
    trigger: '.papWire',
    start: "10px 85%"
    } }, '0.2') 
    
    gsap.fromTo('.pWireframeNote', {y: '20vw', opacity: 0}, {duration: 1, y: 0, opacity: 1, delay:0.2, ease: 'power2.easeIn', 
    scrollTrigger: {
    trigger: '.pWireframeNote',
    start: "10px 95%"
    } }, '0.2')

    gsap.fromTo('.skt', {x: '20vw', opacity: 0}, {duration: 1, x: 0, opacity: 1, delay:0.2, ease: 'power2.easeIn', 
    scrollTrigger: {
    trigger: '.skt',
    start: "10px 90%"
    } }, '0.2')



    // Digital Wireframe
    gsap.fromTo('.digit', {x: '-20vw', opacity: 0}, {duration: 1, x: 0, opacity: 1, delay:0.2, ease: 'power2.easeIn', 
    scrollTrigger: {
    trigger: '.digit',
    start: "10px 80%"
    } }, '0.2')

    gsap.to('.digiWire', {duration: 0.5, y: 0, opacity: 1, stagger: 0.2, delay:0.2, ease: 'power2.easeIn', 
    scrollTrigger: {
    trigger: '.digiWire',
    start: "10px 70%"
    } }, '0.2') 
    
    gsap.fromTo('.dWireframeNote', {y: '20vw', opacity: 0}, {duration: 1, y: 0, opacity: 1, delay:0.2, ease: 'power2.easeIn', 
    scrollTrigger: {
    trigger: '.dWireframeNote',
    // start: "10px 95%"
    } }, '0.2')

      gsap.fromTo(ellofi.firstElementChild, {scale: 1.8}, {scale: 1, transition: 2, duration: 2, scrollTrigger: {
        trigger: ellofi,
      }}, .2)



    // VISUAL DESIGN, PROTOTYPE AND STYLE GUIDE
    gsap.fromTo('.visuals', {opacity: 0}, {duration: 1, opacity: 1, delay:0.2, ease: 'power2.easeIn', transition: 1, 
    scrollTrigger: {
    trigger: '.visuals',
    start: "10px 40%"
    } }, '0.2')


    // HIGH FIDELITY DESIGNS
    gsap.to('.highFid', {duration: 0.5, y: 0, opacity: 1, delay:0.2, ease: 'power2.easeIn', 
    scrollTrigger: {
    trigger: '.highFid',
    start: "10px 95%"
    } }, '0.2') 

    gsap.to('.desi', {duration: 0.5, y: 0, opacity: 1, stagger: 0.2, delay:0.2, ease: 'power2.easeIn', 
    scrollTrigger: {
    trigger: '.desi',
    start: "10px 70%"
    } }, '0.2') 


    // Desktop Screens
    gsap.fromTo('.deskScreens', {opacity: 0}, {duration: 1, opacity: 1, delay:0.2, ease: 'power2.easeIn', transition: 0.5, 
    scrollTrigger: {
    trigger: '.deskScreens',
    start: "10px 70%"
    } }, '0.2')

    // Mac Reveal
    gsap.to(elmacReveal, {width: '0%', duration: 2, ease: 'power2.easeInOut', 
      scrollTrigger: {
        trigger: elmacReveal,
        start: "10px 70%",
      }}, .2)

    gsap.fromTo('.homePg', {opacity: 0}, {duration: 1, opacity: 1, delay:0.2, ease: 'power2.easeIn', transition: 1, 
    scrollTrigger: {
    trigger: '.homePg',
    start: "10px 90%"
    } }, '0.2')

    gsap.fromTo('.addPg', {opacity: 0}, {duration: 1, opacity: 1, delay:0.2, ease: 'power2.easeIn', transition: 1, 
    scrollTrigger: {
    trigger: '.addPg',
    start: "10px 90%"
    } }, '0.2')

    gsap.fromTo('.cartPg', {opacity: 0}, {duration: 1, opacity: 1, delay:0.2, ease: 'power2.easeIn', transition: 1, 
    scrollTrigger: {
    trigger: '.cartPg',
    start: "10px 90%"
    } }, '0.2')

    gsap.fromTo('.labPg', {opacity: 0}, {duration: 1, opacity: 1, delay:0.2, ease: 'power2.easeIn', transition: 1, 
    scrollTrigger: {
    trigger: '.labPg',
    start: "10px 90%"
    } }, '0.2')

    gsap.fromTo('.conceptLgPg', {opacity: 0}, {duration: 1, opacity: 1, delay:0.2, ease: 'power2.easeIn', transition: 1, 
    scrollTrigger: {
    trigger: '.conceptLgPg',
    start: "10px 90%"
    } }, '0.2')

    gsap.fromTo('.conceptSmPg', {opacity: 0}, {duration: 1, opacity: 1, delay:0.2, ease: 'power2.easeIn', transition: 1, 
    scrollTrigger: {
    trigger: '.conceptSmPg',
    start: "10px 90%"
    } }, '0.2')

    gsap.fromTo('.catalogPg', {opacity: 0}, {duration: 1, opacity: 1, delay:0.2, ease: 'power2.easeIn', transition: 1, 
    scrollTrigger: {
    trigger: '.catalogPg',
    start: "10px 90%"
    } }, '0.2')

    gsap.fromTo('.contactPg', {opacity: 0}, {duration: 1, opacity: 1, delay:0.2, ease: 'power2.easeIn', transition: 1, 
    scrollTrigger: {
    trigger: '.contactPg',
    start: "10px 90%"
    } }, '0.2')
    

    
    //   MOBILE SCREENS
    gsap.to('.mobScreen1', {duration: 0.8, y: 0, opacity: 1, delay:0.2, ease: 'power2.easeIn', 
    scrollTrigger: {
    trigger: '.mobScreen1',
    start: "10px 95%"
    } }, '0.2') 

    // PROTOTYPE
    gsap.to('.typHead', {duration: 0.8, y: 0, opacity: 1, delay:0.2, ease: 'power2.easeIn', 
    scrollTrigger: {
    trigger: '.typHead',
    start: "10px 99%"
    } }, '0.2')

    // REFLECTION
     gsap.to('.rflct1', {duration: 0.8, y: 0, opacity: 1, delay:0.2, ease: 'power2.easeIn', 
    scrollTrigger: {
    trigger: '.rflct1',
    start: "10px 90%"
    } }, '0.2')

    gsap.fromTo('.rflctNote', {opacity: 0}, {duration: 1, opacity: 1, delay:0.2, ease: 'power2.easeIn', transition: 1, 
    scrollTrigger: {
    trigger: '.rflctNote',
    start: "10px 95%"
    } }, '0.2')

    gsap.to('.conc1', {duration: 0.8, y: 0, opacity: 1, delay:0.2, ease: 'power2.easeIn', 
    scrollTrigger: {
    trigger: '.conc',
    start: "10px 90%"
    } }, '0.2')

    gsap.fromTo('.concNote', {opacity: 0}, {duration: 1, opacity: 1, delay:0.2, ease: 'power2.easeIn', transition: 1, 
    scrollTrigger: {
    trigger: '.concNote',
    start: "10px 95%"
    } }, '0.2')

    gsap.fromTo('.share', {opacity: 0}, {duration: 1, opacity: 1, delay:0.2, ease: 'power2.easeIn', transition: 1, 
    scrollTrigger: {
    trigger: '.share',
    start: "10px 85%"
    } }, '0.2')

    gsap.fromTo('.thanks', {opacity: 0}, {duration: 1, opacity: 1, delay:0.2, ease: 'power2.easeIn', transition: 1, 
    scrollTrigger: {
    trigger: '.thanks',
    start: "10px 75%"
    } }, '0.2')

    gsap.fromTo('.endBarcode', {opacity: 0}, {duration: 1, opacity: 1, delay:0.2, ease: 'power2.easeIn', transition: 1, 
    scrollTrigger: {
    trigger: '.endBarcode',
    start: "10px 90%"
    } }, '0.2')

    // gsap.fromTo('.ttwothreee', {opacity: 0}, {duration: 1, opacity: 1, delay: 1.5, ease: 'power2.easeIn', transition: 1, 
    // scrollTrigger: {
    // trigger: '.ttwothreee',
    // } }, '0.2')



    }, [])

// write a loader function that displays a loader until the iframe video elements loads the video?
    



  return (
    <div className='relative bg-black'>
        <div className='w-screen h-[100vh] translate-x-0 translate-y-ful absolute top-0 z-50' ref={intro}>
                      <div className='w-screen h-[100vh]  translate-x-0 translate-y-ful absolute top-0'>
                         <ClanChief/>
                      </div>
                   </div>


        <section className='bg-black relative w-screen h-screen overflow-hidden'>
            <div>

                {/* Large Screen */}
                <div className='iframeCont h-screen w-screen [display:none] lg:[display:block] mt-[-1.5vw]'>
                    <iframe src="https://player.vimeo.com/video/848780913?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;showinfo=0&amp;is_iframe=true&amp;loop=1&amp;controls=0" className='ifr brightness-50  h-full w-full  object-cover ' frameborder="0" allow="autoplay; fullscreen; picture-in-picture"  allowfullscreen title="fashion2"></iframe>
                    {/* <video src={fashion2} autoPlay loop muted className='brightness-50 h-full w-full  object-cover ' /> */}
                </div>


                {/* Small Screen */}
                <div className='iframeCont h-screen w-screen lg:[display:none] mt-[-5vw'>
                    <iframe src="https://player.vimeo.com/video/854700266?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;showinfo=0&amp;is_iframe=true&amp;loop=1&amp;controls=0" className='ifr brightness-50  h-full w-full' frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="class4"></iframe>
                    {/* <video src={class4} autoPlay loop muted className='brightness-50 object-cover h-full w-full' /> */}
                </div>


                <span className='absolute top-[2vw] left-[2vw]'>
                    <div className='numbr text-[2vw] lg:text-[1vw] text-yellow-200' ref={myNo}>
                            <div>0</div>
                            <div>4</div>
                            <div>3</div>
                    </div>
                </span>

                <span className='absolute top-[2vw] left-[44vw]'>
                    <div className='yr text-[2vw] lg:text-[1vw] text-yellow-200 flex items-center' ref={projectDate}>
                        <div className='mr-[1.2vw]'>
                            <span className='mont'>0</span>
                            <span className='mont'>4</span>
                        </div>

                        <span className='dash mr-[1.2vw]'>-</span>
                        
                        <div>
                            <span className='yr1'>2</span>
                            <span className='yr1'>0</span>
                            <span className='yr1'>2</span>
                            <span className='yr1'>3</span>
                        </div>  
                    </div>
                </span>
                

                <div className='absolute top-[1.9vw] right-[3vw]'>
                    <div className='text-[2vw] lg:text-[1.6vw] text-yellow-200 flex items-center' ref={lumC}>
                        <div className='ll mr-[0.5vw] tracking-widest'>LUMIÈRE</div>
                        <div className='cc text-[1.8vw] lg:text-[1.4vw] mb-[0.16vw] md:mb-0 lg:mb-[0.11vw]'>COUTURE</div>
                    </div>
                </div>

                                {/* Large Screen */}
                <div className='absolute h-full w-full top-0 bottom-0 left-0 right-0 flex items-center md:items-end [display:none] lg:[display:flex]'>
                    <div className=' flex items-center mt-[65vw] md:mt-0 md:mb-[35vw] lg:mb-[-7vw]'>
                        <div className='flex ux text-[30vw] text-yellow-100 mr-[1vw]' ref={ux}>
                            <div>U</div>
                            <div>X</div>
                        </div>

                        <div className='mb-[2.5vw]'>
                            <div className='cStudy text-[13vw] text-yellow-100' ref={caseStudy}>
                                <div className='h-[11vw]'>CASE</div>
                                <div>STUDY</div>
                            </div>
                        </div>
                    </div>
                </div>


                                {/* Small Screen */}
                <div className='absolute h-full w-full top-0 bottom-0 left-0 right-0 flex items-center md:items-end lg:[display:none]'>
                    <div className=' flex items-center mt-[65vw] md:mt-0 md:mb-[35vw]'>
                        <div className='flex ux text-[30vw] text-yellow-100 mr-[1vw]' ref={ux1}>
                            <div>U</div>
                            <div>X</div>
                        </div>

                        <div className='mb-[2.5vw]'>
                            <div className='cStudy text-[13vw] text-yellow-100' ref={caseStudy1}>
                                <div className='h-[11.2vw]'>CASE</div>
                                <div>STUDY</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



                    {/* Large Screen */}
            <div className='absolute h-full w-full top-0 left-0 flex items-center lg:justify-center md:items-end [display:none] lg:[display:flex]'>
                <div className='flex text-[2.3vw] ml-[65.4vw] mt-[55vw] md:mb-[58.5vw] lg:mb-[16.3vw] text-yellow-300 text-yellow-700 z-20'>
                    <div>
                        <div className='exec exec1'>
                            <div className='text-start h-[3vw] lg:h-[2.5vw]'>ALL</div>
                            <div className='text-start'>EXCLUSIVE</div>
                        </div>
                    </div>  
                </div> 
            </div>


                {/* Small Screen */}
            <div className='absolute h-full w-full top-0 left-0 flex items-center lg:justify-center md:items-end lg:[display:none]'>
                <div className='flex text-[2.4vw] ml-[78.5vw] mt-[55vw] md:mb-[58.5vw] text-yellow-300 text-yellow-700 z-20'>
                    <div>
                        <div className='exec exec2'>
                            <div className='text-start h-[3vw] lg:h-[2.5vw]'>ALL</div>
                            <div className='text-start'>EXCLUSIVE</div>
                        </div>
                    </div>  
                </div> 
            </div>



            <div className='absolute h-full w-full top-0 left-0 flex items-center md:items-end'>
                <div className='flex text-[2.9vw] lg:text-[2.4vw] ml-[8vw] lg:ml-[19.5vw] mt-[68vw] md:mb-[53vw] lg:mb-[14vw] text-yellow-300 text-yellow-700 z-20'>
                    <div>
                        <div className='uid'>
                            <div className='flex items-center'>

                                {/* Large Screen */}
                                <div className=' text-start mr-[0.7vw] [display:none] lg:[display:block] h-[2.7vw]'>UI DESIGNS</div>

                                {/* Small Screen */}
                                <div className='mr-[0.7vw] lg:[display:none]'>
                                    <div className='h-[2.6vw]'>UI</div>
                                    <div className='flex items-center'>
                                        <div className='mr-[0.7vw]'>DESIGNS</div>
                                        <div className='an uppercase text-[1.2vw]'>and</div>
                                    </div>
                                </div>

                                <div className='an italic uppercase text-[1vw] [display:none] lg:[display:block]'>and</div>
                            </div>
                            <div className='an upercase text-[1.2vw]'>Prototype</div>
                        </div>
                    </div>  
                </div> 
            </div>






            <div className='absolute h-full w-full top-0 left-0 flex items-end'>
                <div className='ffhh flex text-[2.7vw] lg:text-[1.3vw] ml-[3vw] lg:ml-[8.1vw] mb-[10vw] lg:mb-[10vw] text-yellow-300 z-20'>
                    <div>
                        <div ref={fashHouse}>
                            <div className='text-center h-[2.9vw] lg:h-[1.7vw]'>A</div>
                            <div className='text-center h-[2.9vw] lg:h-[1.7vw]'>FASHION</div>
                            <div className='text-center mb-[1vw]'>HOUSE</div>
                        </div>
                        
                        <div ref={ecom}>
                                <div className='text-center'>E-COMMERCE</div>
                                <div className='text-center mt-[-1vw] lg:mt-[0vw]'>WEBSITE</div>
                        </div> 
                    </div>  
                </div> 
                </div>





                                    {/* Large Screen Role/Team */}
                <div className='absolute h-full w-full top-0 left-0 flex items-end'>
                <div className='[display:none] lg:[display:flex] w-screen justify-end mb-[3.2vw] mr-[1.1vw] '>
                    <div className='text-yellow-200 flex flex-col items-end text-right' ref={role}>
                        <div className='role text-[1.2vw] text-yellow-400'>ROLE/TEAM</div>
                        <div className='roleAns toolsAns uppercase text-[0.9vw] text-right leading-[0.96vw]'>
                            <div className='flex justify-end'>
                                <div className='w-[15vw]'>
                                    Being a solo project, I independently carried out the entire design process, 
                                </div>
                            </div>
                            
                            <div className='w-[20vw]'>
                                starting from user research and concluding with the testing phase.
                            </div>
                        </div>
                    </div>
                </div>
                

                    {/* Small Screen */}
                <div className='lg:[display:none] flex w-screen justify-end  mb-[3vw] mr-[3vw]'>
                    <div ref={role1}>
                        <div>
                            <div className='role text-[1.9vw] text-yellow-400'>ROLE/TEAM</div>
                        </div>

                        <div className='roleAns toolsAns uppercase w-[27vw] text-yellow-200 text-[1.6vw]'>
                            <p>
                                Being a solo project, I independently carried out the entire design process,
                                starting from user research and concluding with the testing phase. 
                            </p>
                        </div>
                    </div>
                </div>
                </div>



                    
                        
                            <div className='absolute h-full w-full top-0 left-0 flex items-end'>
                                <div className='tools ml-[22vw] text-[1.9vw] lg:text-[1.2vw] lg:ml-[26.5vw] mb-[3vw] lg:mb-[3vw] text-yellow-200 flex flex-col items-center' ref={tools}>
                                    <div className='text-yellow-400'>TOOLS</div>
                                    <div className='toolsAns uppercase text-[1.6vw] lg:text-[0.9vw]'>Figma, Photoshop</div>
                                </div>
                            </div>

                            <div className='absolute h-full w-full top-0 left-0 flex items-end justify-center'>
                                <div className='clte  text-[1.9vw] lg:text-[1.2vw] text-yellow-200 ml-[8vw] lg:ml-[20vw] mb-[3vw] lg:mb-[3vw] flex flex-col items-center' ref={duration}>
                                    <div className='text-yellow-400'>CLIENT/DATE/DURATION</div>
                                    <div className='clteAns toolsAns uppercase text-[1.6vw] lg:text-[0.9vw]'>3 WEEKS</div>
                                </div>
                            </div>
                
        </section>









        <section className='px-4 lg:px-14 bg-black'> 

            <section className='text-neutral-500'>
                <div className='lg:flex items-center'>
                    <div className='pt-[20vw] lg:pt-[3vw] lg:pl-[2vw]'>
                        <div className='flex flex-col justify-center lg:justify-start items-center text-neutral-600 '>
                            <div className='twentyThree text-[17vw] z-40' id='twoThree'>2023</div>
                            <div className='flex project text-[2.5vw] text-yellow-200 ml-[3.2vw] z-40' id="proj">
                                <div className='pro'>P</div>
                                <div className='pro'>R</div>
                                <div className='pro'>O</div>
                                <div className='pro'>J</div>
                                <div className='pro'>E</div>
                                <div className='pro'>C</div>
                                <div className='pro'>T</div>
                            </div>
                        </div>

                           
                        <div className='relative'>
                            <div className='relative flex flex-col items-center justify-center lg:flex-none mt-[-12vw] lg:mt-[-7vw] mr-[2.2vw] lg:mr-[0vw]'>

                                 {/* Model Picture */}
                                <div className='relative w-[80vw] md:w-[80vw] lg:w-[35vw]  h-[70vh] md:h-[150vw] lg:h-[80vw]'>
                                    <div className=' w-full h-full'>
                                        <div className='absolute w-full h-full'>
                                            <img className='pic w-full h-full object-contain' src= {img6} alt= "model"></img>
                                        </div>  
                                          <div className='w-full h-full absolute z-30 bg-black' ref={modelReveal}>
                                            <div className='w-full h-full flex justify-center items-center'>
                                                <div className='elegance text-yellow-200 text-[3.2vw] lg:text-[2vw] lowercase'>
                                                    <div className='ele mb-[9.7vw] lg:mb-[2.4vw]'>O</div>
                                                    <div className='ele mb-[9.7vw] lg:mb-[2.4vw]'>V</div>
                                                    <div className='ele mb-[9.7vw] lg:mb-[2.4vw]'>E</div>
                                                    <div className='ele mb-[9.7vw] lg:mb-[3.4vw]'>R</div>
                                                    <div className='ele mb-[9.7vw] lg:mb-[2.4vw]'>V</div>
                                                    <div className='ele mb-[9.7vw] lg:mb-[2.4vw]'>I</div>
                                                    <div className='ele mb-[9.7vw] lg:mb-[2.4vw]'>E</div>
                                                    <div className='ele'>W</div>
                                                </div>
                                            </div>
                                        </div>             
                                    </div>
                                </div> 

                                <div className='flex h-full justify-center items-end absolute bottom-0 lg:bottom-[4vw] ml-[2.5vw] lg:ml-0 lg:left-[8.5vw]'>
                                 <div className='fash ffhh text-[10vw] lg:text-[4vw] text-stone-500'>
                                    <div className='text-center h-[9.5vw] lg:h-[3.5vw]'>A</div>
                                    <div className='text-center h-[9.5vw] lg:h-[3.5vw]'>FASHION</div>
                                    <div className='text-center'>HOUSE</div>
                                </div>
                                </div> 
                            </div>


                           



                                        {/* BARCODE DESIGN Large Screen */}
                        <div className='barcodee absolute left-[7vw] bottom-[-8vw] [display:none] lg:[display:block]'>
                            <div className='flex justify-center mt-[10vw]'>
                                    <div className='w-[20vw] h-[6vw]'> 
                                        <img className='h-full w-full object-cover ' src= {iron1} alt= "batch"></img>
                                    </div>
                                </div>

                                <div className=' flex justify-center'>
                                    <div className='mt-[1vw] text-[0.8vw] text-stone-200'>
                                        <span className='batchChief mr-[0.8vw]'>
                                            THE CLAN CHIEF
                                        </span>

                                        <span className='batchChief1'>Portfolio</span>
                                    </div>
                                </div>
                        </div>
                        </div>
                    </div> 



                                        {/* BARCODE DESIGN  Small Screen*/}
                            <div className='barcodee lg:[display:none]'>
                            <div className=' flex justify-center mt-[10vw]'>
                                    <div className='w-[40vw] h-[17vw]'> 
                                        <img className='h-full w-full object-cover ' src= {iron1} alt= "batch"></img>
                                    </div>
                                </div>

                                <div className='flex justify-center'>
                                    <div className=' mt-[1.5vw] text-[2vw] text-stone-200'>
                                        <span className='batchChief mr-[0.8vw]'>
                                            THE CLAN CHIEF
                                        </span>

                                        <span className='batchChief1'>Portfolio</span>
                                    </div>
                                </div>
                        </div>




                        {/* Mock Up */}
                    <div className='flex flex-col items-end pr-[2vw] lg:pr-0'>

                        <div className='lg:ml-[-2vw] mt-[12vw]'>
                            <div className='relative w-[100vw] lg:w-[50vw] h-[43vh] md:h-[60vh] lg:h-[58.5vw]'>
                                <div className='h-full w-full'>
                                    <div className='absolute h-full w-full'>
                                        <img className='pic h-full w-full object-cover' src= {img8} alt= "mockup"></img>
                                    </div>
                                    <div className='w-full h-full absolute z-20 bg-black' ref={mockupReveal}></div>
                                </div>
                            </div>
                        </div>



                         {/* (A Web Application Design For Lumiere Couture) */}
                        <div className='flex flex-col justify-center items-center lg:flex-none mt-[9vw] lg:mt-[0vw]'>
                            <div>

                                <div>
                                    <div className='flex justify-center lg:justify-end lg:mt-[-2vw]'>
                                        <div className='aWeb text-[6vw] lg:text-[4vw]'>
                                            <div className='h-[6vw] lg:h-[2.5vw]'>A WEB</div>
                                        </div>
                                    </div>

                                    <div className='mt-[1vw] flex justify-center lg:flex-none'>
                                        <div className='app1 text-[10vw] h-[12vw] lg:h-[6.9vw] lg:text-[6.7vw] xl:h-[7.5vw]'>APPLICATION DESIGN</div>
                                    </div>


                                    <div>
                                        <div className='forLumiere mt-[1vw] text-[6vw] lg:text-[3vw] flex justify-center lg:justify-start'>
                                            <span className='forr mr-[1vw]'>FOR</span>
                                            <span className='text-neutral-500  uppercase flex items-center'>
                                                <span className='llum mr-[1vw] tracking-wide'>Lumière</span>
                                                <span className='ccou text-yellow-100 tracking-widest'>Couture</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            
                            <div>
                                <span className='flex justify-center lg:justify-start mt-[2vw] lg:mt-[1.5vw] tracking-tighter lg:tracking-widest text-stone-400 text-justify'>
                                        <p className='shortIntro font-light  text-[4vw] lg:text-[1.5vw] lg:w-[50vw]'>
                                            A case study on a high end fashion e-commerce website catering to women who appreciate luxury,
                                            sophistication, and elegance. A responsive website that allows online shoppers to have a 
                                            more efficient and seamless experience.
                                        </p>
                                    </span>
                            </div>
                           </div>



                            <div className='flex justify-center lg:justify-between items-center mt-[3vw]'>
                                <div className='uxui text-neutral-500 text-[5.5vw] flex items-center lg:mr-[9vw]'>
                                    <span className='uxx mr-[1vw]'>UX</span>
                                    <span className='uii mr-[1.5vw]'>UI</span>
                                    <span className='css text-yellow-100 text-[2vw]'>Case Study</span>
                                </div>

                                <div className='arr flex justify-end [display:none] lg:[display:flex]'>
                                    <img className=' w-[13vw] h-[1.5vw] object-contain' src= {Arrow2} alt= "arrow"></img>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>






            <section  className='bg-black pt-[20vw] lg:pt-[17vw] pb-[9vw]'>
                <span className='flex items-center justify-center'>
                    <h1 className='projj mr-[3vw]  text-neutral-600 text-[10vw] lg:text-[8vw]'>
                         <span className='over'>P</span>
                         <span className='over'>R</span>
                         <span className='over'>O</span>
                         <span className='over'>J</span>
                         <span className='over'>E</span>
                         <span className='over'>C</span>
                         <span className='over'>T</span>
                    </h1>

                    <h1 className='flex ovr text-yellow-200 text-[4vw]'>
                         <div className='overview mr-[4vw] lg:mr-[3vw]'>O</div>
                         <div className='overview mr-[4vw] lg:mr-[3vw]'>V</div>
                         <div className='overview mr-[4vw] lg:mr-[3vw]'>E</div>
                         <div className='overview mr-[4vw] lg:mr-[3vw]'>R</div>
                         <div className='overview mr-[4vw] lg:mr-[3vw]'>V</div>
                         <div className='overview mr-[4vw] lg:mr-[3vw]'>I</div>
                         <div className='overview mr-[4vw] lg:mr-[3vw]'>E</div>
                         <div className='overview mr-[4vw] lg:mr-[3vw]'>W</div>
                    </h1>
                </span>

                <div className='flex justify-center text-justify'> 
                    <div className='overview-body font-light text-[4vw] lg:text-[1.5vw] lg:w-[85vw] tracking-tighter text-stone-400' ref={overviewSec}>
                        <h1 className='aboutLum mb-[1vw] mt-[2vw] lg:mt-0 text-[4.5vw] lg:text-[2.5vw] text-yellow-700'>About Lumière Couture</h1>
                        <p className='mb-[3vw] lg:mb-[1.5vw]'>
                            Lumière Couture is a high-end fashion house that offers 
                            a unique blend of art, photography, fashion, and lifestyle. 
                            The brand was founded in 2010 by fashion designer Marie Dubois,
                            and it is dedicated to celebrating the beauty of life through fashion. 
                            The brand has gained a reputation for its exquisite craftsmanship, 
                            attention to detail, and unique designs that cater to women who appreciate 
                            luxury, sophistication, and elegance.
                        </p> 

                        <p>
                            As the Sole UX designer, I helped design the app from scratch with 
                            the support and vision of the co-founders. The project for Lumière Couture 
                            is focused on creating a comprehensive digital presence that reflects 
                            the brand's values, aesthetics, and offerings. The project will enable
                            Lumière Couture to reach a broader audience, increase sales and revenue, 
                            and establish itself as a leading fashion house in the industry.
                        </p>
                    </div>
                </div>
            </section>



            <section className='bg-neutral-90  relative mt-[20vw] lg:mt-[0vw]'>
                <div className='h-[115vw] lg:h-[55vw] bgPicSec4 opacity-10'></div>
                <div className='pl-[7vw] absolute top-[5vw] left-0 z-30'>
                        <div className='flex items-center'>
                        <h1 className='the1 theee text-[10vw] lg:text-[8vw] mr-[3vw]'>THE</h1>
                            <h1 className='theGoal flex text-[4vw] text-yellow-200'>
                                <div className='goalss mr-[4vw] lg:mr-[3vw]'>G</div>
                                <div className='goalss mr-[4vw] lg:mr-[3vw]'>O</div>
                                <div className='goalss mr-[4vw] lg:mr-[3vw]'>A</div>
                                <div className='goalss mr-[4vw] lg:mr-[3vw]'>L</div>
                                <div className='goalss mr-[4vw] lg:mr-[3vw]'>S</div>
                            </h1>
                        </div>

                        <div>
                            <span className='aim mt-[2vw] lg:mt-0 text-[4.5vw] lg:text-[4vw] text-yellow-700'>Aim Of Research</span>
                        </div>
                            
                        <ul className='list font-light text-[4vw] lg:text-[1.9vw] text-stone-400 list-disc px-[2vw] pb-[2vw] pt-[1vw] leading-relaxed' ref={goalsParent}>
                            <li>Increase brand awareness</li>
                            <li>Identify user pain points</li>
                            <li>Create a sleek, modern and highly appealing user interface</li>
                            <li>Develop a user-friendly web interface that provides seamless user experience</li>
                            <li>Drive Traffic and sales</li>
                            <li>Create and validate assumptions based on research</li>
                            <li>Gain insights and make data-driven decisions</li>
                        </ul>
                    </div>
            </section>



            <section className='mt-[20vw] lg:mt-[10vw] relative'>
                <div className='sec5 h-[200vw] lg:h-screen lg:pl-[3vw] opacity-20 lg:opacity-20'></div>
                <div className='problem1 px-[2vw] lg:px-0 lg:w-[75vw] text-[4vw] lg:text-[1.2vw] text-justify absolute top-[2vw] lg:left-[5vw]'>
                        <div className='flex items-center'>
                            <h1 className='the1 thee text-[10vw] lg:text-[8vw] mr-[3vw]'>THE</h1>
                            <h1 className='theProb flex text-yellow-200 text-[4vw]'>
                                <div className='probs mr-[4vw] lg:mr-[3vw]'>P</div>
                                <div className='probs mr-[4vw] lg:mr-[3vw]'>R</div>
                                <div className='probs mr-[4vw] lg:mr-[3vw]'>O</div>
                                <div className='probs mr-[4vw] lg:mr-[3vw]'>B</div>
                                <div className='probs mr-[4vw] lg:mr-[3vw]'>L</div>
                                <div className='probs mr-[4vw] lg:mr-[3vw]'>E</div>
                                <div className='probs mr-[4vw] lg:mr-[3vw]'>M</div>
                            </h1>
                        </div>

                                <ul className='list-disc mt-[4vw] lg:mt-[2vw]' ref={problemParent}>
                                    <li>
                                        <div className='headingg text-[4.5vw] lg:text-[1.9vw]'>Limited Physical Presence:</div></li>
                                        <div className='text-stone-400 mb-[4vw] lg:mb-[1.7vw] tracking-tighter lg:tracking-normal'>
                                            Lumière Couture has a limited physical presence, with stores located 
                                            in a few select cities. This makes it difficult for customers who live 
                                            in other areas to access the brand's collections and services.
                                        </div>
                                    

                                    <li>
                                        <div className='headingg text-[4.5vw] lg:text-[1.9vw]'>Customer Engagement:</div></li>
                                        <div className='text-stone-400 mb-[4vw] lg:mb-[1.7vw] tracking-tighter lg:tracking-normal'>
                                            Engaging with customers and building a community around the brand is 
                                            essential to driving sales and building brand loyalty. However, 
                                            engaging with customers can be challenging, especially when they are 
                                            located in different parts of the world. 
                                        </div>
                                    

                                    <li>
                                        <div className='headingg text-[4.5vw] lg:text-[1.9vw]'>Lack of Transparency:</div></li>
                                        <div className='text-stone-400 mb-[4vw] lg:mb-[1.7vw] tracking-tighter lg:tracking-normal'>
                                            Many brands don't provide information on production methods, materials, and pricing, 
                                            to ensure that customers can make informed decisions about their purchases.
                                        </div>
                                    

                                    <li>
                                        <div className='headingg text-[4.5vw] lg:text-[1.9vw]'>Sustainability Concerns:</div></li>
                                        <div className='text-stone-400 mb-[4vw] lg:mb-[1.7vw] tracking-tighter lg:tracking-normal'>
                                            With growing concerns about the environmental impact of the fashion industry, 
                                            many customers are looking for brands that prioritize sustainability.
                                        </div>
                                    
                                </ul>
                    </div>
            </section>




            <section className='mt-[20vw] lg:mt-[10vw]'>
                <div className='relative h-screen'>
                    <div className='sec6 h-full opacity-70'> </div>
                    <div className='absolute h-full flex justify-center items-center top-[0vw] text-stone-200 left-[6vw]'>
                        <div className='flex items-center text-[10vw]'>
                            <div className='the tthe mr-[1.5vw] bg-black p-[1vw] text-[8vw] h-[13vw]'>THE</div>
                            <div className='solution italic bg-black p-[1vw]'>SOLUTION</div>
                        </div>
                    </div>
                    </div>

                    <div className='mt-[15vw] lg:mt-[10vw]'>
                            <div className='text-[4.5vw]'>
                                <div className='mb-[5vw] lg:mb-[3vw] flex items-center'>
                                    <h1 className='the1 theeee text-[10vw] lg:text-[8vw] mr-[3vw]'>THE</h1>
                                    <div className='theSol flex text-yellow-200'>
                                        <div className='solution1 mr-[4vw] lg:mr-[3vw]'>S</div>
                                        <div className='solution1 mr-[4vw] lg:mr-[3vw]'>O</div>
                                        <div className='solution1 mr-[4vw] lg:mr-[3vw]'>L</div>
                                        <div className='solution1 mr-[4vw] lg:mr-[3vw]'>U</div>
                                        <div className='solution1 mr-[4vw] lg:mr-[3vw]'>T</div>
                                        <div className='solution1 mr-[4vw] lg:mr-[3vw]'>I</div>
                                        <div className='solution1 mr-[4vw] lg:mr-[3vw]'>O</div>
                                        <div className='solution1 mr-[4vw] lg:mr-[3vw]'>N</div>
                                    </div>
                                </div>
                            </div>
                            <div className='solBody text-[4vw] lg:text-[1.5vw] tracking-tighter lg:tracking-normal text-justify text-stone-400' ref={soluParent}>
                                <div className='mb-[4vw] lg:mb-[1vw]'>
                                    Upon completing problem discovery and validation, I designed a mobile application
                                    to address the identified issues and bring Lumière Couture closer to its customers worldwide. 
                                    The application boasts of a visually pleasing, user-friendly platform that allows for easy 
                                    connectivity with Lumière Couture. A resposive application that can be used on all type of devices
                                    and provides delightful content and a seamless user experience that encourages engagement and 
                                    generates traffic.
                                </div>

                                <div>
                                    The sleek, sophisticated, and elegant design of the application captures the essence of the 
                                    company's brand and provide contents that appeals to their target market. Overall, the appication 
                                    is designed to solve several challenges faced by the brand and its customers, including limited 
                                    physical presence, personalization, customer engagement, and ease of use. By providing a digital 
                                    platform that caters to the individual needs and preferences of customers, the app enables Lumière 
                                    Couture to reach a broader audience, increase sales and revenue, and enhance the customer experience.
                                    Additionally, it provides users with advice on the best outfit choices for different 
                                    occasions. The application features a smooth checkout platform and a payment system that users 
                                    are comfortable with.
                                    
                                </div>
                            </div>
                        </div>
            </section>



            <section className='pt-[20vw] lg:pt-[5vw] lg:mb-[10vw]'>
                <div className='lg:h-screen text-stone-200'>
                    <div className='design pt-[6vw]'>
                        <h1 className='designProcess text-center text-[7vw] lg:text-[5vw]'>DESIGN THINKING PROCESS</h1>
                    </div>

                    <div>
                    <div className='mt-[4vw]'>
                        <ul className='desProcess flex flex-col lg:flex-row lg:justify-evenly items-center text-[3.5vw] lg:text-[1.4vw]'>
                            <li className='desig text-center mt-[5vw] lg:mt-[0vw]'>
                                <div className='bg-yellow-400 w-[24vw] lg:w-[13vw] h-[24vw] lg:h-[13vw] p-1'>
                                    <img className='object-cover h-full w-full' src= {empathise} alt= "Empathise"></img>
                                </div>
                                <div className='mt-[2vw] lg:mt-[1vw]'>Empathize</div>
                            </li>

                            <li className='desig text-center mt-[5vw] lg:mt-[0vw]'>
                                <div className='bg-yellow-400 w-[24vw] lg:w-[13vw] h-[24vw] lg:h-[13vw] p-1'>
                                    <img className='object-cover h-full w-full' src= {def} alt= "Define"></img>
                                </div>
                                <div className='mt-[2vw] lg:mt-[1vw]'>Define</div>
                            </li>

                            <li className='desig text-center mt-[5vw] lg:mt-[0vw]'>
                                <div className='bg-yellow-400 w-[24vw] lg:w-[13vw] h-[24vw] lg:h-[13vw] p-1'>
                                    <img className='object-cover h-full w-full' src= {idea} alt= "Ideate"></img>
                                </div>
                                <div className='mt-[2vw] lg:mt-[1vw]'>Ideate</div>
                            </li>

                            <li className='desig text-center mt-[5vw] lg:mt-[0vw]'>
                                <div className='bg-yellow-400 w-[24vw] lg:w-[13vw] h-[24vw] lg:h-[13vw] p-1'>
                                    <img className='object-cover h-full w-full' src= {proto} alt= "Prototype"></img>
                                </div>
                                <div className='mt-[2vw] lg:mt-[1vw]'>Prototype</div>
                            </li>

                            <li className='desig text-center mt-[5vw] lg:mt-[0vw]'>
                                <div className='bg-yellow-400 w-[24vw] lg:w-[13vw] h-[24vw] lg:h-[13vw] p-1'>
                                    <img className='object-cover h-full w-full' src= {testing} alt= "test"></img>
                                </div>
                                <div className='mt-[2vw] lg:mt-[1vw]'>Test</div>
                            </li>
                        </ul>

                        <div className='designNote flex justify-center mt-[7vw] lg:mt-[5vw] text-[3.5vw] lg:text-[1.6vw]'>
                            <div className='w-[75vw] text-justify tracking-tighter' ref={designThinkProcess}>
                                In order to understand the prospective user's needs, acquire 
                                necessary data and implement research findings accurately, I used
                                the design thinking process for the purpose of developing a user-friendly 
                                product that is easily accessible and satisfies the user's needs.
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>




                {/* EMPATHIZE PHASE */}
            <section className='mt-[30vw] lg:mt-[0vw] mb-[10vw] lg:mb-[20vw] relative h-screen'>
                <div className='sec8 h-full bg-zinc-900 opacity-20'></div>
                <div className='h-full flex flex-col justify-center items-center text-yellow-200 absolute top-[0vw] left-[4.5vw]'>
                        <div className='empathize'>
                            <div className='empath text-[20vw]'>EMPATHIZE</div>
                        </div>
                        
                        <div className='phase flex text-[5vw] text-yellow-700 text-center ml-[7vw]'>
                            <div className='empp phase1'>P</div>
                            <div className='empp phase1'>H</div>
                            <div className='empp phase1'>A</div>
                            <div className='empp phase1'>S</div>
                            <div className='empp phase1'>E</div>
                        </div>
                    </div>
            </section>


                {/* DISCOVERING THE PROBLEM */}
            <section className='mb-[6vw]'>
                <div className='bg-yellow-400 pb-[4vw] pt-[3vw] lg:pt-[1vw]  px-[2.5vw] lg:px-[0vw]'>
                    <div className='discc'>
                        <div className='discover text-[10.5vw] lg:text-[9.2vw] text-neutral-900 text-center'>DISCOVERING THE PROBLEM</div>
                    </div>
                    
                    <div className='flex justify-center'>
                        <div className='problem2 lg:w-[75vw] text-[4vw] lg:text-[1.5vw] tracking-tighter lg:tracking-normal'>
                            <div className='text-justify mb-[5vw] lg:mb-[2vw]' ref={discoverGroup1}>
                                <div>
                                    To initiate the design process, I conducted extensive research to gain an 
                                    understanding of the company's brand, target audience, and competitors. 
                                    Empathy for prospective users was established through surveys, interviews, 
                                    and research to identify their pain points and needs. The target audience 
                                    is primarily individuals aged 25-45 who possess a strong interest in fashion, 
                                    art, and culture. Additionally, it was crucial to interview Lumiere Couture 
                                    stakeholders to gain a better understanding of their background, goals, and 
                                    how it aligns with the prospective user's needs.
                                </div>
                                <div className='mt-[3vw] lg:mt-[1vw]'>
                                    In addition, I analyzed competitors' websites to gain insights on how users 
                                    interact with their services. This allowed me to identify areas for improvement 
                                    and to better understand their strengths and weaknesses. 
                                </div>
                                <div className='mt-[3vw] lg:mt-[1vw]'>
                                    Finally, I conducted a usability study on the prototype design to collect 
                                    feedback and make data-driven decisions.
                                </div>
                            </div>
                            

                            <div className='assum'>
                                <div className='assumption mt-[5vw] lg:mt-[0vw] text-[5.5vw] lg:text-[2.3vw] tracking-normal leading-[5.7vw]'>
                                    Below are some assumptions made while beginning the research:
                                </div>
                            </div>

                            <ol className='ass1 list-decimal pl-[4vw] mt-[1.7vw] lg:mt-[0.7vw] text-justify lg:text-left' ref={discoverGroup2}>
                                <li>
                                    Lack of professional bespoke tailoring and styling services that cater to the individual needs 
                                    and preferences of customers. 
                                </li>

                                <li>
                                    Many fashion brands offer limited options for sizes beyond the traditional norm, leaving many 
                                    customers with few options for clothing that fits well and looks great.
                                </li>

                                <li>
                                    Due to their challenging navigation and lack of a seamless user experience, the majority of 
                                    online shopping platforms struggle to generate traffic.
                                </li>

                                <li>
                                    Most peole dont want to risk making use of a payment platforms that isn't well known and has no proof 
                                    of a postive track record.
                                </li>
                            </ol>

                            <div>
                                <div className='surv'>
                                    <div className='survey mt-[6vw] lg:mt-[2vw] text-[5.5vw] lg:text-[2.3vw] leading-[5.7vw] tracking-normal'>A survey was carried out and inference from the result showed that:</div>
                                </div>

                                <div>
                                    <ul className='survey1 list-disc mt-[5vw] mt-[1.7vw] lg:mt-[0.7vw] pl-[4vw] lg:pl-[0vw] text-justify lg:text-left' ref={discoverGroup3}>
                                        <li>
                                            71.3% of individuals would like to be informed of the fabric type as well as the occasions 
                                            for which the clothing can be worn.
                                        </li>

                                        <li>
                                             56.8% of individuals frequently encounter difficulties finding their sizes for their chosen item.
                                        </li>

                                        <li>
                                            60.4% of individuals become overwhelmed while shopping on fashion and 
                                            clothing platforms due to the vast amount of items on display with little to no description. 
                                            As a result, they find it challenging to navigate and locate items that meet their preferences.
                                        </li>

                                        <li>
                                            75.5% of individuals only feel at ease making payments through a secure, well-known, 
                                            and established payment platform with a proven track record.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



                {/* DEFINE PHASE */}
            <section className='pt-[5vw] lg:mb-[8vw]'>
                <div className='h-[70vh] md:h-screen flex lg:flex-none items-center justify-center'>
                <div className='flex flex-col text-yellow-200 justify-center items-center'>
                    <div className='deefn'>
                        <div className='define text-[20vw]' id='defn'>DEFINE</div>
                    </div>  
                        <div className='definePhase flex text-[5vw] text-yellow-700 text-center ml-[7vw] mt-[5vw]'>
                            <div className='ddef phase1'>P</div>
                            <div className='ddef phase1'>H</div>
                            <div className='ddef phase1'>A</div>
                            <div className='ddef phase1'>S</div>
                            <div className='ddef phase1'>E</div>
                        </div>
                    </div>

                </div>
            </section>


            <section className='overflow-hidden'>
                <div className='text-[1.5vw]'>
                    <div className='lumiereUsers lumUsr text-[12vw]'>
                        <div className='who text-stone-400 h-[14vw]'>WHO ARE </div>
                        <div className='lumm text-neutral-600 h-[14vw]'>LUMIÈRE</div>
                        <div className='cou text-stone-400 h-[14vw]'>COUTOURE</div>
                        <div className='flex items-center justify-between'>
                            <div className='users text-yellow-500 h-[14vw]'>USERS</div>
                            <div className='aarr mt-[5vw]'>
                                <img className=' w-[25vw] h-[2vw] object-contain' src= {Arrow2} alt= "arrow"></img>
                            </div>
                        </div>
                        
                    </div>


                    {/* PERSONAS */}
                    
                    <div className='flex text-stone-400'>
                    <div className='mt-[25vw] lg:mt-[15vw]'>
                        <div className='personaHead'>
                            <div className='persona text-[19vw] lg:text-[10vw] text-stone-600 h-[25vw] lg:h-[13vw] text-center lg:text-start'>Personas</div>
                        </div>
                      
                        <div className='personaNote text-[5vw] lg:text-[1.75vw] uppercase text-neutral-500 leading-6 sm:leading-8 md:leading-10 lg:leading-5 text-center lg:text-start'>
                            Ideal target users were created from the data collected on the survey
                            and interviews. They explain my research on Lumière Couture users in a subtle
                            way.
                        </div>
                    </div>
                    </div>

                    <div className='mt-[6vw] lg:mt-[2vw]  text-stone-400'>

                        <div className='lg:[display:none]'>
                            <div className='zeroOne oonnee text-[17vw] text-stone-600 text-center'>01</div>
                        </div>

                        {/* FIRST PERSONA */}
                        <div className='lg:flex justify-between'>

                             {/* SARAH IMG */}
                            <div className='w-full lg:w-[30vw] bg-white h-[120vw] lg:h-[55vw] relative'>
                                <div>
                                    <div className='w-full h-full bg-stone-500 absolute overflow-hidden transition-all lg:grayscale brightness-100 hover:filter-none' ref={persona1}>
                                        <img className='pic h-[100%] w-[100%] object-cover' src= {img18} alt= "Persona 1"></img>
                                    </div>
                                    <div className='w-full h-full absolute z-20 bg-black' ref={personaReveal1}></div>
                                </div>
                            </div>

                            <div className='lg:w-[58vw]'>
                                <div>
                                    <div className='flex justify-center mt-[7vw] lg:mt-[0vw]'>
                                        <div className='linee h-[0.2vw] lg:h-[0.15vw] w-full lg:w-[58vw]'></div>
                                    </div>

                                    <div className='tag lovesShopP text-stone-600 text-[7.5vw] lg:text-[2.7vw] text-center lg:text-start'>
                                        <div className='lovesShopC'>"Loves online shopping"</div>
                                    </div>

                                    <div className='flex justify-center'>
                                        <div className='linee h-[0.2vw] lg:h-[0.15vw] w-full lg:w-[58vw]'></div>
                                    </div>

                                    <div>
                                        <span className='title text-[3.5vw] lg:text-[1vw] '>NAME:</span>
                                        <span className='ans text-[4.5vw] lg:text-[1.9vw]'> Joules Washington</span>
                                    </div>

                                    <div className='flex justify-center'>
                                        <div className='linee h-[0.2vw] lg:h-[0.15vw] w-full lg:w-[58vw]'></div>
                                    </div>

                                    <div>
                                        <span className='title text-[3.5vw] lg:text-[1vw] '>AGE:</span>
                                        <span className='ans text-[4.5vw] lg:text-[1.9vw]'> 25</span>
                                    </div>

                                    <div className='flex justify-center'>
                                        <div className='linee h-[0.2vw] lg:h-[0.15vw] w-full lg:w-[58vw]'></div>
                                    </div>

                                    <div>
                                        <span className='title text-[3.5vw] lg:text-[1vw] '>OCCUPATION:</span>
                                        <span className='ans text-[4.5vw] lg:text-[1.9vw]'> Fashion Blogger</span>
                                    </div>

                                    <div className='flex justify-center'>
                                        <div className='linee h-[0.2vw] lg:h-[0.15vw] w-full lg:w-[58vw]'></div>
                                    </div>

                                    <div>
                                        <span className='title text-[3.5vw] lg:text-[1vw] '>MARITAL STATUS:</span>
                                        <span className='ans text-[4.5vw] lg:text-[1.9vw]'> Single</span>
                                    </div>

                                    <div className='flex justify-center'>
                                        <div className='linee h-[0.2vw] lg:h-[0.15vw] w-full lg:w-[58vw]'></div>
                                    </div>

                                    <div>
                                        <span className='title text-[3.5vw] lg:text-[1vw] '>EDUCATION:</span>
                                        <span className='ans text-[4.5vw] lg:text-[1.9vw]'> Bachelor's degree in Fashion Design</span>
                                    </div>

                                    <div className='flex justify-center'>
                                        <div className='linee h-[0.2vw] lg:h-[0.15vw] w-full lg:w-[58vw]'></div>
                                    </div>

                                    <div>
                                        <span className='title text-[3.5vw] lg:text-[1vw] '>LOCATION:</span>
                                        <span className='ans text-[4.5vw] lg:text-[1.9vw]'>Paris, France</span>
                                    </div>

                                    <div className='flex justify-center'>
                                        <div className='linee h-[0.2vw] lg:h-[0.15vw] w-full lg:w-[58vw]'></div>
                                    </div>

                                    <div>
                                        <span className='title text-[3.5vw] lg:text-[1vw] '>INTEREST:</span>
                                        <span className='ans text-[4.5vw] lg:text-[1.9vw]'> Fashion, photography, travel, and social media</span>
                                    </div>

                                    <div className='flex justify-center'>
                                        <div className='linee h-[0.2vw] lg:h-[0.15vw] w-full lg:w-[58vw]'></div>
                                    </div>
                                </div>

                                
                                {/* SARAH DESCRIPTION */}

                                <div>
                                    <div>
                                        <div className='desc text-[6vw] lg:text-[1.5vw] mt-[5vw] lg:mt-[2vw] text-center text-yellow-300'>DESCRIPTION</div>

                                         {/* about Persona Large Screen */}
                                        <div className='flex justify-center'>
                                            <div className='linee h-[0.2vw] lg:h-[0.15vw] w-full lg:w-[58vw]'></div>
                                        </div>

                                        <div className='aboutPersona text-justify [display:none] lg:[display:block] text-[1.3vw]'>  
                                            Joules is a fashion blogger who enjoys writing about the latest 
                                            fashion trends and 
                                        
                                        <div className='flex justify-center'>
                                            <div className='linee h-[0.15vw] w-[58vw]'></div>
                                        </div>
                                            
                                            showcasing her personal style. She shops online 
                                            frequently and is always on the lookout 

                                        <div className='flex justify-center'>
                                            <div className='linee h-[0.15vw] w-[58vw]'></div>
                                        </div>
                                            
                                            for unique and stylish clothing 
                                            that can help her stand out on social media. She values a 
                                            
                                        <div className='flex justify-center'>
                                            <div className='linee h-[0.15vw] w-[58vw]'></div>
                                        </div>

                                            website that 
                                            offers a wide range of fashion items and is easy to navigate. She also

                                        <div className='flex justify-center'>
                                            <div className='linee h-[0.15vw] w-[58vw]'></div>
                                        </div> 

                                            appreciates a website that offers a wide range of outfits where all her needs can be met 
                                             
                                            
                                        <div className='flex justify-center'>
                                            <div className='linee h-[0.15vw] w-[58vw]'></div>
                                        </div>
                                            
                                            A website that has a strong social media presence.
                                        </div>



                                        {/* about Persona Small Screen */}
                                        <div>
                                            <div className='aboutPersona text-justif text-[4vw] lg:[display:none]'>
                                                
                                                Joules is a fashion blogger who enjoys 

                                                <div className='flex justify-center'>
                                                    <div className='linee h-[0.2vw] w-full'></div>
                                                </div>
                                                
                                                writing about the latest fashion trends and   

                                                <div className='flex justify-center'>
                                                    <div className='linee h-[0.2vw] w-full'></div>
                                                </div>

                                                showcasing her personal style. she shops 
                                                
                                                <div className='flex justify-center'>
                                                    <div className='linee h-[0.2vw] w-full'></div>
                                                </div>
                                                
                                                online frequently and is always on the 

                                                <div className='flex justify-center'>
                                                    <div className='linee h-[0.2vw] w-full'></div>
                                                </div>

                                                lookout for unique and stylish clothing that   

                                                <div className='flex justify-center'>
                                                    <div className='linee h-[0.2vw] w-full'></div>
                                                </div>

                                                can help her stand out on social media. She 

                                                <div className='flex justify-center'>
                                                    <div className='linee h-[0.2vw] w-full'></div>
                                                </div>

                                                values a website that offers a wide range of   

                                                <div className='flex justify-center'>
                                                    <div className='linee h-[0.2vw] w-full'></div>
                                                </div>

                                                fashion items and is easy to navigate. She    

                                                <div className='flex justify-center'>
                                                    <div className='linee h-[0.2vw] w-full'></div>
                                                </div>

                                                also appreciates a website that offers a 
                                                
                                                <div className='flex justify-center'>
                                                    <div className='linee h-[0.2vw] w-full'></div>
                                                </div>
                                                
                                                wide range of outfits where all her needs 

                                                <div className='flex justify-center'>
                                                    <div className='linee h-[0.2vw] w-full'></div>
                                                </div>

                                                can be met. A website that has a strong 
                                                
                                                <div className='flex justify-center'>
                                                    <div className='linee h-[0.2vw] w-full'></div>
                                                </div>
                                                
                                                
                                                social media presence.
                                            </div>
                                        </div>

                                        <div className='flex justify-center'>
                                            <div className='linee h-[0.2vw] lg:h-[0.15vw] w-full lg:w-[58vw]'></div>
                                        </div>


                                                {/* Joules GOALS AND FRUSTERATION */}
                                        <div>
                                            <div className='lg:flex'>
                                                <div className='w-full lg:w-[29vw]'>
                                                    <h1 className='sarah goals text-[6vw] lg:text-[1.2vw]  mt-[4vw] lg:mt-[1vw]'>GOALS</h1>

                                                    <div className='flex justify-center'>
                                                        <div className='linee h-[0.2vw] lg:h-[0.15vw] w-full'></div>
                                                    </div>

                                                    <div className='pl-2 lg:pl-0'>
                                                        {/* Large Screen */}
                                                        <ul className='sarah1 list-disc  text-[1.2vw] [display:none] lg:[display:block]'>
                                                            {/* <li>Get a personalized shopping experience that caters to her individual needs.</li> */}
                                                            <li>Find stylish clothing that is appropriate for her body type.</li>
                                                            <li>Use a website that is easy to navigate and has a fast checkout process.</li>
                                                        </ul>

                                                        {/* Small Screen */}
                                                        <ul className='sarah1 list-disc text-[4vw] lg:[display:none]'>
                                                            {/* <li>Get a personalized shopping experience that caters to her individual needs.</li> */}
                                                            <li>
                                                                Find stylish clothing that is appropriate for 

                                                            <div className='flex justify-center'>
                                                                <div className='linee h-[0.2vw] w-full'></div>
                                                            </div>

                                                                her body type.
                                                            </li>

                                                            <div className='flex justify-center'>
                                                                <div className='linee h-[0.2vw] w-full'></div>
                                                            </div>

                                                            <li>
                                                                Use a website that is easy to navigate and has a fast checkout process.
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    

                                                    <div className='flex justify-center'>
                                                        <div className='linee h-[0.2vw] lg:h-[0.15vw] w-full'></div>
                                                    </div>
                                                </div>

                                                <div className='frusContainer w-full lg:w-[29vw] lg:border-l-[0.2vw] lg:border-stone-500'>
                                                    <h1 className='sarah frustration text-[6vw] lg:text-[1.2vw]  mt-[4vw] lg:mt-[1vw]'>FRUSTRATION</h1>

                                                    <div className='flex justify-center'>
                                                        <div className='linee h-[0.2vw] lg:h-[0.15vw] w-full'></div>
                                                    </div>
                                                    
                                                    <div className='pl-2 lg:pl-0'>
                                                        {/* Large Screens */}
                                                        <ul className='sarah1 list-disc  text-[1.2vw] [display:none] lg:[display:block]'>
                                                            <li>Utilizing payment platforms that lack popularity 
                                                                and a solid history of proven integrity and security.</li>
                                                            <li>The stress of having to create an account before starting online shopping.</li>
                                                        </ul>

                                                        {/* Small Screens */}
                                                        <ul className='sarah1 list-disc  text-[4vw] lg:[display:none]'>
                                                            <li>
                                                                    Utilizing payment platforms that lack 

                                                                <div className='flex justify-center'>
                                                                    <div className='linee h-[0.2vw] w-full'></div>
                                                                </div>                      
                                                                
                                                                    popularity and a solid history of proven 

                                                                <div className='flex justify-center'>
                                                                    <div className='linee h-[0.2vw] w-full'></div>
                                                                </div>       
                                                                    
                                                                    integrity and security.

                                                                <div className='flex justify-center'>
                                                                    <div className='linee h-[0.2vw] w-full'></div>
                                                                </div>  
                                                            </li>


                                                            <li>
                                                                The stress of having to create an account  

                                                             <div className='flex justify-center'>
                                                                <div className='linee h-[0.2vw] w-full'></div>
                                                            </div>    
                                                                
                                                                before starting online shopping.
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className='flex justify-center'>
                                                        <div className='linee h-[0.2vw] lg:h-[0.15vw] w-full'></div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>



                                {/* SECOND PERSONA */}

                        
                        <div className='lg:[display:none] mt-[20vw] lg:mt-[0vw]'>
                            <div className='zeroOne ttwwoo text-[17vw] text-stone-600 text-center'>02</div>
                        </div>
                        <div className='flex flex-col-reverse lg:flex-row  lg:justify-between lg:mt-[11vw]'>

                            <div className='lg:w-[58vw]'>
                                <div>
                                    <div className='flex justify-center mt-[7vw] lg:mt-[0vw]'>
                                        <div className='linee h-[0.2vw] lg:h-[0.15vw] w-full lg:w-[58vw]'></div>
                                    </div>

                                    <div className='tag text-stone-600 text-[7.5vw] lg:text-[2.7vw] text-center lg:text-start'>
                                        <div className='busyToShopC'>
                                            "Too busy to go out shopping"
                                        </div>
                                    </div>

                                    <div className='flex justify-center'>
                                        <div className='linee h-[0.2vw] lg:h-[0.15vw] w-full lg:w-[58vw]'></div>
                                    </div>

                                    <div>
                                        <span className='title text-[3.5vw] lg:text-[1vw] '>NAME:</span>
                                        <span className='ans text-[4.5vw] lg:text-[1.9vw]'> Kate Toussaint</span>
                                    </div>

                                    <div className='flex justify-center'>
                                        <div className='linee h-[0.2vw] lg:h-[0.15vw] w-full lg:w-[58vw]'></div>
                                    </div>

                                    <div>
                                        <span className='title text-[3.5vw] lg:text-[1vw] '>AGE:</span>
                                        <span className='ans text-[4.5vw] lg:text-[1.9vw]'> 33</span>
                                    </div>
                                    
                                    <div className='flex justify-center'>
                                        <div className='linee h-[0.2vw] lg:h-[0.15vw] w-full lg:w-[58vw]'></div>
                                    </div>

                                    <div>
                                        <span className='title text-[3.5vw] lg:text-[1vw] '>OCCUPATION:</span>
                                        <span className='ans text-[4.5vw] lg:text-[1.9vw]'> Lawyer</span>
                                    </div>
                                    
                                    <div className='flex justify-center'>
                                        <div className='linee h-[0.2vw] lg:h-[0.15vw] w-full lg:w-[58vw]'></div>
                                    </div>

                                    <div>
                                        <span className='title text-[3.5vw] lg:text-[1vw] '>MARITAL STATUS:</span>
                                        <span className='ans text-[4.5vw] lg:text-[1.9vw]'> Married with two children</span>
                                    </div>

                                    <div className='flex justify-center'>
                                        <div className='linee h-[0.2vw] lg:h-[0.15vw] w-full lg:w-[58vw]'></div>
                                    </div>

                                    <div>
                                        <span className='title text-[3.5vw] lg:text-[1vw] '>EDUCATION:</span>
                                        <span className='ans text-[4.5vw] lg:text-[1.9vw]'> Law degree</span>
                                    </div>

                                    <div className='flex justify-center'>
                                        <div className='linee h-[0.2vw] lg:h-[0.15vw] w-full lg:w-[58vw]'></div>
                                    </div>

                                    <div>
                                        <span className='title text-[3.5vw] lg:text-[1vw] '>LOCATION:</span>
                                        <span className='ans text-[4.5vw] lg:text-[1.9vw]'>Paris, France</span>
                                    </div>

                                    <div className='flex justify-center'>
                                        <div className='linee h-[0.2vw] lg:h-[0.15vw] w-full lg:w-[58vw]'></div>
                                    </div>

                                    <div>
                                        <span className='title text-[3.5vw] lg:text-[1vw] '>INTEREST:</span>
                                        <span className='ans text-[4.5vw] lg:text-[1.9vw]'>Fine dining, luxury travel, fashion, and art</span>
                                    </div>

                                    <div className='flex justify-center'>
                                        <div className='linee h-[0.2vw] lg:h-[0.15vw] w-full lg:w-[58vw]'></div>
                                    </div>
                                </div>



                                    {/* OLIVIA DESCRIPTION */}
                               
                                <div>
                                    <div>
                                        <div className='desc text-[6vw] lg:text-[1.5vw] mt-[5vw] lg:mt-[2vw] text-center text-yellow-300'>DESCRIPTION</div>
                                        <div className='flex justify-center'>
                                            <div className='linee h-[0.2vw] lg:h-[0.15vw] w-full lg:w-[58vw]'></div>
                                        </div>

                                         {/* about Persona Large screen */}
                                        <div className='aboutPersona text-justify [display:none] lg:[display:block] text-[1.3vw]'>  
                                            Kate is a high-income earner who values luxury fashion and has a keen
                                            interest in 

                                            <div className='flex justify-center'>
                                                <div className='linee h-[0.2vw] lg:h-[0.15vw] w-full lg:w-[58vw]'></div>
                                            </div>
                                            keeping up with the latest fashion trends. She is a busy professional 
                                            and often shops 

                                            <div className='flex justify-center'>
                                                <div className='linee h-[0.2vw] lg:h-[0.15vw] w-full lg:w-[58vw]'></div>
                                            </div>

                                            online due to her busy schedule. She enjoys designer labels 
                                            and has a preference for 
                                            
                                            <div className='flex justify-center'>
                                                <div className='linee h-[0.2vw] lg:h-[0.15vw] w-full lg:w-[58vw]'></div>
                                            </div>
                                            
                                            high-quality materials and craftsmanship. She also 
                                            appreciates personalized customer 
                                            
                                            <div className='flex justify-center'>
                                                <div className='linee h-[0.2vw] lg:h-[0.15vw] w-full lg:w-[58vw]'></div>
                                            </div>
                                            
                                            service and shopping experiences that make her 
                                            feel special.
                                        </div>

                                        {/* about Persona small screen */}
                                        <div>
                                            <div className='aboutPersona text-justif text-[4vw] lg:[display:none]'>
                                                Olivia is a high-income earner who values

                                                <div className='flex justify-center'>
                                                    <div className='linee h-[0.2vw] w-full'></div>
                                                </div>

                                                luxury fashion and has a keen interest in  

                                                <div className='flex justify-center'>
                                                    <div className='linee h-[0.2vw] w-full'></div>
                                                </div>

                                                keeping up with the latest fashion trends. 
                                                
                                                <div className='flex justify-center'>
                                                    <div className='linee h-[0.2vw] w-full'></div>
                                                </div>
                                                
                                                she is a busy professional and often online 

                                                <div className='flex justify-center'>
                                                    <div className='linee h-[0.2vw] w-full'></div>
                                                </div>

                                                due to her busy schedule. She enjoys

                                                <div className='flex justify-center'>
                                                    <div className='linee h-[0.2vw] w-full'></div>
                                                </div>

                                                designer labels and has a preference for 

                                                <div className='flex justify-center'>
                                                    <div className='linee h-[0.2vw] w-full'></div>
                                                </div>

                                                high-quality materials  and craftsmanship.  

                                                <div className='flex justify-center'>
                                                    <div className='linee h-[0.2vw] w-full'></div>
                                                </div>

                                                She also appreciates personalized customer 
                                                
                                                <div className='flex justify-center'>
                                                    <div className='linee h-[0.2vw] w-full'></div>
                                                </div>
                                                
                                                service and shopping experiences that 
                                                
                                                <div className='flex justify-center'>
                                                    <div className='linee h-[0.2vw] w-full'></div>
                                                </div>
                                                
                                                
                                                make her feel special.                                              
                                            </div>
                                        </div>



                                        <div className='flex justify-center'>
                                            <div className='linee h-[0.2vw] lg:h-[0.15vw] w-full lg:w-[58vw]'></div>
                                        </div>



                                        <div>
                                            <div className='lg:flex'>
                                                <div className='w-full lg:w-[29vw]'>
                                                    <h1 className='olivia goals text-[6vw] lg:text-[1.2vw] mt-[4vw] lg:mt-[1vw]'>GOALS</h1>

                                                    <div className='flex justify-center'>
                                                        <div className='linee h-[0.2vw] lg:h-[0.15vw] w-full'></div>
                                                    </div>

                                                    <div className='pl-2 lg:pl-0'>
                                                        {/* Large Screen */}
                                                        <ul className='olivia1 list-disc lg:text-[1.2vw] [display:none] lg:[display:block]'>
                                                            <li>Purchase a dress online that is suitable for both indoor and outdoor events.</li>  
                                                            <li>Get dress options in her preferred style or silhouette.</li>
                                                        </ul>

                                                        {/* Small Screen */}
                                                        <ul className='olivia1 list-disc text-[4vw] lg:[display:none]'>
                                                            <li>
                                                                Purchase a dress online that is suitable for 
                                                                
                                                            <div className='flex justify-center'>
                                                                <div className='linee h-[0.2vw] w-full'></div>
                                                            </div>

                                                                both indoor and outdoor events.

                                                            <div className='flex justify-center'>
                                                                <div className='linee h-[0.2vw] w-full'></div>
                                                            </div>
                                                            
                                                            </li>  
                                                            <li>
                                                                Get dress options in her preferred style or 
                                                                
                                                                <div className='flex justify-center'>
                                                                    <div className='linee h-[0.2vw] w-full'></div>
                                                                </div>
                                                                
                                                                silhouette.
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className='flex justify-center'>
                                                        <div className='linee h-[0.2vw] lg:h-[0.15vw] w-full'></div>
                                                    </div>
                                                </div>


                                                {/* Frustration */}
                                                <div className='frusContainer w-full lg:w-[29vw] lg:border-l-[0.2vw] lg:border-stone-500'>
                                                    <h1 className='olivia frustration text-[6vw] lg:text-[1.2vw]  mt-[4vw] lg:mt-[1vw]'>FRUSTRATION</h1>

                                                    <div className='flex justify-center'>
                                                        <div className='linee h-[0.2vw] lg:h-[0.15vw] w-full'></div>
                                                    </div>
                                                    
                                                    <div className='pl-2 lg:pl-0'>

                                                        {/* Large Screen */}
                                                        <ul className='olivia1 list-disc text-[1.2vw] [display:none] lg:[display:block]'>
                                                            {/* <li>Get expert fashion advice and styling tips from a contact online when making selection.</li> */}
                                                            <li>She's extremely busy and can't find the time to go out shopping at her favourite brand and store.</li>
                                                            <li>She gets overwhelmed by too many unorganized products and information on most online shopping platforms.</li>
                                                            {/* <li>Difficulty to get a dress that is easy to care for and requires no special 
                                                                maintenance.</li> */}
                                                        </ul>

                                                        {/* Small Screen */}
                                                        <ul className='olivia1 list-disc text-[4vw] lg:[display:none]'>
                                                            {/* <li>Get expert fashion advice and styling tips from a contact online when making selection.</li> */}
                                                            <li>
                                                                She's extremely busy and can't find the 
                                                                
                                                                <div className='flex justify-center'>
                                                                    <div className='linee h-[0.2vw] w-full'></div>
                                                                </div>

                                                                time to go out shopping at her favourite 

                                                                <div className='flex justify-center'>
                                                                    <div className='linee h-[0.2vw] w-full'></div>
                                                                </div>

                                                                brand and store.
                                                            
                                                                <div className='flex justify-center'>
                                                                    <div className='linee h-[0.2vw] w-full'></div>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                She gets overwhelmed by too many un-
                                                                
                                                                <div className='flex justify-center'>
                                                                    <div className='linee h-[0.2vw] w-full'></div>
                                                                </div>

                                                                organized products and information on 
                                                                
                                                                <div className='flex justify-center'>
                                                                    <div className='linee h-[0.2vw] w-full'></div>
                                                                </div>
                                                                
                                                                most online shopping platforms.
                                                            </li>
                                                            {/* <li>Difficulty to get a dress that is easy to care for and requires no special 
                                                                maintenance.</li> */}
                                                        </ul>
                                                    </div>

                                                    <div className='flex justify-center'>
                                                        <div className='linee h-[0.2vw] lg:h-[0.15vw] w-full'></div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                                         {/* OLIVIIA IMG */}
                            <div className='w-full lg:w-[30vw] bg-white h-[120vw] lg:h-[55vw] relative '>
                                <div>
                                    <div className='w-full h-full bg-stone-500 absolute overflow-hidden transition-all lg:grayscale brightness-100 hover:filter-none' ref={persona2}>
                                        <img className='pic h-[100%] w-[100%] object-cover' src= {img19} alt= "Persona 2"></img>
                                    </div>
                                    <div className='w-full h-full absolute z-20 bg-black' ref={personaReveal2}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



             {/* EMPATHY MAPPING */}
            <section className='mt-[25vw] lg:mt-[12vw] overflow-hidden'>
                <div>
                <div className='emapping text-stone-500 text-[22vw] lg:text-[17vw] pb-[4vw] pt-[-2vw]'>
                            <h1 className='em h-[17.5vw] lg:h-[14vw]'>EMPATHY</h1>
                            <h1 className='em map h-[21vw] lg:h-[15vw]'>MAPPING</h1>
                        </div>


                           
                    <div className='bg-black lg:bg-zinc-900 text-[4vw] lg:text-[1.23vw]'>

                             {/* SARAH EMPATHY MAPPING */}
                        <div className='flex lg:border-stone-500 lg:border-[0.3vw]'>
                            <div className='lg:relative lg:h-[60vw] lg:w-[70vw]'>
                                <div className='flex lg:flex-none justify-between border-stone-500 border-[0.3vw] lg:border-0 bg-zinc-900'>
                                    <div className='relative w-[70vw] lg:w-[17vw] bg-white h-[100vw] lg:h-[22.5vw] lg:absolute lg:left-[26.2vw] lg:bottom-[18.5vw] border-stone-500 border-[0.3vw] lg:border-0'>
                                        <div>
                                            <div className='w-full h-full bg-stone-500 absolute overflow-hidden transition-all brightness-100' ref={persona11}>
                                                <img className='pic h-[100%] w-[100%] object-cover' src= {img18} alt= "Persona 2"></img>
                                            </div>
                                            <div className='w-full h-full absolute z-20 bg-black' ref={personaReveal11}></div>
                                        </div>
                                    </div>
                                    <div className='num oneS mr-[1.5vw] text-[17vw] text-stone-500 lg:[display:none]'>
                                        <div className='noOneS'>01</div>
                                    </div> 
                                </div>   



                                <div className='text-stone-400 lg:text-left'>
                                    <div className='space space1 lg:flex lg:h-[30vw] lg:border-stone-500 lg:border-[0.3vw]'>
                                        <div className=' lg:w-[35vw] p-[6vw] lg:p-[3vw] border-stone-500  border-[0.3vw] lg:border-0 lg:border-r-[0.3vw]'>

                                            <div className='action feel lg:[display:none] pt-[3vw] text-[10vw]'>FEELS</div>
                                            <ul  className=' list-disc lg:pt-[3vw] h-[13vw] mb-[8vw] lg:mb-[0vw]'>
                                                <li>Excited to try on different styles and find something that suits her online.</li>
                                                <li>Frustrated with limited options in her preferred size.</li>
                                            </ul>

                                            <div className='action feel text-center [display:none] lg:[display:block] text-[5vw]'>FEELS</div>
                                        </div>
                                      

                                        <div className=' lg:w-[35vw] p-[6vw] lg:p-[3vw] border-stone-500 border-[0.3vw] lg:border-0'>
                                        <div className='action feel lg:[display:none] text-[10vw]'>SAYS</div>
                                            <ul className=' list-disc pt-[3vw] lg:h-[13vw]'>
                                                <li>I prefer shopping for my clothes online from the comfort of my own home.</li>
                                                <li>I love this dress, but I'm not sure if it will fit me.</li>
                                            </ul>
                                            <div className='action feel text-center [display:none] lg:[display:block] text-[5vw]'>SAYS</div>
                                        </div>
                                    </div>


                                    <div className='space space2 lg:flex lg:h-[30vw] lg:border-stone-500 lg:border-[0.3vw]'>
                                        <div className=' lg:w-[35vw] p-[6vw] lg:p-[3vw] border-stone-500 border-[0.3vw] lg:border-0 lg:border-r-[0.3vw]'>
                                            <div className='action think lg:text-center mb-[3.5vw] text-[10vw] lg:text-[5vw]'>THINKS</div>
                                            <ul className=' list-disc'>
                                                <li>I wish they have an online store</li>
                                                <li>I hope the size chart is accurate.</li>
                                            </ul>
                                        </div>
                                        

                                        <div className='pb-[7vw] lg:w-[35vw] p-[6vw] lg:p-[3vw] border-stone-500 border-[0.3vw] lg:border-0'>
                                            <div className='action think lg:text-center mb-[3.5vw] text-[10vw] lg:text-[5vw]'>DOES</div>
                                            <ul className=' list-disc'>
                                                <li>Shops online for other brand as substitute if she can find her preferred style and size.</li>
                                                <li>She is forced to take time out of her schedule to shop in physical stores which are often inconvenient.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='num oneL ml-[6vw] lg:ml-[4vw] xl:ml-[6vw] text-[17vw] text-stone-500 [display:none] lg:[display:block]'>
                                <div className='noOneL'>01</div>
                            </div>    
                        </div>




                        <div className='insights flex justify-center mt-[25vw] lg:mt-[10vw]'>
                            <div className='empMapNote text-[10vw] lg:text-[4vw] text-stone-400 lg:w-[40vw] text-center px-[3vw] lg:px-0'>
                                " Insights on the User's Feelings, 
                                Thoughts, Actions and Behaviours "
                            </div>
                        </div>





                             {/* OLIVIA EMPATHY MAPPING */}
                        <div className='mt-[25vw] lg:mt-[10vw]  flex justify-end border-stone-500 border-[0.3vw]'>

                            <div className='num twoL mr-[6vw] lg:mr-[4vw] xl:mr-[6vw] text-[17vw] text-stone-500 [display:none] lg:[display:block]'>
                                <div className='noTwoL'>02</div>
                            </div>

                            <div className='lg:relative lg:h-[60vw] lg:w-[70vw]'>
                                <div className='flex lg:flex-none justify-between border-stone-500 border-[0.3vw] lg:border-0 bg-zinc-900'>
                                    <div className='num twoS ml-[1.5vw] text-[17vw] text-stone-500  lg:[display:none]'>
                                        <div className='noTwoS'>02</div>
                                    </div>
                                    <div className='flex justify-end lg:justify-start'>
                                        <div className='relative  w-[70vw] lg:w-[17vw] bg-white h-[100vw] lg:h-[22.5vw] lg:absolute lg:left-[26.2vw] lg:bottom-[18.5vw] border-stone-500 border-[0.3vw] lg:border-0'>
                                            <div>
                                                <div className='w-full h-full bg-stone-500 absolute overflow-hidden transition-all brightness-100' ref={persona21}>
                                                    <img className='pic h-[100%] w-[100%] object-cover' src= {img19} alt= "Persona 2"></img>
                                                </div>
                                                <div className='w-full h-full absolute z-20 bg-black' ref={personaReveal21}></div>
                                            </div>
                                        </div>
                                    </div> 
                                </div>


                                <div className='text-stone-400 lg:text-left'>
                                    <div className='space space1 lg:flex lg:h-[30vw] lg:border-stone-500 lg:border-[0.3vw]'>
                                        <div className=' lg:w-[35vw] p-[6vw] lg:p-[3vw] border-stone-500 border-[0.3vw] lg:border-0 lg:border-r-[0.3vw]'>
                                            <div className='action feel lg:[display:none] pt-[3vw] text-[10vw]'>FEELS</div>
                                            <ul  className=' list-disc lg:pt-[3vw] lg:h-[13vw] mb-[8vw] lg:mb-[0vw]'>
                                                <li>Excitement about finding a unique dress online.</li>
                                                <li>Frustrated with the thought of going out shopping as she has little or no time.</li>
                                            </ul>

                                            <div className='action feel text-center [display:none] lg:[display:block] text-[5vw]'>FEELS</div>
                                        </div>
                                      

                                        <div className=' lg:w-[35vw] p-[6vw] lg:p-[3vw] border-stone-500 border-[0.3vw] lg:border-0'>
                                            <div className='action feel lg:[display:none] pt-[3vw] text-[10vw]'>SAYS</div>
                                            <ul className=' list-disc lg:pt-[3vw] lg:h-[13vw]'>
                                                <li>I wish they have an online store.</li>
                                                <li>I hope I can find a dress that matches my personal style</li>
                                                <li>I wonder if they have dresses made from sustainable fabrics.</li>
                                            </ul>
                                            <div className='action feel text-center [display:none] lg:[display:block] text-[5vw]'>SAYS</div>
                                        </div>
                                    </div>



                                    <div className='space space2 lg:flex lg:h-[30vw] lg:border-stone-500 lg:border-[0.3vw]'>
                                        <div className=' lg:w-[35vw] p-[6vw] lg:p-[3vw] border-stone-500 border-[0.3vw] lg:border-0 lg:border-r-[0.3vw]'>
                                            <div className='action think lg:text-center mb-[3.5vw] text-[10vw] lg:text-[5vw]'>THINKS</div>
                                            <ul className=' list-disc'>
                                                <li>Shopping online is most convenient for me with the busy schedules I have.</li>
                                                <li>I really want something that stands out</li>
                                            </ul>
                                        </div>
                                        

                                        <div className='pb-[7vw] lg:w-[35vw] p-[6vw] lg:p-[3vw] border-stone-500 border-[0.3vw] lg:border-0'>
                                            <div className='action think lg:text-center mb-[3.5vw] text-[10vw] lg:text-[5vw]'>DOES</div>
                                            <ul className=' list-disc'>
                                                <li>She resorts to shopping online for alternative brands if her requirements are met. </li>
                                                <li>
                                                    She is constrained to wearing the outfits she 
                                                    currently owns as she finds it challenging to allocate time to physically 
                                                    shop.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='mt-[25vw] lg:mt-[15vw]'>
                <div className='h-screen flex justify-center items-center sticky top-0 z-30'>
                <div className=' text-yellow-700 text-[3vw]'>
                            <h1 className='probP text-[20vw] text-center'>
                                <div className='prr'>PROBLEM</div>
                            </h1>

                            <h1 className='statement flex justify-center ml-[3vw]'>
                                <div className='pr state'>S</div>
                                <div className='pr state'>T</div>
                                <div className='pr state'>A</div>
                                <div className='pr state'>T</div>
                                <div className='pr state'>E</div>
                                <div className='pr state'>M</div>
                                <div className='pr state'>E</div>
                                <div className='pr state'>N</div>
                                <div className='pr state'>T</div>
                            </h1>
                        </div>
                </div>

                <div className='mt-[15vw]'>
                        {/* Large Screen */}
                    <div className='[display:none] lg:[display:block]'>
                        {/* <video src={problem} autoPlay loop muted className='h-screen w-screen brightness-50'/> */}
                        <iframe src="https://player.vimeo.com/video/856126571?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;showinfo=0&amp;is_iframe=true&amp;loop=1&amp;controls=0" className='brightness-50 object-fill h-screen w-full' frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="problem"></iframe>
                    </div>

                    {/* Small Screen */}
                    <div className='lg:[display:none]'>
                        {/* <video src={problem1} autoPlay loop muted className='h-screen w-screen brightness-50'/> */}
                        <iframe src="https://player.vimeo.com/video/856144556?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;showinfo=0&amp;is_iframe=true&amp;loop=1&amp;controls=0" className='brightness-50 object-fill h-screen w-full' frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="problem1"></iframe>

                    </div>
                </div>

            </section>







            <section>

                <div className='mt-[10vw] z-50'>
                <div className='flex justify-center lg:justify-end '>
                   <div>
                        <div className='flex justify-center lg:justify-end'>
                            <div className='promNote lg:w-[60vw] px-[8vw] lg:px-0 text-[6vw] lg:text-[3.7vw] text-yellow-100 text-justify tracking-tighter lg:tracking-normal'>
                                <div className='probText1 text-justify'>
                                    Once the objectives were established, I formulated a problem statement that would serve as a 
                                    reference point throughout the design process:
                                </div>

                                <div className='prnote1 probText2 mt-[14vw] lg:mt-[3vw]'>
                                    " How can we create an efficient and seamless fashion e-commerce website that enhances the 
                                    experience of Lumière Couture's current and potential customers? "
                                </div>
                            </div>
                        </div>
                   </div>
                </div>
                </div>

            </section>


            <section className='mt-[15vw]'>
                <div className='h-screen flex items-center justify-center'>
                    <div>
                        <div className='ideateHead'>
                            <h1 className='ideate text-center text-[20vw] text-neutral-600'>IDEATE</h1>
                        </div>
                       
                        <div className='ideatePhase flex text-[5vw] text-yellow-700 justify-center ml-[7vw]'>
                            <div className='phase1 idphase'>P</div>
                            <div className='phase1 idphase'>H</div>
                            <div className='phase1 idphase'>A</div>
                            <div className='phase1 idphase'>S</div>
                            <div className='phase1 idphase'>E</div>
                        </div>
                    </div>
                </div>
            </section>




            <section className='mt-[25vw] lg:mt-[10vw]'>
                <div className='pl-[1vw]'>
                    <div>
                        <div className='infoArch h-[11.5vw] text-[12vw] lg:text-[8vw] text-neutral-600 lg:h-[7vw]'>Information</div>
                        <div>
                            <div className='archP flex text-yellow-100 text-[3.5vw] lg:text-[3vw] mt-[2vw] mb-[5vw] lg:mb-[2vw]'>
                                <div className='arch mr-[4.5vw] lg:mr-[3vw]'>A</div>
                                <div className='arch mr-[4.5vw] lg:mr-[3vw]'>R</div>
                                <div className='arch mr-[4.5vw] lg:mr-[3vw]'>C</div>
                                <div className='arch mr-[4.5vw] lg:mr-[3vw]'>H</div>
                                <div className='arch mr-[4.5vw] lg:mr-[3vw]'>I</div>
                                <div className='arch mr-[4.5vw] lg:mr-[3vw]'>T</div>
                                <div className='arch mr-[4.5vw] lg:mr-[3vw]'>E</div>
                                <div className='arch mr-[4.5vw] lg:mr-[3vw]'>C</div>
                                <div className='arch mr-[4.5vw] lg:mr-[3vw]'>T</div>
                                <div className='arch mr-[4.5vw] lg:mr-[3vw]'>U</div>
                                <div className='arch mr-[4.5vw] lg:mr-[3vw]'>R</div>
                                <div className='arch mr-[4.5vw] lg:mr-[3vw]'>E</div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='infoArchNote text-[4vw] lg:text-[1.7vw] text-neutral-400'>
                            I created the Information Architecture to map out the whole website.
                        </div>
                    </div>

                    <div className='mt-[10vw] lg:mt-[6vw]'>
                        <img className='pic h-[100%] w-[100%] object-cover' src= {InfoArch1} alt= "Info Architecture"></img>
                    </div>
                </div>
            </section>




            <section className='mt-[20vw] lg:mt-[10vw]'>
                <div className='pl-[1vw]'>
                    <div>
                        <div className='userflowHead flex text-yellow-100 text-[6vw] lg:text-[5vw] mt-[2vw] mb-[5vw] lg:mb-[2vw]'>
                                <div className='userflow mr-[5vw] lg:mr-[4vw]'>U</div>
                                <div className='userflow mr-[5vw] lg:mr-[4vw]'>S</div>
                                <div className='userflow mr-[5vw] lg:mr-[4vw]'>E</div>
                                <div className='userflow mr-[5vw] lg:mr-[4vw]'>R</div>
                                <div className='userflow mr-[5vw] lg:mr-[4vw]'>F</div>
                                <div className='userflow mr-[5vw] lg:mr-[4vw]'>L</div>
                                <div className='userflow mr-[5vw] lg:mr-[4vw]'>O</div>
                                <div className='userflow mr-[5vw] lg:mr-[4vw]'>W</div>
                            </div>
                    </div>

                    <div>
                        <div className='userflowNote text-[4vw] lg:text-[1.35vw] text-neutral-500 text-justify tracking-tighter lg:tracking-normal lg:text-left'>
                         The userflow diagram was developed with the objective of facilitating seamless 
                         navigation on the website. With the key features in mind, the diagram was carefully 
                         crafted to consider the user's interactions with various pages, the decisions made, 
                         and the actions taken while utilizing the application.  
                        </div>
                    </div>

                    <div className='mt-[8vw] lg:mt-[1vw]'>
                        <img className='pic h-[100%] w-[100%] object-cover' src= {Userflow} alt= "USERFLOW"></img>
                    </div>
                </div>
            </section>





            <section className='mt-[25vw] lg:mt-[10vw] flex items-center h-screen justify-center lg:flex-none'>
                <div className='h-full'>

                <div className='flex justify-center'>
                <div className='w-[70vw] lg:w-[60vw] h-[70vh] lg:h-[39.5vw] relative'>
                    <div>
                        <div className='w-full h-full bg-stone-500 opacity-60 absolute overflow-hidden hover:filter-none' ref={prototypeSec}>
                            <img className='h-[100%] w-[100%] object-cover opacity-60' src= {img17} alt= "model"></img>
                        </div>
                        <div className='w-full h-full absolute z-20 bg-black' ref={personaReveal31}></div>
                    </div>
                    
                     <div className='h-full flex flex-col justify-center items-center absolute top-[0vw] left-[-10.5vw] lg:left-[-15.5vw] z-30'>
                        <div className='protoH'>
                            <h1 className='prototype text-center text-[14vw] text-yellow-800'>PROTOTYPE</h1>
                        </div>
                        
                        <div className='prototypePhase flex text-[5vw] text-yellow-300 text-center ml-[7vw]'>
                            <div className='protoPhase phase1'>P</div>
                            <div className='protoPhase phase1'>H</div>
                            <div className='protoPhase phase1'>A</div>
                            <div className='protoPhase phase1'>S</div>
                            <div className='protoPhase phase1'>E</div>
                        </div>
                    </div>
                </div>     
                </div>          
                </div>
            </section>






            <section className='mt-[10vw] lg:mt-[6vw] overflow-hidden'>
                <div>
                    <div>
                        <div className='flex items-center'>
                            <h1 className='paprH mr-[3.5vw] lg:mr-[3vw] text-neutral-600 text-[12vw] lg:text-[8vw]'>
                                <div className='papr'>PAPER</div>
                            </h1>

                            <h1 className='wireH flex text-yellow-100 text-[4.5vw] lg:text-[4vw]'>
                                <div className='papWire wirefram mr-[3.5vw] lg:mr-[3vw]'>W</div>
                                <div className='papWire wirefram mr-[3.5vw] lg:mr-[3vw]'>I</div>
                                <div className='papWire wirefram mr-[3.5vw] lg:mr-[3vw]'>R</div>
                                <div className='papWire wirefram mr-[3.5vw] lg:mr-[3vw]'>E</div>
                                <div className='papWire wirefram mr-[3.5vw] lg:mr-[3vw]'>F</div>
                                <div className='papWire wirefram mr-[3.5vw] lg:mr-[3vw]'>R</div>
                                <div className='papWire wirefram mr-[3.5vw] lg:mr-[3vw]'>A</div>
                                <div className='papWire wirefram mr-[3.5vw] lg:mr-[3vw]'>M</div>
                                <div className='papWire wirefram mr-[3.5vw] lg:mr-[3vw]'>E</div>
                                <div className='papWire wirefram mr-[3.5vw] lg:mr-[3vw]'>S</div>
                            </h1>
                        </div>
                    </div>

                    <div>
                        <div className='pWireframeNote text-[4vw] lg:text-[1.35vw] mt-[1.5vw] lg:mt-0 text-neutral-500 text-justify'>
                            In the initial stages of designing the app, I opted to create 
                            rough sketches on paper. This approach allowed me to focus on 
                            establishing the structural foundation of the app and prevented 
                            me from becoming fixated on details such as  typography, imagery, 
                            and color schemes, which could be addressed in subsequent design 
                            iterations.
                        </div>


                        <div className='skt flex justify-end mt-[4vw] lg:mt-[2vw]'>
                            <Link to="/Sketches">
                                <div className='viewSketch text-[3vw] lg:text-[2vw] text-stone-200 uppercase underline'>View Sketches</div>
                            </Link>
                        </div>
                    </div>

                    <div className='mt-[25vw] lg:mt-[10vw] flex items-center'>
                        <h1 className='mr-[3.5vw] lg:mr-[3vw]  text-neutral-600 text-[12vw] lg:text-[8vw]'>
                            <div className='digit'>DIGITAL</div>
                        </h1>

                        <h1 className='digiWireH flex text-yellow-100 text-[4.5vw] lg:text-[4vw]'>
                            <div className='digiWire wirefram mr-[3.5vw] lg:mr-[3vw]'>W</div>
                            <div className='digiWire wirefram mr-[3.5vw] lg:mr-[3vw]'>I</div>
                            <div className='digiWire wirefram mr-[3.5vw] lg:mr-[3vw]'>R</div>
                            <div className='digiWire wirefram mr-[3.5vw] lg:mr-[3vw]'>E</div>
                            <div className='digiWire wirefram mr-[3.5vw] lg:mr-[3vw]'>F</div>
                            <div className='digiWire wirefram mr-[3.5vw] lg:mr-[3vw]'>R</div>
                            <div className='digiWire wirefram mr-[3.5vw] lg:mr-[3vw]'>A</div>
                            <div className='digiWire wirefram mr-[3.5vw] lg:mr-[3vw]'>M</div>
                            <div className='digiWire wirefram mr-[3.5vw] lg:mr-[3vw]'>E</div>
                            <div className='digiWire wirefram mr-[3.5vw] lg:mr-[3vw]'>S</div>
                        </h1>
                    </div>

                    <div className='flex justify-center'>
                        <div className='dWireframeNote text-[4vw] lg:text-[1.35vw] text-neutral-500 mb-[2vw] mt-[1.5vw] lg:mt-0 text-justify tracking-tighter lg:tracking-normal lg:text-left'>
                            After creating sketches, I proceeded to transform them into low and high fidelity 
                            wireframes using Figma. This process enabled me to breathe life into my vision and obtain a 
                            realistic representation of my design objectives.
                        </div>
                    </div>
                    
                    <div className='mt-[10vw] lg:mt-[0vw] flex justify-center'>
                        <div className='w-[90vw] bg-white h-[60vw] lg:h-[100vh] relative'>
                            <div>
                                <div className='border-stone-400 border-2 absolute overflow-hidden w-full h-full' ref={lofi}> 
                                    <img className='h-full w-full object-cover brightness-50 hover:brightness-100' src= {wireframe} alt= "Lofi Wireframe"></img>
                                </div>
                                <div className='w-full h-full absolute z-20 bg-black' ref={lofiReveal}></div>
                            </div>
                        </div>
                    </div>
                    

                    <div className='mt-[30vw] lg:mt-[15vw]'>
                        <div className='visuals'>
                        <div className='flex justify-center'>
                            <div>
                                <div className=' text-stone-500 text-[14vw] lg:text-[12vw] flex items-center justify-center'>
                                    <h1 className='mr-[3vw]'>
                                        <span className='vis'>V</span>
                                        <span className='vis'>I</span>
                                        <span className='vis'>S</span>
                                        <span className='vis'>U</span>
                                        <span className='vis'>A</span>
                                        <span className='vis'>L</span>
                                    </h1>

                                    <h1 className='text-[14vw] lg:text-[12vw]'>
                                        <span className='des'>D</span>
                                        <span className='des'>E</span>
                                        <span className='des'>S</span>
                                        <span className='des'>I</span>
                                        <span className='des'>G</span>
                                        <span className='des'>N</span>
                                    </h1>
                                </div>

                             
                                    <div className='andd text-neutral-500 text-[14vw] lg:text-[12vw] mr-[3vw] text-center mt-[-3vw] lg:mt-[-5vw]'>And</div>
                                    <div className='flex justify-center'>
                                        <div className='text-[6.5vw] lg:text-[5vw] text-neutral-500 mt-[-2vw] lg:mt-[-4vw]'>
                                                <span className='protoo mr-[5.5vw] lg:mr-[5vw]'>P</span>
                                                <span className='protoo mr-[5.5vw] lg:mr-[5vw]'>R</span>
                                                <span className='protoo mr-[5.5vw] lg:mr-[5vw]'>O</span>
                                                <span className='protoo mr-[5.5vw] lg:mr-[5vw]'>T</span>
                                                <span className='protoo mr-[5.5vw] lg:mr-[5vw]'>O</span>
                                                <span className='protoo mr-[5.5vw] lg:mr-[5vw]'>T</span>
                                                <span className='protoo mr-[5.5vw] lg:mr-[5vw]'>Y</span>
                                                <span className='protoo mr-[5.5vw] lg:mr-[5vw]'>P</span>
                                                <span className='protoo'>E</span>
                                        </div>
                                    </div>
                               
                            </div>
                        </div>


                        <div className='ml-[2vw]'>
                            <div>
                                <div className='styleGuide text-[3vw] lg:text-[2vw] text-yellow-100 mt-[10vw] flex justify-center'>
                                    <div className='mr-[3.5vw] lg:mr-[3vw]'>
                                        <span className='styl mr-[3vw] lg:mr-[2vw]'>S</span>
                                        <span className='styl mr-[3vw] lg:mr-[2vw]'>T</span>
                                        <span className='styl mr-[3vw] lg:mr-[2vw]'>Y</span>
                                        <span className='styl mr-[3vw] lg:mr-[2vw]'>L</span>
                                        <span className='styl mr-[3vw] lg:mr-[2vw]'>E</span>
                                    </div>

                                    <div className='text-neutral-500'>
                                        <span className='guid mr-[3vw] lg:mr-[2vw]'>G</span>
                                        <span className='guid mr-[3vw] lg:mr-[2vw]'>U</span>
                                        <span className='guid mr-[3vw] lg:mr-[2vw]'>I</span>
                                        <span className='guid mr-[3vw] lg:mr-[2vw]'>D</span>
                                        <span className='guid mr-[3vw] lg:mr-[2vw]'>E</span>
                                    </div> 
                                </div>
                            </div>

                            <Link to="/StyleGuide">
                                <div className='mr-[1.5vw] view text-[5vw] lg:text-[2.5vw] text-stone-200 uppercase underline text-center'>VIEW</div>
                            </Link>
                        </div>
                        



                                {/* BARCODE DESIGN */}
                    <div>
                        <div className='flex justify-center mt-[10vw]'>
                                <div className='w-[40vw] lg:w-[35vw] h-[15vw] lg:h-[10vw]'> 
                                    <img className='h-full w-full object-cover ' src= {iron1} alt= "batch"></img>
                                </div>
                            </div>

                            <div className='flex justify-center'>
                                <div className='mt-[3vw] lg:mt-[2vw] text-[2vw] lg:text-[1.3vw] text-stone-200'>
                                    <span className='batchChief mr-[1vw] lg:mr-[0.8vw]'>
                                        THE CLAN CHIEF
                                    </span>

                                    <span className='batchChief1'>Portfolio</span>
                                </div>
                            </div>
                    </div>
                    </div>
                       
                      



                        <div className='mt-[30vw] lg:mt-[15vw] pt-[6vw]'>
                                <div className='highFidelity text-[15vw] lg:text-[10vw] flex flex-col lg:flex-row justify-center items-center'>
                                    <div className='highFidel'>
                                        <div className='highFid text-yellow-200 mr-[3vw] h-[18vw]'>HIGH FIDELITY</div>
                                    </div>
                                    <div className='text-yellow-700'>
                                        <h1 className='highDes flex text-[5vw] lg:text-[4vw]'>
                                            <div className='desi mr-[5.8vw] lg:mr-[3vw]'>D</div>
                                            <div className='desi mr-[5.8vw] lg:mr-[3vw]'>E</div>
                                            <div className='desi mr-[5.8vw] lg:mr-[3vw]'>S</div>
                                            <div className='desi mr-[5.8vw] lg:mr-[3vw]'>I</div>
                                            <div className='desi mr-[5.8vw] lg:mr-[3vw]'>G</div>
                                            <div className='desi mr-[5.8vw] lg:mr-[3vw]'>N</div>
                                            <div className='desi'>S</div>
                                        </h1>
                                    </div>
                                </div>


                                 {/* DESKTOP WIREFRAME */}
                            <div className='bg-stone-200 pt-[3vw] mt-[1.5vw] lg:mt-0'>
                                <div className='deskScreens flex text-[2.5vw] lg:text-[2vw] text-zinc-900 pl-[2vw] uppercase'>
                                    <div className='flex mr-[2vw]'>
                                        <div className='desktop'>D</div>
                                        <div className='desktop'>e</div>
                                        <div className='desktop'>s</div>
                                        <div className='desktop'>k</div>
                                        <div className='desktop'>t</div>
                                        <div className='desktop'>o</div>
                                        <div className='desktop'>p</div>
                                    </div>

                                    <div className='flex'>
                                        <div className='desktop'>S</div>
                                        <div className='desktop'>c</div>
                                        <div className='desktop'>r</div>
                                        <div className='desktop'>e</div>
                                        <div className='desktop'>e</div>
                                        <div className='desktop'>n</div>
                                        <div className='desktop'>s</div>
                                    </div>
                                </div>

                                <div className='flex justify-center mt-[3vw]'>
                                    <div className='w-screen lg:w-[65vw] h-[65vw] lg:h-[40vw] relative'>
                                        <div className='h-full w-full'>
                                            <div className='absolute h-full w-full'>
                                                <img className='h-full w-full object-cover' src= {Mac} alt= "Mac"></img>
                                            </div>
                                            <div className='h-full w-full absolute z-20 bg-stone-200' ref={macReveal}></div>
                                        </div>
                                    </div>
                                </div>
                            

                                <div className='mt-[8vw]'>
                                    <img className='h-full w-full object-cover' src= {macWireframe1} alt= "Mac"></img>
                                </div>
                            </div>

                            <div>
                                <div className='flex flex-col lg:flex-row justify-around mt-[15vw] lg:mt-[6vw]'>
                                    <div className='flex justify-end lg:flex-none'>
                                        <div className='h-[100vw] lg:h-[110vh] w-[65vw] lg:w-[40vw] mb-[10vw] lg:mb-0'>
                                            <img className='h-full w-full object-cover' src= {lum} alt= "Model"></img>
                                        </div>
                                    </div>
                                    
                                        <div className='h-[80vw] lg:h-[90vh] w-[60vw] lg:w-[40vw]'>
                                            <img className='h-full w-full object-cover' src= {lum1} alt= "Model"></img>
                                        </div>     
                                </div>
                            </div>



                            <div className='mt-[20vw] lg:mt-[10vw]'>
                                <div className='homePg text-[3.5vw] lg:text-[3vw] text-center mb-[4vw]'>
                                    <span className='home'>H</span>
                                    <span className='home'>O</span>
                                    <span className='home'>M</span>
                                    <span className='home'>E</span>
                                </div>

                                <div className='flex justify-center'>
                                    <div className='w-[80vw]'>
                                        <img className='h-full w-full object-cover' src= {HomePage} alt= "Model"></img>
                                    </div>
                                </div>
                            </div>


                            <div className='flex flex-col lg:flex-row justify-between lg:items-center mt-[15vw]'>
                                <div>
                                    <div className='w-[65vw] lg:w-[40vw] h-[80vw] lg:h-[100vh]'>
                                        <img className='h-full w-full object-cover' src= {lumModel2} alt= "Model"></img>
                                    </div>
                                </div>

                                <div className='mt-[10vw] lg:mt-[5vw] text-[3.5vw] lg:text-[2.5vw]'>
                                    <div className='flex justify-center lg:flex-none'>
                                    <div>
                                        <div className='addPg flex justify-center mb-[2vw]'>
                                            <div className='mr-[2vw]'>
                                                <span className='cart1'>A</span>
                                                <span className='cart1'>D</span>
                                                <span className='cart1'>D</span>
                                            </div>

                                            <div  className='mr-[2vw]'>
                                                <span className='cart1'>T</span>
                                                <span className='cart1'>O</span>
                                            </div>

                                            <div>
                                                <span className='cart1'>C</span>
                                                <span className='cart1'>A</span>
                                                <span className='cart1'>R</span>
                                                <span className='cart1'>T</span>
                                            </div>
                                        </div>
                                       

                                        
                                            <div className='w-[70vw] lg:w-[48vw] mb-[10vw] lg:mb-[5vw]'>
                                                <img className='h-full w-full object-cover' src= {Cart1} alt= "wireframe"></img>
                                            </div>
                                        </div>
                                    </div>
                                   

                                    <div className='flex items-center lg:flex-none'>
                                        <div>
                                            <div className='cartPg mb-[2vw] lg:text-[3vw] text-center'>
                                                <span className='cart'>C</span>
                                                <span className='cart'>A</span>
                                                <span className='cart'>R</span>
                                                <span className='cart'>T</span>
                                            </div>

                                            <div className='w-[70vw] lg:w-[48vw]'>
                                                <img className='h-full w-full object-cover' src= {Cart} alt= "wireframe"></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           


                            <div className='mt-[15vw]'>
                                <div className='lg:flex justify-around items-center'>

                                                {/* CONCEPT Large Screen */}
                                    <div className='[display:none] lg:[display:block]'>
                                        <div className='conceptLgPg text-[3vw] lg:text-center mb-[4vw] ml-[2vw]'>
                                            <span className='concept'>C</span>
                                            <span className='concept'>O</span>
                                            <span className='concept'>N</span>
                                            <span className='concept'>C</span>
                                            <span className='concept'>E</span>
                                            <span className='concept'>P</span>
                                            <span className='concept'>T</span>
                                        </div>

                                        <div className='w-[30vw]'>
                                            <img className='h-full w-full object-cover' src= {ConceptPage} alt= "Concept Page"></img>
                                        </div>
                                    </div>
                                   


                                    <div className='flex flex-col lg:items-center'>

                                    <div className='flex justify-end lg:flex-none'>
                                        <div>
                                            <div className='labPg text-[3.5vw] lg:text-[3vw] text-center mb-[4vw]'>
                                                <span className='lab'>L</span>
                                                <span className='lab'>A</span>
                                                <span className='lab'>B</span>
                                            </div>

                                            <div className='w-[70vw] lg:w-[40vw] mb-[5vw]'>
                                                <img className='h-full w-full object-cover' src= {LabPage} alt= "Lab Page"></img>
                                            </div>
                                        </div>
                                    </div>

                                                                    {/* model */}
                                        <div className='w-[60vw] lg:w-[50vw] h-[90vw] lg:h-[100vh] mt-[7vw] lg:mt-0 mb-[7vw]'>
                                            <img className='h-full w-full object-cover' src= {lumModel} alt= "Model"></img>
                                        </div>


                                                        {/* Concept Small Screen */}
                                    <div className='flex justify-center items-center lg:[display:none]'>
                                        <div>
                                            <div className='concptSmPg text-[3.5vw] text-center mb-[4vw] ml-[2vw]'>
                                                <span className='concept'>C</span>
                                                <span className='concept'>O</span>
                                                <span className='concept'>N</span>
                                                <span className='concept'>C</span>
                                                <span className='concept'>E</span>
                                                <span className='concept'>P</span>
                                                <span className='concept'>T</span>
                                            </div>

                                            <div className='w-[60vw] lg:w-[30vw]'>
                                                <img className='h-full w-full object-cover' src= {ConceptPage} alt= "Concept Page"></img>
                                            </div>
                                        </div>
                                    </div>


                                    <div className='flex justify-end lg:flex-none mt-[7vw] lg:mt-0'>
                                        <div>
                                            <div className='catalogPg text-[3.5vw] lg:text-[3vw] text-center mb-[4vw] ml-[2vw]'>
                                                <span className='catalog'>C</span>
                                                <span className='catalog'>A</span>
                                                <span className='catalog'>T</span>
                                                <span className='catalog'>A</span>
                                                <span className='catalog'>L</span>
                                                <span className='catalog'>O</span>
                                                <span className='catalog'>G</span>
                                            </div>

                                            <div className='w-[60vw] lg:w-[40vw]'>
                                                <img className='h-full w-full object-cover' src= {StorePage} alt= "Catalog"></img>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>

                                <div className='flex flex-col items-center mt-[7vw]'>
                                            <div className='contactPg text-[3.5vw] lg:text-[3vw] text-center mb-[4vw]'>
                                                <span className='cont'>C</span>
                                                <span className='cont'>O</span>
                                                <span className='cont'>N</span>
                                                <span className='cont'>T</span>
                                                <span className='cont'>A</span>
                                                <span className='cont'>C</span>
                                                <span className='cont'>T</span>
                                            </div>

                                            <div className='w-[60vw] lg:w-[40vw] mb-[5vw]'>
                                                <img className='h-full w-full object-cover' src= {ContactPage} alt= "Contact Page"></img>
                                            </div>
                                        </div>
                            </div>




                                    {/* MOBILE WIREFRAMES */}
                            <div className='mobScreen mt-[15vw] mb-[10vw]'>
                                <div className='mobScreen1 flex justify-center text-[6vw] text-stone-200 pl-[3.7vw]'>
                                    <div className='mr-[4vw]'>
                                        <span className='mobile'>M</span>
                                        <span className='mobile'>O</span>
                                        <span className='mobile'>B</span>
                                        <span className='mobile'>I</span>
                                        <span className='mobile'>L</span>                                     
                                        <span className='mobile'>E</span>
                                    </div>


                                    <div>
                                        <span className='mobile'>S</span>
                                        <span className='mobile'>C</span>
                                        <span className='mobile'>R</span>
                                        <span className='mobile'>E</span>
                                        <span className='mobile'>E</span>                                     
                                        <span className='mobile'>N</span>
                                    </div>
                                </div>
                            </div>



                            <div>
                                <div className='flex justify-around'>

                                    {/* FIRST COLOUMN */}

                                    <div>
                                        <div className='w-[25vw] mb-[5vw]'>
                                            <img className='h-full w-full object-cover' src= {HomePage1} alt= "Home Page"></img>
                                        </div>

                                        <div className='w-[25vw] mb-[5vw]'>
                                            <img className='h-full w-full object-cover' src= {SignUp} alt= "SignUp Page"></img>
                                        </div>

                                        <div className='w-[25vw] mb-[5vw]'>
                                            <img className='h-full w-full object-cover' src= {LogIn} alt= "Log In Page"></img>
                                        </div>

                                        <div className='w-[25vw] mb-[5vw]'>
                                            <img className='h-full w-full object-cover' src= {PaypalPassword} alt= "Paypal Page"></img>
                                        </div>

                                        <div className='w-[25vw] mb-[5vw]'>
                                            <img className='h-full w-full object-cover' src= {PaypalEmail} alt= "Paypal Page"></img>
                                        </div>

                                        <div className='w-[25vw] mb-[5vw]'>
                                            <img className='h-full w-full object-cover' src= {ConfirmationPage} alt= "Confirmation Page"></img>
                                        </div>

                                        <div className='w-[20vw] mb-[5vw]'>
                                            <img className='h-full w-full object-cover' src= {Basket} alt= "Basket Page"></img>
                                        </div>

                                        <div className='w-[25vw] mb-[5vw]'>
                                            <img className='h-full w-full object-cover' src= {Cart11} alt= "Cart Page"></img>
                                        </div>
                                    </div>


                                        {/* SECOND COLOUMN */}

                                    <div>
                                        <div className='w-[25vw] mb-[5vw]'>
                                            <img className='h-full w-full object-cover' src= {StorePage1} alt= "Catalog Page"></img>
                                        </div>

                                        <div className='w-[25vw] mb-[5vw]'>
                                            <img className='h-full w-full object-cover' src= {ContactPage1} alt= "Contact Page"></img>
                                        </div>

                                        <div className='w-[25vw] mb-[5vw]'>
                                            <img className='h-full w-full object-cover' src= {PaymentPage} alt= "Payment Page"></img>
                                        </div>

                                        <div className='w-[25vw] mb-[5vw]'>
                                            <img className='h-full w-full object-cover' src= {LabPage1} alt= "Lab Page"></img>
                                        </div>

                                        <div className='w-[25vw] mb-[5vw]'>
                                            <img className='h-full w-full object-cover' src= {Cartt} alt= "Cart Page"></img>
                                        </div> 

                                       
                                    </div>


                                        {/* THIRD COLOUMN */}

                                    <div>
                                        <div className='w-[25vw] mb-[5vw]'>
                                            <img className='h-full w-full object-cover' src= {ConceptPage1} alt= "Concept Page"></img>
                                        </div>

                                        <div className='w-[25vw] mb-[5vw]'>
                                            <img className='h-full w-full object-cover' src= {Nav} alt= "Navigation"></img>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>



                                    {/* MOBILE PROTOTYPE */}
                            <div>
                                <div>
                                    <div className='flex typH justify-center text-[6vw] lg:text-[5vw] text-neutral-500 mt-[25vw] lg:mt-[15vw]'>
                                        <div className='typHead flex'>
                                            <div className='typ proto mr-[5vw] lg:mr-[3vw]'>P</div>
                                            <div className='typ proto mr-[5vw] lg:mr-[3vw]'>R</div>
                                            <div className='typ proto mr-[5vw] lg:mr-[3vw]'>O</div>
                                            <div className='typ proto mr-[5vw] lg:mr-[3vw]'>T</div>
                                            <div className='typ proto mr-[5vw] lg:mr-[3vw]'>O</div>
                                            <div className='typ proto mr-[5vw] lg:mr-[3vw]'>T</div>
                                            <div className='typ proto mr-[5vw] lg:mr-[3vw]'>Y</div>
                                            <div className='typ proto mr-[5vw] lg:mr-[3vw]'>P</div>
                                            <div className='typ proto'>E</div>
                                        </div>
                                    </div>
                                </div>

                                <div className='mt-[4vw]'>
                                    <div className='flex justify-center items-center lg:flex-none'>
                                        <div className='lg:flex items-center'>
                                            <div>
                                                <div className='w-[70vw] lg:w-[50vw]'>
                                                    <img className='h-full w-full object-cover' src= {protoPic} alt= "Model"></img>
                                                </div>

                                                <div className='text-[2.7vw] lg:text-[2vw] text-stone-200'>
                                                    <h1>
                                                        <span className='sophi mr-[3.48vw] lg:mr-[2.48vw]'>S</span>
                                                        <span className='sophi mr-[3.48vw] lg:mr-[2.48vw]'>O</span>
                                                        <span className='sophi mr-[3.48vw] lg:mr-[2.48vw]'>P</span>
                                                        <span className='sophi mr-[3.48vw] lg:mr-[2.48vw]'>H</span>
                                                        <span className='sophi mr-[3.48vw] lg:mr-[2.48vw]'>I</span>
                                                        <span className='sophi mr-[3.48vw] lg:mr-[2.48vw]'>S</span>
                                                        <span className='sophi mr-[3.48vw] lg:mr-[2.48vw]'>T</span>
                                                        <span className='sophi mr-[3.48vw] lg:mr-[2.48vw]'>I</span>
                                                        <span className='sophi mr-[3.48vw] lg:mr-[2.48vw]'>C</span>
                                                        <span className='sophi mr-[3.48vw] lg:mr-[2.48vw]'>A</span>
                                                        <span className='sophi mr-[3.48vw] lg:mr-[2.48vw]'>T</span>
                                                        <span className='sophi mr-[3.48vw] lg:mr-[2.48vw]'>I</span>
                                                        <span className='sophi mr-[3.48vw] lg:mr-[2.48vw]'>O</span>
                                                        <span className='sophi'>N</span>
                                                    </h1>
                                                </div>
                                            </div>

                                            <div className='flex justify-center items-center lg:flex-none mt-[15vw] lg:mt-[-20vw]'>
                                                <div>
                                                    {/* <div>
                                                        <Video className='w-[70vw] lg:w-[35vw]' autoplay loop>
                                                            <source src={protoVideo} type='video/webm' />
                                                        </Video>
                                                    </div> */}

                                                    <div className='w-[70vw] lg:w-[35vw] h-[55vh] sm:h-[80vh] lg:h-[100vw]'>
                                                         <iframe src="https://player.vimeo.com/video/856129826?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;showinfo=0&amp;is_iframe=true&amp;loop=1&amp;controls=0"  className='w-full h-full' frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="protoVid"></iframe>
                                                    </div>


                                                    <div className='flex justify-center text-[3vw] text-stone-200  mt-[1.5vw] lg:mt-[-20vw]'>
                                                        <h1>
                                                            <span className='modern mr-[7.5vw] lg:mr-[2.8vw]'>M</span>
                                                            <span className='modern mr-[7.5vw] lg:mr-[2.8vw]'>O</span>
                                                            <span className='modern mr-[7.5vw] lg:mr-[2.8vw]'>D</span>
                                                            <span className='modern mr-[7.5vw] lg:mr-[2.8vw]'>E</span>
                                                            <span className='modern mr-[7.5vw] lg:mr-[2.8vw]'>R</span>
                                                            <span className='modern'>N</span>
                                                        </h1>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>




                                                    {/* REFLECTION SECTION */}
                            <div className='mt-[35vw] lg:mt-[15vw]'>
                                <div className='rflct flex justify-center text-[6vw] lg:text-[5vw] text-neutral-500'>
                                    <h1 className='rflct1'>
                                        <span className='reflect mr-[5vw] lg:mr-[4vw]'>R</span>
                                        <span className='reflect mr-[5vw] lg:mr-[4vw]'>E</span>
                                        <span className='reflect mr-[5vw] lg:mr-[4vw]'>F</span>
                                        <span className='reflect mr-[5vw] lg:mr-[4vw]'>L</span>
                                        <span className='reflect mr-[5vw] lg:mr-[4vw]'>E</span>
                                        <span className='reflect mr-[5vw] lg:mr-[4vw]'>C</span>
                                        <span className='reflect mr-[5vw] lg:mr-[4vw]'>T</span>
                                        <span className='reflect mr-[5vw] lg:mr-[4vw]'>I</span>
                                        <span className='reflect mr-[5vw] lg:mr-[4vw]'>O</span>
                                        <span className='reflect'>N</span>
                                    </h1>
                                </div>


                                <div className='flex justify-center mt-[5vw] lg:mt-[2vw]'>
                                    <div className='reflectNote rflctNote text-[4vw] lg:text-[1.3vw] text-stone-200 lg:w-[60vw] text-justify tracking-tighter lg:tracking-normal lg:text-center'>
                                        <div className='mb-[1.5vw] lg:mb-[1vw]'>
                                            During the project, I discovered the elegance of UX Design. I had the opportunity 
                                            to develop my UX abilities by utilizing the human-centered design thinking approach 
                                            to produce a product that is not only uncomplicated and user-friendly, but also 
                                            prioritizes the satisfaction of all users, regardless of their location or circumstances.
                                        </div>
                                        
                                        <div>
                                            I realized that the design process is iterative and demands considerable time and effort. 
                                            My UX skills were enhanced as I worked with similar interfaces, and this experience enlightened 
                                            me on the crucial role of user research in shaping a product's interface and, more importantly, 
                                            the overall user experience.
                                        </div>
                                    </div>
                                </div>
                            </div>




                                                {/* CONCLUSION SECTION */}
                            <div className='mt-[25vw] lg:mt-[15vw]'>
                                <div>
                                    <div className='text-center conc lg:text-left text-[6vw] lg:text-[5vw] text-neutral-500 lg:ml-[5vw]'>
                                        <h1 className='conc1'>
                                            <span className='reflect mr-[5vw] lg:mr-[4vw]'>C</span>
                                            <span className='reflect mr-[5vw] lg:mr-[4vw]'>O</span>
                                            <span className='reflect mr-[5vw] lg:mr-[4vw]'>N</span>
                                            <span className='reflect mr-[5vw] lg:mr-[4vw]'>C</span>
                                            <span className='reflect mr-[5vw] lg:mr-[4vw]'>L</span>
                                            <span className='reflect mr-[5vw] lg:mr-[4vw]'>U</span>
                                            <span className='reflect mr-[5vw] lg:mr-[4vw]'>S</span>
                                            <span className='reflect mr-[5vw] lg:mr-[4vw]'>I</span>
                                            <span className='reflect mr-[5vw] lg:mr-[4vw]'>O</span>
                                            <span className='reflect'>N</span>
                                        </h1>
                                    </div>


                                    <div className='mt-[5vw] lg:mt-[2vw]'>
                                        <div className='reflectNote concNote text-[4vw] lg:text-[1.3vw] text-stone-200 lg:w-[80vw] text-justify tracking-tighter lg:tracking-normal lg:text-center'>
                                            <div>
                                                The primary objective of the product was to enable users to access a vast collection of 
                                                fashion products and conveniently place orders from their preferred luxury fashion store, 
                                                Lumière Couture.
                                                Although I developed a product solution, technology advancements may present opportunities 
                                                to enhance the user experience in the future. This understanding was crucial.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className='thank-Share mt-[35vw] lg:mt-[15vw] text-yellow-100'>
                                <div className='ml-[6vw] text-[6vw] lg:text-[5vw]'>
                                    <div className='share w-[40vw]'>
                                        <div>Share your</div>
                                        <div>thoughts.</div>
                                    </div>
                                </div>


                                <div className='thanks flex justify-end text-[11vw] lg:text-[10vw] mr-[5vw]'>
                                    <div className='mt-[14vw] lg:mt-[5vw]'>
                                        <div>Thanks</div>
                                        <div className='mt-[-3vw]'>for your time!</div>
                                    </div>
                                </div>
                               
                            </div>


                                                {/* BARCODE DESIGN */}
                            <div className='endBarcode pb-[35vw] lg:pb-[15vw]'>
                                <div className='flex justify-center mt-[20vw] lg:mt-[12vw]'>
                                        <div className='w-[45vw] lg:w-[40vw] h-[18vw] lg:h-[15vw]'> 
                                            <img className='h-full w-full object-cover ' src= {iron1} alt= "batch"></img>
                                        </div>
                                    </div>

                                    <div className='flex justify-center'>
                                        <div className='mt-[2vw] text-[2.2vw] lg:text-[1.7vw] text-stone-200'>
                                            <span className='batchChief mr-[1vw]'>
                                                THE CLAN CHIEF
                                            </span>

                                            <span className='batchChief1'>Portfolio</span>
                                        </div>
                                    </div>
                            </div>

                            
                            <div className='flex items-end justify-center pb-[1vw]'>
                                <div className='year ttwothreee  flex justify-center items-center text-[3vw] lg:text-[1.5vw]'>
                                    <div className='w-[1.9vw] lg:w-[1vw] h-[1.9vw] lg:h-[1vw] mr-[0.4vw] mb-[0.4vw] mt-[0.6vw] lg:mt-0 lg:mb-[0.1vw]'>
                                        <img className='h-full w-full' src= {cee} alt= "copyright"></img>
                                    </div>
                                    <div className='text-stone-200'>2023</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </section>
    </div>
  )
}

export default FullProject1
