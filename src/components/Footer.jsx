import { ArrowUp, ArrowUpRight, BriefcaseBusiness, Code2, Mail } from 'lucide-react'
import { profile } from './portfolioData'

function Footer() {
  return (
    <footer className="footer section-wrap">
      <div className="footer-main">
        <div className="footer-brand">
          <a className="footer-name" href="#top">Fatima Waqar<span aria-hidden="true">.</span></a>
          <p>Frontend Engineer crafting thoughtful digital experiences.</p>
        </div>
        <a className="footer-email" href={`mailto:${profile.email}`}>
          <span><Mail size={16} aria-hidden="true" /> Let’s talk about your next project</span>
          <ArrowUpRight size={17} aria-hidden="true" />
        </a>
        <nav className="footer-socials" aria-label="Social links">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub (opens in a new tab)"><Code2 size={17} /></a>
          <a href={profile.linkedIn} target="_blank" rel="noreferrer" aria-label="LinkedIn (opens in a new tab)"><BriefcaseBusiness size={17} /></a>
        </nav>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Fatima Waqar</span>
        <span className="footer-center">Designed &amp; built with intention</span>
        <a className="footer-top-link" href="#top">Back to top <ArrowUp size={14} aria-hidden="true" /></a>
      </div>
    </footer>
  )
}

export default Footer
