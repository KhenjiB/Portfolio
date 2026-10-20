import { Github, ExternalLink, ArrowUpRight } from 'lucide-react'

// A repo/demo link that falls back to a labeled placeholder when the URL is empty.
export function ProjectLink({ href, icon: Icon, label, missing }) {
  if (!href) {
    return (
      <span
        className="inline-flex cursor-not-allowed items-center gap-1.5 rounded-full border border-dashed border-slate-300 px-3 py-1.5 text-xs text-slate-400 dark:border-white/10 dark:text-slate-500"
        title="Add the URL in src/data/projects.js"
      >
        <Icon size={14} /> {missing}
      </span>
    )
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:border-cyan-400 hover:text-cyan-600 dark:border-white/10 dark:text-slate-200 dark:hover:text-cyan-300"
    >
      <Icon size={14} /> {label}
    </a>
  )
}

// Generated thumbnail used until a real screenshot is added.
function Thumbnail({ project }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`Screenshot of ${project.title}`}
        loading="lazy"
        className="size-full object-cover transition duration-500 group-hover:scale-105"
      />
    )
  }
  return (
    <div className={`relative size-full bg-gradient-to-br ${project.accent} transition duration-500 group-hover:scale-105`} aria-hidden="true">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(255_255_255/0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.12)_1px,transparent_1px)] bg-[size:28px_28px]" />
      {/* Mini window mock */}
      <div className="absolute inset-x-8 top-8 bottom-0 rounded-t-xl border border-white/30 bg-white/15 p-3 backdrop-blur-sm">
        <div className="flex gap-1.5">
          <span className="size-2 rounded-full bg-white/70" />
          <span className="size-2 rounded-full bg-white/50" />
          <span className="size-2 rounded-full bg-white/30" />
        </div>
        <div className="mt-4 grid grid-cols-[1fr_2fr] gap-3">
          <div className="space-y-2">
            <div className="h-2 rounded bg-white/50" />
            <div className="h-2 w-3/4 rounded bg-white/35" />
            <div className="h-2 w-5/6 rounded bg-white/35" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="h-10 rounded-md bg-white/30" />
            <div className="h-10 rounded-md bg-white/20" />
            <div className="col-span-2 h-6 rounded-md bg-white/15" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProjectCard({ project, onOpen }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1.5 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/10 dark:border-white/8 dark:bg-ink-900">
      <div className="aspect-[16/10] overflow-hidden">
        <Thumbnail project={project} />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-[11px] tracking-widest text-cyan-600 uppercase dark:text-cyan-400">{project.category}</p>
        <h3 className="mt-2 text-lg leading-snug font-semibold">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed">{project.description}</p>
        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies used">
          {project.tech.map((t) => (
            <li key={t} className="rounded-md bg-slate-100 px-2 py-0.5 font-mono text-[11px] text-slate-600 dark:bg-white/5 dark:text-slate-400">
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-5 dark:border-white/5">
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="inline-flex items-center gap-1 rounded-full bg-slate-900 px-3.5 py-1.5 text-xs font-semibold text-white transition hover:bg-cyan-600 dark:bg-white dark:text-slate-900 dark:hover:bg-cyan-300"
          >
            View Details <ArrowUpRight size={14} />
          </button>
          <ProjectLink href={project.repo} icon={Github} label="Code" missing="Repo soon" />
          <ProjectLink href={project.demo} icon={ExternalLink} label="Demo" missing="Not deployed" />
        </div>
      </div>
    </article>
  )
}
