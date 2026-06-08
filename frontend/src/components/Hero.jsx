import profileImg from '../assets/aryush.png'

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
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/aryush_khatri/',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M7.75 2H16.25C19.42 2 22 4.58 22 7.75V16.25C22 19.42 19.42 22 16.25 22H7.75C4.58 22 2 19.42 2 16.25V7.75C2 4.58 4.58 2 7.75 2ZM7.57 3.8C5.48 3.8 3.8 5.49 3.8 7.57V16.43C3.8 18.52 5.48 20.2 7.57 20.2H16.43C18.52 20.2 20.2 18.52 20.2 16.43V7.57C20.2 5.48 18.52 3.8 16.43 3.8H7.57ZM17.2 5.15C17.89 5.15 18.45 5.71 18.45 6.4C18.45 7.09 17.89 7.65 17.2 7.65C16.51 7.65 15.95 7.09 15.95 6.4C15.95 5.71 16.51 5.15 17.2 5.15ZM12 6.86C14.84 6.86 17.14 9.16 17.14 12C17.14 14.84 14.84 17.14 12 17.14C9.16 17.14 6.86 14.84 6.86 12C6.86 9.16 9.16 6.86 12 6.86ZM12 8.66C10.16 8.66 8.66 10.16 8.66 12C8.66 13.84 10.16 15.34 12 15.34C13.84 15.34 15.34 13.84 15.34 12C15.34 10.16 13.84 8.66 12 8.66Z" />
      </svg>
    ),
  },
]

export default function Hero() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-72px)] w-full max-w-6xl items-center justify-between gap-12 px-6 py-16 flex-col-reverse md:flex-row">
      {/* Text content */}
      <div className="flex flex-col items-center text-center md:items-start md:text-left">
        <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-gh-success/30 bg-gh-surface px-3 py-1 text-xs text-gh-success animate-fadeIn">
          <span className="h-2 w-2 animate-pulse rounded-full bg-gh-success" />
          Available for work opportunities
        </span>

        <h1 className="animate-fadeUp text-4xl font-bold text-gh-text [animation-delay:100ms] sm:text-5xl">
          Hello, I&apos;m <span className="text-gh-accent">Aryush Khatri</span>
          <span className="ml-1 inline-block animate-blink text-gh-accent">_</span>
        </h1>

        <p className="mt-4 animate-fadeUp text-gh-muted [animation-delay:200ms]">
          Backend Development · Django · FastAPI · QA Testing
        </p>
        <p className="mt-3 max-w-2xl animate-fadeUp text-gh-text [animation-delay:300ms]">
          I build scalable backend systems and test them thoroughly.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3 animate-fadeUp [animation-delay:500ms] md:justify-start">
          <a
            href="#projects"
            className="rounded-lg bg-gh-accent px-5 py-2 font-medium text-gh-bg transition-transform duration-150 hover:scale-105 hover:bg-blue-400 active:scale-95"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            download
            className="rounded-lg border border-gh-border px-5 py-2 text-gh-text transition-all duration-300 hover:-translate-y-0.5 hover:border-gh-muted hover:scale-105 active:scale-95"
          >
            Download Resume
          </a>
        </div>

        <div className="mt-4 flex items-center justify-center gap-3 animate-fadeUp [animation-delay:600ms] md:justify-start">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.name}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gh-border text-gh-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-gh-accent hover:text-gh-text"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Profile image */}
      {/* Profile image */}
      <div className="shrink-0 animate-fadeIn [animation-delay:200ms]">
        <div className="relative h-64 w-64 sm:h-72 sm:w-72 md:h-80 md:w-80">
          <div className="absolute inset-0 rounded-full bg-gh-accent/20 blur-2xl" />
          <img
            src={profileImg}
            alt="Aryush Khatri"
            className="relative h-full w-full rounded-full object-cover object-top ring-2 ring-gh-accent/40"
          />
        </div>
      </div>
    </div>
  )
}
