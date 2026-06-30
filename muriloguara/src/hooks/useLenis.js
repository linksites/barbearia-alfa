import { useEffect } from 'react'
import Lenis from 'lenis'

// Smooth scroll com Lenis. Desativa automaticamente para quem prefere
// menos movimento. Integra âncoras (#) com rolagem suave.
export function useLenis() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (prefersReduced) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    let frame
    const raf = (time) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    // Âncoras suaves
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]')
      if (!a) return
      const id = a.getAttribute('href')
      if (!id || id === '#') return
      const el = document.querySelector(id)
      if (!el) return
      e.preventDefault()
      lenis.scrollTo(el, { offset: -80 })
    }
    document.addEventListener('click', onClick)

    return () => {
      cancelAnimationFrame(frame)
      document.removeEventListener('click', onClick)
      lenis.destroy()
    }
  }, [])
}
