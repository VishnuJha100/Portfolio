import Hero from "./component/Hero"
import Navbar from "./component/Navbar"
import ParticleBackground from "./component/Particle"
import About from "./page/About"


function App() {

  return (
    <>
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
    </>
  )
}

export default App
