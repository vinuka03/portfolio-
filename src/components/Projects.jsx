
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import truemortemImg from '../assets/truemortem.jpeg';
import productpImg from '../assets/productp.jpeg';
import myhealthImg from '../assets/myhealth.jpeg';
import './Projects.scss';

const projects = [
    {
        id: 1,
        title: "Truemortem",
        category: "Web",
        description: "Developed a dual model AI system using verbal autopsy narratives and structured postmortem data to analyze heart-related deaths. Created Sri Lanka’s first curated cardiovascular autopsy dataset, with interactive dashboards and a chatbot for intuitive analysis.",
        stack: ["React", "FastAPI", "MongoDB", "Rasa"],
        image: truemortemImg,
        github: "https://github.com/SachithPathiranage/TrueMortem"

    },
    {
        id: 2,
        title: "Product Pal",
        category: "Web",
        description: "Built a Retrieval-Augmented Generation (RAG) system that answers user queries using product manuals and documents. The system combines vector search with an AI chatbot to deliver accurate, context aware responses through an intuitive user interface.",
        stack: ["React", "FastAPI", "Tailwind CSS"],
        image: productpImg,
        github: "https://github.com/vinuka03/User_guide-Reader"

    },
    {
        id: 3,
        title: "MyHealth",
        category: "Web",
        description: "MyHEALTH is a comprehensive health and wellness website designed to deliver an informative and user-friendly digital experience. The platform includes features such as user registration, product browsing, interactive quizzes, and communication and subscription sections, presented through a clean and well structured interface.",
        stack: ["JavaScript", "HTML", "CSS "],
        image: myhealthImg,
        // No github link for this project
        demo: "#"
    }
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
                    <div className="card-image" style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
                            {project.github && (
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="icon-link">
                                    <Github size={20} />
                                </a>
                            )}
                            {/*<a href={project.demo} target="_blank" rel="noopener noreferrer" className="icon-link">
                                <ExternalLink size={20} />
                        </a>*/}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div >
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
