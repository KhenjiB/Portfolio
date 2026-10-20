import { ArrowRight, MapPin } from 'lucide-react'
import { profile } from '../data/profile'
import { ResumeButton, SocialIcons } from './links'

function CodeCard() {
  return (
    <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white/80 shadow-2xl shadow-slate-900/10 backdrop-blur dark:border-white/10 dark:bg-ink-900/80 dark:shadow-black/40">
      <div className="flex items-center gap-2 border-b border-slate-200 px-4 py-3 dark:border-white/5">
        <span className="size-3 rounded-full bg-rose-400/80" />
        <span className="size-3 rounded-full bg-amber-400/80" />
        <span className="size-3 rounded-full bg-emerald-400/80" />
        <span className="ml-3 font-mono text-xs text-slate-400 dark:text-slate-500">developer.js</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
        <code>
          <span className="text-violet-600 dark:text-violet-400">const</span>{' '}
          <span className="text-cyan-700 dark:text-cyan-300">developer</span> = {'{'}
          {'\n'}  name: <span className="text-emerald-600 dark:text-emerald-300">'{profile.firstName}'</span>,
          {'\n'}  role: <span className="text-emerald-600 dark:text-emerald-300">'IT Student'</span>,
          {'\n'}  school: <span className="text-emerald-600 dark:text-emerald-300">'STI College Legazpi'</span>,
          {'\n'}  stack: [<span className="text-emerald-600 dark:text-emerald-300">'React'</span>,{' '}
          <span className="text-emerald-600 dark:text-emerald-300">'Tailwind'</span>,{' '}
          <span className="text-emerald-600 dark:text-emerald-300">'PHP'</span>,
          {'\n'}          <span className="text-emerald-600 dark:text-emerald-300">'C#'</span>,{' '}
          <span className="text-emerald-600 dark:text-emerald-300">'Java'</span>,{' '}
          <span className="text-emerald-600 dark:text-emerald-300">'MySQL'</span>],
          {'\n'}  learning: <span className="text-amber-600 dark:text-amber-300">true</span>,
          {'\n'}{'}'}
          {'\n\n'}
          <span className="text-slate-400 dark:text-slate-500">// ready to build</span>
          {'\n'}
          <span className="text-cyan-700 dark:text-cyan-300">developer</span>.
          <span className="text-violet-600 dark:text-violet-400">build</span>()
          <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-cyan-400 motion-safe:animate-blink" aria-hidden="true" />
        </code>
      </pre>
    </div>
  )
}

function Visual() {
  // Shows the profile photo when set in profile.js; otherwise a developer-themed visual.
  if (profile.photo) {
    return (
      <div className="relative">
        <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-cyan-400/40 to-violet-600/40 blur-2xl" aria-hidden="true" />
        <img
          src={profile.photo}
          alt={`Portrait of ${profile.fullName}`}
          className="relative aspect-square w-72 rounded-[2rem] border border-white/10 object-cover sm:w-80"
        />
      </div>
    )
  }
  return (
    <div className="relative flex w-full justify-center">
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 to-violet-600/25 blur-3xl" aria-hidden="true" />
      <div className="relative w-full max-w-md">
        <CodeCard />
        <div className="absolute -bottom-5 -left-3 hidden items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs shadow-lg sm:flex dark:border-white/10 dark:bg-ink-800">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full rounded-full bg-emerald-400 opacity-75 motion-safe:animate-ping" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
          </span>
          <span className="font-medium text-slate-700 dark:text-slate-200">{profile.availability}</span>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" aria-label="Introduction" className="relative isolate overflow-hidden pt-28 pb-20 sm:pt-36 md:pb-28">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute -top-32 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[120px] motion-safe:animate-float dark:bg-cyan-500/10" />
        <div className="absolute top-40 -right-24 size-[28rem] rounded-full bg-violet-600/15 blur-[120px] motion-safe:animate-float [animation-delay:-4s] dark:bg-violet-600/15" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(148_163_184/0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgb(148_163_184/0.08)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-3 py-1 font-mono text-xs text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-400">
            <MapPin size={12} className="text-cyan-500" /> BS Information Technology · {profile.location}
          </p>
          <p className="font-mono text-sm text-cyan-600 sm:text-base dark:text-cyan-400">Hello, I'm</p>
          <h1 className="mt-3 text-4xl leading-[1.05] font-extrabold tracking-tight sm:text-6xl lg:text-[4.25rem]">
            {profile.firstName}
            <span className="block bg-gradient-to-r from-cyan-500 via-sky-500 to-violet-500 bg-clip-text text-transparent dark:from-cyan-300 dark:via-sky-400 dark:to-violet-400">
              {profile.lastName}
            </span>
          </h1>
          <p className="mt-6 font-display text-xl font-medium text-slate-800 sm:text-2xl dark:text-slate-200">
            {profile.heroTitle}
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed sm:text-lg">{profile.intro}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition hover:shadow-violet-500/30 hover:brightness-110 sm:text-base"
            >
              View My Projects
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </a>
            <ResumeButton />
          </div>

          <SocialIcons className="mt-8" />
        </div>

        <Visual />
      </div>
    </section>
  )
}
