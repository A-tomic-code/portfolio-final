import { SKILLS } from "../../utils/utils";

export const SkillsGrid = () => {
	return (
		<section className="w-full h-full flex gap-4 ">
			{SKILLS.map((skill) => {
				return (
					<article className="flex flex-col items-center justify-center w-[200px] h-[200px] shrink-0 bg-white bg-opacity-5 rounded-2xl" key={skill.name}>
						{skill.name}
					</article>
				);
			})}
		</section>
	);
};
