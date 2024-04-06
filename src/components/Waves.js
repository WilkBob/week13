import React from 'react'
import { useEffect } from 'react';
const Waves = () => {
    useEffect(() => {
        const body = document.body;
    
        const handleMouseMove = (event) => {
          const clientX = event.clientX;
          const hue = Math.round((clientX / window.innerWidth) * 120) + 200;
          body.style.backgroundColor = `hsl(${hue}, 20%, 50%)`;
        };
    
        body.addEventListener('mousemove', handleMouseMove);
    
      }, []);
  return (
    <div id='waves'>
        <div className='wave'></div>
        <div className='wave'></div>
        <div className='wave'></div>
    </div>
  )
}

export default Waves
