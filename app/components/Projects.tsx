import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '../constants';
const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6
        }
    }
};

// interface Project {
//     title: string;
//     description: string;
//     link: string;
// }

// interface ProjectIcon {
//     [key: string]: JSX.Element;
// }

interface ProjectTags {
    [key: string]: string[];
}

function Projects() {

    const projects = [
        {
            title: "quizNfacts",
            description: "An online quiz platform made with Django stack.",
            image: "/api/placeholder/400/250",
            link: "https://quiznfacts.com/",
            // github: "https://quiznfacts.com/"
        },
        {
            title: "Worldstories",
            description: "A place to read stories and folklores from around the world. Developed with Django.",
            image: "/api/placeholder/400/250",
            link: "https://worldstories.net"
        },
        {
            title: "Al Noor Website",
            description: "Website for a manpower company made with Django and React.Js.",
            image: "/api/placeholder/400/250",
            link: "https://alnooroverseas.com"
        },
        {
            title: "Kalodhunga Creation Website",
            description: "Website for a software company made with Django and Next.Js.",
            image: "/api/placeholder/400/250",
            link: "https://kalodhunga.com"
        }
    ]

    // const getProjectIcon = (title: string): JSX.Element => {
    //     const icons: ProjectIcon = {
    //         'E-Commerce Platform': <LayoutGrid className="w-8 h-8 text-white" />,
    //         'Task Management App': <Code2 className="w-8 h-8 text-white" />,
    //         'Portfolio Website': <Palette className="w-8 h-8 text-white" />
    //     };
    //     return icons[title] || <LockIcon className="w-8 h-8 text-white" />;
    // };

    const getProjectTags = (title: string): string[] => {
        const tags: ProjectTags = {
            'E-Commerce Platform': ['React', 'Node.js', 'MongoDB', 'Stripe'],
            'Task Management App': ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
            'Portfolio Website': ['React', 'Tailwind CSS', 'Framer Motion']
        };
        return tags[title] || ['HTML', 'CSS', 'JavaScript'];
    };
    return (
        <div id='projects'>{/* Projects Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                // id="projects"
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
                        <span className="text-blue-400 text-sm font-medium uppercase tracking-wider">My Recent Work</span>
                        <h2 className="text-4xl font-bold mt-4 mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                            Featured Projects
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8" />
                        <p className="text-gray-300 leading-relaxed text-lg max-w-3xl mx-auto">
                            Explore a collection of my recent projects, showcasing my expertise in web development and problem-solving.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.a
                                href={project.link}
                                target='_blank'
                                key={index}
                                variants={projectVariants}
                                whileHover={{ y: -10 }}
                                className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden"
                            >
                                {/* Card Header with Icon */}
                                {/* <div className="relative h-48 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                                            {getProjectIcon(project.title)}
                                        </div>
                                    </div>
                                </div> */}

                                {/* Card Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 mb-4 line-clamp-3">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {getProjectTags(project.title).map((tag, i) => (
                                            <span
                                                key={i}
                                                className="text-xs px-3 py-1 bg-white/5 rounded-full text-gray-300"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Button */}
                                    {/* <motion.a
                                        href={project.link}
                                        target="_blank"
                                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
                                        whileHover={{ x: 5 }}
                                    >
                                        <span>View Project</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </motion.a> */}
                                </div>

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 border border-blue-500/0 group-hover:border-blue-500/50 rounded-xl transition-colors duration-300" />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </motion.section></div>
    )
}

export default Projects