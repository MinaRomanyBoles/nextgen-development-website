import { useLanguage } from '../context/LanguageContext';
import { t } from '../i18n/translations';
import AnimatedSection from '../components/AnimatedSection';
import './Careers.css';

const Careers = () => {
    const { language } = useLanguage();

    const benefits = [
        { icon: '💼', titleKey: 'item1Title', descKey: 'item1Desc' },
        { icon: '📈', titleKey: 'item2Title', descKey: 'item2Desc' },
        { icon: '🏥', titleKey: 'item3Title', descKey: 'item3Desc' },
        { icon: '🏖️', titleKey: 'item4Title', descKey: 'item4Desc' },
        { icon: '🎓', titleKey: 'item5Title', descKey: 'item5Desc' },
        { icon: '🤝', titleKey: 'item6Title', descKey: 'item6Desc' },
    ];

    return (
        <div className="careers-page">
            <section className="page-header">
                <div className="container">
                    <AnimatedSection animation="fade-up">
                        <h1>{t(language, 'careers.title')}</h1>
                        <p className="page-description">
                            {t(language, 'careers.description')}
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="careers-intro">
                        <AnimatedSection animation="fade-up">
                            <h2>{t(language, 'careers.whyTitle')}</h2>
                            <p>{t(language, 'careers.whyP1')}</p>
                            <p>{t(language, 'careers.whyP2')}</p>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            <section className="section benefits-section">
                <div className="container">
                    <AnimatedSection animation="fade-up">
                        <div className="section-header">
                            <span className="section-label">{t(language, 'careers.benefitsLabel')}</span>
                            <h2>{t(language, 'careers.benefitsTitle')}</h2>
                        </div>
                    </AnimatedSection>
                    <div className="benefits-grid">
                        {benefits.map((benefit, index) => (
                            <AnimatedSection key={index} animation="scale" delay={index * 100}>
                                <div className="benefit-card glass">
                                    <div className="benefit-icon">{benefit.icon}</div>
                                    <h3>{t(language, `careersBenefits.${benefit.titleKey}`)}</h3>
                                    <p>{t(language, `careersBenefits.${benefit.descKey}`)}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section linkedin-section">
                <div className="container">
                    <AnimatedSection animation="scale">
                        <div className="linkedin-card"  >
                            <div className="linkedin-icon">
                                <svg width="60" height="60" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </div>
                            <h2>{t(language, 'careers.linkedinTitle')}</h2>
                            <p>{t(language, 'careers.linkedinDesc')}</p>
                            <a
                                href="https://www.linkedin.com/company/Nextgen-development"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary btn-lg"
                            >
                                {t(language, 'careers.linkedinBtn')}
                            </a>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default Careers;
