<<<<<<< Updated upstream
import PropTypes from 'prop-types';
import pixelSVG from '../../assets/background-element.svg';
import './PixelBackground.css';
import { useEffect, useState } from 'react';

export const Pixel = ({ style }) => {
  return <img src={pixelSVG} className="background-pixel" style={style} />;
=======
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import "./PixelBackground.css";
import { useEffect, useState } from "react";

export const Pixel = () => {
	return (
		<motion.div
			className="box"
			initial={{
				opacity: Math.random() - 0.35,
				scale: Math.random() - 0.35,
				top: `${Math.round(Math.random() * 100)}%`,
				left: `${Math.round(Math.random() * 100)}%`,
				rotate: `${Math.round(Math.random() * 360)}deg`,
			}}
			animate={{
				top: `${Math.round(Math.random() * 100)}%`,
				left: `${Math.round(Math.random() * 100)}%`,
				opacity: Math.random() * 0.5,
				filter: `blur(70px)`,
				transition: {
					duration: 30,
					repeat: Infinity,
					repeatType: "reverse",
					ease: "linear",
				},
			}}
		/>
	);
>>>>>>> Stashed changes
};

Pixel.propTypes = {
	style: PropTypes.object,
};

<<<<<<< Updated upstream
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
=======
export const PixelBackground = ({ amount }) => {
	const [pixels, setPixels] = useState([]);

	const locatePixels = () => {
		let tempPixels = [];

		for (let i = 0; i < amount; i++) {
			tempPixels.push(<Pixel key={tempPixels.length} />);
		}
>>>>>>> Stashed changes

		setPixels(tempPixels);
	};

<<<<<<< Updated upstream
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
=======
	useEffect(() => {
		locatePixels();
	}, []);

	return <div className="background">{pixels.map((pixel) => pixel)}</div>;
>>>>>>> Stashed changes
};
