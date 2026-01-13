
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import './Projects.scss';

const projects = [
    {
        id: 1,
        title: "Crypto Dashboard",
        category: "Web",
        description: "Real-time cryptocurrency tracking platform with advanced charting.",
        stack: ["React", "Chart.js", "Firebase"],
        color: "linear-gradient(135deg, #1f4037, #99f2c8)"
    },
    {
        id: 2,
        title: "Ecommerce App",
        category: "Mobile",
        description: "Full-featured shopping application with payment integration.",
        stack: ["React Native", "Redux", "Stripe"],
        color: "linear-gradient(135deg, #3a1c71, #d76d77, #ffaf7b)"
    },
    {
        id: 3,
        title: "AI Image Generator",
        category: "Web",
        description: "SaaS platform for generating art using stable diffusion.",
        stack: ["Next.js", "Python", "TensorFlow"],
        color: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)"
    },
    {
        id: 4,
        title: "Travel Agency UI",
        category: "Design",
        description: "Modern UI/UX design kit for travel booking platforms.",
        stack: ["Figma", "UI Design"],
        color: "linear-gradient(135deg, #12c2e9, #c471ed, #f64f59)"
    },
];

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="project-card"
        >
            <div className="card-inner">
                <div className="card-front">
                    <div className="card-image" style={{ background: project.color }}>
                        <div className="overlay"></div>
                        <span className="category-tag">{project.category}</span>
                    </div>
                    <div className="card-info">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="tech-stack">
                            {project.stack.map(tech => (
                                <span key={tech}>{tech}</span>
                            ))}
                        </div>
                        <div className="card-actions">
                            <a href="#" className="icon-link"><Github size={20} /></a>
                            <a href="#" className="icon-link"><ExternalLink size={20} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    const categories = ['All', 'Web', 'Mobile', 'Design'];

    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="subtitle">My Work</span>
                    <h2 className="title">Featured <span className="highlight">Projects</span></h2>
                </motion.div>

                <div className="filter-tabs">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                            {activeCategory === cat && (
                                <motion.div
                                    className="active-indicator"
                                    layoutId="activeTab"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                <motion.div className="projects-grid" layout>
                    <AnimatePresence>
                        {filteredProjects.map(project => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
