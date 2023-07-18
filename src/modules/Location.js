import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faMapMarkerAlt,
    faPhone,
    faEnvelope
} from '@fortawesome/free-solid-svg-icons'

export default function Location() {
  return (
    <div className='container-fluid left p-4 m-0'>
        <div className='container'>
          <h5>Location</h5>
          <p><FontAwesomeIcon icon={faMapMarkerAlt}/> Wenje Center, Tana River County, 7km from the Garsen - Hola highway</p>
          <h5>Contacts</h5>
          <p><b><FontAwesomeIcon icon={faPhone}/> Mobile no:</b> +254-786-802-020</p>
          <p><b><FontAwesomeIcon icon={faEnvelope}/> Email:</b> hitafterhit004@gmail.com</p>
        </div>
    </div>
  )
}
