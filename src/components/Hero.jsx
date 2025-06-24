import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen mx-auto pt-20">
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 px-6 sm:px-16">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-neonBlue" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="flex flex-col">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-black text-white lg:text-7xl sm:text-6xl text-5xl mt-2"
          >
            Hi, I'm <span className="neon-text">MD. Mehrab Hossain</span>
          </motion.h1>

          <TypeAnimation
            sequence={[
              "Full-Stack Developer",
              1000,
              "Web Designer",
              1000,
              "UI/UX Enthusiast",
              1000,
              "Tech Lover",
              1000,
            ]}
            wrapper="div"
            speed={50}
            style={{ fontSize: "2rem", display: "inline-block" }}
            className="text-secondary font-medium sm:text-3xl text-2xl mt-4"
            repeat={Infinity}
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-secondary text-base sm:text-lg max-w-3xl mt-5"
          >
            I build exceptional digital experiences with modern web
            technologies. Currently focused on creating responsive,
            user-friendly applications with React, Node.js, and cutting-edge
            design.
          </motion.p>

          <div className="mt-8 flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-8 py-3 rounded-lg font-bold text-lg bg-gradient-to-r from-neonPurple to-neonBlue text-white shadow-lg shadow-neonBlue/30"
            >
              Contact Me
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-8 py-3 rounded-lg font-bold text-lg border-2 border-neonBlue text-white shadow-lg shadow-neonBlue/30"
            >
              View Work
            </motion.a>
          </div>

          <div className="mt-12 flex gap-6">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <motion.div
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-tertiary flex justify-center items-center cursor-pointer neon-border"
              >
                <FaGithub className="w-5 h-5 text-white" />
              </motion.div>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <motion.div
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-tertiary flex justify-center items-center cursor-pointer neon-border"
              >
                <FaLinkedin className="w-5 h-5 text-white" />
              </motion.div>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <motion.div
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-tertiary flex justify-center items-center cursor-pointer neon-border"
              >
                <FaTwitter className="w-5 h-5 text-white" />
              </motion.div>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="text-secondary text-2xl"
          >
            <FaArrowDown />
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
