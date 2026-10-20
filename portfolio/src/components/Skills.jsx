import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="relative border-y border-slate-200 bg-white py-24 md:py-32 dark:border-white/5 dark:bg-ink-900/50"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="skills-title"
          index="02"
          eyebrow="Technical skills"
          title="The tools I build with."
          description="Grouped by where they sit in an application, from what the user sees to where the data lives."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {skillGroups.map(({ title, icon: Icon, description, skills }, i) => (
            <Reveal
              key={title}
              delay={i * 80}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-cyan-400/50 sm:p-8 dark:border-white/8 dark:bg-ink-950"
            >
              <div
                className="pointer-events-none absolute -top-16 -right-16 size-40 rounded-full bg-cyan-500/10 opacity-0 blur-3xl transition group-hover:opacity-100"
                aria-hidden="true"
              />
              <div className="flex items-start gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-slate-200 bg-white text-cyan-600 dark:border-white/10 dark:bg-ink-850 dark:text-cyan-300">
                  <Icon size={22} />
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-1 text-sm">{description}</p>
                </div>
              </div>
              <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${title} skills`}>
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 font-mono text-xs text-slate-700 transition hover:-translate-y-0.5 hover:border-cyan-400/60 hover:text-cyan-600 sm:text-sm dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300 dark:hover:text-cyan-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
