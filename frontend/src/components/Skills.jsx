import { useEffect, useState } from 'react'
import useInView from '../hooks/useInView'
import { getSkills } from '../services/api'

const delays = ['delay-[0ms]', 'delay-[100ms]', 'delay-[200ms]', 'delay-[300ms]']

export default function Skills() {
  const [ref, inView] = useInView()
  const [groups, setGroups] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    getSkills()
      .then((res) => setGroups(res.data))
      .catch(() => setError('Could not load skills right now.'))
  }, [])

  return (
    <div
      ref={ref}
      className={`mx-auto max-w-6xl px-6 py-20 transition-all duration-700 ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
      }`}
    >
      <h2 className="mb-8 text-2xl font-semibold text-gh-text">Skills</h2>
      {error && <p className="mb-4 text-sm text-gh-danger">{error}</p>}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {groups.map((group, index) => (
          <div
            key={group.id}
            className={`rounded-xl border border-gh-border bg-gh-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gh-accent hover:shadow-xl hover:shadow-gh-accent/10 ${delays[index % 4]}`}
          >
            <h3 className="mb-4 font-medium text-gh-text">{group.title}</h3>
            <div className="space-y-2">
              {group.items.map((skill) => (
                <div key={skill} className="flex items-center gap-2 text-sm text-gh-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-gh-success" />
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
