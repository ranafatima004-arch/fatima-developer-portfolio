import { Code2, GraduationCap, MapPin } from 'lucide-react'
import { skills } from './portfolioData'

function SkillsEducation() {
  return (
    <section className="skills-section section-wrap" id="skills" aria-label="Skills and education">
      <div className="skills-column">
        <div className="section-label"><Code2 size={17} aria-hidden="true" /> <span>Skills / toolkit</span></div>
        <h2 className="skills-heading">A practical toolkit for the web.</h2>
        <p className="skills-summary">Technologies I use to build, refine, and ship frontend experiences.</p>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li className="skill-item" key={skill}>
              <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <strong>{skill}</strong>
            </li>
          ))}
        </ul>
      </div>
      <div className="education-column" id="education">
        <div className="section-label"><GraduationCap size={17} aria-hidden="true" /> <span>Education</span></div>
        <article className="education-card">
          <div className="education-card-top">
            <p className="education-year"><time dateTime="2019">2019</time><span aria-hidden="true">—</span><time dateTime="2023">2023</time></p>
            <GraduationCap size={22} aria-hidden="true" />
          </div>
          <h3>BSc Computer Science</h3>
          <p className="education-school">Punjab University, Lahore</p>
          <div className="education-location"><MapPin size={14} aria-hidden="true" /><span>Lahore</span></div>
          <div className="education-line" aria-hidden="true" />
        </article>
      </div>
    </section>
  )
}
export default SkillsEducation
