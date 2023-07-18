import React from 'react'
import Landing from '../modules/Landing'
import Navbar from '../modules/Navbar'
import Services from '../modules/Services'
import Footer from '../modules/Footer'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Home() {
  return (
    <div className='class'>
      <Landing/>
      <Navbar navlink={"nav-link"} services={"active"}/>
      <Services/>
      <Footer/>
    </div>
  )
}
