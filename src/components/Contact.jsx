import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_id', // Replace with your service ID
      'template_id', // Replace with your template ID
      {
        from_name: form.name,
        to_name: 'Your Name',
        from_email: form.email,
        to_email: 'your.email@example.com',
        message: form.message,
      },
      'public_key' // Replace with your public key
    )
    .then(() => {
      setLoading(false);
      setSuccess(true);
      setForm({
        name: '',
        email: '',
        message: '',
      });
      setTimeout(() => setSuccess(false), 5000);
    })
    .catch((error) => {
      setLoading(false);
      console.error(error);
      alert('Something went wrong. Please try again.');
    });
  };

  return (
    <section id="contact" className="relative w-full py-20 mx-auto max-w-7xl px-6 sm:px-16">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={fadeIn('up', 'spring', 0.5, 1)}
        className="flex flex-col lg:flex-row gap-10"
      >
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-6">
            Get In <span className="text-neonBlue">Touch</span>
          </h2>
          <p className="text-secondary mb-8 max-w-lg">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out. I'm always open to new challenges and collaborations.
          </p>

          <div className="space-y-6 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-tertiary flex items-center justify-center neon-border">
                <FaEnvelope className="w-5 h-5 text-neonBlue" />
              </div>
              <div>
                <h3 className="text-white font-medium">Email</h3>
                <a href="mailto:mehrabhossain7102@gmail.com" className="text-secondary hover:text-neonBlue transition-colors duration-300">
                  mehrabhossain7102@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-tertiary flex items-center justify-center neon-border">
                <FaPhone className="w-5 h-5 text-neonBlue" />
              </div>
              <div>
                <h3 className="text-white font-medium">Phone</h3>
                <a href="tel:+1234567890" className="text-secondary hover:text-neonBlue transition-colors duration-300">
                  +880 1777190780
                </a>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <motion.div
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full bg-tertiary flex justify-center items-center cursor-pointer neon-border"
              >
                <FaGithub className="w-5 h-5 text-white" />
              </motion.div>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <motion.div
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full bg-tertiary flex justify-center items-center cursor-pointer neon-border"
              >
                <FaLinkedin className="w-5 h-5 text-white" />
              </motion.div>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <motion.div
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full bg-tertiary flex justify-center items-center cursor-pointer neon-border"
              >
                <FaTwitter className="w-5 h-5 text-white" />
              </motion.div>
            </a>
          </div>
        </div>

        <div className="flex-1">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-tertiary p-8 rounded-xl shadow-lg"
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-white font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-primary border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-neonBlue text-white"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-white font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-primary border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-neonBlue text-white"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-white font-medium mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-primary border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-neonBlue text-white"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 rounded-lg font-bold text-lg bg-gradient-to-r from-neonPurple to-neonBlue text-white shadow-lg shadow-neonBlue/30 hover:opacity-90 transition-opacity duration-300 flex justify-center items-center gap-2"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>

            {success && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-neonBlue text-center"
              >
                Thank you for your message! I'll get back to you soon.
              </motion.p>
            )}
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;