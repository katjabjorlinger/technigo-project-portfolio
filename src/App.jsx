import data from "./data.json";
import { ProjectList } from "./components/ProjectList";
import { Hero } from "./components/Hero";
import { Tech } from "./components/Tech";

export const App = () => {
  return (
    <div>
    <Hero/>
    <Tech/>
    <div className="project-list">
      {data.projects.map((project) => (
        <ProjectList key={project.name} project={project} />
      ))}
    </div>
    
    </div>
  );
};
