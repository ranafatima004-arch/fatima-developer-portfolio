import { HeartHandshake, Layers3 } from 'lucide-react'
import profileImg from '../assets/fatima-profile.png.png'

function About() {
  return (
    <section className="about-section section-wrap" id="about" aria-labelledby="about-heading">
      <div className="about-heading">
        <p className="eyebrow">A little context <span>/ beyond the pixels</span></p>
        <h2 id="about-heading">Thoughtful by<br /><em>default.</em></h2>
      </div>
      <div className="about-copy">
        <div className="about-content-layout">
          <div className="about-story">
            <p>I am Fatima, a frontend engineer who enjoys turning complex product ideas into <strong>clear, considerate interfaces</strong>. My work sits at the intersection of visual polish, dependable code, and the small details that help people feel confident using a product.</p>
            <p>I care about accessible foundations, honest communication, and building experiences that feel natural from the first click.</p>
            <div className="about-points">
              <div className="about-point"><strong><Layers3 size={21} aria-hidden="true" /></strong><span>Systems-minded</span></div>
              <div className="about-point"><strong><HeartHandshake size={21} aria-hidden="true" /></strong><span>People-first</span></div>
            </div>
          </div>
          <figure className="about-portrait">
            <img
              src={profileImg}
              alt="Fatima Waqar, Frontend Engineer"
              width="1024"
              height="1024"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span>Fatima Waqar</span>
              <span>Frontend Engineer</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}

export default About