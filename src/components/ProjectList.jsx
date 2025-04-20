import { ProjectCard } from "./ProjectCard";

export const ProjectList = ({ projects }) => {
  return (
    <section className="project-section">
      <div className="container">
        <h2 className="project-heading">Featured Projects</h2>
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
};
