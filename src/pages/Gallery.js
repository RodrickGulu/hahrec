import React from 'react'
import Footer from '../modules/Footer'
import Location from '../modules/Location'
import Navbar from '../modules/Navbar'
import Pics from '../modules/Pics'

export default function Gallery() {
  return (
    <div className='class'>
        <Location/>
        <Navbar galla={"active"} dropdown={"disabled"}/>
        <Pics/>
        <Footer/>
    </div>
  )
}
