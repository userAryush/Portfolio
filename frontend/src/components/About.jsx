import { useEffect, useState } from 'react'
import useInView from '../hooks/useInView'
import { getAbout } from '../services/api'

export default function About() {
  const [ref, inView] = useInView()
  const [description, setDescription] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    getAbout()
      .then((res) => setDescription(res.data.description))
      .catch(() => setError('Could not load about section right now.'))
  }, [])

  return (
    <div
      ref={ref}
      className={`mx-auto max-w-6xl px-6 py-20 transition-all duration-700 ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
      }`}
    >
      <h2 className="mb-8 text-2xl font-semibold text-gh-text">About Me</h2>
      {error
        ? <p className="text-sm text-gh-danger">{error}</p>
        : <p className="leading-8 text-gh-muted">{description}</p>
      }
    </div>
  )
}
