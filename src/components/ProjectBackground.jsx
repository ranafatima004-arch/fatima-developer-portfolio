import { useEffect, useState } from 'react'
import sparkleVideo from '../assets/36503-427607440.mp4'

export default function ProjectBackground() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () => typeof window !== 'undefined'
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
  const [videoUnavailable, setVideoUnavailable] = useState(false)

  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateMotionPreference = (event) => setPrefersReducedMotion(event.matches)
    motionPreference.addEventListener('change', updateMotionPreference)
    return () => motionPreference.removeEventListener('change', updateMotionPreference)
  }, [])

  return (
    <div className="project-background" aria-hidden="true">
      {!prefersReducedMotion && !videoUnavailable && (
        <video
          className="project-background-video"
          src={sparkleVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          tabIndex={-1}
          onError={() => setVideoUnavailable(true)}
        />
      )}
      <div className="project-background-overlay" />
    </div>
  )
}
