
import { motion } from 'framer-motion';
import { Award, Briefcase, Code, User } from 'lucide-react';
import profileImg from '../assets/profiles.jpeg';
import './About.scss';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="subtitle">Who I Am</span>
                    <h2 className="title">About <span className="highlight">Me</span></h2>
                </motion.div>

                <div className="about-content">
                    <motion.div
                        className="image-container"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="hex-border">
                            <div className="hex-inner">
                                <img src={profileImg} alt="Profile" />
                            </div>
                        </div>
                        <div className="floating-badge badge-1">
                            <Code size={20} />
                            <span>Developer</span>
                        </div>
                        <div className="floating-badge badge-2">
                            <Award size={20} />
                            <span>Designer</span>
                        </div>
                        <div className="floating-badge badge-3">
                            <Award size={20} />
                            <span>Data Scientist</span>
                        </div>
                    </motion.div>

                    <motion.div
                        className="text-container"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="heading">
                            A passionate <span className="gradient-text">Software Engineer & Data Scientist</span> based in the digital realm.
                        </h3>
                        <p className="description">
                            I am a motivated and detail-oriented developer with a strong interest in building reliable, high-quality digital solutions. My work focuses on combining modern software engineering practices with data-driven approaches to design efficient, scalable, and user-focused applications.
                        </p>
                        <p className="description">
                            I am currently a third-year undergraduate at IIT, pursuing a degree in Artificial Intelligence and Data Science, and I have gained over six months of professional experience as a Data Science Intern at Sampath Bank. Through both academic and industry exposure, I have developed a strong commitment to clean code, performance optimization, and delivering practical, well-engineered solutions.
                        </p>

                        <div className="stats-grid">
                            <div className="stat-item glass">
                                <span className="count">1+</span>
                                <span className="label">Years Exp.</span>
                            </div>
                            <div className="stat-item glass">
                                <span className="count">5+</span>
                                <span className="label">Projects</span>
                            </div>

                        </div>

                        <div className="social-links">
                            {/* Add social interaction here later if needed or rely on Contact section */}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
