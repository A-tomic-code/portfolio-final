<<<<<<< Updated upstream
import './SkillsGrid.css'
=======
import "./SkillsGrid.css";
import { skills } from "../../utils/utils";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const containerVariants = {
	hidden: {},
	visible: {
		transition: {},
	},
};

const itemVariants = {
	hidden: {},
	visible: {
		scale: 1,
		opacity: 1,
		x: "-100%",
		transition: {
			ease: "linear",
			duration: 5,
			repeat: "Infinity",
			repeatType: "reverse",
		},
	},
};

>>>>>>> Stashed changes
export const SkillsGrid = () => {
	const containerRef = useRef(null);
	const isInView = useInView(containerRef, { once: true });

<<<<<<< Updated upstream
  const skills = [
    {
      name: "React",
      logo: undefined
    },
    {
      name: "CSS",
      logo: undefined
    },
    {
      name: "SQL",
      logo: undefined
    },
    {
      name: "Redux",
      logo: undefined
    },
    {
      name: "NodeJS",
      logo: undefined
    },
    {
      name: "GIT",
      logo: undefined
    },
  ]


  return (
    <div className="skills_grid">

      {skills.map( skill => {
        return <div className="skill" key={skill.name}>{skill.name}</div>
        })}

    </div>
  )

}
=======
	return (
		<AnimatePresence>
			{skills && (
				<motion.div
					ref={containerRef}
					className="flex  gap-[32px] w-full p-8 rounded-[32px] overflow-hidden"
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					variants={containerVariants}
				>
					{skills.concat(skills).map((skill, index) => (
						<motion.div
							className="h-40 w-40 bg-gray-200 bg-opacity-10 rounded-[16px] flex flex-col justify-center items-center gap-2 p-4 shrink-0"
							key={skill.name}
							variants={itemVariants}
							custom={index}
						>
							<img className="w-3/4 h-3/4" src={skill.logo} alt={skill.name} />
							{skill.name}
						</motion.div>
					))}
				</motion.div>
			)}
		</AnimatePresence>
	);
};
>>>>>>> Stashed changes
