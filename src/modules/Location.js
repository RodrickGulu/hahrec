import React from 'react'
import '../css/location.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faMapMarkerAlt,
  faPhone
} from '@fortawesome/free-solid-svg-icons'

export default function Location() {
  return (
    <div className='left p-4 m-0'>
        <div className='container'>
          <div className='location-section'>
            <h5><FontAwesomeIcon icon={faMapMarkerAlt} /> Location</h5>
            <p>Wenje Center, Tana River County, 7km from the Garsen - Hola highway</p>
          </div>
          
          <div className='location-section'>
            <h5><FontAwesomeIcon icon={faPhone} /> Contacts</h5>
            <p><b>Mobile:</b> <a href="tel:+254786802020">+254-786-802-020</a></p>
            <p><b>Email:</b> <a href="mailto:hitafterhit004@gmail.com">hitafterhit004@gmail.com</a></p>
          </div>
        </div>
    </div>
  )
}
