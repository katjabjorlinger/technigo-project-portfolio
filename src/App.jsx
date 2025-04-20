import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";




import data from "./data.json";
import { ProjectList } from "./components/ProjectList";
import { Hero } from "./components/Hero";
import { Tech } from "./components/Tech";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";

export const App = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

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
