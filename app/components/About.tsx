import { motion } from 'framer-motion';
import { Brain, CloudLightning, Code2, Users } from "lucide-react";
import { containerVariants, itemVariants } from '../constants';

function About() {
    return (
        <div>
            {/* About Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                id="about"
                className="relative my-32 px-4"
            >
                {/* Background decorative elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.1 }}
                        transition={{ duration: 1 }}
                        className="absolute -right-20 top-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"
                    />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="absolute -left-20 bottom-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"
                    />
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-6xl mx-auto">
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <span className="text-blue-400 text-sm font-medium uppercase tracking-wider">Get to know me</span>
                        <h2 className="text-4xl font-bold mt-4 mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                            About Me
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8" />
                        <p className="text-gray-300 leading-relaxed text-lg max-w-3xl mx-auto">
                            I&apos;m a passionate developer with a love for building modern, scalable, and user-friendly applications.
                            With expertise in full-stack development, I strive to create solutions that make an impact.
                        </p>
                    </motion.div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {[
                            {
                                icon: <Code2 className="w-6 h-6" />,
                                title: "Full Stack Development",
                                description: "Building end-to-end solutions with modern technologies"
                            },
                            {
                                icon: <Brain className="w-6 h-6" />,
                                title: "Problem Solving",
                                description: "Tackling complex challenges with creative solutions"
                            },
                            {
                                icon: <CloudLightning className="w-6 h-6" />,
                                title: "Fast Learner",
                                description: "Quickly adapting to new technologies and frameworks"
                            },
                            {
                                icon: <Users className="w-6 h-6" />,
                                title: "Team Player",
                                description: "Collaborating effectively in diverse team environments"
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-colors duration-300"
                            >
                                <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                                <p className="text-gray-400">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Stats */}
                    {/* <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {[
        { icon: <Coffee className="w-5 h-5" />, value: "1,000+", label: "Coffee Cups" },
        { icon: <Rocket className="w-5 h-5" />, value: "50+", label: "Projects Completed" },
        { icon: <Globe className="w-5 h-5" />, value: "10+", label: "Countries Reached" },
        { icon: <Heart className="w-5 h-5" />, value: "100%", label: "Client Satisfaction" }
      ].map((stat, index) => (
        <div key={index} className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl">
          <div className="flex justify-center mb-2 text-blue-400">
            {stat.icon}
          </div>
          <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
          <div className="text-sm text-gray-400">{stat.label}</div>
        </div>
      ))}
    </motion.div> */}
                </div>
            </motion.section>
        </div>
    )
}

export default About