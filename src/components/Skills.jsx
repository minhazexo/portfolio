import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiMongodb, SiExpress, SiRedux } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact className="w-8 h-8 text-[#61DAFB]" />, level: 90 },
  { name: 'Node.js', icon: <FaNodeJs className="w-8 h-8 text-[#68A063]" />, level: 85 },
  { name: 'TypeScript', icon: <SiTypescript className="w-8 h-8 text-[#3178C6]" />, level: 80 },
  { name: 'JavaScript', icon: <FaJs className="w-8 h-8 text-[#F7DF1E]" />, level: 95 },
  { name: 'HTML5', icon: <FaHtml5 className="w-8 h-8 text-[#E34F26]" />, level: 95 },
  { name: 'CSS3', icon: <FaCss3Alt className="w-8 h-8 text-[#1572B6]" />, level: 90 },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-8 h-8 text-[#06B6D4]" />, level: 85 },
  { name: 'Next.js', icon: <SiNextdotjs className="w-8 h-8" />, level: 80 },
  { name: 'MongoDB', icon: <SiMongodb className="w-8 h-8 text-[#47A248]" />, level: 75 },
  { name: 'Express', icon: <SiExpress className="w-8 h-8" />, level: 80 },
  { name: 'Redux', icon: <SiRedux className="w-8 h-8 text-[#764ABC]" />, level: 85 },
  { name: 'Git', icon: <FaGitAlt className="w-8 h-8 text-[#F05032]" />, level: 90 },
];

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <section id="skills" className="relative w-full py-20 mx-auto max-w-7xl px-6 sm:px-16">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={fadeIn('up', 'spring', 0.5, 1)}
      >
        <h2 className="text-4xl font-bold mb-4 text-center">
          My <span className="text-neonBlue">Skills</span>
        </h2>
        <p className="text-secondary text-center max-w-3xl mx-auto mb-12">
          Here are the technologies I've been working with recently. I'm always learning and adding new tools to my stack.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
              className="bg-tertiary p-6 rounded-xl shadow-lg flex flex-col items-center"
            >
              <div className="mb-4">
                {skill.icon}
              </div>
              <h3 className="text-white font-medium mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-2.5 rounded-full bg-gradient-to-r from-neonPurple to-neonBlue"
                />
              </div>
              <span className="text-xs text-secondary mt-1">{skill.level}%</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;