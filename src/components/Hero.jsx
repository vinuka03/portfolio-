
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import './Hero.scss';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-background">
                <div className="glow-orb glow-1"></div>
                <div className="glow-orb glow-2"></div>
            </div>

            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="greeting">Hello, I'm</span>
                    <h1 className="name">
                        Vinuka <span className="gradient-text">Ganarachchi</span>
                    </h1>

                    <div className="roles-container">
                        <motion.div
                            className="roles-scroll"
                            animate={{ x: [0, -1000] }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 20,
                                    ease: "linear",
                                }
                            }}
                        >
                            <h2 className="title">
                                <span className="highlight">Creative Developer</span>
                                <span className="separator"> // </span>
                                <span className="highlight">Data Scientist</span>
                                <span className="separator"> // </span>
                                <span className="highlight">Software Engineer</span>
                                <span className="separator"> // </span>
                                <span className="highlight">Creative Developer</span>
                                <span className="separator"> // </span>
                                <span className="highlight">Data Scientist</span>
                                <span className="separator"> // </span>
                                <span className="highlight">Software Engineer</span>
                                <span className="separator"> // </span>
                            </h2>
                        </motion.div>
                    </div>
                    <p className="description">
                        I design and develop data-driven software systems that bridge <span className="accent">artificial intelligence</span> and <span className="accent">engineering</span>.
                        My interests lie in <span className="accent">machine learning</span>, <span className="accent">backend development</span>, and building efficient, scalable applications that solve meaningful real-world problems.
                    </p>

                    <div className="cta-group">
                        <motion.a
                            href="#projects"
                            className="btn btn-primary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View Work <ArrowRight size={18} />
                        </motion.a>
                        <motion.a
                            href="#contact"
                            className="btn btn-secondary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Contact Me
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="scroll-indicator"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
