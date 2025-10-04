import React from 'react'
import Hero from './components/HeroSection'
import Courses from './components/courses.jsx'
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
        © {new Date().getFullYear()} Lead_Learn_Grow — made with ❤️
      </footer>
    </div>
  )
}
