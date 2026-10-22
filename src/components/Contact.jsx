import { useState } from 'react'
import { ArrowUpRight, Mail, MapPin, MessageCircle, Send } from 'lucide-react'
import { profile } from './portfolioData'

function Contact() {
  const [draftReady, setDraftReady] = useState(false)

  const submit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')
    const subject = encodeURIComponent('Portfolio inquiry')
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setDraftReady(true)
  }

  return (
    <section className="contact section-wrap" id="contact" aria-labelledby="contact-heading">
      <div className="contact-intro">
        <p className="eyebrow">Get in touch <span>/ start a conversation</span></p>
        <h2 id="contact-heading">Have a good idea?<br /><em>Let’s make it real.</em></h2>
        <p className="contact-copy">Have a project in mind, a question, or an opportunity to discuss? Send a note or reach me directly using the details below.</p>
      </div>
      <div className="contact-body">
        <div className="contact-details">
          <h3>Reach out directly</h3>
          <p>Choose whichever channel works best for you.</p>
          <div className="reach-list">
            <a href={`mailto:${profile.email}`} className="reach-card">
              <Mail size={18} aria-hidden="true" />
              <span><small>Email</small>{profile.email}</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a href={profile.whatsapp} target="_blank" rel="noreferrer" className="reach-card">
              <MessageCircle size={18} aria-hidden="true" />
              <span><small>WhatsApp</small>{profile.phone}</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <div className="reach-card reach-card-location">
              <MapPin size={18} aria-hidden="true" />
              <span><small>Location</small>Islamabad, Pakistan</span>
            </div>
          </div>
        </div>
        <form className="contact-form" onSubmit={submit} autoComplete="on">
          {draftReady ? (
            <div className="form-success" role="status" aria-live="polite">
              <Mail size={27} />
              <h3>Your email draft is ready</h3>
              <p>Your email app should open with your message ready to review and send. If it did not, email <a href={`mailto:${profile.email}`}>{profile.email}</a>.</p>
              <button type="button" onClick={() => setDraftReady(false)}>Edit message</button>
            </div>
          ) : (
            <>
              <div className="form-heading">
                <div>
                  <p>PROJECT INQUIRY</p>
                  <h3>Tell me what you’re working on</h3>
                </div>
                <Mail size={20} aria-hidden="true" />
              </div>
              <p className="form-intro">Fill in the details and I’ll prepare an email for you to review.</p>
              <div className="contact-fields">
                <label>Name<input required name="name" autoComplete="name" maxLength="100" placeholder="Your name" /></label>
                <label>Email<input required type="email" name="email" autoComplete="email" maxLength="254" placeholder="you@company.com" /></label>
                <label className="message-field">Message<textarea required name="message" rows="4" maxLength="5000" placeholder="A little about your project, timeline, or question..." /></label>
              </div>
              <button className="button button-primary form-submit" type="submit">Continue in email <Send size={15} aria-hidden="true" /></button>
              <p className="form-note">Your message isn’t sent automatically. It opens in your email app so you can review it first.</p>
            </>
          )}
        </form>
      </div>
    </section>
  )
}
export default Contact
