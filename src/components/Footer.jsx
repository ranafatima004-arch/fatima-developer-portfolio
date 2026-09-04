import { ArrowUp, BriefcaseBusiness, Code2 } from 'lucide-react'
import { profile } from './portfolioData'

function Footer() { return <footer className="footer section-wrap"><span>© 2026 Fatima Waqar</span><span className="footer-center">Designed & built with intention</span><div><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 size={16} /></a><a href={profile.linkedIn} target="_blank" rel="noreferrer" aria-label="LinkedIn"><BriefcaseBusiness size={16} /></a><a href="#top" aria-label="Back to top"><ArrowUp size={16} /></a></div></footer> }
export default Footer
