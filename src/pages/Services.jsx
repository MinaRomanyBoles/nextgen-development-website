import { useLanguage } from '../context/LanguageContext';
import { t } from '../i18n/translations';
import AnimatedSection from '../components/AnimatedSection';
import './Services.css';

const Services = () => {
    const { language } = useLanguage();

    const services = [
        {
            titleKey: 'service1Title',
            descKey: 'service1Desc',
            icon: '🏘️',
        },
        {
            titleKey: 'service2Title',
            descKey: 'service2Desc',
            icon: '🏢',
        },
        {
            titleKey: 'service3Title',
            descKey: 'service3Desc',
            icon: '📊',
        },
        {
            titleKey: 'service4Title',
            descKey: 'service4Desc',
            icon: '🔧',
        },
        {
            titleKey: 'service5Title',
            descKey: 'service5Desc',
            icon: '📐',
        },
        {
            titleKey: 'service6Title',
            descKey: 'service6Desc',
            icon: '🏨',
        },

    ];

    const process = [
        { step: '01', titleKey: 'step1', descKey: 'step1Desc' },
        { step: '02', titleKey: 'step2', descKey: 'step2Desc' },
        { step: '03', titleKey: 'step3', descKey: 'step3Desc' },
        { step: '04', titleKey: 'step4', descKey: 'step4Desc' },
    ];

    return (
        <div className="services-page">
            <section className="page-header">
                <div className="container">
                    <AnimatedSection animation="fade-up">
                        <h1>{t(language, 'services.title')}</h1>
                        <p className="page-description">
                            {t(language, 'services.description')}
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="services-list">
                        {services.map((service, index) => (
                            <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                                <div className="service-item">
                                    <div className="service-icon-large">{service.icon}</div>
                                    <div className="service-details">
                                        <h2>{t(language, `services.${service.titleKey}`)}</h2>
                                        <p>{t(language, `services.${service.descKey}`)}</p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section process-section">
                <div className="container">
                    <AnimatedSection animation="fade-up">
                        <div className="section-header">
                            <span className="section-label">{t(language, 'services.processLabel')}</span>
                            <h2>{t(language, 'services.processTitle')}</h2>
                            <p className="section-description">
                                {t(language, 'services.processDescription')}
                            </p>
                        </div>
                    </AnimatedSection>
                    <div className="process-grid">
                        {process.map((item, index) => (
                            <AnimatedSection key={index} animation="scale" delay={index * 100}>
                                <div className="process-card">
                                    <div className="process-step">{item.step}</div>
                                    <h3>{t(language, `services.${item.titleKey}`)}</h3>
                                    <p>{t(language, `services.${item.descKey}`)}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
