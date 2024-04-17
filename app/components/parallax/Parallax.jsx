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
        { y: '70vh', duration: 1.5, ease: 'none' },
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
    <div className="flex justify-between why" ref={sectionRef}>
      <div id="vertical"  ref={colLeftRef}>
        <h2>Why Choose us for your design and development needs?</h2>
        {/* Your content here */}
      </div>
      <div className="col_left">
      <div>
                    <p>01</p>
                    <h3>Experience</h3>
                    <p>Why Choose with years of experience working with businesses of all sizes, our team knows what it takes to deliver exceptional results. Portfolio for Your Design and Development Needs?</p>
                </div>
                <div>
                    <p>02</p>
                    <h3>Expertise</h3>
                    <p>We are constantly staying up-to-date with the latest trends and technologies to ensure that our clients receive the most effective and innovative solutions.</p>
                </div>
                <div>
                    <p>03</p>
                    <h3>Dedication</h3>
                    <p>Our team is dedicated to providing personalized and attentive service to each and every one of our clients, ensuring that their needs and goals are always top priorities.</p>
                </div>
                <div>
                    <p>04</p>
                    <h3>Commitment</h3>
                    <p>At [Company Name], we are committed to delivering measurable and impactful results for our clients, helping them achieve their business objectives and exceed their expectations.</p>
                </div>
        {/* Your content here */}
      </div>
    </div>
 );
};

export default MyComponent;
