import React from 'react'
import label from '../assets/3.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faBriefcase,
  faCalendarDays,
  faHistory,
  faBroadcastTower,
  faCamera,
  faComment,
  faVideoCamera,
  faMusic,
  faComments,
  faAngleDoubleDown
} from '@fortawesome/free-solid-svg-icons'


export default function Navbar({services,sesh,background,contact,live,galla,dropdown}) {
  return (
    <div className='sticky-top'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <div className='navbar-brand'>
        <img src={label} alt='logo' width={30} height={30}/>
    </div>
    <a className="navbar-brand" href="#top">HIT AFTER HIT</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="main-menu collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="nav navbar-nav navbar-right">

                        <li className="nav-item active"><a href="/" className={"btn nav-link"} id='explore'><FontAwesomeIcon icon={faHouse}/> Home</a></li>
                        <li className="nav-item">
                          <div className='dropdown'>
                          <a href="#explore" className={["btn nav-link dropdown-toggle "+services+" "+dropdown]} data-bs-toggle='dropdown' aria-expanded='false' id='dropdownMenuLink'>
                            <FontAwesomeIcon icon={faBriefcase}/> Services
                            </a>

                            <div className='dropdown-menu'>
                              <a className='dropdown-item page-scroll' href='#music'><FontAwesomeIcon icon={faMusic}/> Music Production</a>
                              <a className='dropdown-item page-scroll' href='#video'><FontAwesomeIcon icon={faVideoCamera}/> Video Production</a>
                              <a className='dropdown-item page-scroll' href='#comments'><FontAwesomeIcon icon={faComments}/> Comments</a>
                              <div className='dropdown-divider'></div>
                              <a className='dropdown-item page-scroll' href='#footer'><FontAwesomeIcon icon={faAngleDoubleDown}/>Scroll to bottom</a>
                            </div>
                          </div>
                          </li>
                        <li className="nav-item"><a href="/book" className={["btn nav-link "+sesh]}><FontAwesomeIcon icon={faCalendarDays}/> Book a Session</a></li>
                        <li className="nav-item"><a href="/background" className={["btn nav-link "+background]}><FontAwesomeIcon icon={faHistory}/> Background</a></li>
                        <li className="nav-item"><a href="/contact" className={["btn nav-link "+contact]}><FontAwesomeIcon icon={faComment}/> Contact us/Comment</a></li>
                        <li className="nav-item"><a href="/live" className={["btn nav-link "+live]}><FontAwesomeIcon icon={faBroadcastTower}/> Live Sessions</a></li>
                        <li className="nav-item"><a href='/gallery' className={["btn nav-link "+galla]}><FontAwesomeIcon icon={faCamera}/> Gallery</a></li>

                        
                    </ul>

                </div>
    </div>
</nav>
    </div>
  )
}
