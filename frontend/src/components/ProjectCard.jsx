import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const delays = ['delay-[0ms]', 'delay-[100ms]', 'delay-[200ms]', 'delay-[300ms]']

function normalizeTechStack(techStack) {
  if (Array.isArray(techStack)) return techStack
  if (typeof techStack === 'string') {
    const trimmed = techStack.trim()
    if (!trimmed) return []
    try {
      const parsed = JSON.parse(trimmed)
      if (Array.isArray(parsed)) return parsed
      if (parsed && typeof parsed === 'object') return Object.values(parsed)
    } catch {
      return trimmed.split(',').map((item) => item.trim()).filter(Boolean)
    }
  }
  if (techStack && typeof techStack === 'object') return Object.values(techStack)
  return []
}

export default function ProjectCard({
  id,
  title,
  description,
  tech_stack = [],
  status = 'Live',
  github_link,
  api_docs_link,
  index,
  inView,
}) {
  const [expanded, setExpanded] = useState(false)
  const navigate = useNavigate()
  const delayClass = delays[index % delays.length]
  const techList = normalizeTechStack(tech_stack)

  return (
    <div
      className={`flex flex-col gap-4 rounded-xl border border-gh-border bg-gh-surface p-5 transition-all duration-700 ${delayClass} ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
      } hover:-translate-y-1 hover:border-gh-accent hover:shadow-xl hover:shadow-gh-accent/10`}
    >
      <div className="flex items-center justify-between">
        
        <h3 className="text-lg font-medium text-gh-text">{title}</h3>
        <span className="rounded-full bg-gh-success/15 px-2 py-0.5 text-xs text-gh-success">{status}</span>
      </div>
      <div className="text-sm text-gh-muted">
        <p className={expanded ? '' : 'line-clamp-3'}>{description}</p>
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="mt-1 text-xs text-gh-accent hover:text-blue-300 transition-colors"
        >
          {expanded ? '...less' : '...more'}
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {techList.slice(0, 4).map((tech, techIndex) => (
          <span
            key={`${tech}-${techIndex}`}
            className="rounded border border-[#1f3a5f] bg-[#0c1e3a] px-2 py-0.5 text-xs text-gh-accent"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-auto flex items-center justify-between">
  {/* Left Side */}
  <button
    type="button"
    onClick={() => navigate(`/projects/${id}`)}
    className="rounded-lg bg-gh-accent px-3 py-1.5 text-sm font-medium text-gh-bg transition-transform duration-150 hover:scale-105 active:scale-95"
  >
    View Details
  </button>

  {/* Right Side Group */}
  <div className="flex items-center gap-4"> 
    <a
      href={github_link}
      target="_blank"
      rel="noreferrer"
      className="text-sm text-gh-muted transition-colors hover:text-gh-text"
    >
      GitHub
    </a>
    
    {api_docs_link && (
      <a
        href={api_docs_link}
        target="_blank"
        rel="noreferrer"
        className="w-fit text-xs text-gh-accent transition-colors hover:text-blue-300"
      >
        API Docs
      </a>
    )}
  </div>
</div>
    </div>
  )
}
