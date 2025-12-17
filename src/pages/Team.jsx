import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { teamMembers } from '../data/team';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../i18n/translations';
import './Team.css';

const Team = () => {
    const { language } = useLanguage();

    return (
        <div className="team-page">
            <section className="page-header">
                <div className="container">
                    <AnimatedSection animation="fade-up">
                        <h1>{t(language, 'team.title')}</h1>
                        <p className="page-description">
                            {t(language, 'team.subtitle')}
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            <div className="container">
                {/* Chairman Section */}
                <AnimatedSection animation="fade-right">
                    <section className="chairman-section">
                        <div className="chairman-image-wrapper">
                            <div className="chairman-image-placeholder">
                                <img src="/assets/images/sameh.png" alt="Sameh Shendy" className="chairman-image" />
                            </div>
                        </div>
                        <div className="chairman-content">
                            <h2 className="chairman-name">{t(language, 'team.chairman.name')}</h2>
                            <span className="chairman-role">{t(language, 'team.chairman.role')}</span>
                            <blockquote className="chairman-quote">
                                {t(language, 'team.chairman.quote')}
                            </blockquote>
                            <div className="chairman-social">
                                <a href="mailto:info@Nextgen.com.eg" title="Email">
                                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                    </svg>
                                </a>
                                <a href="#" title="LinkedIn">
                                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </section>
                </AnimatedSection>

                <div className="section-divider"></div>

                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                            <div className="team-card">
                                <div className="team-image-container">
                                    {member.image ? (
                                        <img src={member.image} alt={member.name} />
                                    ) : (
                                        <svg width="60" height="60" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                        </svg>
                                    )}
                                </div>
                                <div className="team-info">
                                    <h3>{member.name}</h3>
                                    <span className="team-role">{member.role}</span>
                                    <p>{member.bio}</p>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;
