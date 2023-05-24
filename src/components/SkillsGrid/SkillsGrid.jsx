import './SkillsGrid.css';
import { skills } from '../../utils/utils';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      
    },
  },
};

const itemVariants = {
  hidden: {
    scale: 0.8,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition:{

      duration:.4
    }
  },
};

export const SkillsGrid = () => {

  const containerRef = useRef(null)
  const isInView = useInView(containerRef, {once:true})

  return (
    <AnimatePresence>
      {skills && (
        <motion.div
          ref={containerRef}
          className="skills_grid"
          initial="hidden"
          animate={isInView ? "visible" : 'hidden'}
          variants={containerVariants}
        >
          {skills.map((skill, index) => (
            <motion.div
              className="skill"
              key={skill.name}
              variants={itemVariants}
              custom={index}
            >
              <img src={skill.logo} alt={skill.name} />
              {skill.name}
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
