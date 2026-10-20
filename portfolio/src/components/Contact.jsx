import { useState } from 'react'
import { Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle, Info, Loader2 } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { profile } from '../data/profile'

const emptyForm = { name: '', email: '', subject: '', message: '' }

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) errors.email = 'Please enter your email.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Please enter a valid email address.'
  if (!values.subject.trim()) errors.subject = 'Please add a subject.'
  if (values.message.trim().length < 10) errors.message = 'Message should be at least 10 characters.'
  return errors
}

function Field({ id, label, error, as: Tag = 'input', ...props }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
        {label}
      </label>
      <Tag
        id={id}
        name={id}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition outline-none focus:ring-2 focus:ring-cyan-400/40 dark:bg-ink-950 dark:text-white dark:placeholder:text-slate-600 ${
          error ? 'border-rose-400' : 'border-slate-200 focus:border-cyan-400 dark:border-white/10'
        }`}
        {...props}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-rose-500">
          {error}
        </p>
      )}
    </div>
  )
}

function ContactRow({ icon: Icon, label, value, href }) {
  const content = (
    <>
      <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-slate-200 bg-white text-cyan-600 dark:border-white/10 dark:bg-ink-900 dark:text-cyan-300">
        <Icon size={18} />
      </span>
      <span className="min-w-0">
        <span className="block text-xs text-slate-400">{label}</span>
        <span className={`block truncate text-sm font-medium ${href ? 'text-slate-900 dark:text-white' : 'text-slate-400 italic dark:text-slate-500'}`}>
          {value}
        </span>
      </span>
    </>
  )
  return (
    <li>
      {href ? (
        <a
          href={href}
          target={href.startsWith('mailto:') ? undefined : '_blank'}
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-xl p-2 transition hover:bg-slate-100 dark:hover:bg-white/5"
        >
          {content}
        </a>
      ) : (
        <div className="flex items-center gap-4 p-2" title="Set this in src/data/profile.js">
          {content}
        </div>
      )}
    </li>
  )
}

export default function Contact() {
  const [values, setValues] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ type: 'idle', message: '' })

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length) {
      setStatus({ type: 'error', message: 'Please fix the highlighted fields.' })
      return
    }

    // Option 1: a real form service (e.g. Formspree) is configured.
    if (profile.contactFormEndpoint) {
      setStatus({ type: 'loading', message: 'Sending…' })
      try {
        const res = await fetch(profile.contactFormEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(values),
        })
        if (!res.ok) throw new Error(`Request failed (${res.status})`)
        setValues(emptyForm)
        setStatus({ type: 'success', message: "Thanks! Your message was sent. I'll get back to you soon." })
      } catch {
        setStatus({ type: 'error', message: 'Something went wrong sending your message. Please try emailing me directly.' })
      }
      return
    }

    // Option 2: no backend, so hand the message to the visitor's email app.
    if (profile.email) {
      const body = `${values.message}\n\n— ${values.name} (${values.email})`
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`
      setStatus({
        type: 'info',
        message: 'Your email app should open with this message filled in. Press send there to deliver it.',
      })
      return
    }

    // Option 3: nothing configured yet. Say so honestly.
    setStatus({
      type: 'info',
      message:
        'The contact form isn’t connected yet, so this message was not sent. (Site owner: add your email or a Formspree endpoint in src/data/profile.js.)',
    })
  }

  const statusStyles = {
    success: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-700 dark:text-emerald-300',
    error: 'border-rose-400/30 bg-rose-400/10 text-rose-700 dark:text-rose-300',
    info: 'border-cyan-400/30 bg-cyan-400/10 text-cyan-800 dark:text-cyan-200',
    loading: 'border-slate-300 bg-slate-100 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300',
  }
  const StatusIcon = { success: CheckCircle2, error: AlertCircle, info: Info, loading: Loader2 }[status.type]

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative isolate overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 size-[40rem] -translate-x-1/2 translate-y-1/2 rounded-full bg-violet-600/10 blur-[120px]" aria-hidden="true" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="contact-title"
          index="06"
          eyebrow="Contact"
          title="Let's Build Something Great."
          description="Recruiters, clients, and fellow developers: whether it's an internship, a project idea, or just a question about my work, I'd love to hear from you."
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
          <Reveal>
            <ul className="space-y-2">
              <ContactRow icon={Mail} label="Email" value={profile.email || 'your.email@example.com (add in profile.js)'} href={profile.email ? `mailto:${profile.email}` : ''} />
              <ContactRow icon={Github} label="GitHub" value={profile.github ? profile.github.replace(/^https?:\/\//, '') : 'GitHub link coming soon'} href={profile.github} />
              <ContactRow icon={Linkedin} label="LinkedIn" value={profile.linkedin ? profile.linkedin.replace(/^https?:\/\/(www\.)?/, '') : 'LinkedIn link coming soon'} href={profile.linkedin} />
            </ul>
            <p className="mt-8 rounded-xl border border-slate-200 p-5 text-sm leading-relaxed dark:border-white/8">
              <span className="font-semibold text-slate-900 dark:text-white">Currently:</span> {profile.availability.toLowerCase()}, and happy to talk about small freelance projects.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <form
              noValidate
              onSubmit={onSubmit}
              className="space-y-5 rounded-2xl border border-slate-200 bg-slate-50/80 p-6 backdrop-blur sm:p-8 dark:border-white/8 dark:bg-ink-900/80"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="name" label="Name" autoComplete="name" placeholder="Juan Dela Cruz" value={values.name} onChange={onChange} error={errors.name} />
                <Field id="email" label="Email" type="email" autoComplete="email" placeholder="you@example.com" value={values.email} onChange={onChange} error={errors.email} />
              </div>
              <Field id="subject" label="Subject" placeholder="Internship opportunity" value={values.subject} onChange={onChange} error={errors.subject} />
              <Field id="message" label="Message" as="textarea" rows={5} placeholder="Tell me a bit about what you have in mind…" value={values.message} onChange={onChange} error={errors.message} />

              {status.type !== 'idle' && (
                <div role="status" aria-live="polite" className={`flex items-start gap-2.5 rounded-xl border p-4 text-sm ${statusStyles[status.type]}`}>
                  <StatusIcon size={18} className={`mt-0.5 shrink-0 ${status.type === 'loading' ? 'animate-spin' : ''}`} />
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={status.type === 'loading'}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:brightness-110 disabled:opacity-60 sm:w-auto"
              >
                Send Message <Send size={16} className="transition group-hover:translate-x-0.5" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
