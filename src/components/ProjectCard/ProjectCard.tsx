import { CardBody, CardContainer, CardItem } from '../3d-card'

interface ProjectCardProps {
	data: {
		title: string
		desc: string
		img: string
	}
}
export const ProjectCard = ({ data }: ProjectCardProps) => {
	const { title, desc, img } = data

	return (
		<CardContainer className="w-full">
			<CardBody className=" hover:shadow-emerald-500/[0.1] border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border ">
				<CardItem
					translateZ="50"
					className="text-xl font-bold text-primary"
				>
					{title}
				</CardItem>
				<CardItem
					as="p"
					translateZ="60"
					className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 line-clamp-3"
				>
					{desc}
				</CardItem>
				<CardItem translateZ="125" className="w-full mt-4">
					<img
						src={img}
						className="aspect-video w-full object-cover rounded-xl group-hover/card:shadow-xl"
						alt="thumbnail"
					/>
				</CardItem>
				<div className="flex justify-between items-center mt-5">
					<CardItem
						translateZ={20}
						as="button"
						className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
					>
						Try now →
					</CardItem>
					<CardItem
						translateZ={20}
						as="button"
						className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
					>
						Sign up
					</CardItem>
				</div>
			</CardBody>
		</CardContainer>
	)
}
