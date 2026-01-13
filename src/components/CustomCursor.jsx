
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './CustomCursor.scss';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorVariant, setCursorVariant] = useState("default");

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener("mousemove", mouseMove);

        // Add listeners for hoverable elements (links, buttons)
        const addHoverListeners = () => {
            const hoverables = document.querySelectorAll('a, button, .project-card, input, textarea');
            hoverables.forEach(el => {
                el.addEventListener('mouseenter', () => setCursorVariant("hover"));
                el.addEventListener('mouseleave', () => setCursorVariant("default"));
            });
        };

        addHoverListeners();
        // Re-run listener attachment on DOM changes if needed, but for now simple init
        // For dynamic content, MutationObserver is better, or just use event delegation logic on body.

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    // Better way to handle hover state is context or global store, but simple event delegation works too
    useEffect(() => {
        const handleMouseOver = (e) => {
            if (e.target.closest('a') || e.target.closest('button') || e.target.closest('.project-card') || e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
                setCursorVariant("hover");
            } else {
                setCursorVariant("default");
            }
        };
        document.addEventListener('mouseover', handleMouseOver);
        return () => {
            document.removeEventListener('mouseover', handleMouseOver);
        }
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            backgroundColor: "transparent",
            border: "2px solid var(--accent-cyan)",
            height: 32,
            width: 32,
            transition: {
                type: "spring",
                mass: 0.6
            }
        },
        hover: {
            x: mousePosition.x - 40,
            y: mousePosition.y - 40,
            backgroundColor: "rgba(0, 243, 255, 0.1)",
            border: "2px solid var(--accent-purple)",
            height: 80,
            width: 80,
            transition: {
                type: "spring",
                mass: 0.6
            }
        }
    };

    return (
        <>
            <motion.div
                className="cursor"
                variants={variants}
                animate={cursorVariant}
            />
            <div
                className="cursor-dot"
                style={{
                    left: mousePosition.x,
                    top: mousePosition.y
                }}
            />
        </>
    );
};

export default CustomCursor;
