"use client"
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import "./progress.css"

const ProgressBar = () => {
 const [scrollProgress, setScrollProgress] = useState(0);

 useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / scrollHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
 }, []);

 return (
    <motion.div
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: `${scrollProgress}%` }}
      transition={{ duration: 0.5 }}
    />
 );
};

export default ProgressBar;
