import { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [['Projects', '#projects'], ['Skills', '#skills'], ['Education', '#education'], ['Contact', '#contact']]
  const handleBrandClick = (event) => {
    event.preventDefault()
    setOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#0b0f19]/80 backdrop-blur-md"><div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6"><motion.a className="flex min-w-0 items-center gap-3" href="#top" onClick={handleBrandClick} aria-label="Fatima Waqar home" whileTap={{ scale: .97 }}><motion.span className="flex h-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-tr from-cyan-500 to-teal-400 px-3 shadow-md" whileHover={{ scale: 1.05 }} transition={{ duration: .3 }}><span className="text-slate-950 whitespace-nowrap text-xs font-black tracking-wider">&lt;FW /&gt;</span></motion.span><span className="grid min-w-0 gap-1"><strong className="truncate text-base font-bold tracking-tight text-white sm:text-lg">Fatima Waqar</strong><span className="flex items-center gap-1.5 whitespace-nowrap text-[9px] font-semibold tracking-[.16em] text-slate-400"><i className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-emerald-400" /> FRONTEND ENGINEER</span></span></motion.a><button className="rounded-md p-2 text-slate-200 transition hover:bg-slate-800 md:hidden" type="button" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X size={19} /> : <Menu size={19} />}</button><nav className={`${open ? 'flex' : 'hidden'} absolute left-6 right-6 top-[calc(100%-1px)] flex-col gap-1 border border-slate-800 bg-[#0b0f19] p-3 md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0`}>{links.map(([label, href]) => <a className="rounded-md px-3 py-2 text-xs font-medium text-slate-400 transition hover:bg-slate-800/60 hover:text-cyan-300 md:px-0 md:py-2" key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a className="mt-1 inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 px-3 py-2 text-xs font-medium text-slate-100 transition hover:border-cyan-500 hover:text-cyan-300 md:mt-0" href="/ranafatima_cv.pdf" target="_blank" rel="noreferrer">Download CV <Download size={14} /></a></nav></div></header>
}
export default Navbar