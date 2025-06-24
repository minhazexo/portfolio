import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeIn } from '../utils/motion';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <section id="about" className="relative w-full py-20 mx-auto max-w-7xl px-6 sm:px-16">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={fadeIn('up', 'spring', 0.5, 1)}
        className="flex flex-col lg:flex-row gap-10 items-center"
      >
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-6">
            About <span className="text-neonBlue">Me</span>
          </h2>
          <h3 className="text-xl text-secondary mb-4">
            A passionate Full-Stack Developer based in YourLocation.
          </h3>
          <p className="text-secondary mb-4">
            With over X years of experience in web development, I specialize in building modern, responsive, and scalable web applications. My journey in tech started when...
          </p>
          <p className="text-secondary mb-6">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities. I'm passionate about creating intuitive user experiences and solving complex problems with elegant solutions.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div>
              <p className="text-secondary"><span className="text-white">Name:</span> Your Name</p>
              <p className="text-secondary"><span className="text-white">Email:</span> your.email@example.com</p>
            </div>
            <div>
              <p className="text-secondary"><span className="text-white">From:</span> Your Location</p>
              <p className="text-secondary"><span className="text-white">Freelance:</span> Available</p>
            </div>
          </div>
          <button className="px-6 py-3 rounded-lg font-bold text-lg bg-gradient-to-r from-neonPurple to-neonBlue text-white shadow-lg shadow-neonBlue/30">
            Download CV
          </button>
        </div>

        <div className="flex-1 flex justify-center items-center relative">
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-neonPurple to-neonBlue blur-lg opacity-75"></div>
            <div className="relative bg-tertiary rounded-xl overflow-hidden">
              <img 
                src="/src/assets/profile.jpg" 
                alt="Profile" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;