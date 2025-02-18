'use client';

import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import About from './components/About';
import Hero from './components/Hero';
import Projects from './components/Projects';
import { fadeIn } from './constants';

export default function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800/80 backdrop-blur-sm shadow-lg fixed w-full z-10"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
            >
              Bibek Gautam
            </motion.div>
            <div className="flex space-x-6">
              {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.1, color: '#60A5FA' }}
                  className="text-gray-300 transition duration-300"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-24">

        <Hero />
        <About />
        <Projects />

        {/* Skills Section */}
        {/* <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          id="skills"
          className="my-32"
        >
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Skills</h2>
          <div className="flex flex-wrap gap-4">
            {['Python', 'Django', 'React.js', 'Next.js', 'Tailwind CSS', 'PostgreSQL', 'Git', 'Docker'].map((skill, index) => (
              <motion.span
                key={index}
                variants={fadeIn}
                whileHover={{ scale: 1.1 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.section> */}

        {/* Contact Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          id="contact"
          className="my-32"
        >
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Contact</h2>
          <p className="text-gray-400 mb-8 text-lg">
            Feel free to reach out to me for collaborations or just a friendly chat!
          </p>
          <div className="flex space-x-6">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:your.email@example.com"
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-blue-500/25 transition duration-300"
            >
              <Mail className="w-5 h-5" />
              <span>Email Me</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-blue-500/25 transition duration-300"
            >
              <Link href={"https://www.linkedin.com/in/bibek-gautam-a6958a153/"} className='flex gap-2'>
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </Link>
            </motion.a>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800/50 py-8 mt-20">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Bibek Gautam. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}