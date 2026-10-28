import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { ProfileHeader } from './components/pages/ProfileHeader'
import { ProfileContent } from './components/pages/ProfileContent'
import { ProfileFooter } from './components/pages/ProfileFooter'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProfileHeader />
      <ProfileContent />
      <ProfileFooter />
    </>
  )
}

export default App
