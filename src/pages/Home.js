import React from 'react'
import Landing from '../modules/Landing'
import Navbar from '../modules/Navbar'
import Services from '../modules/Services'

export default function Home() {
  return (
    <div>
      <Landing/>
      <Navbar/>
      <Services/>
    </div>
  )
}
