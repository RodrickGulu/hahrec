import React from 'react'
import '../css/footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
  faTiktok
} from "@fortawesome/free-brands-svg-icons";
import { 
  faEnvelope,
  faAngleDoubleUp
} from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <div className='m-2'>
         <footer id="colophon" className="site-footer mt-5 mb-1">

<div className="bg-dark footer row pt-3 container-fluid m-0">
  <ul className='list-unstyled'>
  <li ><a href='#a' className='text-reset'><FontAwesomeIcon icon={faTwitter} /></a></li>
  <li ><a href='#a' className='text-reset'><FontAwesomeIcon icon={faFacebook} /></a></li>
  <li ><a href='#a' className='text-reset'><FontAwesomeIcon icon={faInstagram} /></a></li>
  <li ><a href='#a' className='text-reset'><FontAwesomeIcon icon={faYoutube} /></a></li>
  <li ><a href='#a' className='text-reset'><FontAwesomeIcon icon={faEnvelope} /></a></li>
  <li ><a href='#a' className='text-reset'><FontAwesomeIcon icon={faLinkedin} /></a></li>
  <li ><a href='#a' className='text-reset'><FontAwesomeIcon icon={faGithub} /></a></li>
  <li ><a href='#a' className='text-reset'><FontAwesomeIcon icon={faTiktok} /></a></li>
  </ul>
</div>


<div className="page-scroll">
        <a href="#top" className='text-reset mt-2'>
            <FontAwesomeIcon icon={faAngleDoubleUp}/>
        </a>
    </div>

<div className="container text-center">
    <p className="copyright">&copy;2023 Hit After Hit Records</p>
    <p>All rights reserved</p>
    <p id='footer'>Developed by: <a href='https://github.com/RodrickGulu' target='blank'>Rodrick Gulu</a></p>
</div>

</footer>
    </div>
  )
}
