
import { motion } from 'framer-motion';
import { Database, Layout, Server, Smartphone, Terminal, Cpu } from 'lucide-react';
import './Skills.scss';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend Development",
            icon: <Layout size={30} />,
            skills: [
                { name: "React / Next.js", level: 95 },
                { name: "TypeScript", level: 90 },
                { name: "Tailwind CSS", level: 95 },
                { name: "Framer Motion", level: 85 },
            ]
        },
        {
            title: "Backend & Systems",
            icon: <Server size={30} />,
            skills: [
                { name: "Node.js", level: 88 },
                { name: "PostgreSQL", level: 80 },
                { name: "GraphQL", level: 75 },
                { name: "Python", level: 70 },
            ]
        },
        {
            title: "Mobile & Tools",
            icon: <Smartphone size={30} />,
            skills: [
                { name: "React Native", level: 85 },
                { name: "Git / CI/CD", level: 90 },
                { name: "Docker", level: 75 },
                { name: "Figma", level: 80 },
            ]
        }
    ];

    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="subtitle">My Arsenal</span>
                    <h2 className="title">Technical <span className="highlight">Skills</span></h2>
                </motion.div>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            className="skill-card glass"
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div className="card-header">
                                <div className="icon-box">{category.icon}</div>
                                <h3>{category.title}</h3>
                            </div>

                            <div className="skills-list">
                                {category.skills.map((skill, i) => (
                                    <div className="skill-item" key={i}>
                                        <div className="skill-info">
                                            <span>{skill.name}</span>
                                            <span>{skill.level}%</span>
                                        </div>
                                        <div className="progress-bg">
                                            <motion.div
                                                className="progress-fill"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.5, ease: "easeOut" }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
