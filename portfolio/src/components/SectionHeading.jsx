import Reveal from './Reveal'

export default function SectionHeading({ index, eyebrow, title, description, id }) {
  return (
    <Reveal className="mb-12 max-w-2xl md:mb-16">
      <p className="mb-4 flex items-center gap-3 font-mono text-xs tracking-widest text-cyan-600 uppercase dark:text-cyan-400">
        <span className="text-slate-400 dark:text-slate-600">{index}</span>
        <span className="h-px w-8 bg-gradient-to-r from-cyan-500 to-violet-500" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 id={id} className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && <p className="mt-5 text-base leading-relaxed sm:text-lg">{description}</p>}
    </Reveal>
  )
}
