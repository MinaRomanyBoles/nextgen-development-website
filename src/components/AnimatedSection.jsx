import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './AnimatedSection.css';

const AnimatedSection = ({ children, animation = 'fade-up', delay = 0, className = '' }) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '50px',
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={sectionRef}
            className={`animated-section ${animation} ${isVisible ? 'visible' : ''} ${className}`}
            style={{ animationDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

AnimatedSection.propTypes = {
    children: PropTypes.node.isRequired,
    animation: PropTypes.oneOf(['fade-up', 'fade-down', 'fade-left', 'fade-right', 'scale', 'fade']),
    delay: PropTypes.number,
    className: PropTypes.string,
};

export default AnimatedSection;
