import "./App.css"
import { Suspense, lazy } from 'react'
import SelectComponents from "./components/selectComponents";
import Projects from "./components/projects";
import { Skeleton } from "@mui/material";
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
      <Suspense fallback={<Skeleton variant="rectangular" width={210} height={1200} />}>
        <SelectComponents>
          <Projects />
          <Experience />
        </SelectComponents>
      </Suspense>
    </div>
  )
}

export default App
