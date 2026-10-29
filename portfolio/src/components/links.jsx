import { Github, Linkedin, Mail, FileDown } from 'lucide-react'
import { profile } from '../data/profile'

// Shared helpers so every button handles "not set yet" the same way.

// Facebook logo drawn to match the Lucide icon style (same size/className props).
export function Facebook({ size = 24, className = '', ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

// `optional: true` means the button is hidden completely until a link is added.
export const socials = [
  { label: 'GitHub', href: profile.github, icon: Github },
  { label: 'LinkedIn', href: profile.linkedin, icon: Linkedin },
  { label: 'Facebook', href: profile.facebook, icon: Facebook, optional: true },
  { label: 'Email', href: profile.email ? `mailto:${profile.email}` : '', icon: Mail },
].filter((s) => s.href || !s.optional)

export function SocialIcons({ className = '', size = 18 }) {
  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {socials.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          {href ? (
            <a
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={label}
              className="grid size-10 place-items-center rounded-full border border-slate-200 text-slate-500 transition hover:-translate-y-0.5 hover:border-cyan-400/60 hover:text-cyan-500 dark:border-white/10 dark:text-slate-400 dark:hover:text-cyan-300"
            >
              <Icon size={size} />
            </a>
          ) : (
            <span
              title={`${label} link not added yet. Set it in src/data/profile.js`}
              aria-label={`${label} (link not added yet)`}
              className="grid size-10 cursor-not-allowed place-items-center rounded-full border border-dashed border-slate-300 text-slate-400 dark:border-white/10 dark:text-slate-600"
            >
              <Icon size={size} />
            </span>
          )}
        </li>
      ))}
    </ul>
  )
}

export function ResumeButton({ className = '', compact = false }) {
  const base = `inline-flex items-center justify-center gap-2 rounded-full font-medium transition ${
    compact ? 'px-4 py-2 text-sm' : 'px-6 py-3 text-sm sm:text-base'
  } ${className}`

  if (!profile.resume) {
    return (
      <span
        title="Add your resume PDF to /public and set profile.resume in src/data/profile.js"
        aria-disabled="true"
        className={`${base} cursor-not-allowed border border-dashed border-slate-300 text-slate-400 dark:border-white/15 dark:text-slate-500`}
      >
        <FileDown size={16} /> {compact ? 'Resume' : 'Resume (coming soon)'}
      </span>
    )
  }
  return (
    <a
      href={profile.resume}
      download
      className={`${base} border border-slate-300 text-slate-800 hover:border-cyan-400 hover:text-cyan-600 dark:border-white/15 dark:text-white dark:hover:border-cyan-400/70 dark:hover:text-cyan-300`}
    >
      <FileDown size={16} /> {compact ? 'Resume' : 'Download Resume'}
    </a>
  )
}