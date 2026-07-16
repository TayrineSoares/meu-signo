import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatIsSection from './components/WhatIsSection'
import AboutSection from './components/AboutSection'
import OfferSection from './components/OfferSection'
import HowToOrderSection from './components/HowToOrderSection'
import TestimonialsSection from './components/TestimonialsSection'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="page">
      <Navbar />
      <Hero />
      <WhatIsSection />
      <AboutSection />
      <OfferSection />
      <HowToOrderSection />
      <TestimonialsSection />
      <FinalCta />
      <Footer />
    </div>
  )
}

export default App
