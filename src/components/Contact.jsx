import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, Mail, MapPin, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './Contact.scss';

const Contact = () => {
    const [formState, setFormState] = useState('idle'); // idle, submitting, success, error
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormState('submitting');

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                }
            )
            .then(
                () => {
                    setFormState('success');
                    e.target.reset();
                    setTimeout(() => setFormState('idle'), 3000);
                },
                (error) => {
                    console.error('FAILED...', error.text);
                    setFormState('error');
                    setTimeout(() => setFormState('idle'), 3000);
                },
            );
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="subtitle">Get In Touch</span>
                    <h2 className="title">Let's Work <span className="highlight">Together</span></h2>
                </motion.div>

                <div className="contact-content">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3>Connect with me</h3>
                        <p className="desc">
                            Have a project in mind or just want to say hi?
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>

                        <div className="info-item">
                            <div className="icon-box"><Mail size={24} /></div>
                            <div>
                                <span className="label">Mail Me</span>
                                <span className="value">vinukaganarachchi123@gmail.com</span>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-box"><Phone size={24} /></div>
                            <div>
                                <span className="label">Call Me</span>
                                <span className="value">+94 766668743</span>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-box"><MapPin size={24} /></div>
                            <div>
                                <span className="label">Location</span>
                                <span className="value">Colombo, Sri Lanka</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="contact-form-wrapper glass"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form ref={form} onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Your Name</label>
                                <input type="text" name="user_name" placeholder="John Doe" required />
                            </div>
                            <div className="form-group">
                                <label>Your Email</label>
                                <input type="email" name="user_email" placeholder="john@example.com" required />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea name="message" placeholder="Tell me about your project..." rows="4" required></textarea>
                            </div>

                            <button type="submit" className={`submit-btn ${formState}`} disabled={formState !== 'idle'}>
                                <AnimatePresence mode="wait">
                                    {formState === 'idle' && (
                                        <motion.span
                                            key="idle"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="btn-content"
                                        >
                                            Send Message <Send size={18} />
                                        </motion.span>
                                    )}
                                    {formState === 'submitting' && (
                                        <motion.span
                                            key="submitting"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="btn-content"
                                        >
                                            Sending... <span className="loader"></span>
                                        </motion.span>
                                    )}
                                    {formState === 'success' && (
                                        <motion.span
                                            key="success"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="btn-content success"
                                        >
                                            Message Sent! <CheckCircle size={18} />
                                        </motion.span>
                                    )}
                                    {formState === 'error' && (
                                        <motion.span
                                            key="error"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="btn-content error"
                                        >
                                            Failed! Try again.
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                                <div className="btn-glow"></div>
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            <footer className="footer">
                <p>&copy; 2024 Vinuka. Made with <span style={{ color: 'var(--accent-purple)' }}>♥</span> and React.</p>
            </footer>
        </section>
    );
};

export default Contact;
