import { useEffect, useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { navLinks, profile } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'
import { ResumeButton } from './links'

const sectionIds = navLinks.map((l) => l.id)

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu with Escape, and when resizing to desktop.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth >= 1024 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  const ThemeIcon = theme === 'dark' ? Sun : Moon

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        open
          ? 'border-b border-slate-200 bg-white shadow-2xl dark:border-white/5 dark:bg-ink-950'
          : scrolled
            ? 'border-b border-slate-200/80 bg-white/75 backdrop-blur-xl dark:border-white/5 dark:bg-ink-950/70'
            : 'border-b border-transparent'
      }`}
    >
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#home" className="group flex items-center gap-2.5" aria-label={`${profile.fullName}, back to top`}>
          <span className="grid size-9 place-items-center rounded-lg bg-gradient-to-br from-cyan-400 to-violet-600 font-display text-sm font-bold text-white shadow-lg shadow-cyan-500/20 transition group-hover:rotate-6">
            {profile.initials}
          </span>
          <span className="hidden font-display text-sm font-semibold text-slate-900 sm:block dark:text-white">
            {profile.shortName}
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? 'true' : undefined}
                className={`relative rounded-full px-3.5 py-2 text-sm transition ${
                  active === link.id
                    ? 'text-slate-900 dark:text-white'
                    : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                }`}
              >
                {link.label}
                {active === link.id && (
                  <span className="absolute inset-x-3.5 -bottom-0.5 h-px bg-gradient-to-r from-cyan-400 to-violet-500" aria-hidden="true" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="grid size-9 place-items-center rounded-full border border-slate-200 text-slate-600 transition hover:border-cyan-400/60 hover:text-cyan-500 dark:border-white/10 dark:text-slate-300"
          >
            <ThemeIcon size={16} />
          </button>
          <div className="hidden sm:block">
            <ResumeButton compact />
          </div>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid size-9 place-items-center rounded-full border border-slate-200 text-slate-700 lg:hidden dark:border-white/10 dark:text-slate-200"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-slate-200 px-4 pb-6 lg:hidden dark:border-white/5">
          <ul className="flex flex-col pt-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between rounded-lg px-3 py-3 font-display text-lg ${
                    active === link.id ? 'text-cyan-600 dark:text-cyan-300' : 'text-slate-700 dark:text-slate-200'
                  }`}
                >
                  {link.label}
                  {active === link.id && <span className="size-1.5 rounded-full bg-cyan-400" aria-hidden="true" />}
                </a>
              </li>
            ))}
          </ul>
          <ResumeButton className="mt-3 w-full" />
        </div>
      )}
    </header>
  )
}