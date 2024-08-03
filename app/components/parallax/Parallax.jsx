"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./parallax.css"

// Ensure ScrollTrigger is registered with GSAP
gsap.registerPlugin(ScrollTrigger);

const MyComponent = () => {
 const sectionRef = useRef(null);
 const colLeftRef = useRef(null);

 useEffect(() => {
    // Initialize ScrollTrigger
    ScrollTrigger.create({
      animation: gsap.timeline({ paused: true }).fromTo(
        colLeftRef.current,
        { y: 0 },
        { y: '109vh', duration: 9.5, ease: 'easeIn' },
        0
      ),
      trigger: sectionRef.current,
      start: 'top top',
      end: 'bottom center',
      scrub: true
    });

    // Function to handle animation frame
    const raf = (time) => {
      // Assuming Lenis is a custom animation library or a typo.
      // If it's a typo and you meant to use GSAP, you can replace this with GSAP's animation logic.
      // For demonstration, I'm leaving it as is.
      // lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    };

    // Start the animation frame loop 
    requestAnimationFrame(raf);

    // Cleanup on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
 }, []);

 return (
    <div className="flex flex-col md:flex-row justify-evenly why" ref={sectionRef}>
      <div id="vertical"  ref={colLeftRef}>
        <h2>Why Choose Me for Your Technical  Writing and Development Needs?</h2>
      </div>
      <div className="col_left" id="vertical">
      <div className='left'>
                    <p>01</p>
                    <h3>Expertise</h3>
                    <p>I possess a robust foundation in software development, ensuring I can tackle projects of any scale with precision and efficiency. My expertise spans various programming languages and development frameworks.I also excel at transforming complex technical concepts into clear, concise, and user-friendly documentation. </p>
                </div>
                <div className='left'>
                    <p>02</p>
                    <h3>Attention to Detail</h3>
                    <p>I pride myself on my meticulous attention to detail, ensuring every aspect of your project meets the highest standards of quality and accuracy.</p>
                </div>
                <div className='left'>
                    <p>03</p>
                    <h3>Innovative Solutions</h3>
                    <p>Staying at the forefront of industry trends, I leverage the latest tools and technologies to deliver innovative solutions that give you a competitive edge.</p>
                </div>
                <div className='left'>
                    <p>04</p>
                    <h3>Integrated Approach</h3>
                    <p>Combining technical writing and development allows me to deliver seamless and cohesive solutions. I work closely with you to ensure documentation accurately reflects the product’s functionality and usability.</p>
                </div>
        {/* Your content here */}
      </div>
      <div id="mobile">
        <h2>Why Choose Me for Your Technical Writing and Development Needs?</h2>
      </div>
      <div className="col_left" id="mobile">
      <div className='left'>
                    <p>01</p>
                    <h3>Expertise</h3>
                    <p>I possess a robust foundation in software development, ensuring I can tackle projects of any scale with precision and efficiency. My expertise spans various programming languages and development frameworks.I also excel at transforming complex technical concepts into clear, concise, and user-friendly documentation. </p>
                </div>
                <div className='left'>
                   <p>02</p>
                    <h3>Attention to Detail</h3>
                    <p>I pride myself on my meticulous attention to detail, ensuring every aspect of your project meets the highest standards of quality and accuracy.</p>
                </div>
                <div className='left'>
                    <p>03</p>
                    <h3>Innovative Solutions</h3>
                    <p>Staying at the forefront of industry trends, I leverage the latest tools and technologies to deliver innovative solutions that give you a competitive edge.</p>
                </div>
                <div className='left'>
                    <p>04</p>
                    <h3>Integrated Approach</h3>
                    <p>Combining technical writing and development allows me to deliver seamless and cohesive solutions. I work closely with you to ensure documentation accurately reflects the product’s functionality and usability.</p>
                </div>
        {/* Your content here */}
      </div>
    </div>
 );
};

export default MyComponent;
