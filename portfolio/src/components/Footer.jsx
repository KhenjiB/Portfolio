import { ArrowUp } from 'lucide-react'
import { navLinks, profile } from '../data/profile'
import { SocialIcons } from './links'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-slate-200 dark:border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <a href="#home" className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-lg bg-gradient-to-br from-cyan-400 to-violet-600 font-display text-sm font-bold text-white">
              {profile.initials}
            </span>
            <span className="font-display font-semibold text-slate-900 dark:text-white">{profile.shortName}</span>
          </a>
          <p className="mt-3 text-sm">{profile.title}</p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className="transition hover:text-cyan-500">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <SocialIcons />
      </div>
      <div className="border-t border-slate-200 dark:border-white/5">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-5 text-xs sm:px-6">
          <p>
            © {year} {profile.fullName}. All rights reserved.
          </p>
          <a href="#home" className="inline-flex items-center gap-1 transition hover:text-cyan-500" aria-label="Back to top">
            Top <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  )
}
