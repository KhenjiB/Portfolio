import { useEffect, useRef, useState } from 'react'
import { profile, education, navLinks } from '../data/profile'
import { skillGroups } from '../data/skills'
import { projects } from '../data/projects'

// A small working terminal. Visitors can type commands (or tap the shortcuts
// underneath) and get real answers pulled from the data files.

const PROMPT_USER = 'guest'
const PROMPT_HOST = 'marq'

const sectionIds = navLinks.map((l) => l.id).concat('services')

function Line({ children, tone = 'out' }) {
  const tones = {
    out: 'text-zinc-300',
    dim: 'text-zinc-500',
    err: 'text-rose-400',
    ok: 'text-emerald-400',
    key: 'text-cyan-300',
  }
  return <div className={`whitespace-pre-wrap break-words ${tones[tone]}`}>{children}</div>
}

function Prompt({ cmd }) {
  return (
    <div className="break-words">
      <span className="text-emerald-400">{PROMPT_USER}@{PROMPT_HOST}</span>
      <span className="text-zinc-500">:</span>
      <span className="text-cyan-300">~</span>
      <span className="text-zinc-500">$ </span>
      <span className="text-zinc-100">{cmd}</span>
    </div>
  )
}

function pad(text, width) {
  return text.length >= width ? text + ' ' : text + ' '.repeat(width - text.length)
}

