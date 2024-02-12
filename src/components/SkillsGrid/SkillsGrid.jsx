import "./SkillsGrid.css";
export const SkillsGrid = () => {
	const skills = [
		{
			name: "React",
			logo: undefined,
		},
		{
			name: "CSS",
			logo: undefined,
		},
		{
			name: "SQL",
			logo: undefined,
		},
		{
			name: "Redux",
			logo: undefined,
		},
		{
			name: "NodeJS",
			logo: undefined,
		},
		{
			name: "GIT",
			logo: undefined,
		},
	];

	return (
		<div className="skills_grid">
			{skills.map((skill) => {
				return (
					<div className="skill" key={skill.name}>
						{skill.name}
					</div>
				);
			})}
		</div>
	);
};
