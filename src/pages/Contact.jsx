import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../i18n/translations';
import AnimatedSection from '../components/AnimatedSection';
import './Contact.css';

const Contact = () => {
    const { language } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [formStatus, setFormStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('success');
        console.log('Form submitted:', formData);
        setTimeout(() => {
            setFormData({ name: '', email: '', phone: '', message: '' });
            setFormStatus('');
        }, 3000);
    };

    return (
        <div className="contact-page">
            <section className="page-header">
                <div className="container">
                    <AnimatedSection animation="fade-up">
                        <h1>{t(language, 'contact.title')}</h1>
                        <p className="page-description">
                            {t(language, 'contact.description')}
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="contact-content">
                        {/* Contact Information */}
                        <AnimatedSection animation="fade-right">
                            <div className="contact-info">
                                <h2>{t(language, 'contact.getInTouch')}</h2>
                                <p>
                                    {t(language, 'contact.intro')}
                                </p>

                                <div className="contact-details">
                                    <div className="contact-item">
                                        <div className="contact-icon">
                                            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4>{t(language, 'contact.headquartersLabel')}</h4>
                                            <p>{t(language, 'contact.headquartersAddress')}</p>
                                        </div>
                                    </div>

                                    <div className="contact-item">
                                        <div className="contact-icon">
                                            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4>{t(language, 'contact.salesOfficeLabel')}</h4>
                                            <p>{t(language, 'contact.salesOfficeAddress')}</p>
                                        </div>
                                    </div>

                                    <div className="contact-item">
                                        <div className="contact-icon">
                                            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4>{t(language, 'contact.email')}</h4>
                                            <p dangerouslySetInnerHTML={{ __html: t(language, 'contact.emailValue') }}></p>
                                        </div>
                                    </div>

                                    <div className="contact-item">
                                        <div className="contact-icon">
                                            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4>{t(language, 'contact.phone')}</h4>
                                            <p dangerouslySetInnerHTML={{ __html: t(language, 'contact.phoneValue') }}></p>
                                        </div>
                                    </div>

                                    <div className="contact-item">
                                        <div className="contact-icon">
                                            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4>{t(language, 'contact.officeHours')}</h4>
                                            <p dangerouslySetInnerHTML={{ __html: t(language, 'contact.officeHoursValue') }}></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Contact Form */}
                        <AnimatedSection animation="fade-left">
                            <div className="contact-form-wrapper">
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name" className="form-label">{t(language, 'contact.formName')}*</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="form-input"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email" className="form-label">{t(language, 'contact.formEmail')}*</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="form-input"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="phone" className="form-label">{t(language, 'contact.formPhone')}</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            className="form-input"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message" className="form-label">{t(language, 'contact.formMessage')}*</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            className="form-textarea"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                                        {t(language, 'contact.formSubmit')}
                                    </button>

                                    {formStatus === 'success' && (
                                        <div className="form-success">
                                            {t(language, 'contact.formSuccess')}
                                        </div>
                                    )}
                                </form>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="map-section">
                <AnimatedSection animation="fade-up">
                    <iframe
                        width="100%"
                        height="450"
                        style={{ border: 0, borderRadius: 'var(--radius-xl)' }}
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://maps.google.com/maps?q=29.97528371563067,30.989216907629817&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    ></iframe>
                </AnimatedSection>
            </section>
        </div>
    );
};

export default Contact;
