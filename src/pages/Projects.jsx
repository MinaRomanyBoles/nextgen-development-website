import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import ProjectCard from '../components/ProjectCard';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../i18n/translations';
import './Projects.css';

import { projects as allProjects } from '../data/projects';

const Projects = () => {
    const { language } = useLanguage();
    const [activeFilter, setActiveFilter] = useState('all');

    const filters = [
        { id: 'all', label: t(language, 'projects.filterAll') },
        { id: 'residential', label: t(language, 'projects.filterResidential') },
        { id: 'commercial', label: t(language, 'projects.filterCommercial') },
        { id: 'mixed', label: t(language, 'projects.filterMixed') },
    ];

    const filteredProjects = activeFilter === 'all'
        ? allProjects
        : allProjects.filter(project => project.category === activeFilter);

    return (
        <div className="projects-page">
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <AnimatedSection animation="fade-up">
                        <h1>{t(language, 'projects.title')}</h1>
                        <p className="page-description">
                            {t(language, 'projects.description')}
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Projects Section */}
            <section className="section">
                <div className="container">
                    {/* Filter Buttons */}
                    <AnimatedSection animation="fade-up">
                        <div className="filter-buttons">
                            {filters.map(filter => (
                                <button
                                    key={filter.id}
                                    className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                                    onClick={() => setActiveFilter(filter.id)}
                                >
                                    {filter.label}
                                </button>
                            ))}
                        </div>
                    </AnimatedSection>

                    {/* Projects Grid */}
                    <div className="projects-grid">
                        {filteredProjects.map((project, index) => (
                            <AnimatedSection key={project.id} animation="fade-up" delay={index * 100}>
                                <ProjectCard project={project} />
                            </AnimatedSection>
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="no-results">
                            <p>{t(language, 'projects.noResults')}</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Projects;
