import React from 'react'
import Footer from '../modules/Footer'
import LiveSesh from '../modules/LiveSesh'
import Location from '../modules/Location'
import Navbar from '../modules/Navbar'

export default function Live() {
  return (
    <div>
        <Location/>
        <Navbar navlink={"nav-link"} live={"active"}/>
        <LiveSesh/>
        <Footer/>
    </div>
  )
}
