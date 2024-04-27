import "./App.css"
import { lazy } from 'react'
import History from "./components/history";
const NavigationBar = lazy(() => import('./components/navigationBar'));
const AboutMe = lazy(() => import("./components/aboutMe"));
const Skills = lazy(() => import("./components/skills"));

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <AboutMe />
      <Skills />
      <History />
    </div>
  )
}

export default App
