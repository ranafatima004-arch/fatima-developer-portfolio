import { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'
import Logo from './Logo'

function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [['About', '#about'], ['Projects', '#projects'], ['Skills', '#skills'], ['Contact', '#contact']]
  const handleBrandClick = (event) => {
    event.preventDefault()
    setOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return <header className="site-header sticky top-0 z-50">
    <div className="site-shell navbar">
      <motion.a className="wordmark" href="#top" onClick={handleBrandClick} aria-label="Fatima Waqar home" whileTap={{ scale: .97 }}>
        <motion.span className="logo-icon-box" whileHover={{ scale: 1.05 }} transition={{ duration: .3 }}><Logo /></motion.span>
        <span className="brand-copy"><strong className="brand-name">Fatima Waqar</strong><span className="brand-role"><i /> FRONTEND ENGINEER</span></span>
      </motion.a>
      <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X size={19} /> : <Menu size={19} />}</button>
      <nav className={`nav-links ${open ? 'nav-links-open' : ''}`}>
        {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="nav-cv" href="/ranafatima_cv.pdf" target="_blank" rel="noreferrer"><Download size={14} /> Download CV</a>
      </nav>
    </div>
  </header>
}

export default Navbar
