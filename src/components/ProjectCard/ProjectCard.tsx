import { CardBody, CardContainer, CardItem } from '../3dCard'

interface ProjectCardProps {
	data: {
		title: string
		desc: string
		img: string
		gitUrl: string
	}
}
export const ProjectCard = ({ data }: ProjectCardProps) => {
	const { title, desc, img, gitUrl } = data

	return (
		<CardContainer className="w-full">
			<CardBody className=" hover:shadow-emerald-500/[0.1] border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border ">
				<CardItem
					translateZ="75"
					className="text-xl font-bold text-primary"
				>
					{title}
				</CardItem>
				<CardItem
					as="p"
					translateZ="75"
					className="text-white-500 text-sm max-w-sm mt-2  line-clamp-3"
				>
					{desc}
				</CardItem>
				<CardItem translateZ="100" className="w-full mt-4">
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
						className="px-4 py-2 rounded-xl text-xs font-normal text-white "
					>
						<span onClick={() => open(gitUrl, '_blank')}>
							Ver Código →
						</span>
					</CardItem>
					<CardItem
						translateZ={20}
						as="button"
						className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
					>
						<span onClick={() => open(gitUrl, '_blank')}>
							Ir al proyecto
						</span>
					</CardItem>
				</div>
			</CardBody>
		</CardContainer>
	)
}
