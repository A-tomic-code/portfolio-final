import { useEffect, useRef, useState } from 'react'
import { SKILLS } from '../../utils/utils'
import { InfiniteMovingCards } from '../infinite-moving-cards'

// const CARD_WIDTH = 200
// const CARD_HEIGHT = 200

// const REDERED_ITEMS = 10

export const SkillsGrid = () => {
	// 	const containerRef = useRef<HTMLDivElement>(null)

	// 	const draw = () => {
	// 		if (!containerRef.current || !SKILLS) return

	// 		const first = SKILLS.shift()
	// 		if (!first) return

	// 		SKILLS.push(first)

	// 		const elements = SKILLS.map()

	// 		containerRef.current.appendChild()
	// 	}

	// 	draw()

	// 	setInterval(draw, 4000)

	return (
		<div className="flex flex-col justify-start items-center gap-6 w-full">
			<InfiniteMovingCards
				items={SKILLS}
				direction="left"
				speed="normal"
				pauseOnHover={true}
				className="w-full"
			/>
		</div>
	)
}
