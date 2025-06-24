import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Product Manager, TechCorp',
    content: 'Working with [YourName] was an absolute pleasure. Their attention to detail and problem-solving skills helped us deliver our product ahead of schedule. The code quality was exceptional and their communication was clear throughout the project.',
    avatar: '/src/assets/avatar1.jpg',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CTO, StartupX',
    content: '[YourName] transformed our web presence with their technical expertise. They not only delivered a beautiful, functional website but also provided valuable insights that improved our overall digital strategy. Highly recommended!',
    avatar: '/src/assets/avatar2.jpg',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Marketing Director, BrandCo',
    content: 'The e-commerce platform [YourName] built for us has significantly increased our online sales. Their ability to understand our business needs and translate them into technical solutions was impressive. We continue to work with them on ongoing improvements.',
    avatar: '/src/assets/avatar3.jpg',
  },
];

const Testimonials = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <section id="testimonials" className="relative w-full py-20 mx-auto max-w-7xl px-6 sm:px-16">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={fadeIn('up', 'spring', 0.5, 1)}
      >
        <h2 className="text-4xl font-bold mb-4 text-center">
          Client <span className="text-neonBlue">Testimonials</span>
        </h2>
        <p className="text-secondary text-center max-w-3xl mx-auto mb-12">
          What people I've worked with say about my work and professionalism.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={fadeIn('up', 'spring', index * 0.2, 0.75)}
              className="bg-tertiary p-8 rounded-xl relative"
            >
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-neonPurple to-neonBlue opacity-20 blur-sm"></div>
              <div className="relative bg-tertiary rounded-xl p-6 h-full flex flex-col">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-white font-bold">{testimonial.name}</h3>
                    <p className="text-neonBlue text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-secondary mb-6 flex-grow">"{testimonial.content}"</p>
                <div className="flex justify-end">
                  <svg className="w-8 h-8 text-neonBlue opacity-50" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;