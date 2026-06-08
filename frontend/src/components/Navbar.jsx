import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Home', href: '#hero', id: 'hero' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Academics', href: '#academics', id: 'academics' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/aryush-khatri-652439317/',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M6.94 8.5H3.56V19.5H6.94V8.5ZM5.25 3C4.17 3 3.3 3.87 3.3 4.95C3.3 6.03 4.17 6.9 5.25 6.9C6.33 6.9 7.2 6.03 7.2 4.95C7.2 3.87 6.33 3 5.25 3ZM12.33 11.14V8.5H8.96V19.5H12.33V13.95C12.33 12.49 12.61 11.08 14.42 11.08C16.2 11.08 16.22 12.75 16.22 14.04V19.5H19.6V13.36C19.6 10.35 18.95 8.04 15.43 8.04C13.74 8.04 12.61 8.97 12.33 9.86V9.9H12.31L12.33 9.86V11.14Z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/userAryushKhatri',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.47 2 2 6.59 2 12.26C2 16.79 4.87 20.62 8.84 21.98C9.34 22.07 9.52 21.76 9.52 21.5C9.52 21.27 9.51 20.5 9.5 19.61C6.73 20.23 6.14 18.25 6.14 18.25C5.68 17.04 5.03 16.72 5.03 16.72C4.12 16.08 5.1 16.09 5.1 16.09C6.1 16.17 6.63 17.14 6.63 17.14C7.53 18.73 8.97 18.27 9.54 18C9.63 17.33 9.89 16.87 10.17 16.61C7.96 16.35 5.64 15.46 5.64 11.47C5.64 10.33 6.03 9.39 6.68 8.65C6.58 8.39 6.23 7.32 6.78 5.88C6.78 5.88 7.62 5.6 9.5 6.91C10.3 6.68 11.15 6.56 12 6.56C12.85 6.56 13.7 6.68 14.5 6.91C16.38 5.6 17.22 5.88 17.22 5.88C17.77 7.32 17.42 8.39 17.32 8.65C17.97 9.39 18.36 10.33 18.36 11.47C18.36 15.47 16.03 16.35 13.81 16.61C14.17 16.94 14.48 17.57 14.48 18.54C14.48 19.93 14.47 21.14 14.47 21.5C14.47 21.76 14.65 22.08 15.16 21.98C19.13 20.62 22 16.79 22 12.26C22 6.59 17.53 2 12 2Z" />
      </svg>
    ),
  },
]

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

function HamburgerIcon({ isOpen }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {isOpen ? (
        <>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </>
      ) : (
        <>
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </>
      )}
    </svg>
  )
}

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY + 120
      navItems.forEach((item) => {
        const section = document.getElementById(item.id)
        if (!section) return
        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(item.id)
        }
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <nav className="sticky top-0 z-50 animate-fadeIn border-b border-gh-border bg-gh-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#hero" onClick={closeMenu} className="text-lg font-semibold text-gh-text">
          Aryush <span className="text-gh-accent">.py</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-5 text-sm">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={
                activeSection === item.id
                  ? 'text-gh-text transition-colors'
                  : 'text-gh-muted transition-colors hover:text-gh-text'
              }
            >
              {item.label}
            </a>
          ))}
          <div className="ml-2 flex items-center gap-2 border-l border-gh-border pl-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.name}
                className="text-gh-muted transition-colors hover:text-gh-text"
              >
                {link.icon}
              </a>
            ))}
            <button
              type="button"
              onClick={() => setIsDark((prev) => !prev)}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="ml-1 flex h-7 w-7 items-center justify-center rounded-md text-gh-muted transition-colors hover:text-gh-text"
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-1 md:hidden">
          <button
            type="button"
            onClick={() => setIsDark((prev) => !prev)}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex h-8 w-8 items-center justify-center rounded-md text-gh-muted transition-colors hover:text-gh-text"
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="flex h-8 w-8 items-center justify-center rounded-md text-gh-muted transition-colors hover:text-gh-text"
          >
            <HamburgerIcon isOpen={isMenuOpen} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div className="border-t border-gh-border bg-gh-bg/95 backdrop-blur-md md:hidden">
          <div className="px-4 py-3 flex flex-col">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={closeMenu}
                className={`rounded-md px-3 py-2.5 text-sm transition-colors ${
                  activeSection === item.id
                    ? 'bg-gh-surface text-gh-text font-medium'
                    : 'text-gh-muted hover:bg-gh-surface hover:text-gh-text'
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 flex items-center gap-3 border-t border-gh-border pt-3 px-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.name}
                  className="text-gh-muted transition-colors hover:text-gh-text"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
