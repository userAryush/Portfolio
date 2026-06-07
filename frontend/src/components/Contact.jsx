import { useState } from 'react'

import useInView from '../hooks/useInView'
import { sendContact } from '../services/api'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const contactCards = [
  {
    label: 'Email',
    text: 'Email me at: khatriaryush@gmail.com',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&cc=khatriaryush@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path
          d="M4 6.5H20C20.55 6.5 21 6.95 21 7.5V16.5C21 17.05 20.55 17.5 20 17.5H4C3.45 17.5 3 17.05 3 16.5V7.5C3 6.95 3.45 6.5 4 6.5Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path d="M4 8L12 13L20 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    text: 'Checkout my code repositories',
    href: 'https://github.com/userAryushKhatri',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.47 2 2 6.59 2 12.26C2 16.79 4.87 20.62 8.84 21.98C9.34 22.07 9.52 21.76 9.52 21.5C9.52 21.27 9.51 20.5 9.5 19.61C6.73 20.23 6.14 18.25 6.14 18.25C5.68 17.04 5.03 16.72 5.03 16.72C4.12 16.08 5.1 16.09 5.1 16.09C6.1 16.17 6.63 17.14 6.63 17.14C7.53 18.73 8.97 18.27 9.54 18C9.63 17.33 9.89 16.87 10.17 16.61C7.96 16.35 5.64 15.46 5.64 11.47C5.64 10.33 6.03 9.39 6.68 8.65C6.58 8.39 6.23 7.32 6.78 5.88C6.78 5.88 7.62 5.6 9.5 6.91C10.3 6.68 11.15 6.56 12 6.56C12.85 6.56 13.7 6.68 14.5 6.91C16.38 5.6 17.22 5.88 17.22 5.88C17.77 7.32 17.42 8.39 17.32 8.65C17.97 9.39 18.36 10.33 18.36 11.47C18.36 15.47 16.03 16.35 13.81 16.61C14.17 16.94 14.48 17.57 14.48 18.54C14.48 19.93 14.47 21.14 14.47 21.5C14.47 21.76 14.65 22.08 15.16 21.98C19.13 20.62 22 16.79 22 12.26C22 6.59 17.53 2 12 2Z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    text: "Let's connect on LinkedIn",
    href: 'https://www.linkedin.com/in/aryush-khatri-652439317/',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M6.94 8.5H3.56V19.5H6.94V8.5ZM5.25 3C4.17 3 3.3 3.87 3.3 4.95C3.3 6.03 4.17 6.9 5.25 6.9C6.33 6.9 7.2 6.03 7.2 4.95C7.2 3.87 6.33 3 5.25 3ZM12.33 11.14V8.5H8.96V19.5H12.33V13.95C12.33 12.49 12.61 11.08 14.42 11.08C16.2 11.08 16.22 12.75 16.22 14.04V19.5H19.6V13.36C19.6 10.35 18.95 8.04 15.43 8.04C13.74 8.04 12.61 8.97 12.33 9.86V9.9H12.31L12.33 9.86V11.14Z" />
      </svg>
    ),
  },
]

export default function Contact() {
  const [ref, inView] = useInView()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const nextErrors = {}

    if (!form.name.trim()) nextErrors.name = 'Name is required.'
    if (!form.email.trim()) nextErrors.email = 'Email is required.'
    else if (!emailRegex.test(form.email)) nextErrors.email = 'Enter a valid email address.'
    if (!form.message.trim()) nextErrors.message = 'Message is required.'

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    try {
      setLoading(true)
      setError('')
      setSuccess('')
      await sendContact(form)
      setSuccess('Message sent successfully!')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setError('Could not send your message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      ref={ref}
      className={`mx-auto max-w-6xl px-6 py-20 transition-all duration-700 ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
      }`}
    >
      <h2 className="mb-8 text-2xl font-semibold text-gh-text">Contact</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          {contactCards.map((card) => (
            <a
              key={card.label}
              href={card.href}
              target={card.href.startsWith('http') ? '_blank' : undefined}
              rel={card.href.startsWith('http') ? 'noreferrer' : undefined}
              className="flex items-start gap-3 rounded-xl border border-gh-border bg-gh-surface p-4 transition-colors hover:border-gh-accent/40"
            >
              <span className="mt-0.5 text-gh-accent">{card.icon}</span>
              <span>
                <p className="text-xs uppercase tracking-widest text-gh-muted">{card.label}</p>
                <p className="mt-1 text-sm text-gh-accent">{card.text}</p>
              </span>
            </a>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full rounded-lg border border-gh-border bg-gh-surface px-4 py-2.5 text-sm text-gh-text transition-colors focus:border-gh-accent focus:outline-none"
          />
          {errors.name && <p className="text-xs text-gh-danger">{errors.name}</p>}

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full rounded-lg border border-gh-border bg-gh-surface px-4 py-2.5 text-sm text-gh-text transition-colors focus:border-gh-accent focus:outline-none"
          />
          {errors.email && <p className="text-xs text-gh-danger">{errors.email}</p>}

          <textarea
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="Message"
            className="w-full rounded-lg border border-gh-border bg-gh-surface px-4 py-2.5 text-sm text-gh-text transition-colors focus:border-gh-accent focus:outline-none"
          />
          {errors.message && <p className="text-xs text-gh-danger">{errors.message}</p>}

          {success && <p className="text-sm text-gh-success">{success}</p>}
          {error && <p className="text-sm text-gh-danger">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="rounded-lg bg-gh-accent px-5 py-2 text-sm font-medium text-gh-bg transition-transform duration-150 hover:scale-105 active:scale-95 disabled:opacity-60"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  )
}
