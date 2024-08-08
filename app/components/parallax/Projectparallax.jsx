"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./parallax.css"

// Ensure ScrollTrigger is registered with GSAP
gsap.registerPlugin(ScrollTrigger);

const ProjectComponent = ({name, small, featureDetails, developmentDetails} ) => {
 const sectionRef = useRef(null);
 const colLeftRef = useRef(null);

 useEffect(() => {
    // Initialize ScrollTrigger
    ScrollTrigger.create({
      animation: gsap.timeline({ paused: true }).fromTo(
        colLeftRef.current,
        { y: 0 },
        { y: '100vh', duration: 2.5, ease: 'none' },
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
    <div className="flex flex-col md:flex-row justify-between why p-4" ref={sectionRef}>
      <div id="vertical"  ref={colLeftRef}>
        <h2>{name}</h2>
        <p>{small}</p>
      </div>
      <div className="col_left" id="vertical">
      <div className='left crop'>
                
                    <h3>Features</h3>
                    <p>{featureDetails}</p>
                </div>
                <div className='left crop'>
                    <h3>Development Process</h3>
                    <p>{developmentDetails}</p>
                </div>
               
        
      </div>
      {/* This code is for desktop view.  */}
      <div id="desktop">
        <h2>{name}</h2>
        <p>{small}</p>
      </div>
      <div className="col_left" id="desktop">
      <div className='left'>
                    
                    <h3>Features</h3>
                    <p>{featureDetails}</p>
                </div>
                <div className='left'>
                    <h3>Development Process</h3>
                    <p>{developmentDetails}</p>
                </div>
                
                
        {/* Your content here */}
      </div>
      {/* This code is for mobile view.  */}
      <div id="mobile">
        <h2>{name}</h2>
        <p>{small}</p>
      </div>
      <div className="col_left" id="mobile">
      <div className='left'>
                    
                    <h3>Features</h3>
                    <p>{featureDetails}</p>
                </div>
                <div className='left'>
                    <h3>Development Process</h3>
                    <p>{developmentDetails}</p>
                </div>
                
                
        {/* Your content here */}
      </div>
    </div>
 );
};

export default ProjectComponent;
