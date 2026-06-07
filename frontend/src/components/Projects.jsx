import { useEffect, useState } from 'react'

import useInView from '../hooks/useInView'
import { getProjects } from '../services/api'
import ProjectCard from './ProjectCard'

function ProjectSkeleton({ index }) {
  const delays = ['delay-[0ms]', 'delay-[100ms]', 'delay-[200ms]', 'delay-[300ms]']
  return (
    <div
      className={`rounded-xl border border-gh-border bg-gh-surface p-5 transition-all duration-300 ${delays[index]}`}
    >
      <div className="h-4 w-20 animate-pulse rounded bg-gh-border" />
      <div className="mt-4 h-5 w-3/4 animate-pulse rounded bg-gh-border" />
      <div className="mt-3 h-3 w-full animate-shimmer rounded bg-[linear-gradient(90deg,#e2e8f0_25%,#cbd5e1_50%,#e2e8f0_75%)] bg-[length:200%_100%] dark:bg-[linear-gradient(90deg,#1d232d_25%,#2a313d_50%,#1d232d_75%)]" />
      <div className="mt-2 h-3 w-2/3 animate-shimmer rounded bg-[linear-gradient(90deg,#e2e8f0_25%,#cbd5e1_50%,#e2e8f0_75%)] bg-[length:200%_100%] dark:bg-[linear-gradient(90deg,#1d232d_25%,#2a313d_50%,#1d232d_75%)]" />
    </div>
  )
}

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [ref, inView] = useInView()

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true)
        const response = await getProjects()
        setProjects(response.data)
        setError('')
      } catch {
        setError('Could not load projects right now.')
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="mb-8 text-2xl font-semibold text-gh-text">Projects</h2>
      {error && <p className="mb-4 text-sm text-gh-danger">{error}</p>}
      <div
        ref={ref}
        className={`grid gap-4 transition-all duration-700 md:grid-cols-2 ${
          inView ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
        }`}
      >
        {loading
          ? Array.from({ length: 4 }).map((_, index) => <ProjectSkeleton key={index} index={index} />)
          : projects.map((project, index) => (
              <ProjectCard key={project.id} {...project} index={index} inView={inView} />
            ))}
      </div>
    </div>
  )
}
