import { useEffect, useRef, useState } from 'react'

export default function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!ref.current || inView) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold },
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [inView, threshold])

  return [ref, inView]
}
