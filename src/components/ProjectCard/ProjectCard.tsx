import "./ProjectCard.css";

interface ProjectCardProps {
	data: {
		title: string;
		desc: string;
		img: string;
	};
}
export const ProjectCard = ({ data }: ProjectCardProps) => {
	const { title, desc, img } = data;

	return (
		<div className="project__card">
			<div className="project__card--inner">
				<div className="project__card--front">
					<div className="project__card-image" />

					<h3 className="title">{title}</h3>
				</div>
				<div className="project__card--back">
					{desc}
					{img}
				</div>
			</div>
		</div>
	);
};
