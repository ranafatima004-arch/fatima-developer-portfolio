import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ArrowUpRight, Code2 } from 'lucide-react'
import { projects } from './portfolioData'

function Projects() {
  const trackRef = useRef(null)
  const dragRef = useRef({ active: false, startX: 0, startScroll: 0 })
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const scrollToSlide = (index) => {
    const track = trackRef.current
    const slide = track?.children[index]
    if (!track || !slide) return
    track.scrollTo({ left: slide.offsetLeft - track.offsetLeft, behavior: 'smooth' })
    setActiveIndex(index)
  }

  const moveSlide = (direction) => {
    scrollToSlide(Math.max(0, Math.min(projects.length - 1, activeIndex + direction)))
  }

  useEffect(() => {
    const track = trackRef.current
    if (!track) return undefined
    const updateActiveSlide = () => {
      const slides = [...track.children]
      const center = track.scrollLeft + track.clientWidth / 2
      const closest = slides.reduce((best, slide, index) => Math.abs(slide.offsetLeft + slide.offsetWidth / 2 - center) < Math.abs(slides[best].offsetLeft + slides[best].offsetWidth / 2 - center) ? index : best, 0)
      setActiveIndex(closest)
    }
    track.addEventListener('scroll', updateActiveSlide, { passive: true })
    return () => track.removeEventListener('scroll', updateActiveSlide)
  }, [])

  useEffect(() => {
    if (isPaused) return undefined
    const timer = window.setInterval(() => {
      setActiveIndex((current) => {
        const next = (current + 1) % projects.length
        scrollToSlide(next)
        return next
      })
    }, 6000)
    return () => window.clearInterval(timer)
  }, [isPaused])

  const handlePointerDown = (event) => {
    const track = trackRef.current
    if (!track || event.pointerType === 'touch') return
    dragRef.current = { active: true, startX: event.clientX, startScroll: track.scrollLeft }
    track.setPointerCapture(event.pointerId)
    track.classList.add('is-dragging')
  }

  const handlePointerMove = (event) => {
    const track = trackRef.current
    if (!track || !dragRef.current.active) return
    track.scrollLeft = dragRef.current.startScroll - (event.clientX - dragRef.current.startX)
  }

  const handlePointerUp = (event) => {
    const track = trackRef.current
    if (!track) return
    const wasDragging = dragRef.current.active
    dragRef.current.active = false
    if (wasDragging && track.hasPointerCapture?.(event.pointerId)) track.releasePointerCapture(event.pointerId)
    track.classList.remove('is-dragging')
  }

  return <section className="projects section-wrap" id="projects">
    <div className="section-heading">
      <div>
        <p className="eyebrow">Selected work <span>/ things I have shipped</span></p>
        <h2>A few things from<br /><em>the workbench.</em></h2>
      </div>
      <div className="carousel-controls">
        <span className="section-count">04 projects</span>
        <button type="button" className="carousel-arrow" onClick={() => moveSlide(-1)} disabled={activeIndex === 0} aria-label="Previous project"><ArrowLeft size={17} /></button>
        <button type="button" className="carousel-arrow" onClick={() => moveSlide(1)} disabled={activeIndex === projects.length - 1} aria-label="Next project"><ArrowRight size={17} /></button>
      </div>
    </div>
    <div className="project-carousel" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      <div className="project-grid" ref={trackRef} onPointerDown={handlePointerDown} onPointerMove={handlePointerMove} onPointerUp={handlePointerUp} onPointerCancel={handlePointerUp} tabIndex="0" aria-label="Projects carousel">
        {projects.map((project, index) => <motion.article className="project-card" key={project.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: index * .08, duration: .55 }}>
        <div className="project-top"><span className="project-number">{project.number}</span><span className="project-category">{project.category}</span></div>
        <div className="project-visual"><img src={project.image} alt={`${project.title} preview`} /></div>
        <div className="project-content"><h3>{project.title}</h3><p>{project.description}</p><div className="project-stack">{project.stack.map(tag => <span className="stack-tag" key={tag}>{tag}</span>)}</div></div>
        <div className="project-links"><a href={project.live} target="_blank" rel="noreferrer">Live project <ArrowUpRight size={14} /></a><a href={project.code} target="_blank" rel="noreferrer"><Code2 size={14} /> Source</a></div>
        </motion.article>)}
      </div>
      <div className="carousel-dots" aria-label="Choose a project">
        {projects.map((project, index) => <button type="button" key={project.title} className={`carousel-dot ${activeIndex === index ? 'is-active' : ''}`} onClick={() => scrollToSlide(index)} aria-label={`Go to project ${index + 1}`} aria-current={activeIndex === index ? 'true' : undefined} />)}
      </div>
    </div>
  </section>
}

export default Projects
