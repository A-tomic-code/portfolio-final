'use client'

import { cn } from '../utils/utils'
import React, { useEffect, useState } from 'react'

interface InfiniteMovingCardsProps {
	items: {
		name: string
		logo: string
	}[]
	direction?: 'left' | 'right'
	speed?: 'fast' | 'normal' | 'slow'
	pauseOnHover?: boolean
	className?: string
}
export const InfiniteMovingCards = ({
	items,
	direction = 'left',
	speed = 'slow',
	pauseOnHover = false,
	className,
}: InfiniteMovingCardsProps) => {
	const containerRef = React.useRef<HTMLDivElement>(null)
	const scrollerRef = React.useRef<HTMLUListElement>(null)

	useEffect(() => {
		addAnimation()
	}, [])
	const [start, setStart] = useState(false)
	function addAnimation() {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children)

			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true)
				if (scrollerRef.current) {
					scrollerRef.current.appendChild(duplicatedItem)
				}
			})

			getDirection()
			getSpeed()
			setStart(true)
		}
	}
	const getDirection = () => {
		if (containerRef.current) {
			if (direction === 'left') {
				containerRef.current.style.setProperty(
					'--animation-direction',
					'forwards',
				)
			} else {
				containerRef.current.style.setProperty(
					'--animation-direction',
					'reverse',
				)
			}
		}
	}
	const getSpeed = () => {
		if (containerRef.current) {
			if (speed === 'fast') {
				containerRef.current.style.setProperty(
					'--animation-duration',
					'20s',
				)
			} else if (speed === 'normal') {
				containerRef.current.style.setProperty(
					'--animation-duration',
					'40s',
				)
			} else {
				containerRef.current.style.setProperty(
					'--animation-duration',
					'120s',
				)
			}
		}
	}
	return (
		<div
			ref={containerRef}
			className={cn(
				'scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]',
				className,
			)}
		>
			<ul
				ref={scrollerRef}
				className={cn(
					' flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap',
					start && 'animate-scroll ',
					pauseOnHover && 'hover:[animation-play-state:paused]',
				)}
			>
				{items.map((skill) => (
					<li
						className="w-[150px] h-[150px] relative flex justify-center items-center rounded-2xl flex-shrink-0 border border-slate-700 p-2 bg-white bg-opacity-5  backdrop-blur-lg"
						key={skill.name}
					>
						<article className="w-full h-full relative z-20 flex flex-col justify-center items-center gap-4 ">
							<span className="w-full h-2/5 shrink-0 ">
								<img
									src={skill.logo}
									className="w-full h-full"
								/>
							</span>

							<span className=" text-2xl text-primary leading-[1.6]font-normal ">
								{skill.name}
							</span>
						</article>
					</li>
				))}
			</ul>
		</div>
	)
}
