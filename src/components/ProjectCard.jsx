import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useLanguage } from '../context/LanguageContext';
import './ProjectCard.css';

// Helper function to get text value (supports both string and bilingual object)
const getText = (value, language) => {
    if (typeof value === 'object' && value !== null) {
        return value[language] || value.en || '';
    }
    return value || '';
};

const ProjectCard = ({ project }) => {
    const { language } = useLanguage();

    const title = getText(project.title, language);
    const description = getText(project.description, language);
    const location = getText(project.location, language);

    return (
        <Link to={`/projects/${project.id}`} className={`project-card ${project.comingSoon ? 'coming-soon' : ''}`}>
            <div className="project-card-image">
                <img src={project.image} alt={title} />
                <div className="project-card-overlay">
                    <span className="project-category">{project.category}</span>
                    {project.comingSoon && (
                        <span className="coming-soon-badge">
                            {language === 'ar' ? 'قريباً' : 'Coming Soon'}
                        </span>
                    )}
                </div>
            </div>
            <div className="project-card-content">
                <h3 className="project-card-title">{title}</h3>
                <p className="project-card-description">{description}</p>
                <div className="project-card-meta">
                    <span className="project-location">
                        <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                        </svg>
                        {location}
                    </span>
                    {project.units && (
                        <span className="project-units">{project.units} Units</span>
                    )}
                </div>
            </div>
        </Link>
    );
};

ProjectCard.propTypes = {
    project: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
        description: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
        image: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        location: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
        units: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        comingSoon: PropTypes.bool,
    }).isRequired,
};

export default ProjectCard;
