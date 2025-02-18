import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn, staggerChildren } from '../constants';
import { ChevronDown, ExternalLink, Github } from 'lucide-react';


function Hero() {
    return (
        <div>{/* Hero Section */}
            <motion.section
                initial="initial"
                animate="animate"
                variants={staggerChildren}
                id="hero"
                className="relative min-h-[400px] flex flex-col justify-center items-center text-center px-4"
            >
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        transition={{ duration: 2 }}
                        className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl"
                    />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        transition={{ duration: 2, delay: 0.5 }}
                        className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl"
                    />
                </div>

                {/* Profile image */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative mb-8"
                >
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/10 shadow-lg">
                        <img
                            src="https://scontent.fjkr2-1.fna.fbcdn.net/v/t39.30808-6/460840869_2209787656063743_4770975968386577755_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=p2pTdzJclHIQ7kNvgG1PUU1&_nc_oc=AdjnxLdG8fT9xo4eZM0grdNEgvJ4WLi7deHjGeMRpNzIDNLCkR3UiiDFNdZz6SfFbeBZT8SuSFTauLJt23w-crwd&_nc_zt=23&_nc_ht=scontent.fjkr2-1.fna&_nc_gid=Ammk0W-jey4QodhkiKcSfr1&oh=00_AYCSqS81TdMzo8q9Y0CB4mMQbnNwd6ClankU9Ns4JhTZbA&oe=67BA8C6D"
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            borderWidth: ["3px", "2px", "3px"]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                        className="absolute inset-0 rounded-full border-blue-400 border-opacity-50"
                    />
                </motion.div>

                {/* Main content */}
                <div className="relative z-10">
                    {/* <motion.div
        variants={fadeIn}
        className="mb-6 inline-block"
      >
        <span className="text-blue-400 text-xl font-medium">Welcome to my portfolio</span>
      </motion.div> */}

                    <motion.h1
                        variants={fadeIn}
                        className="text-6xl font-bold mb-6 leading-tight"
                    >
                        <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 text-transparent bg-clip-text">
                            Hi, I&apos;m Bibek Gautam
                        </span>
                    </motion.h1>

                    <motion.div
                        variants={fadeIn}
                        className="max-w-2xl mx-auto mb-8"
                    >
                        <p className="text-xl text-gray-300 leading-relaxed">
                            A passionate Full Stack Developer crafting beautiful web experiences with
                            <span className="text-blue-400"> Django</span> and
                            <span className="text-purple-400"> Next.js</span>
                        </p>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={fadeIn}
                        className="flex flex-wrap justify-center gap-4 mb-12"
                    >
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-blue-500/25 transition duration-300 flex items-center gap-2"
                            href='#projects'
                        >
                            View My Work
                            <ExternalLink className="w-5 h-5" />
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white/10 text-white rounded-lg shadow-lg backdrop-blur-sm hover:bg-white/20 transition duration-300 flex items-center gap-2"
                            href='https://github.com/bibek-beebayk'
                            target='_blank'
                        >
                            <Github className="w-5 h-5" />
                            GitHub Profile
                        </motion.a>
                    </motion.div>

                    {/* Tech stack pills */}
                    <motion.div
                        variants={fadeIn}
                        className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto"
                    >
                        {['Python', 'Django', 'React', 'Next.js', 'Tailwind'].map((tech, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300 backdrop-blur-sm"
                            >
                                {tech}
                            </span>
                        ))}
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="bottom-10 left-1/2 transform -translate-x-1/2 mt-10"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="flex flex-col items-center gap-2"
                    >
                        <span className="text-sm text-gray-400">Scroll to explore</span>
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                    </motion.div>
                </motion.div>
            </motion.section></div>
    )
}

export default Hero