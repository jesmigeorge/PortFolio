import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
function App() {

  return (
    <div>
      <Sidebar />
      <Main />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
