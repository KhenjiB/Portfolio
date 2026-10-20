import { GraduationCap, CheckCircle2 } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { education } from '../data/profile'

export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-title"
      className="border-y border-slate-200 bg-white py-24 md:py-32 dark:border-white/5 dark:bg-ink-900/50"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading id="education-title" index="04" eyebrow="Education" title="Where I'm learning the craft." />

        <ol className="relative ml-3 border-l border-slate-200 dark:border-white/10">
          {education.map((item) => (
            <Reveal as="li" key={item.school} className="relative pb-4 pl-8 sm:pl-12">
              <span className="absolute top-1 -left-[1.15rem] grid size-9 place-items-center rounded-full border border-cyan-400/40 bg-white text-cyan-600 shadow-lg shadow-cyan-500/20 dark:bg-ink-950 dark:text-cyan-300">
                <GraduationCap size={16} />
              </span>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 dark:border-white/8 dark:bg-ink-950">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-cyan-400/10 px-3 py-1 font-mono text-xs text-cyan-700 ring-1 ring-cyan-400/30 dark:text-cyan-300">
                    {item.status}
                  </span>
                  <span className="font-mono text-xs text-slate-400">{item.period}</span>
                </div>
                <h3 className="mt-4 text-xl font-bold sm:text-2xl">{item.degree}</h3>
                <p className="mt-1 font-medium text-slate-700 dark:text-slate-300">{item.school}</p>
                <p className="mt-4 max-w-3xl leading-relaxed">{item.description}</p>

                <h4 className="mt-7 text-sm font-semibold">Relevant projects &amp; learning</h4>
                <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                  {item.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-cyan-500" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
