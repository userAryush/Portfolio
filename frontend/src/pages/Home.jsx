import AcademicsCertifications from '../components/AcademicsCertifications'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <div className="bg-gh-bg">
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="academics">
        <AcademicsCertifications />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  )
}
