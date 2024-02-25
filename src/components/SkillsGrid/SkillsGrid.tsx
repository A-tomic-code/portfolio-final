import { SKILLS } from '../../utils/utils'
import { InfiniteMovingCards } from '../infinite-moving-cards'

export const SkillsGrid = () => {
	return (
		<div className="flex flex-col justify-start items-center gap-6 w-full">
			<InfiniteMovingCards
				items={SKILLS}
				direction="left"
				speed="slow"
				pauseOnHover={true}
				className="w-full"
			/>
		</div>
	)
}
