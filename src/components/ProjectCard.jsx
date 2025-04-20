import { FaGlobe, FaGithub } from "react-icons/fa";

export const ProjectCard = ({ project }) => {
  return (
    <div className="project-card" data-aos="zoom-in">
      <div className="project-image-wrapper">
        <img src={project.image} alt={project.name} className="project-image" />
      </div>

      <div className="project-content">
        <h3>{project.name}</h3>
        <p>{project.description}</p>

        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="tech-badge">{tag}</span>
          ))}
        </div>

        <div className="project-links">
          <a href={project.netlify} target="_blank" rel="noopener noreferrer">
            <FaGlobe /> Live demo
          </a>
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <FaGithub /> View the code
          </a>
        </div>
      </div>
    </div>
  );
};
