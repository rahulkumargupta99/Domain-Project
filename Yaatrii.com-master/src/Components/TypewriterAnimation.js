import React, { useEffect } from 'react';
import anime from 'animejs';

const TypewriterAnimation = () => {
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
    <h1 className="ml15" style={{ color: 'red', fontSize: '65px', position: 'absolute',left:'900px', top: '150px', right: '50%', transform: 'translateX(50%)' }}>
      <span className="word" style={{ marginRight: '25px' }}>Book</span>
      <span className="word">Now</span>
    </h1>
  );
};

export default TypewriterAnimation;
