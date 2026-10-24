import { MonitorSmartphone, PanelsTopLeft, Plug, DatabaseZap, Bug, Building2 } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const services = [
  { icon: MonitorSmartphone, title: 'Responsive Websites', text: 'Sites that look right and work well on phones, tablets, and desktops.' },
  { icon: PanelsTopLeft, title: 'Frontend Interfaces', text: 'Clean, component-based UIs built with React and Tailwind CSS.' },
  { icon: Plug, title: 'Basic Backend Integration', text: 'Connecting interfaces to APIs, authentication, and server-side logic.' },
  { icon: DatabaseZap, title: 'Database Design', text: 'Planning tables and relationships, and writing the queries that use them.' },
  { icon: Bug, title: 'Bug Fixes & Improvements', text: 'Tracking down issues and polishing existing websites.' },
  { icon: Building2, title: 'Academic & Small-Business Systems', text: 'Record-keeping, ordering, and management systems for real needs.' },
]

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="services-title"
          index="05"
          eyebrow="What I can do"
          title="How I can help."
          description="The kinds of work I'm ready to take on, for internships, entry-level roles, or small freelance projects."
        />
        <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3 dark:border-white/8 dark:bg-white/8">
          {services.map(({ icon: Icon, title, text }, i) => (
            <Reveal
              as="li"
              key={title}
              delay={(i % 3) * 80}
              className="group bg-white p-7 transition hover:bg-slate-50 dark:bg-ink-950 dark:hover:bg-ink-900"
            >
              <Icon size={22} className="text-cyan-600 transition group-hover:-translate-y-0.5 group-hover:text-violet-500 dark:text-cyan-300 dark:group-hover:text-violet-400" />
              <h3 className="mt-5 text-base font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed">{text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}