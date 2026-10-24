import { ArrowRight, MapPin } from 'lucide-react'
import { profile } from '../data/profile'
import { ResumeButton, SocialIcons } from './links'
import Terminal from './Terminal'

function Visual() {
  // Shows the profile photo when set in profile.js; otherwise an interactive terminal.
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
    <div className="flex w-full justify-center lg:justify-end">
      <Terminal />
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

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-12">
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