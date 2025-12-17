import AnimatedSection from '../components/AnimatedSection';
import './Landing.css';

const Landing = () => {
    return (
        <div className="landing-page">
            {/* Hero Section */}
            <section className="landing-hero">
                <div className="landing-background"></div>
                <div className="container landing-content">
                    <AnimatedSection animation="fade-up">
                        <span className="landing-badge">Exclusive Launch</span>
                        <h1 className="landing-title">
                            Your Dream Home
                            <span className="text-gradient"> Awaits</span>
                        </h1>
                        <p className="landing-description">
                            Discover our newest luxury residential development featuring world-class amenities,
                            stunning architecture, and an unparalleled lifestyle experience.
                        </p>
                        <div className="landing-features">
                            <div className="feature-item">
                                <span className="feature-icon">🏗️</span>
                                <span>Premium Construction</span>
                            </div>
                            <div className="feature-item">
                                <span className="feature-icon">🌟</span>
                                <span>Luxury Amenities</span>
                            </div>
                            <div className="feature-item">
                                <span className="feature-icon">📍</span>
                                <span>Prime Location</span>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Lead Form Section */}
            <section className="section landing-form-section">
                <div className="container">
                    <div className="landing-form-content">
                        <AnimatedSection animation="fade-right">
                            <div className="form-info">
                                <h2>Register Your Interest</h2>
                                <p>
                                    Be among the first to experience this exceptional development.
                                    Fill out the form to receive exclusive updates and early-bird offers.
                                </p>
                                <ul className="offer-list">
                                    <li>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        Priority access to unit selection
                                    </li>
                                    <li>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        Exclusive launch pricing
                                    </li>
                                    <li>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        Special payment plans
                                    </li>
                                    <li>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        Personal consultation with our experts
                                    </li>
                                </ul>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="fade-left">
                            <div className="landing-form-wrapper">
                                <form className="landing-form">
                                    <h3>Get Exclusive Access</h3>

                                    <div className="form-group">
                                        <input
                                            type="text"
                                            placeholder="Full Name*"
                                            className="form-input"
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <input
                                            type="email"
                                            placeholder="Email Address*"
                                            className="form-input"
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <input
                                            type="tel"
                                            placeholder="Phone Number*"
                                            className="form-input"
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <select className="form-select">
                                            <option value="">Budget Range*</option>
                                            <option value="1-2m">1-2 Million EGP</option>
                                            <option value="2-5m">2-5 Million EGP</option>
                                            <option value="5-10m">5-10 Million EGP</option>
                                            <option value="10m+">10+ Million EGP</option>
                                        </select>
                                    </div>

                                    <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                                        Register Now
                                    </button>

                                    <p className="form-disclaimer">
                                        By submitting this form, you agree to our privacy policy and consent to be contacted by our team.
                                    </p>
                                </form>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Urgency Section */}
            <section className="urgency-section">
                <div className="container">
                    <AnimatedSection animation="scale">
                        <div className="urgency-card">
                            <h2>⏰ Limited Time Offer</h2>
                            <p>Only <strong>15 units</strong> remaining at launch prices!</p>
                            <a href="#register" className="btn btn-outline btn-lg">
                                Don't Miss Out
                            </a>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default Landing;
