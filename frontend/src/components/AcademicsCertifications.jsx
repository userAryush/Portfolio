import { useEffect, useState } from 'react'
import useInView from '../hooks/useInView'
import { getAcademics } from '../services/api'

export default function AcademicsCertifications() {
  const [ref, inView] = useInView()
  const [academicRows, setAcademicRows] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [activeCertificate, setActiveCertificate] = useState('')

  const resolveCertificateUrl = (url) => {
    if (!url) return ''
    if (url.startsWith('http')) return url
    return `http://localhost:8000${url}`
  }

  useEffect(() => {
    const fetchAcademics = async () => {
      try {
        setLoading(true)
        const response = await getAcademics()
        setAcademicRows(response.data)
        setError('')
      } catch {
        setError('Could not load academics and certificates right now.')
      } finally {
        setLoading(false)
      }
    }

    fetchAcademics()
  }, [])

  return (
    <div
      ref={ref}
      className={`mx-auto max-w-6xl px-6 py-20 transition-all duration-700 ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
      }`}
    >
      <h2 className="mb-6 text-2xl font-semibold text-gh-text">Academics &amp; Certifications</h2>
      {error && <p className="mb-4 text-sm text-gh-danger">{error}</p>}
      <div className="overflow-x-auto rounded-xl border border-gh-border bg-gh-surface">
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead className="bg-gh-bg/70 text-gh-muted">
            <tr>
              <th className="px-4 py-3 font-medium">Institute</th>
              <th className="px-4 py-3 font-medium">Year</th>
              <th className="px-4 py-3 font-medium">Course</th>
              <th className="px-4 py-3 font-medium">GPA</th>
              <th className="px-4 py-3 font-medium">Certificates</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td className="px-4 py-6 text-gh-muted" colSpan={5}>
                  Loading...
                </td>
              </tr>
            ) : academicRows.length === 0 ? (
              <tr>
                <td className="px-4 py-6 text-gh-muted" colSpan={5}>
                  No academics or certificates added yet.
                </td>
              </tr>
            ) : (
              academicRows.map((row, index) => (
                <tr
                  key={row.id ?? `${row.institute}-${index}`}
                  className="border-t border-gh-border transition-all duration-300 hover:border-gh-accent hover:shadow-xl hover:shadow-gh-accent/10"
                >
                  <td className="px-4 py-3 text-gh-text">{row.institute}</td>
                  <td className="px-4 py-3 text-gh-muted">{row.year}</td>
                  <td className="px-4 py-3 text-gh-muted">{row.course}</td>
                  <td className="px-4 py-3 text-gh-muted">{row.gpa || '—'}</td>
                  <td className="px-4 py-3 text-gh-muted">
                    {row.certificate ? (
                      <button
                        type="button"
                        onClick={() => setActiveCertificate(resolveCertificateUrl(row.certificate))}
                        className="rounded-md border border-gh-border px-3 py-1 text-xs text-gh-text transition-all duration-300 hover:border-gh-accent hover:text-gh-accent"
                      >
                        View Certificate
                      </button>
                    ) : (
                      '—'
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {activeCertificate && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4">
          <div className="relative w-full max-w-5xl rounded-xl border border-gh-border bg-gh-surface p-4">
            <button
              type="button"
              onClick={() => setActiveCertificate('')}
              className="absolute right-4 top-4 rounded-md border border-gh-border px-2 py-1 text-xs text-gh-muted transition-colors hover:text-gh-text"
            >
              Close
            </button>
            <img
              src={activeCertificate}
              alt="Certificate preview"
              className="max-h-[80vh] w-full rounded-lg object-contain"
            />
          </div>
        </div>
      )}
    </div>
  )
}
