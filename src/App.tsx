import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { useLenis } from './hooks/useLenis'
import { getLenis, scrollToSection } from './lib/lenis'
import { CustomCursor } from './components/interactive/CustomCursor'
import { ScrollProgress } from './components/interactive/ScrollProgress'
import { Navbar } from './components/ui/Navbar'
import { Footer } from './components/ui/Footer'
import { HeroSection } from './sections/HeroSection'
import { MarqueeSection } from './sections/MarqueeSection'
import { AboutSection } from './sections/AboutSection'
import { ServicesSection } from './sections/ServicesSection'
import { SuspensionSection } from './sections/SuspensionSection'
import { ScooterSection } from './sections/ScooterSection'
import { BrandsSection } from './sections/BrandsSection'
import { GallerySection } from './sections/GallerySection'
import { RedesSection } from './sections/RedesSection'
import { ContactSection } from './sections/ContactSection'
import { PqrsPage } from './pages/PqrsPage'
import { EnviosPage } from './pages/EnviosPage'

/** Al navegar: scroll al tope en cambios de ruta; al hash cuando se vuelve a la home. */
function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // Espera a que las secciones de la home monten antes de hacer scroll.
      const id = window.setTimeout(() => scrollToSection(hash), 90)
      return () => window.clearTimeout(id)
    }
    const lenis = getLenis()
    if (lenis) lenis.scrollTo(0, { immediate: true })
    else window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

function HomePage() {
  return (
    <main>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <SuspensionSection />
      <ScooterSection />
      <BrandsSection />
      <GallerySection />
      <RedesSection />
      <ContactSection />
    </main>
  )
}

export default function App() {
  useLenis()

  return (
    <BrowserRouter>
      <ScrollManager />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pqrs" element={<PqrsPage />} />
        <Route path="/envios" element={<EnviosPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
