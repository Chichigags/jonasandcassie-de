import { useEffect, useRef, useState } from 'react'

const defaultOptions = {
  root: null,
  rootMargin: '0px 0px -8% 0px',
  threshold: 0.08,
}

export function useReveal(options = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const merged = { ...defaultOptions, ...options }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.unobserve(entry.target)
      }
    }, merged)

    observer.observe(el)
    return () => observer.disconnect()
  }, [options.rootMargin, options.threshold])

  return { ref, isVisible }
}
