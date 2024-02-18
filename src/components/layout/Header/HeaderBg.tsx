import { motion } from "framer-motion";
interface GearProps {
	rotation: string;
	width: string;
	height: string;
	className: string;
	initial: {
		opacity: number;
		scale: number;
		rotate: number;
		x: string;
		y: string;
	};
}
export const Gear = ({
	rotation,
	width,
	height,
	className,
	initial,
}: GearProps) => {
	return (
		<motion.svg
			width={width}
			height={height}
			viewBox="0 0 500 500"
			initial={initial}
			animate={{
				rotate: rotation === "toright" ? 99999 : -99999,
				transition: { duration: 99999, ease: "linear", repeatType: "loop" },
			}}
			className={"absolute text-sky-500 z-10" + className}
		>
			<g
				style={{
					stroke: "currentColor",
					strokeOpacity: 0.631373,
				}}
			>
				<path
					d="M594.408 60.315a29.82 30.246 0 0 1-29.82 30.246 29.82 30.246 0 0 1-29.82-30.246 29.82 30.246 0 0 1 29.82-30.246 29.82 30.246 0 0 1 29.82 30.246Z"
					style={{
						fill: "none",
						fillOpacity: 0,
						fillRule: "evenodd",
						strokeWidth: 5.34065,
						strokeLinecap: "round",
						strokeOpacity: 1,
					}}
					transform="matrix(4.834 0 0 4.82924 -2479.467 -44.428)"
				/>
				<path
					d="M573.302 60.268a8.734 8.845 0 0 1-8.734 8.845 8.734 8.845 0 0 1-8.734-8.845 8.734 8.845 0 0 1 8.734-8.845 8.734 8.845 0 0 1 8.734 8.845z"
					style={{
						fill: "none",
						fillOpacity: 0.631373,
						fillRule: "evenodd",
						strokeWidth: 5.36565,
						strokeLinecap: "round",
						strokeOpacity: 1,
					}}
					transform="matrix(4.834 0 0 4.82924 -2479.467 -44.428)"
				/>
				<path
					d="m564.588 30.069-.02 21.354M564.608 69.208l-.02 21.353M534.483 60.622l21.35-.354"
					style={{
						fill: "currentColor",
						fillOpacity: 0.631373,
						fillRule: "evenodd",
						stroke: "currentColor",
						strokeWidth: 5,
						strokeLinecap: "butt",
						strokeDasharray: "none",
						strokeOpacity: 1,
					}}
					transform="matrix(4.834 0 0 4.82924 -2479.467 -44.428)"
				/>
				<path
					d="m573.302 60.268 21.35-.354"
					style={{
						fill: "none",
						fillOpacity: 0,
						fillRule: "evenodd",
						stroke: "currentColor",
						strokeWidth: 5,
						strokeLinecap: "butt",
						strokeDasharray: "none",
						strokeOpacity: 1,
					}}
					transform="matrix(4.834 0 0 4.82924 -2479.467 -44.428)"
				/>
				<path
					d="M603.57 60.477a38.9 39.07 0 0 1-38.9 39.07 38.9 39.07 0 0 1-38.899-39.07 38.9 39.07 0 0 1 38.9-39.07 38.9 39.07 0 0 1 38.9 39.07z"
					style={{
						fill: "none",
						fillOpacity: 0,
						fillRule: "evenodd",
						strokeWidth: 5.02476,
						strokeOpacity: 1,
					}}
					transform="matrix(4.834 0 0 4.82924 -2479.467 -44.428)"
				/>
				<path
					d="m558.025 19.484 1.252-7.683 9.637-.083 1.24 7.702zM579.263 21.545l4.836-6.1 8.457 4.623-2.67 7.33zM549.591 22.292l-5-6.846-8.457 4.622 3.03 8.262zM532.098 35.382l-7.665-3.623-5.219 8.102 6.61 5.808zM596.022 35.272l7.665-3.623 5.219 8.102-6.61 5.808zM604.71 54.185l8.455.606.57 9.62-8.61 1.816zM524.57 55.04l-8.455.607-.57 9.62 8.61 1.816zM597.078 85.577l7.665 3.623 5.219-8.102-6.61-5.808zM533.086 85.215l-7.664 3.623-5.22-8.103 6.61-5.808zM549.52 98.818l-5.115 7.319-8.439-4.656 3.274-8.626zM581.546 98.525l4.872 6.887 8.439-4.656-3.425-8.89z"
					style={{
						fill: "currentColor",
						fillOpacity: 1,
						fillRule: "evenodd",
						stroke: "currentColor",
						strokeWidth: 5,
						strokeLinecap: "butt",
						strokeDasharray: "none",
						strokeOpacity: 1,
					}}
					transform="matrix(4.834 0 0 4.82924 -2479.467 -44.428)"
				/>
				<path
					d="m559.036 99.502 1.252 10.212 9.637.11 1.24-10.238z"
					style={{
						fill: "currentColor",
						fillOpacity: 1,
						fillRule: "evenodd",
						stroke: "currentColor",
						strokeWidth: 5.76468,
						strokeLinecap: "butt",
						strokeDasharray: "none",
						strokeOpacity: 1,
					}}
					transform="matrix(4.834 0 0 4.82924 -2479.467 -44.428)"
				/>
			</g>
		</motion.svg>
	);
};

interface HeaderBgProps {
	className?: string;
	width: string;
	height: string;
}
export const HeaderBg = ({ className, width, height }: HeaderBgProps) => (
	<motion.div className="absolute w-full h-full -z-10 overflow-hidden">
		{Array(2)
			.fill("")
			.map((_, i) => {
				return (
					<Gear
						key={i}
						rotation="toright"
						width={width}
						height={height}
						initial={{
							opacity: 0.12,
							scale: i ? 1 : 0.7,
							rotate: i ? 0 : 180,
							x: i ? "-40%" : "45%",
							y: i ? "0%" : "40%",
						}}
						className={className || ""}
					/>
				);
			})}
	</motion.div>
	//retornar los 3 gears colocados en el header
);
