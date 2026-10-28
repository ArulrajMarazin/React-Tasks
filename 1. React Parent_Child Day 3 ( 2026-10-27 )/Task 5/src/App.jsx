import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Header } from './components/Header'
import BlogPage from './components/BlogPage'
import { Footer } from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <BlogPage />
      <Footer />
    </>
  )
}

export default App
