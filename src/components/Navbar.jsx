import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Menu, X } from 'lucide-react'
import Logo from './Logo'
import { profile } from './portfolioData'

function Navbar() {
  const [open, setOpen] = useState(false)
  const menuToggleRef = useRef(null)
  const links = [['About', '#about'], ['Projects', '#projects'], ['Skills', '#skills'], ['Contact', '#contact']]
  useEffect(() => {
    if (!open) return undefined
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        menuToggleRef.current?.focus()
      }
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [open])

  const handleBrandClick = (event) => {
    event.preventDefault()
    setOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return <header id="top" className="site-header sticky top-0 z-50">
    <div className="site-shell navbar">
      <motion.a className="wordmark" href="#top" onClick={handleBrandClick} aria-label="Fatima Waqar home" whileTap={{ scale: .97 }}>
        <motion.span className="logo-icon-box" whileHover={{ scale: 1.03 }} transition={{ duration: .25 }}><Logo /></motion.span>
      </motion.a>
      <button ref={menuToggleRef} className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="primary-navigation">{open ? <X size={19} /> : <Menu size={19} />}</button>
      <nav id="primary-navigation" className={`nav-links ${open ? 'nav-links-open' : ''}`} aria-label="Main navigation">
        {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="nav-cv" href={`mailto:${profile.email}?subject=Request%20for%20CV`}><Mail size={14} /> Request CV</a>
      </nav>
    </div>
  </header>
}

export default Navbar
