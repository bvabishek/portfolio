import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Navbar'
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-dark' style={{height: '100%'}}>
      <Header />
      <Home />
      <Projects />
      <About />
      <Contact />
    </div>
  )
}

export default App
