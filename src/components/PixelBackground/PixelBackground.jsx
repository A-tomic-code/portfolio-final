import PropTypes from 'prop-types';
import pixelSVG from '../../assets/background-element.svg';
import './PixelBackground.css';
import { useEffect, useState } from 'react';

export const Pixel = ({ style }) => {
  return <img src={pixelSVG} className="background-pixel" style={style} />;
};

Pixel.propTypes = {
  style: PropTypes.object,
};

export const PixelBackground = () => {
  const pixelsCount = 30;
  const relocatingInterval = 20000;
  const [pixels, setPixels] = useState([]);

  const relocatePixels = () => {
    let tempPixels = [];

    for (let i = 0; i < pixelsCount; i++) {
      const size = `${Math.round(Math.random() * (100 - 20)) + 20}px`;
      const pixelStyle = {
        top: `${Math.round(Math.random() * 100)}%`,
        left: `${Math.round(Math.random() * 100)}%`,
        transform: `rotate(${Math.random() * 360}deg)`,
        opacity: Math.random()* 1,
        width: size,
        height: size,
      };

      tempPixels.push(
        <Pixel style={pixelStyle} key={tempPixels.length}></Pixel>
      );
    }

    setPixels(tempPixels);
  };

  useEffect(() => {
    relocatePixels();
    setTimeout(() => {
      relocatePixels();
    }, 10);

    const interval = setInterval(() => {
      relocatePixels();
    }, relocatingInterval);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div className="background">{pixels.map((pixel) => pixel)}</div>;
};
