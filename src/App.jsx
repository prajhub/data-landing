import { useState } from 'react'
import Analytics from './components/Analytics'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Newsletter from './components/Newsletter'

import Aos from 'aos'
import 'aos/dist/aos.css'


function App() {

  Aos.init({
    duration: 1800,
    offset: 0,
  })

 

  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App
