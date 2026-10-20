import { Code2, Globe, Database, GraduationCap } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { profile } from '../data/profile'

const highlights = [
  { icon: Code2, title: 'Software Development', text: 'Turning requirements into working, well-structured programs.' },
  { icon: Globe, title: 'Web Application Development', text: 'Responsive front ends wired to real back-end logic.' },
  { icon: Database, title: 'Database Management', text: 'Designing schemas and queries that keep data reliable.' },
  { icon: GraduationCap, title: 'Continuous Learning', text: 'Picking up new tools and frameworks as projects demand.' },
]

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading id="about-title" index="01" eyebrow="About me" title="Building software that people actually enjoy using." />

        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Reveal className="space-y-5 text-base leading-relaxed sm:text-lg">
            <p>
              I'm <span className="font-medium text-slate-900 dark:text-white">{profile.fullName}</span>, a BS
              Information Technology student at STI College Legazpi. My interests sit where software development, web
              development, and databases meet: building the interface a person clicks on and the logic and data that make it
              work.
            </p>
            <p>
              When I take on a technical problem, I start by understanding what the user really needs, break the work into
              small pieces I can test, and iterate until it holds up. I'd rather ship something simple that works than
              something clever that breaks.
            </p>
            <p>
              I care about writing maintainable code, with clear names, organized files, and components that can be reused,
              so the next person (often future me) can pick it up easily. I'm always learning, whether that's a new framework,
              a better database pattern, or a cleaner way to structure a project.
            </p>
            <p className="border-l-2 border-cyan-400 pl-4 text-slate-800 italic dark:text-slate-200">
              Goal: {profile.careerGoal}
            </p>
          </Reveal>

          <ul className="grid gap-4 sm:grid-cols-2">
            {highlights.map(({ icon: Icon, title, text }, i) => (
              <Reveal
                as="li"
                key={title}
                delay={i * 80}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/5 dark:border-white/8 dark:bg-ink-900"
              >
                <span className="mb-5 grid size-11 place-items-center rounded-xl bg-gradient-to-br from-cyan-400/15 to-violet-500/15 text-cyan-600 ring-1 ring-cyan-400/20 transition group-hover:scale-110 dark:text-cyan-300">
                  <Icon size={20} />
                </span>
                <h3 className="text-base font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed">{text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
