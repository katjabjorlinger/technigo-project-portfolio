export const ProjectList = ({ project }) => {
    return (
      <div className="project-card">
        <img src={project.image} alt={project.name} />
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="project-links">
          <a href={project.live} target="_blank" rel="noopener noreferrer">Live</a>
          <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    );
  };
  