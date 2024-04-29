import "./App.css"
import { lazy } from 'react'
import ProjectsSection from "./sections/projects";
import SkillsSection from "./sections/skillsSection";
import ContactSection from "./sections/contactSection";
import ExperienceAndStudy from "./sections/experienceAndStudy";
const NavigationBar = lazy(() => import('./components/navigationBar'));
const AboutMe = lazy(() => import("./sections/aboutMe"));

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <AboutMe />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceAndStudy />
      <ContactSection />
    </div>
  )
}

export default App
