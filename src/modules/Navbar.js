import React from 'react'

export default function Navbar() {
  return (
    <div className='sticky-top'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#top">HIT AFTER HIT</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="main-menu collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="nav navbar-nav navbar-right">

                        <li className="nav-item active"><a href="#top" className="nav-link">Home</a></li>
                        <li className="nav-item"><a href="#services" className="nav-link">Services</a></li>
                        <li className="nav-item"><a href="#book" className="nav-link">Book a Session</a></li>
                        <li className="nav-item"><a href="#background" className="nav-link">Background</a></li>
                        <li className="nav-item"><a href="#team" className="nav-link">Our Team</a></li>
                        <li className="nav-item"><a href="#contact" className="nav-link">Contact Us</a></li>
                        <li className="nav-item"><a href="#live" className="nav-link">Live Sessions</a></li>

                        
                    </ul>

                </div>
    </div>
</nav>
    </div>
  )
}
