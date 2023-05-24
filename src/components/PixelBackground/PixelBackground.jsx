import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import './PixelBackground.css';
import { useEffect, useState } from 'react';

export const Pixel = () => {
  
  return (
    <motion.div
      className="box"
      initial={{
        opacity: Math.random() - .35,
        scale:Math.random() - .35,
        top: `${Math.round(Math.random() * 100)}%`,
        left: `${Math.round(Math.random() * 100)}%`,
        rotate: `${Math.round(Math.random() * 360)}deg`,
      }}

      animate={{
        top: `${Math.round(Math.random() * 100)}%`,
        left:`${Math.round(Math.random() * 100)}%`,
        opacity: Math.random() *.5,
        filter: `blur(70px)`,
        transition: {
          duration:30,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
        }
      }}
    />
  );
};

Pixel.propTypes = {
  style: PropTypes.object,
};

export const PixelBackground = () => {
  const pixelsCount = 30;
  const [pixels, setPixels] = useState([]);

  const locatePixels = () => {
    let tempPixels = [];

    for (let i = 0; i < pixelsCount; i++) {
      tempPixels.push(<Pixel key={tempPixels.length}/>);
    }

    setPixels(tempPixels);
  };

  useEffect(() => {
    locatePixels();
  }, []);

  return <div className="background">{pixels.map(pixel => pixel)}</div>;
};
