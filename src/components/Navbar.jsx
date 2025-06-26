import { motion } from 'framer-motion';
import { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Navbar = ({ isTopOfPage, activeSection }) => {
  const [toggle, setToggle] = useState(false);
  const navbarBackground = isTopOfPage ? '' : 'bg-primary backdrop-blur-sm bg-opacity-90';

  return (
    <nav className={`w-full flex items-center py-5 fixed top-0 z-20 ${navbarBackground} px-6 sm:px-16`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex items-center gap-2"
        >
          <span className="text-neonBlue font-bold text-[18px]">{"<"}</span>
          <a href="#home" className="text-white text-[18px] font-bold cursor-pointer">
            minhazexo
          </a>
          <span className="text-neonBlue font-bold text-[18px]">{"/>"}</span>
        </motion.div>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
            <li key={item}>
              <a 
                href={`#${item}`} 
                className={`${activeSection === item ? 'text-neonBlue' : 'text-black text-[18px] border-2 border-neonBlue text-lg rounded-lg font-bold'} hover:text-neonBlue transition-colors duration-300 font-medium`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          {toggle ? (
            <HiX 
              className="w-6 h-6 text-white cursor-pointer" 
              onClick={() => setToggle(false)} 
            />
          ) : (
            <HiMenuAlt4 
              className="w-6 h-6 text-white cursor-pointer" 
              onClick={() => setToggle(true)} 
            />
          )}

          <motion.div
            animate={toggle ? { x: 0 } : { x: 300 }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            className={`fixed top-0 bottom-0 right-0 z-10 p-6 w-4/5 h-screen bg-tertiary flex flex-col justify-start items-end shadow-2xl sm:hidden ${toggle ? 'flex' : 'hidden'}`}
          >
            <HiX 
              className="w-6 h-6 text-white cursor-pointer mb-10" 
              onClick={() => setToggle(false)} 
            />
            <ul className="list-none flex flex-col justify-start items-end flex-1 gap-8">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item}`} 
                    className={`${activeSection === item ? 'text-neonBlue' : 'text-secondary'} text-xl font-medium hover:text-neonBlue transition-colors duration-300`}
                    onClick={() => setToggle(false)}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              ))}
              <div className="flex gap-4 mt-8">
                <a href="https://github.com" target="_blank" rel="noreferrer">
                  <FaGithub className="w-6 h-6 text-white hover:text-neonBlue transition-colors duration-300" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <FaLinkedin className="w-6 h-6 text-white hover:text-neonBlue transition-colors duration-300" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <FaTwitter className="w-6 h-6 text-white hover:text-neonBlue transition-colors duration-300" />
                </a>
              </div>
            </ul>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;