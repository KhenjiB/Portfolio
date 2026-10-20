import { Github, Linkedin, Mail, FileDown } from 'lucide-react'
import { profile } from '../data/profile'

// Shared helpers so every button handles "not set yet" the same way.

export const socials = [
  { label: 'GitHub', href: profile.github, icon: Github },
  { label: 'LinkedIn', href: profile.linkedin, icon: Linkedin },
  { label: 'Email', href: profile.email ? `mailto:${profile.email}` : '', icon: Mail },
]

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
