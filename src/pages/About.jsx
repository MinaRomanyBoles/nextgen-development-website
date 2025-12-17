import { useLanguage } from '../context/LanguageContext';
import { t } from '../i18n/translations';
import AnimatedSection from '../components/AnimatedSection';
import './About.css';

const About = () => {
    const { language } = useLanguage();

    const timeline = [
        { year: '2008', titleKey: 'item1Title', descKey: 'item1Desc' },
        { year: '2012', titleKey: 'item2Title', descKey: 'item2Desc' },
        { year: '2016', titleKey: 'item3Title', descKey: 'item3Desc' },
        { year: '2020', titleKey: 'item4Title', descKey: 'item4Desc' },
        { year: '2024', titleKey: 'item5Title', descKey: 'item5Desc' },
    ];

    const values = [
        { titleKey: 'value1', descKey: 'value1Desc', icon: '⭐' },
        { titleKey: 'value2', descKey: 'value2Desc', icon: '💡' },
        { titleKey: 'value3', descKey: 'value3Desc', icon: '🌱' },
        { titleKey: 'value4', descKey: 'value4Desc', icon: '🤝' },
    ];

    return (
        <div className="about-page">
            <section className="page-header">
                <div className="container">
                    <AnimatedSection animation="fade-up">
                        <h1>{t(language, 'about.title')}</h1>
                        <p className="page-description">
                            {t(language, 'about.description')}
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="about-content">
                        <AnimatedSection animation="fade-right">
                            <div>
                                <span className="section-label">{t(language, 'about.storyLabel')}</span>
                                <h2>{t(language, 'about.storyTitle')}</h2>
                                <p>{t(language, 'about.storyP1')}</p>
                                <p>{t(language, 'about.storyP2')}</p>
                                <p>{t(language, 'about.storyP3')}</p>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            <section className="section values-section">
                <div className="container">
                    <AnimatedSection animation="fade-up">
                        <div className="section-header">
                            <span className="section-label">{t(language, 'about.valuesLabel')}</span>
                            <h2>{t(language, 'about.valuesTitle')}</h2>
                        </div>
                    </AnimatedSection>
                    <div className="values-grid">
                        {values.map((value, index) => (
                            <AnimatedSection key={index} animation="scale" delay={index * 100}>
                                <div className="value-card glass">
                                    <div className="value-icon">{value.icon}</div>
                                    <h3>{t(language, `about.${value.titleKey}`)}</h3>
                                    <p>{t(language, `about.${value.descKey}`)}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section timeline-section">
                <div className="container">
                    <AnimatedSection animation="fade-up">
                        <div className="section-header">
                            <span className="section-label">{t(language, 'about.timelineLabel')}</span>
                            <h2>{t(language, 'about.timelineTitle')}</h2>
                        </div>
                    </AnimatedSection>
                    <div className="timeline">
                        {timeline.map((item, index) => (
                            <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                                <div className="timeline-item">
                                    <div className="timeline-year">{item.year}</div>
                                    <div className="timeline-content">
                                        <h4>{t(language, `aboutTimeline.${item.titleKey}`)}</h4>
                                        <p>{t(language, `aboutTimeline.${item.descKey}`)}</p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
