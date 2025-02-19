'use client';

import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import About from './components/About';
import Hero from './components/Hero';
import Projects from './components/Projects';
import { containerVariants, itemVariants } from './constants';
import Navbar from './components/Navbar';

export default function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      
      <Navbar />

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
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      id="contact"
      className="relative my-32 px-4"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute right-0 top-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute -left-48 bottom-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="text-blue-400 text-sm font-medium uppercase tracking-wider">Get in Touch</span>
          <h2 className="text-4xl font-bold mt-4 mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Contact
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8" />
          <p className="text-gray-300 leading-relaxed text-lg max-w-3xl mx-auto">
            Feel free to reach out to me for collaborations or just a friendly chat!
          </p>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex justify-center space-x-6"
        >
          <motion.a
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:your.email@example.com"
            className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden px-8 py-4"
          >
            <div className="flex items-center space-x-3">
              <Mail className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
              <span className="text-gray-300 group-hover:text-blue-300 transition-colors duration-300">Email Me</span>
            </div>
            <div className="absolute inset-0 border border-blue-500/0 group-hover:border-blue-500/50 rounded-xl transition-colors duration-300" />
          </motion.a>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden px-8 py-4"
          >
            <Link 
              href="https://www.linkedin.com/in/bibek-gautam-a6958a153/" 
              target="_blank"
              className="flex items-center space-x-3"
            >
              <Linkedin className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
              <span className="text-gray-300 group-hover:text-blue-300 transition-colors duration-300">LinkedIn</span>
            </Link>
            <div className="absolute inset-0 border border-blue-500/0 group-hover:border-blue-500/50 rounded-xl transition-colors duration-300" />
          </motion.div>
        </motion.div>
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