import { useParams, Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/projects';
import './ProjectDetail.css';

// Helper function to get text value (supports both string and bilingual object)
const getText = (value, language) => {
    if (typeof value === 'object' && value !== null) {
        return value[language] || value.en || '';
    }
    return value || '';
};

const ProjectDetail = () => {
    const { id } = useParams();
    const { language } = useLanguage();

    const project = projects.find(p => p.id === parseInt(id));

    if (!project) {
        return (
            <div className="project-detail-page">
                <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
                    <h1>{language === 'ar' ? 'المشروع غير موجود' : 'Project Not Found'}</h1>
                    <Link to="/projects" className="btn btn-primary">
                        {language === 'ar' ? 'العودة للمشاريع' : 'Back to Projects'}
                    </Link>
                </div>
            </div>
        );
    }

    const title = getText(project.title, language);
    const description = getText(project.description, language);
    const longDescription = getText(project.longDescription, language);
    const location = getText(project.location, language);

    const relatedProjects = projects
        .filter(p => p.id !== project.id && p.category === project.category)
        .slice(0, 2);

    return (
        <div className="project-detail-page">
            {/* Hero Section */}
            <section className="project-hero">
                <div className="project-hero-image">
                    {project.image ? (
                        <img
                            src={project.image}
                            alt={title}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    ) : (
                        <div className="image-placeholder">
                            <svg width="100" height="100" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
                            </svg>
                        </div>
                    )}
                </div>
                <div className="project-hero-overlay">
                    <div className="container">
                        <AnimatedSection animation="fade-up">
                            <span className="project-category">{project.category}</span>
                            {project.comingSoon && (
                                <span className="coming-soon-hero-badge">
                                    {language === 'ar' ? 'قريباً' : 'Coming Soon'}
                                </span>
                            )}
                            <h1>{title}</h1>
                            <div className="project-meta">
                                <span className="project-location">
                                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                                    </svg>
                                    {location}
                                </span>
                                <span className="project-status">{project.status}</span>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="section">
                <div className="container">
                    <div className="project-content">
                        <div className="project-main">
                            <AnimatedSection animation="fade-up">
                                <h2>{language === 'ar' ? 'عن هذا المشروع' : 'About This Project'}</h2>
                                <p className="project-long-description">{longDescription}</p>
                            </AnimatedSection>

                            <AnimatedSection animation="fade-up">
                                <h2>Project Specifications</h2>
                                <div className="specifications-grid">
                                    {Object.entries(project.specifications).map(([key, value], index) => (
                                        <div key={index} className="spec-item">
                                            <strong>{key}:</strong>
                                            <span>{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </AnimatedSection>

                            <AnimatedSection animation="fade-up">
                                <h2>Amenities & Features</h2>
                                <ul className="amenities-list">
                                    {project.amenities.map((amenity, index) => (
                                        <li key={index}>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                            {amenity}
                                        </li>
                                    ))}
                                </ul>
                            </AnimatedSection>
                        </div>

                        <div className="project-sidebar">
                            <AnimatedSection animation="fade-left">
                                <div className="sidebar-card">
                                    <h3>Project Details</h3>
                                    <div className="sidebar-detail">
                                        <span className="detail-label">Units</span>
                                        <span className="detail-value">{project.units}</span>
                                    </div>
                                    <div className="sidebar-detail">
                                        <span className="detail-label">Delivery</span>
                                        <span className="detail-value">{project.deliveryDate}</span>
                                    </div>
                                    <div className="sidebar-detail">
                                        <span className="detail-label">Status</span>
                                        <span className="detail-value status-badge">{project.status}</span>
                                    </div>
                                    <Link to="/contact" className="btn btn-primary" style={{ width: '100%', marginTop: 'var(--spacing-lg)' }}>
                                        Request Information
                                    </Link>
                                </div>
                            </AnimatedSection>

                            <AnimatedSection animation="fade-left" delay={100}>
                                <div className="sidebar-card">
                                    <h3>Contact Sales</h3>
                                    <p>Interested in this project? Contact our sales team for more details.</p>
                                    <a href="tel:+201080299911" className="contact-link">
                                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                                        </svg>
                                        +2 010 80 2999 11
                                    </a>
                                    <a href="mailto:sales@Nextgen.com.eg" className="contact-link">
                                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                        </svg>
                                        sales@Nextgen.com.eg
                                    </a>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Projects */}
            {relatedProjects.length > 0 && (
                <section className="section related-projects">
                    <div className="container">
                        <AnimatedSection animation="fade-up">
                            <h2>Related Projects</h2>
                        </AnimatedSection>
                        <div className="related-grid">
                            {relatedProjects.map((related, index) => (
                                <AnimatedSection key={related.id} animation="fade-up" delay={index * 100}>
                                    <Link to={`/projects/${related.id}`} className="related-card">
                                        <div className="related-image">
                                            {related.image ? (
                                                <img
                                                    src={related.image}
                                                    alt={related.title}
                                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                />
                                            ) : (
                                                <div className="image-placeholder">
                                                    <svg width="60" height="60" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
                                                    </svg>
                                                </div>
                                            )}
                                        </div>
                                        <div className="related-content">
                                            <h4>{getText(related.title, language)}</h4>
                                            <p>{getText(related.location, language)}</p>
                                        </div>
                                    </Link>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};

export default ProjectDetail;
