import { motion } from "framer-motion";
import "./PixelBackground.css";
import { ReactElement, useEffect, useState } from "react";

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
};

interface PixelBackgroundProps {
	amount: number;
}
export const PixelBackground = ({ amount }: PixelBackgroundProps) => {
	const [pixels, setPixels] = useState<ReactElement[]>([]);

	const locatePixels = () => {
		const tempPixels = [];

		for (let i = 0; i < amount; i++) {
			tempPixels.push(<Pixel key={tempPixels.length} />);
		}

		setPixels(tempPixels);
	};

	useEffect(() => {
		locatePixels();
	}, []);

	return <div className="background">{pixels.map((pixel) => pixel)}</div>;
};
