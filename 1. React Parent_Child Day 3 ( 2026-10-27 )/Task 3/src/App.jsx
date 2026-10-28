import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Header } from './components/Header'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Sidebar />
      <MainContent />
    </>
  )
}

export default App
