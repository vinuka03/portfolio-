
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
                    <h2 className="title">
                        <span className="highlight">Creative Developer</span> & UI Designer
                    </h2>
                    <p className="description">
                        I build interactive, high-performance web experiences that merge
                        <span className="accent"> art</span> with <span className="accent">technology</span>.
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
