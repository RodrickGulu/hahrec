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
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <div className='m-2'>
         <footer id="colophon" className="site-footer mt-5 mb-0">

<div className="bg-dark footer row p-2  container-fluid m-0">
  <div className='col-sm'><a href='#a' className='text-reset'><FontAwesomeIcon icon={faTwitter} size='2x'/></a></div>
  <div className='col-sm'><a href='#a' className='text-reset'><FontAwesomeIcon icon={faFacebook} size='2x'/></a></div>
  <div className='col-sm'><a href='#a' className='text-reset'><FontAwesomeIcon icon={faInstagram} size='2x'/></a></div>
  <div className='col-sm'><a href='#a' className='text-reset'><FontAwesomeIcon icon={faYoutube} size='2x'/></a></div>
  <div className='col-sm'><a href='#a' className='text-reset'><FontAwesomeIcon icon={faEnvelope} size='2x'/></a></div>
  <div className='col-sm'><a href='#a' className='text-reset'><FontAwesomeIcon icon={faLinkedin} size='2x'/></a></div>
  <div className='col-sm'><a href='#a' className='text-reset'><FontAwesomeIcon icon={faGithub} size='2x'/></a></div>
  <div className='col-sm'><a href='#a' className='text-reset'><FontAwesomeIcon icon={faTiktok} size='2x'/></a></div>
</div>

<div className="page-scroll">
        <a href="#top" className="rectangle">
            <i className="fa fa-angle-double-up"></i>
        </a>
    </div>

<div className="container text-center">
    <p className="copyright">HitAfterHit &copy;2023</p>
</div>

</footer>
    </div>
  )
}
