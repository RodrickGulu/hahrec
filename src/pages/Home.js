import React from 'react'
import Landing from '../modules/Landing'
import Navbar from '../modules/Navbar'
import Services from '../modules/Services'
import Footer from '../modules/Footer'

export default function Home() {
  return (
    <div>
      <Landing/>
      <Navbar/>
      <Services/>
      <Footer/>
    </div>
  )
}
