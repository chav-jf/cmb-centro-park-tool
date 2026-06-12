import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useLenis } from './hooks/useLenis'
import { CustomCursor } from './components/interactive/CustomCursor'
import { ScrollProgress } from './components/interactive/ScrollProgress'
import { Navbar } from './components/ui/Navbar'
import { Footer } from './components/ui/Footer'
import { HeroSection } from './sections/HeroSection'
import { MarqueeSection } from './sections/MarqueeSection'
import { AboutSection } from './sections/AboutSection'
import { ServicesSection } from './sections/ServicesSection'
import { BrandsSection } from './sections/BrandsSection'
import { GallerySection } from './sections/GallerySection'
import { ContactSection } from './sections/ContactSection'

function Home() {
  return (
    <main>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <BrandsSection />
      <GallerySection />
      <ContactSection />
    </main>
  )
}

export default function App() {
  useLenis()

  return (
    <BrowserRouter>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
