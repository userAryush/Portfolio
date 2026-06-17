import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { getProject } from '../services/api'
import Footer from '../components/Footer'

function normalizeToArray(value) {
  if (Array.isArray(value)) return value
  if (typeof value === 'string') {
    const trimmed = value.trim()
    if (!trimmed) return []
    try {
      const parsed = JSON.parse(trimmed)
      if (Array.isArray(parsed)) return parsed
      if (parsed && typeof parsed === 'object') return Object.values(parsed)
    } catch {
      return trimmed.split(',').map((item) => item.trim()).filter(Boolean)
    }
  }
  if (value && typeof value === 'object') return Object.values(value)
  return []
}

function PageSkeleton() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="h-5 w-24 animate-shimmer rounded bg-[linear-gradient(90deg,#e2e8f0_25%,#cbd5e1_50%,#e2e8f0_75%)] bg-[length:200%_100%] dark:bg-[linear-gradient(90deg,#1d232d_25%,#2a313d_50%,#1d232d_75%)]" />
      <div className="mt-6 h-10 w-2/3 animate-shimmer rounded bg-[linear-gradient(90deg,#e2e8f0_25%,#cbd5e1_50%,#e2e8f0_75%)] bg-[length:200%_100%] dark:bg-[linear-gradient(90deg,#1d232d_25%,#2a313d_50%,#1d232d_75%)]" />
      <div className="mt-3 h-4 w-full animate-shimmer rounded bg-[linear-gradient(90deg,#e2e8f0_25%,#cbd5e1_50%,#e2e8f0_75%)] bg-[length:200%_100%] dark:bg-[linear-gradient(90deg,#1d232d_25%,#2a313d_50%,#1d232d_75%)]" />
      <div className="mt-10 h-64 w-full animate-shimmer rounded bg-[linear-gradient(90deg,#e2e8f0_25%,#cbd5e1_50%,#e2e8f0_75%)] bg-[length:200%_100%] dark:bg-[linear-gradient(90deg,#1d232d_25%,#2a313d_50%,#1d232d_75%)]" />
    </div>
  )
}

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true)
        const response = await getProject(id)
        setProject(response.data)
        setError('')
      } catch {
        setError('Failed to load project details.')
      } finally {
        setLoading(false)
      }
    }

    fetchProject()
  }, [id])

  if (loading) return <PageSkeleton />
  if (error) return <div className="px-6 py-10 text-sm text-gh-danger">{error}</div>
  if (!project) return null

  const techStackList = normalizeToArray(project.tech_stack)
  const featuresList = normalizeToArray(project.features)

  return (
    <div className="min-h-screen bg-gh-bg text-gh-text">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="text-sm text-gh-muted transition-all duration-300 hover:-translate-x-1 hover:text-gh-text"
        >
          ← Projects
        </button>

        <div className="mt-6 grid gap-6 rounded-2xl border border-gh-border bg-gh-surface p-6 animate-fadeUp md:grid-cols-2">
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold">{project.title}</h1>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-gh-success/15 px-2 py-0.5 text-xs text-gh-success">
                {project.status}
              </span>
              <span className="rounded-full bg-gh-border/60 px-2 py-0.5 text-xs text-gh-muted">
                {project.category}
              </span>
            </div>
            <div>
              <p className="mb-2 text-xs uppercase tracking-wider text-gh-muted">Stack</p>
              <div className="flex flex-wrap gap-2">
                {techStackList.map((tech, techIndex) => (
                  <span
                    key={`${tech}-${techIndex}`}
                    className="rounded border border-[#1f3a5f] bg-[#0c1e3a] px-2 py-0.5 text-xs text-gh-accent"
                  >
                    {String(tech)}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-3">
            {project.live_link && (
              <a
                href={project.live_link}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-gh-accent px-4 py-2 text-sm font-medium text-gh-bg transition-transform duration-150 hover:scale-105 active:scale-95"
              >
                Live Demo
              </a>
            )}
            <a
              href={project.github_link}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-gh-border px-4 py-2 text-sm transition-transform duration-150 hover:scale-105 active:scale-95">
              GitHub Repo
            </a>
            {project.api_docs_link && (
              <a
                href={project.api_docs_link}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-gh-border px-4 py-2 text-sm transition-transform duration-150 hover:scale-105 active:scale-95"
              >
                API Documentation
              </a>
            )}
            {project.qa_sheet_link && (
              <a
                href={project.qa_sheet_link}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-gh-border px-4 py-2 text-sm transition-transform duration-150 hover:scale-105 active:scale-95"
              >
                QA Tests
              </a>
            )}
          </div>
        </div>

        <div className="mt-6 animate-fadeIn">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gh-border bg-gh-surface p-5">
            <p className="mb-3 text-lg text-gh-muted">About the Project</p>
              <p className="text-sm text-gh-text">{project.description}</p>

            </div>
            <div className="rounded-xl border border-gh-border bg-gh-surface p-5">
 
              <p className="mb-3 text-lg text-gh-muted">Features</p>
              <div className="mt-4 space-y-2">
                {featuresList.map((feature, featureIndex) => (
                  <div key={`${feature}-${featureIndex}`} className="flex items-start gap-2 text-sm text-gh-text">
                    <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 text-gh-success">
                      <path fill="currentColor" d="M9 16.2 4.8 12 3.4 13.4 9 19l12-12-1.4-1.4z" />
                    </svg>
                    {String(feature)}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {project.qa_testing_type && (
            <div className="rounded-xl border border-gh-border bg-gh-surface p-5">
              <p className="mb-3 text-lg text-gh-muted">Testing</p>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <span className="rounded border border-[#1f3a5f] bg-[#0c1e3a] px-2 py-0.5 text-xs text-gh-accent">
                    {project.qa_testing_type}
                  </span>
                  {normalizeToArray(project.qa_tags).map((tag, i) => (
                    <span
                      key={`${tag}-${i}`}
                      className="rounded border border-gh-border px-2 py-0.5 text-xs text-gh-muted"
                    >
                      {String(tag)}
                    </span>
                  ))}
                </div>
                {project.qa_description && (
                  <p className="text-sm text-gh-text">{project.qa_description}</p>
                )}
                {(project.qa_total > 0 || project.qa_passed > 0 || project.qa_failed > 0) && (
                  <div className="flex gap-6 text-sm">
                    <div className="text-center">
                      <p className="text-xl font-semibold text-gh-text">{project.qa_total}</p>
                      <p className="text-xs text-gh-muted">Total</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-semibold text-gh-success">{project.qa_passed}</p>
                      <p className="text-xs text-gh-muted">Passed</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-semibold text-gh-danger">{project.qa_failed}</p>
                      <p className="text-xs text-gh-muted">Failed</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
    
  )
}
