import './App.css'
import ProjectBackground from './components/ProjectBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import SkillsEducation from './components/SkillsEducation'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <ProjectBackground />
      <div className="site-content">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <SkillsEducation />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
