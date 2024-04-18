import "./App.css"
import { lazy } from 'react'
import SelectComponents from "./components/selectComponents";
import Projects from "./components/projects";
const NavigationBar = lazy(() => import('./components/navigationBar'));
const AboutMe = lazy(() => import("./components/aboutMe"));
const Skills = lazy(() => import("./components/skills"));
const Experience = lazy(() => import("./components/Experience"));

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <AboutMe />
      <Skills />
      <SelectComponents>
        <Projects />
        <Experience />
      </SelectComponents>
    </div>
  )
}

export default App