function run(raw) {
  const input = raw.trim()
  const [cmd, ...args] = input.split(/\s+/)
  const arg = args.join(' ').toLowerCase()

  switch (cmd.toLowerCase()) {
    case '':
      return []
    case 'help':
      return [
        <Line key="h" tone="dim">available commands:</Line>,
        ...[
          ['whoami', 'who I am'],
          ['about', 'what I want to do'],
          ['skills', 'languages and tools'],
          ['projects', 'things I have built'],
          ['education', 'where I study'],
          ['contact', 'how to reach me'],
          ['cd <section>', 'jump to a section, e.g. cd projects'],
          ['clear', 'clear the screen'],
        ].map(([c, d]) => (
          <Line key={c}>
            <span className="text-cyan-300">{pad(c, 14)}</span>
            <span className="text-zinc-400">{d}</span>
          </Line>
        )),
      ]
    case 'whoami':
      return [
        <Line key="n" tone="ok">{profile.fullName}</Line>,
        <Line key="t">{profile.title}</Line>,
        <Line key="a" tone="dim">status: {profile.availability.toLowerCase()}</Line>,
      ]
    case 'about':
      return [<Line key="a">{profile.careerGoal}</Line>]
    case 'skills':
      return skillGroups.map((g) => (
        <Line key={g.title}>
          <span className="text-cyan-300">{pad(g.title.split(' ')[0].toLowerCase(), 10)}</span>
          {g.skills.join(', ')}
        </Line>
      ))
    case 'projects':
      return [
        ...projects.map((p, i) => (
          <Line key={p.id}>
            <span className="text-zinc-500">{String(i + 1).padStart(2, '0')} </span>
            <span className="text-zinc-100">{p.title}</span>
            {'\n   '}
            <span className="text-zinc-500">{p.tech.join(' · ')}</span>
          </Line>
        )),
        <Line key="hint" tone="dim">tip: run `cd projects` to see them below</Line>,
      ]
    case 'education':
      return education.map((e) => (
        <Line key={e.school}>
          <span className="text-zinc-100">{e.degree}</span>
          {'\n'}
          {e.school} <span className="text-zinc-500">· {e.status}</span>
        </Line>
      ))
    case 'contact': {
      const rows = [
        ['email', profile.email],
        ['github', profile.github],
        ['linkedin', profile.linkedin],
        ...(profile.facebook ? [['facebook', profile.facebook]] : []),
      ]
      return rows.map(([k, v]) => (
        <Line key={k}>
          <span className="text-cyan-300">{pad(k, 10)}</span>
          {v ? (
            <a
              href={k === 'email' ? `mailto:${v}` : v}
              target={k === 'email' ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="underline decoration-zinc-600 underline-offset-2 hover:text-cyan-300"
            >
              {v.replace(/^https?:\/\/(www\.)?/, '').replace(/[?#].*$/, '').replace(/\/$/, '')}
            </a>
          ) : (
            <span className="text-zinc-500">not added yet</span>
          )}
        </Line>
      ))
    }
    case 'cd': {
      const target = arg.replace(/^#|\/$/g, '')
      if (!target || target === '~') {
        document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })
        return []
      }
      if (sectionIds.includes(target)) {
        document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' })
        return [<Line key="cd" tone="dim">→ #{target}</Line>]
      }
      return [<Line key="e" tone="err">cd: no such section: {arg}</Line>]
    }
    case 'ls':
      return [<Line key="ls" tone="key">{sectionIds.join('  ')}</Line>]
    case 'sudo':
      return [<Line key="s" tone="err">nice try 🙂</Line>]
    default:
      return [
        <Line key="e" tone="err">command not found: {cmd}</Line>,
        <Line key="h" tone="dim">type `help` to see what I can do</Line>,
      ]
  }
}

const shortcuts = ['whoami', 'skills', 'projects', 'contact', 'help']

export default function Terminal() {
  const [entries, setEntries] = useState(() => [
    { id: 0, cmd: null, out: [<Line key="w" tone="dim">welcome! type a command or tap one below.</Line>] },
    { id: 1, cmd: 'whoami', out: run('whoami') },
  ])
  const [value, setValue] = useState('')
  const [history, setHistory] = useState([])
  const [cursor, setCursor] = useState(-1)
  const scrollRef = useRef(null)
  const inputRef = useRef(null)
  const nextId = useRef(2)

  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [entries])

  const submit = (cmd) => {
    if (cmd.trim().toLowerCase() === 'clear') {
      setEntries([])
    } else {
      setEntries((e) => [...e, { id: nextId.current++, cmd, out: run(cmd) }])
    }
    if (cmd.trim()) setHistory((h) => [cmd, ...h].slice(0, 30))
    setCursor(-1)
    setValue('')
  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      submit(value)
    } else if (e.key === 'ArrowUp' && history.length) {
      e.preventDefault()
      const next = Math.min(cursor + 1, history.length - 1)
      setCursor(next)
      setValue(history[next])
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const next = cursor - 1
      setCursor(next)
      setValue(next < 0 ? '' : history[next])
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault()
      setEntries([])
    }
  }

  return (
    <div className="w-full max-w-lg">
      <div className="overflow-hidden rounded-lg border border-zinc-800 bg-[#0d0d10] shadow-xl shadow-black/30">
        <div className="flex items-center justify-between border-b border-zinc-800 bg-[#131317] px-3.5 py-2 font-mono text-[11px] text-zinc-500">
          <span>
            {PROMPT_USER}@{PROMPT_HOST}: ~
          </span>
          <span>bash</span>
        </div>

        <div
          ref={scrollRef}
          onClick={() => inputRef.current?.focus({ preventScroll: true })}
          className="h-72 cursor-text space-y-2 overflow-y-auto p-4 font-mono text-[12.5px] leading-relaxed sm:h-80 sm:text-[13px]"
          role="log"
          aria-label="Terminal output"
          aria-live="polite"
        >
          {entries.map((entry) => (
            <div key={entry.id}>
              {entry.cmd !== null && <Prompt cmd={entry.cmd} />}
              {entry.out}
            </div>
          ))}

          <label className="flex items-center">
            <span className="sr-only">Type a command</span>
            <span className="shrink-0" aria-hidden="true">
              <span className="text-emerald-400">{PROMPT_USER}@{PROMPT_HOST}</span>
              <span className="text-zinc-500">:</span>
              <span className="text-cyan-300">~</span>
              <span className="text-zinc-500">$&nbsp;</span>
            </span>
            <input
              ref={inputRef}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={onKeyDown}
              spellCheck={false}
              autoCapitalize="off"
              autoComplete="off"
              autoCorrect="off"
              className="min-w-0 flex-1 bg-transparent text-zinc-100 caret-cyan-300 outline-none focus-visible:outline-none"
            />
          </label>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5" aria-label="Terminal shortcuts">
        {shortcuts.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => submit(s)}
            className="rounded-md border border-slate-200 px-2.5 py-1 font-mono text-xs text-slate-500 transition hover:border-cyan-400/60 hover:text-cyan-600 dark:border-white/10 dark:text-slate-400 dark:hover:text-cyan-300"
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  )
}