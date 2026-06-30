import { useLenis } from './hooks/useLenis'
import ScrollProgress from './components/ui/ScrollProgress'
import FloatingWhats from './components/ui/FloatingWhats'
import Header from './components/Header'
import Hero from './components/Hero'
import Especialidades from './components/Especialidades'
import Sobre from './components/Sobre'
import Tratamentos from './components/Tratamentos'
import Jornada from './components/Jornada'
import Diferenciais from './components/Diferenciais'
import FAQ from './components/FAQ'
import CTAFinal from './components/CTAFinal'
import Footer from './components/Footer'

export default function App() {
  useLenis()

  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Especialidades />
        <Sobre />
        <Tratamentos />
        <Jornada />
        <Diferenciais />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <FloatingWhats />
    </>
  )
}
