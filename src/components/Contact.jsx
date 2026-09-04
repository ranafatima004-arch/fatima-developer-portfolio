import { useState } from 'react'
import { ArrowUpRight, CheckCircle2, Mail, MapPin, MessageCircle, Send } from 'lucide-react'
import { profile } from './portfolioData'

function Contact() {
  const [sent, setSent] = useState(false)
  const submit = (event) => { event.preventDefault(); setSent(true) }
  return <section className="contact section-wrap" id="contact"><div className="contact-intro"><p className="eyebrow">Start a conversation <span>/ say hello</span></p><h2>Have a good idea?<br /><em>Let’s make it real.</em></h2><p className="contact-copy">Whether you are shaping a new product or refining an existing one, I would love to hear what you are working on.</p></div><div className="contact-body"><div className="reach-list"><a href={`mailto:${profile.email}`} className="reach-card"><Mail size={18} /><span><small>Email directly</small>{profile.email}</span><ArrowUpRight size={16} /></a><a href={profile.whatsapp} target="_blank" rel="noreferrer" className="reach-card"><MessageCircle size={18} /><span><small>WhatsApp direct</small>{profile.phone}</span><ArrowUpRight size={16} /></a><div className="reach-card"><MapPin size={18} /><span><small>Currently in</small>Islamabad, Pakistan</span></div></div><form className="contact-form" onSubmit={submit}>{sent ? <div className="form-success"><CheckCircle2 size={27} /><h3>Message received.</h3><p>Thanks for reaching out. I’ll get back to you soon.</p><button type="button" onClick={() => setSent(false)}>Send another</button></div> : <><label>Name<input required name="name" placeholder="Your name" /></label><label>Email<input required type="email" name="email" placeholder="you@company.com" /></label><label>Message<textarea required name="message" rows="4" placeholder="Tell me a little about your project..." /></label><button className="button button-primary form-submit" type="submit">Send message <Send size={15} /></button></>}</form></div></section>
}
export default Contact
