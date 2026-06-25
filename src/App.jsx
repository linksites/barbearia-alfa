import { useLenis } from './hooks/useLenis'
import GrainOverlay from './components/GrainOverlay'
import Header from './components/Header'
import Hero from './components/Hero'
import Diferenciais from './components/Diferenciais'
import Servicos from './components/Servicos'
import Sobre from './components/Sobre'
import Galeria from './components/Galeria'
import Localizacao from './components/Localizacao'
import CTAFinal from './components/CTAFinal'
import Footer from './components/Footer'

export default function App() {
  // Rolagem suave global (Lenis) sincronizada com GSAP/ScrollTrigger.
  useLenis()

  return (
    <>
      <GrainOverlay />
      <Header />
      <main>
        <Hero />
        <Diferenciais />
        <Servicos />
        <Sobre />
        <Galeria />
        <Localizacao />
        <CTAFinal />
      </main>
      <Footer />
    </>
  )
}
