import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with product listings, cart functionality, and secure checkout.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: '/src/assets/project1.jpg',
    github: '#',
    live: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A productivity application for managing tasks with drag-and-drop functionality and team collaboration.',
    tags: ['React', 'Firebase', 'Tailwind CSS', 'DnD'],
    image: '/src/assets/project2.jpg',
    github: '#',
    live: '#',
  },
  {
    id: 3,
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media metrics with real-time data visualization.',
    tags: ['Next.js', 'TypeScript', 'Chart.js', 'AWS'],
    image: '/src/assets/project3.jpg',
    github: '#',
    live: '#',
  },
  {
    id: 4,
    title: 'Weather Application',
    description: 'Real-time weather forecasting app with location detection and 5-day forecasts.',
    tags: ['React', 'OpenWeather API', 'Geolocation', 'PWA'],
    image: '/src/assets/project4.jpg',
    github: '#',
    live: '#',
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <section id="projects" className="relative w-full py-20 mx-auto max-w-7xl px-6 sm:px-16">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={fadeIn('up', 'spring', 0.5, 1)}
      >
        <h2 className="text-4xl font-bold mb-4 text-center">
          My <span className="text-neonBlue">Projects</span>
        </h2>
        <p className="text-secondary text-center max-w-3xl mx-auto mb-12">
          Here are some of my recent projects. Each one was built to solve a specific problem or explore new technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeIn('up', 'spring', index * 0.2, 0.75)}
              className="bg-tertiary rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs bg-primary/80 text-white px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-secondary mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-white hover:text-neonBlue transition-colors duration-300"
                  >
                    <FiGithub /> Code
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-white hover:text-neonBlue transition-colors duration-300"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Project Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="bg-tertiary rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative h-64 w-full overflow-hidden">
              <img 
                src={activeProject.image} 
                alt={activeProject.title} 
                className="w-full h-full object-cover"
              />
              <button 
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 bg-primary/80 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-neonBlue transition-colors duration-300"
              >
                &times;
              </button>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">{activeProject.title}</h3>
              <p className="text-secondary mb-6">{activeProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {activeProject.tags.map(tag => (
                  <span key={tag} className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a 
                  href={activeProject.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-6 py-2 rounded-lg font-medium bg-gradient-to-r from-neonPurple to-neonBlue text-white flex items-center gap-2"
                >
                  <FiGithub /> View Code
                </a>
                <a 
                  href={activeProject.live} 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-6 py-2 rounded-lg font-medium border border-neonBlue text-white flex items-center gap-2"
                >
                  <FiExternalLink /> Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;