"use client"
import { useState,useEffect } from "react";  

const ScrollDrawing = () => {
    const [length, setLength] = useState(10000); // Set a very long initial length
  const [draw, setDraw] = useState(0); // State to dynamically calculate the draw amount

  useEffect(() => {
    // Get the id of the <path> element
    const line = document.getElementById("line");
    if (!line) return; // Early return if the element doesn't exist

    // The start position of the drawing
    line.style.strokeDasharray = length;
    line.style.strokeDashoffset = length;

    // Function to handle scroll event
    const handleScroll = () => {
      const scrollPercent = (document.body.scrollTop + document.documentElement.scrollTop) /
                            (document.documentElement.scrollHeight - document.documentElement.clientHeight);

      // Increase the speed by multiplying scrollPercent by a larger factor
      const drawAmount = length * scrollPercent * 1; // Increased speed
      setDraw(drawAmount); // Update state with the calculated draw amount

      // Reverse the drawing (when scrolling upwards)
      line.style.strokeDashoffset = length - drawAmount;
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, [length]); // Depend on length to re-run the effect if it changes

    
    return ( 
        <svg id="mySVG" width="600" height="600" xmlns="http://www.w3.org/2000/svg">
      {/* Very long vertical line path */}
      <path fill="none" stroke="red" strokeWidth="3" id="line" d="M10 10 L10 590"/>
    </svg>
     );
}
 
export default ScrollDrawing;