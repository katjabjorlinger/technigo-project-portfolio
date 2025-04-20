import data from "./data.json";
import { ProjectList } from "./components/ProjectList";
import { Hero } from "./components/Hero";
import { Tech } from "./components/Tech";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";

export const App = () => {
  return (
    <div>
    <Hero/>
    <Tech/>
    <div>
      <ProjectList projects={data.projects} />
    </div>
  
  <Skills/>
  <Contact/>
    </div>
    
    
  );
};
