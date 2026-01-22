"use client";
import { useEffect, useRef } from "react";
import Lenis from "lenis";

function SmoothScrolling({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis
    lenisRef.current = new Lenis({
      lerp: 0.1,
      duration: 1.5,
      smoothWheel: true,
    });

    // Animation frame loop
    function raf(time) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  return <>{children}</>;
}

export default SmoothScrolling;
