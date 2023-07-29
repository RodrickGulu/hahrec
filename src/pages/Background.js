import React from 'react'
import Navbar from '../modules/Navbar'
import Footer from '../modules/Footer'
import About from '../modules/About'
import Location from '../modules/Location'

export default function Background() {
  return (
    <div className='class'>
      <Location/>
        <Navbar background={"active"} dropdown={"disabled"}/>
        <About/>
        <Footer/>
    </div>
  )
}
