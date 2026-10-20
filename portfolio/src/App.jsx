import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-cyan-500 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main id="main" className="overflow-x-clip">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
