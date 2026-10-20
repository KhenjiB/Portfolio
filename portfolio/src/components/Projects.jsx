import { useCallback, useMemo, useState } from 'react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import { projects } from '../data/projects'

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState(null)

  // Filters are built from the data: every category plus every technology.
  const filters = useMemo(() => {
    const categories = [...new Set(projects.map((p) => p.category))]
    const tech = [...new Set(projects.flatMap((p) => p.tech))].filter((t) => !categories.includes(t))
    return ['All', ...categories, ...tech]
  }, [])

  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter || p.tech.includes(filter))),
    [filter]
  )

  const close = useCallback(() => setSelected(null), [])

  return (
    <section id="projects" aria-labelledby="projects-title" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="projects-title"
          index="03"
          eyebrow="Featured projects"
          title="Things I've built."
          description="Academic and personal projects covering web apps, role-based systems, and database-driven tools."
        />

        <Reveal>
          <div role="group" aria-label="Filter projects" className="-mx-4 mb-10 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={`shrink-0 rounded-full border px-4 py-1.5 text-sm transition ${
                  filter === f
                    ? 'border-transparent bg-gradient-to-r from-cyan-500 to-violet-600 font-medium text-white shadow-md shadow-cyan-500/20'
                    : 'border-slate-200 text-slate-600 hover:border-cyan-400/60 hover:text-slate-900 dark:border-white/10 dark:text-slate-400 dark:hover:text-white'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <p className="sr-only" aria-live="polite">
          Showing {visible.length} {visible.length === 1 ? 'project' : 'projects'}
        </p>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <li key={project.id}>
              <ProjectCard project={project} onOpen={setSelected} />
            </li>
          ))}
        </ul>
      </div>

      {selected && <ProjectModal project={selected} onClose={close} />}
    </section>
  )
}
