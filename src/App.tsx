import "./App.css"
import AboutMe from "./components/aboutMe"
import NavigationBar from './components/navigationBar'
import Skills from "./components/skills"

function App() {  
  return (
    <div className="App">
      <NavigationBar />
      <AboutMe />
      <Skills />
    </div>
  )
}

export default App
