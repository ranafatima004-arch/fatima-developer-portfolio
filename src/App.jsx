import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import SkillsEducation from './components/SkillsEducation'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0b0f19] text-slate-50">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <SkillsEducation />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
