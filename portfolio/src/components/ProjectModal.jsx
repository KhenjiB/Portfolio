import { useEffect, useRef } from 'react'
import { X, Github, ExternalLink, Sparkles } from 'lucide-react'
import { ProjectLink } from './ProjectCard'

export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    const previouslyFocused = document.activeElement
    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      previouslyFocused?.focus?.()
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-6" role="presentation">
      <button
        type="button"
        aria-label="Close project details"
        tabIndex={-1}
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl border border-slate-200 bg-white shadow-2xl sm:rounded-3xl dark:border-white/10 dark:bg-ink-900"
      >
        <div className={`relative h-36 bg-gradient-to-br ${project.accent} sm:h-44`}>
          {project.image && (
            <img src={project.image} alt={`Screenshot of ${project.title}`} className="size-full object-cover" />
          )}
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 grid size-9 place-items-center rounded-full bg-black/30 text-white backdrop-blur transition hover:bg-black/50"
          >
            <X size={18} />
          </button>
        </div>
        <div className="p-6 sm:p-8">
          <p className="font-mono text-xs tracking-widest text-cyan-600 uppercase dark:text-cyan-400">{project.category}</p>
          <h3 id="project-modal-title" className="mt-2 text-2xl font-bold">
            {project.title}
          </h3>
          <p className="mt-4 leading-relaxed">{project.details}</p>

          <div className="mt-6 flex gap-3 rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-4">
            <Sparkles size={18} className="mt-0.5 shrink-0 text-cyan-500" />
            <p className="text-sm text-slate-700 dark:text-slate-300">
              <span className="font-semibold text-slate-900 dark:text-white">Key features: </span>
              {project.highlight}
            </p>
          </div>

          <h4 className="mt-6 text-sm font-semibold">Built with</h4>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <li key={t} className="rounded-md bg-slate-100 px-2.5 py-1 font-mono text-xs text-slate-700 dark:bg-white/5 dark:text-slate-300">
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <ProjectLink href={project.repo} icon={Github} label="Source code" missing="Repo coming soon" />
            <ProjectLink href={project.demo} icon={ExternalLink} label="Live demo" missing="Not deployed" />
          </div>
        </div>
      </div>
    </div>
  )
}
