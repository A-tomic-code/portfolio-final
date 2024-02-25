import { ProjectCard } from '../../components/ProjectCard/ProjectCard'
import { PROJECTS } from '../../utils/utils'

export const Projects = () => {
	return (
		<div className=" w-full grid grid-cols-3 gap-4">
			{PROJECTS.map((project, index) => (
				<ProjectCard key={index} data={project} />
			))}
		</div>
	)
}
