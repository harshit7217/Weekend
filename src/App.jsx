import { useState } from 'react'
import TopBar from './components/TopBar'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Activities from './components/Activities'
import Booking from './components/Booking'
import Gallery from './components/Gallery'
import Form from './components/Form'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <TopBar />
      <NavBar />
      <Hero />
      <Activities />
      <Booking />
      <Gallery />
      <Form />
      <Footer />
    </>
  )
}

export default App
