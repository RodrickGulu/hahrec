import React from 'react'
import '../css/bookasesh.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faMusic,
    faVideoCamera,
    faCamera
} from '@fortawesome/free-solid-svg-icons'

export default function BookaSesh() {
  return (
    <div className='container-flex m-3 class p-5 bookings'>
        <h1>STANDARD PACKAGES</h1>
<div className='row'>
<div class="flip-card-container col-sm">
  <div class="flip-card">

    <div class="card-front">
      <ul>
        <li><FontAwesomeIcon icon={faMusic} size='9x'/></li>
        <li>Secular Song - Ksh.4,000/=</li>
        <li>Gospel - Ksh.3,500/=</li>
        <li><h4>Offer Package</h4></li>
        <li>Record 3 songs with us, get one chance to record an extra song</li>
        <li></li>
      </ul>
    </div>

    <div className="card-back">
      <div className='row'>
      <form className='mt-4' method='POST'>
      <div className='form-floating mb-3 mt-3'>
      <input
    type="text"
    name="name"
    placeholder='Enter your Fullname'
    className="form-control"
    />
    <label htmlFor='name'>Full Name</label>
      </div>

      <div className='form-floating mb-3 mt-3'>
      <input
    type="email"
    name="email"
    placeholder='Enter your Email'
    
    className="form-control"
    />
    <label htmlFor='email'>Enter your Email/Phone no.</label>
      </div>

      <div className='form-floating mb-3 mt-3'>
      <select class="form-select" id="floatingSelect" aria-label="Floating label select">
    <option value="1">Gospel Song</option>
    <option value="2">Secular Song</option>
  </select>
  <label for="floatingSelect">Chose Genre</label>
      </div>

      <div className='form-floating mb-3 mt-3'>
      <textarea
    type="text"
    name="message"
    placeholder='Add comments'
    className="form-control"></textarea>
    <label htmlFor='message'>Explain project</label>
      </div>

      <button className='button' type='submit'>BOOK</button>

    </form>
      </div>

      <div className="design-container">
        <span className="design design--1"></span>
        <span className="design design--2"></span>
        <span className="design design--3"></span>
        <span className="design design--4"></span>
        <span className="design design--5"></span>
        <span className="design design--6"></span>
        <span className="design design--7"></span>
        <span className="design design--8"></span>
      </div>
    </div>

  </div>
</div>

<div className="flip-card-container col-sm">
  <div className="flip-card">

    <div className="card-front">
      <ul>
        <li><FontAwesomeIcon icon={faVideoCamera} size='9x'/></li>
        <li>Video Shooting - Ksh.40,000/=</li>
      </ul>
    </div>

    <div className="card-back">
    <form className='mt-4' method='POST'>
      <div className='form-floating mb-3 mt-3'>
      <input
    type="text"
    name="name"
    placeholder='Enter your Fullname'
    className="form-control"
    />
    <label htmlFor='name'>Full Name</label>
      </div>

      <div className='form-floating mb-3 mt-3'>
      <input
    type="email"
    name="email"
    placeholder='Enter your Email'
    
    className="form-control"
    />
    <label htmlFor='email'>Enter your Email/Phone no.</label>
      </div>

      <div className='form-floating mb-3 mt-3'>
      <textarea
    type="text"
    name="message"
    placeholder='Add your comment'
    className="form-control"></textarea>
    <label htmlFor='message'>Explain project</label>
      </div>

      <button className='button' type='submit'>BOOK</button>

    </form>

      <div className="design-container">
        <span className="design design--1"></span>
        <span className="design design--2"></span>
        <span className="design design--3"></span>
        <span className="design design--4"></span>
        <span className="design design--5"></span>
        <span className="design design--6"></span>
        <span className="design design--7"></span>
        <span className="design design--8"></span>
      </div>
    </div>

  </div>
</div>

<div className="flip-card-container col-sm">
  <div className="flip-card">

    <div className="card-front">
      <ul>
        <li><FontAwesomeIcon icon={faMusic} size='9x'/></li>
        <li>Beat Making - Ksh.1,500/=</li>
      </ul>
    </div>

    <div className="card-back">
    <form className='mt-4' method='POST'>
      <div className='form-floating mb-3 mt-3'>
      <input
    type="text"
    name="name"
    placeholder='Enter your Fullname'
    className="form-control"
    />
    <label htmlFor='name'>Full Name</label>
      </div>

      <div className='form-floating mb-3 mt-3'>
      <input
    type="email"
    name="email"
    placeholder='Enter your Email'
    
    className="form-control"
    />
    <label htmlFor='email'>Enter your Email/Phone no.</label>
      </div>

      <div className='form-floating mb-3 mt-3'>
      <textarea
    type="text"
    name="message"
    placeholder='Add your comment'
    className="form-control"></textarea>
    <label htmlFor='message'>Explain project</label>
      </div>

      <button className='button' type='submit'>BOOK</button>

    </form>

      <div className="design-container">
        <span className="design design--1"></span>
        <span className="design design--2"></span>
        <span className="design design--3"></span>
        <span className="design design--4"></span>
        <span className="design design--5"></span>
        <span className="design design--6"></span>
        <span className="design design--7"></span>
        <span className="design design--8"></span>
      </div>
    </div>

  </div>
</div>
        </div>

    </div>
  )
}
