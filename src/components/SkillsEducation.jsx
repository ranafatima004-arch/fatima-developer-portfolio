import { Code2, GraduationCap } from 'lucide-react'
import { skills } from './portfolioData'

function SkillsEducation() {
  return <section className="skills-section section-wrap" id="skills"><div className="skills-column"><div className="section-label"><Code2 size={17} /> <span>Core stack</span></div><div className="skills-list">{skills.map((skill, index) => <div className="skill-item" key={skill}><span>0{index + 1}</span>{skill}</div>)}</div></div><div className="education-column" id="education"><div className="section-label"><GraduationCap size={17} /> <span>Education</span></div><div className="education-card"><p className="education-year">2019 — 2023</p><h3>BSc Computer Science</h3><p>Punjab University, Lahore</p><div className="education-line" /></div></div></section>
}
export default SkillsEducation
