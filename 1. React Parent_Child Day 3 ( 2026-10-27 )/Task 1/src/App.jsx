import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  )
}

export default App
