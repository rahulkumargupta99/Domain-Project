// Corrected component name: Popular.js
import React, { useEffect } from 'react';
import anime from 'animejs';

// Renamed the function to start with an uppercase letter
const Popular = () => {
  useEffect(() => {
    const timeline = anime.timeline({ loop: true });

    timeline
      .add({
        targets: '.ml15 .word',
        scale: [14, 1],
        opacity: [0, 1],
        easing: "easeOutCirc",
        duration: 800,
        delay: (el, i) => 800 * i 
       

      })
      .add({
        targets: '.ml15',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
      });

  // Clean up animation when component unmounts
  return () => {
    timeline.pause(1);
    timeline.seek(0);
  };
}, []);

  return (
    <h1 className="ml15" style={{ color: '#2c2e2e', fontSize:'105px', marginLeft:'300px'}}>
    <span className="word" style={{ marginRight: '25px' }}>POPULAR</span>
    <span className="word">PACKAGE</span>
  </h1>
  );
};

export default Popular;
