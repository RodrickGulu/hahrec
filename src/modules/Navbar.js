import React from 'react'
import label from '../assets/3.jpeg';


export default function Navbar({navlink,services,sesh,background,contact,live,galla}) {
  return (
    <div className='sticky-top'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
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

                        <li className="nav-item active"><a href="/hitafterhit" className={navlink}>Home</a></li>
                        <li className="nav-item"><a href="/hitafterhit" className={[navlink+" "+services]}>Services</a></li>
                        <li className="nav-item"><a href="/hitafterhit/book" className={[navlink+" "+sesh]}>Book a Session</a></li>
                        <li className="nav-item"><a href="/hitafterhit/background" className={[navlink+" "+background]}>Background</a></li>
                        <li className="nav-item"><a href="/hitafterhit/contact" className={[navlink+" "+contact]}>Contact Us</a></li>
                        <li className="nav-item"><a href="/hitafterhit/live" className={[navlink+" "+live]}>Live Sessions</a></li>
                        <li className="nav-item"><a href='/hitafterhit/gallery' className={[navlink+" "+galla]}>Gallery</a></li>

                        
                    </ul>

                </div>
    </div>
</nav>
    </div>
  )
}
