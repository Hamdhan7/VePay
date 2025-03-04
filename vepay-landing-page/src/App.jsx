import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import HeroSectionCards from "./components/HeroSectionCards.jsx";
import VeCardSection from "./components/VeCardSection.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="nav-section">
            <Nav></Nav>
        </div>
      <div className="hero-section">
        <Hero></Hero>
          <HeroSectionCards></HeroSectionCards>
      </div>
        <VeCardSection></VeCardSection>

    </>
  )
}

export default App
