import React from 'react'
import ContactForm from '../modules/ContactForm'
import Footer from '../modules/Footer'
import Location from '../modules/Location'
import Navbar from '../modules/Navbar'

export default function Contact() {
  return (
    <div className='class'>
        <Location/>
        <Navbar contact={"active"} dropdown={"disabled"}/>
        <ContactForm/>
        <Footer/>
    </div>
  )
}
