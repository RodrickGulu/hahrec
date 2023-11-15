import {React, useState} from 'react'
import '../css/bookasesh.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faMusic,
    faVideoCamera
} from '@fortawesome/free-solid-svg-icons'

export default function BookaSesh() {
  const initialMusicFormState = {
    name: '',
    email: '',
    genre: '',
    message: '',
  };

  const initialVideoFormState = {
    name: '',
    email: '',
    message: '',
  };

  const initialBeatFormState = {
    name: '',
    email: '',
    message: '',
  };

  // Set initial state based on the selected form
  const [formData, setFormData] = useState(initialMusicFormState);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e, formType) => {
    e.preventDefault();

    let endpoint = '';
    let initialState = {};

    switch (formType) {
      case 'musicForm':
        endpoint = 'https://hahrec.onrender.com/api/book-sesh-music';
        initialState = initialMusicFormState;
        break;
      case 'videoForm':
        endpoint = 'https://hahrec.onrender.com/api/book-sesh-video';
        initialState = initialVideoFormState;
        break;
      case 'beatForm':
        endpoint = 'https://hahrec.onrender.com/api/book-sesh-beat';
        initialState = initialBeatFormState;
        break;
      default:
        console.error('Invalid formType');
        return;
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful submission as needed
        console.log('Booking submitted successfully!');
        // Reset the form fields to initial state
        setFormData(initialState);

        window.location.reload();
      } else {
        console.error('Failed to submit booking:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
    }
  };

  return (
    <div className='container-flex m-3 p-5 bookings'>
        <h1>STANDARD PACKAGES</h1>
<div className='row'>
<div className="flip-card-container col-sm">
          <div className="flip-card">
            <div className="card-front">
              <ul>
                <li><FontAwesomeIcon icon={faMusic} size='9x'/></li>
                <li>Secular Song - Ksh 4,000/=</li>
                <li>Gospel - Ksh 3,500/=</li>
                <li><h4>Offer Package</h4></li>
                <li>Record 3 songs with us, get one chance to record an extra song</li>
              </ul>
            </div>

            <div className="card-back">
              <div className='row'>
                <form className='mt-4' onSubmit={(e) => handleSubmit(e, 'musicForm')}>
                  <div className='form-floating mb-3 mt-3'>
                    <input
                      type='text'
                      name='name'
                      placeholder='Enter your Fullname'
                      className='form-control'
                      onChange={handleInputChange}
                    />
                    <label htmlFor='name'>Full Name</label>
                  </div>

                  <div className='form-floating mb-3 mt-3'>
                    <input
                      type='text'
                      name='email'
                      placeholder='Enter your Email or Phone no'
                      className='form-control'
                      onChange={handleInputChange}
                    />
                    <label htmlFor='email'>Enter your Email/Phone no.</label>
                  </div>

                  <div className='form-floating mb-3 mt-3'>
                    <select
                      className='form-select'
                      name='genre'
                      id='floatingSelect'
                      aria-label='Floating label select'
                      onChange={handleInputChange}
                    >
                      <option value=''>Choose Genre</option>
                      <option value='Gospel Song'>Gospel Song</option>
                      <option value='Secular Song'>Secular Song</option>
                    </select>
                    <label htmlFor='genre'>Choose Genre</label>
                  </div>

                  <div className='form-floating mb-3 mt-3'>
                    <textarea
                      type='text'
                      name='message'
                      placeholder='Add comments'
                      className='form-control'
                      onChange={handleInputChange}
                    ></textarea>
                    <label htmlFor='message'>Explain project</label>
                  </div>

                  <button className='button' type='submit'>
                    BOOK
                  </button>
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

<div className="flip-card-container col-sm">
  <div className="flip-card">

    <div className="card-front">
      <ul>
        <li><FontAwesomeIcon icon={faVideoCamera} size='9x'/></li>
        <li>Video Shooting - Ksh 40,000/=</li>
      </ul>
    </div>

    <div className="card-back">
    <form className='mt-4' method='POST' onSubmit={(e) => handleSubmit(e, 'videoForm')}>
      <div className='form-floating mb-3 mt-3'>
      <input
    type="text"
    name="name"
    placeholder='Enter your Fullname'
    className="form-control"
    onChange={handleInputChange}
    />
    <label htmlFor='name'>Full Name</label>
      </div>

      <div className='form-floating mb-3 mt-3'>
      <input
    type="text"
    name="email"
    placeholder='Enter your Email or Phone no'
    className="form-control"
    onChange={handleInputChange}
    />
    <label htmlFor='email'>Enter your Email/Phone no.</label>
      </div>

      <div className='form-floating mb-3 mt-3'>
      <textarea
    type="text"
    name="message"
    placeholder='Add your comment'
    className="form-control"
    onChange={handleInputChange}></textarea>
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
        <li>Beat Making - Ksh 1,500/=</li>
      </ul>
    </div>

    <div className="card-back">
    <form className='mt-4' method='POST' onSubmit={(e) => handleSubmit(e, 'beatForm')}>
      <div className='form-floating mb-3 mt-3'>
      <input
    type="text"
    name="name"
    placeholder='Enter your Fullname'
    className="form-control"
    onChange={handleInputChange}
    />
    <label htmlFor='name'>Full Name</label>
      </div>

      <div className='form-floating mb-3 mt-3'>
      <input
    type="text"
    name="email"
    placeholder='Enter your Email or Phone no'
    className="form-control"
    onChange={handleInputChange}
    />
    <label htmlFor='email'>Enter your Email/Phone no.</label>
      </div>

      <div className='form-floating mb-3 mt-3'>
      <textarea
    type="text"
    name="message"
    placeholder='Add your comment'
    className="form-control"
    onChange={handleInputChange}></textarea>
    
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
