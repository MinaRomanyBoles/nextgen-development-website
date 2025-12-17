import { useEffect, useRef, useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import ProjectCard from '../components/ProjectCard';
import CountUp from '../components/CountUp';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../i18n/translations';
import { projects } from '../data/projects';
import { teamMembers } from '../data/team';
import './Home.css';

const Home = () => {
    const { language } = useLanguage();

    const featuredProjects = projects.filter(p => p.featured);

    // Auto-scroll logic
    const carouselRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const startX = useRef(0);
    const scrollLeftSnapshot = useRef(0);

    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        let animationId;
        const scrollSpeed = 1; // Pixels per frame

        const scroll = () => {
            if (!isPaused) {
                // Reset when we've scrolled past the first set (1/3 of total width since we tripled it)
                if (carousel.scrollLeft >= carousel.scrollWidth / 3) {
                    carousel.scrollLeft = 0;
                } else {
                    carousel.scrollLeft += scrollSpeed;
                }
            }
            animationId = requestAnimationFrame(scroll);
        };

        animationId = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationId);
    }, [isPaused]);

    const services = [
        {
            icon: (
                <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
                </svg>
            ),
            title: 'Residential Development',
            description: 'Creating exceptional living spaces',
        },
        {
            icon: (
                <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
                </svg>
            ),
            title: 'Commercial Projects',
            description: 'Modern business environments',
        },
        {
            icon: (
                <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" /><path d="M7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z" />
                </svg>
            ),
            title: 'Investment Advisory',
            description: 'Expert real estate consultation',
        },
    ];

    const stats = [
        { number: 50, suffix: '+', key: 'projects' },
        { number: 10, suffix: 'K+', key: 'clients' },
        { number: 15, suffix: '+', key: 'years' },
        { number: 25, suffix: '+', key: 'team' },
    ];

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                {/* Video Background */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="hero-video"
                >
                    <source src="/assets/hero.mp4" type="video/mp4" />
                </video>
                <div className="hero-background"></div>
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <AnimatedSection animation="fade-up">
                        <h1 className="hero-title">
                            {t(language, 'home.heroTitle1')} <br />
                            <span className="text-gradient">{t(language, 'home.heroTitle2')}</span>
                        </h1>
                        <p className="hero-description">
                            {t(language, 'home.heroDescription')}
                        </p>
                        <div className="hero-buttons">
                            <a href="/projects" className="btn btn-primary btn-lg">
                                {t(language, 'home.exploreProjects')}
                            </a>
                            <a href="/contact" className="btn btn-outline btn-lg">
                                {t(language, 'home.contactUs')}
                            </a>
                        </div>
                    </AnimatedSection>
                </div>


            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="container">
                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <AnimatedSection key={index} animation="scale" delay={index * 100}>
                                <div className="stat-card">
                                    <h3 className="stat-number">
                                        <CountUp end={stat.number} duration={2000} suffix={stat.suffix} />
                                    </h3>
                                    <p className="stat-label">{t(language, `home.stats.${stat.key}`)}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Preview */}
            <section className="section about-preview">
                <div className="container">
                    <div className="about-preview-content">
                        <AnimatedSection animation="fade-right">
                            <div className="about-preview-text">
                                <span className="section-label">{t(language, 'home.aboutLabel')}</span>
                                <h2>{t(language, 'home.aboutTitle')}</h2>
                                <p>
                                    {t(language, 'home.aboutText')}
                                </p>
                                <a href="/about" className="btn btn-primary">
                                    {t(language, 'home.learnMore')}
                                </a>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection animation="fade-left">
                            <div className="about-preview-image">
                                <img
                                    src="/assets/images/about.png"
                                    alt="About Nextgen"
                                    className="about-image"
                                />
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="section featured-projects">
                <div className="container">
                    <AnimatedSection animation="fade-up">
                        <div className="section-header">
                            <span className="section-label">{t(language, 'home.projectsLabel')}</span>
                            <h2>{t(language, 'home.projectsTitle')}</h2>
                            <p className="section-description">
                                {t(language, 'home.projectsDescription')}
                            </p>
                        </div>
                    </AnimatedSection>
                    <div className="projects-grid">
                        {featuredProjects.map((project, index) => (
                            <AnimatedSection key={project.id} animation="fade-up" delay={index * 150}>
                                <ProjectCard project={project} />
                            </AnimatedSection>
                        ))}
                    </div>
                    <AnimatedSection animation="fade-up" className="text-center">
                        <a href="/projects" className="btn btn-secondary btn-lg" style={{ marginTop: 'var(--spacing-2xl)' }}>
                            {t(language, 'home.viewAll')}
                        </a>
                    </AnimatedSection>
                </div>
            </section>

            {/* Our Team Carousel */}
            <section className="section team-carousel-section">
                <div style={{ padding: 0, margin: 0, width: '100%', maxWidth: '100%' }}>
                    <AnimatedSection animation="fade-up">
                        <div className="section-header">
                            <span className="section-label">{t(language, 'team.mindsBehind')}</span>
                            <h2>{t(language, 'team.title')}</h2>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection animation="fade-up" delay={200}>
                        <div className="team-carousel-container">
                            <div
                                className="team-carousel"
                                ref={carouselRef}
                                onMouseEnter={() => setIsPaused(true)}
                                onMouseLeave={() => {
                                    setIsPaused(false);
                                    setIsDragging(false);
                                }}
                                onMouseDown={(e) => {
                                    setIsDragging(true);
                                    startX.current = e.pageX - carouselRef.current.offsetLeft;
                                    scrollLeftSnapshot.current = carouselRef.current.scrollLeft;
                                }}
                                onMouseUp={() => setIsDragging(false)}
                                onMouseMove={(e) => {
                                    if (!isDragging) return;
                                    e.preventDefault();
                                    const x = e.pageX - carouselRef.current.offsetLeft;
                                    const walk = (x - startX.current) * 2; // Scroll-fast factor
                                    carouselRef.current.scrollLeft = scrollLeftSnapshot.current - walk;
                                }}
                            >
                                {[...teamMembers, ...teamMembers, ...teamMembers].map((member, index) => (
                                    <div key={index} className="team-carousel-card">
                                        <div className="carousel-image-wrapper">
                                            {member.image ? (
                                                <img src={member.image} alt={member.name} className="carousel-image" draggable="false" />
                                            ) : (
                                                <div className="carousel-image-placeholder">
                                                    <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                                    </svg>
                                                </div>
                                            )}
                                        </div>
                                        <div className="carousel-info">
                                            <h4>{member.name}</h4>
                                            <span className="carousel-role">{member.role}</span>
                                            <div className="carousel-divider"></div>
                                            <p className="carousel-bio">{member.bio ? member.bio.substring(0, 100) + '...' : ''}</p>
                                            <div className="carousel-social">
                                                <a href="#" className="social-icon">
                                                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                                    </svg>
                                                </a>
                                                <a href="#" className="social-icon">
                                                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                                    </svg>
                                                </a>
                                                <a href="#" className="social-icon">
                                                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Services Highlight */}
            <section className="section services-highlight">
                <div className="container">
                    <AnimatedSection animation="fade-up">
                        <div className="section-header">
                            <span className="section-label">{t(language, 'home.servicesLabel')}</span>
                            <h2>{t(language, 'home.servicesTitle')}</h2>
                        </div>
                    </AnimatedSection>
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <AnimatedSection key={index} animation="scale" delay={index * 100}>
                                <div className="service-card glass">
                                    <div className="service-icon">{service.icon}</div>
                                    <h3>{t(language, `home.service${index + 1}`)}</h3>
                                    <p>{t(language, `home.service${index + 1}Desc`)}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                    <AnimatedSection animation="fade-up" className="text-center">
                        <a href="/services" className="btn btn-outline btn-lg" style={{ marginTop: 'var(--spacing-xl)' }}>
                            {t(language, 'home.exploreAllServices')}
                        </a>
                    </AnimatedSection>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <AnimatedSection animation="scale">
                        <div className="cta-content">
                            <h2>{t(language, 'home.ctaTitle')}</h2>
                            <p>{t(language, 'home.ctaDescription')}</p>
                            <div className="cta-buttons">
                                <a href="/contact" className="btn btn-primary btn-lg">
                                    {t(language, 'home.ctaBtn1')}
                                </a>
                                <a href="/careers" className="btn btn-outline btn-lg">
                                    {t(language, 'careers.title')}
                                </a>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default Home;
