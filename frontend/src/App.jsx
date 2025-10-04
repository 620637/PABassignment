import React from 'react'
import Hero from './components/HeroSection'
import Courses from './components/Courses'
import ContactForm from './components/ContactForm'

export default function App() {
  return (
    <div className="app-root">
      <nav className="nav">Welcome - PAB</nav>
      <main>
        <Hero />
        <Courses />
        <ContactForm />
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} SimpleCourse — made with ❤️
      </footer>
    </div>
  )
}
