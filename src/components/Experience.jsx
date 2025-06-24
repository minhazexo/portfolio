import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { useInView } from 'react-intersection-observer';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import ErrorBoundary from './ErrorBoundary'; // Make sure this path is correct

const experiences = [
  {
    id: 1,
    title: 'Senior Full-Stack Developer',
    company: 'Tech Innovations Inc.',
    date: '2021 - Present',
    description: [
      'Lead development of enterprise web applications using React and Node.js',
      'Architected scalable microservices infrastructure',
      'Mentored junior developers and conducted code reviews',
    ],
    icon: <FaBriefcase />,
    type: 'work',
  },
  {
    id: 2,
    title: 'Full-Stack Developer',
    company: 'Digital Solutions LLC',
    date: '2018 - 2021',
    description: [
      'Developed and maintained client websites and web applications',
      'Implemented CI/CD pipelines for automated deployments',
      'Collaborated with designers to create responsive UIs',
    ],
    icon: <FaBriefcase />,
    type: 'work',
  },
  {
    id: 3,
    title: 'Bachelor of Computer Science',
    company: 'State University',
    date: '2014 - 2018',
    description: [
      'Specialized in Web Technologies and Software Engineering',
      'Graduated with Honors (GPA: 3.8/4.0)',
      'Capstone project: AI-powered recommendation engine',
    ],
    icon: <FaGraduationCap />,
    type: 'education',
  },
];

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <section id="experience" className="relative w-full py-20 mx-auto max-w-7xl px-6 sm:px-16">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={fadeIn('up', 'spring', 0.5, 1)}
      >
        <h2 className="text-4xl font-bold mb-4 text-center">
          Work <span className="text-neonBlue">Experience</span> & Education
        </h2>
        <p className="text-secondary text-center max-w-3xl mx-auto mb-12">
          My professional journey and academic background that shaped my skills and knowledge.
        </p>

        <div className="mt-12">
          <ErrorBoundary>
            <VerticalTimeline lineColor="#1e1836">
              {experiences.map((experience, index) => (
                <VerticalTimelineElement
                  key={experience.id}
                  contentStyle={{
                    background: '#151030',
                    color: '#fff',
                    boxShadow: '0 8px 32px rgba(8, 253, 216, 0.1)',
                    border: '1px solid rgba(189, 0, 255, 0.2)',
                  }}
                  contentArrowStyle={{ borderRight: '7px solid #151030' }}
                  date={experience.date}
                  dateClassName="text-secondary"
                  iconStyle={{
                    background: experience.type === 'work' ? '#bd00ff' : '#08fdd8',
                    color: '#fff',
                    boxShadow: '0 0 0 4px #151030',
                  }}
                  icon={experience.icon}
                >
                  <motion.div
                    variants={fadeIn('up', 'spring', index * 0.2, 0.75)}
                  >
                    <h3 className="text-xl font-bold text-white">{experience.title}</h3>
                    <h4 className="text-neonBlue font-medium">{experience.company}</h4>
                    <ul className="mt-4 list-disc pl-5 space-y-2 text-secondary">
                      {experience.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </motion.div>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </ErrorBoundary>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
