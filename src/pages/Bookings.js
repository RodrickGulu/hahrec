import React from 'react'
import Navbar from '../modules/Navbar'
import Footer from '../modules/Footer'
import BookaSesh from '../modules/BookaSesh'

export default function Bookings() {
  return (
    <div className='App'>
        <Navbar navlink={"nav-link"} sesh={"active"}/>
        <BookaSesh/>
        <Footer/>
    </div>
  )
}
