import React from 'react'
import Navbar from '../modules/Navbar'
import Location from '../modules/Location'
import AdminCommentList from '../modules/AdminCommentList'
import Footer from '../modules/Footer'

export default function Admin() {
  return (
    <div className='class'>
      <Location/>
      <Navbar dropdown={'disabled'}/>
      <div>
        <h2>Emails</h2>
        <AdminCommentList/>
      </div>
      <Footer/>
    </div>
  )
}
