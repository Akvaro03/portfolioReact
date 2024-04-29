import "./App.css"
import { lazy } from 'react'
import ProjectsSection from "./components/projects";
import SkillsSection from "./components/skillsSection";
const NavigationBar = lazy(() => import('./components/navigationBar'));
const AboutMe = lazy(() => import("./components/aboutMe"));

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <AboutMe />
      <ProjectsSection />
      <SkillsSection />
    </div>
  )
}

export default App
