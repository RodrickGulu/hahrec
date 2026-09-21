import { useState } from 'react';
import '../css/bookasesh.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMusic,
  faVideoCamera
} from '@fortawesome/free-solid-svg-icons';


export default function BookaSesh() {

  // =========================================
  // INITIAL FORM STATES
  // =========================================

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


  // =========================================
  // FORM STATES
  // =========================================

  const [musicForm, setMusicForm] = useState(
    initialMusicFormState
  );

  const [videoForm, setVideoForm] = useState(
    initialVideoFormState
  );

  const [beatForm, setBeatForm] = useState(
    initialBeatFormState
  );


  // =========================================
  // SUBMISSION STATES
  // =========================================

  const [submitting, setSubmitting] = useState('');


  // =========================================
  // MUSIC FORM CHANGE
  // =========================================

  const handleMusicChange = (e) => {
    const { name, value } = e.target;

    setMusicForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  // =========================================
  // VIDEO FORM CHANGE
  // =========================================

  const handleVideoChange = (e) => {
    const { name, value } = e.target;

    setVideoForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  // =========================================
  // BEAT FORM CHANGE
  // =========================================

  const handleBeatChange = (e) => {
    const { name, value } = e.target;

    setBeatForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  // =========================================
  // MUSIC BOOKING
  // =========================================

  const handleMusicSubmit = async (e) => {
    e.preventDefault();

    setSubmitting('music');

    try {

      const response = await fetch(
        'https://hahrec-backend.onrender.com/api/book-sesh-music',
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json',
          },

          body: JSON.stringify(musicForm),
        }
      );

      if (response.ok) {

        alert('Music session booked successfully!');

        setMusicForm(initialMusicFormState);

      } else {

        const payload = await response
          .json()
          .catch(() => ({}));

        alert(
          payload.message ||
          'Failed to submit music booking.'
        );
      }

    } catch (error) {

      console.error(
        'Music booking error:',
        error
      );

      alert(
        'Unable to connect to the booking server.'
      );

    } finally {

      setSubmitting('');

    }
  };


  // =========================================
  // VIDEO BOOKING
  // =========================================

  const handleVideoSubmit = async (e) => {
    e.preventDefault();

    setSubmitting('video');

    try {

      const response = await fetch(
        'https://hahrec-backend.onrender.com/api/book-sesh-video',
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json',
          },

          body: JSON.stringify(videoForm),
        }
      );

      if (response.ok) {

        alert('Video session booked successfully!');

        setVideoForm(initialVideoFormState);

      } else {

        const payload = await response
          .json()
          .catch(() => ({}));

        alert(
          payload.message ||
          'Failed to submit video booking.'
        );
      }

    } catch (error) {

      console.error(
        'Video booking error:',
        error
      );

      alert(
        'Unable to connect to the booking server.'
      );

    } finally {

      setSubmitting('');

    }
  };


  // =========================================
  // BEAT BOOKING
  // =========================================

  const handleBeatSubmit = async (e) => {
    e.preventDefault();

    setSubmitting('beat');

    try {

      const response = await fetch(
        'https://hahrec-backend.onrender.com/api/book-sesh-beat',
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json',
          },

          body: JSON.stringify(beatForm),
        }
      );

      if (response.ok) {

        alert('Beat production request submitted successfully!');

        setBeatForm(initialBeatFormState);

      } else {

        const payload = await response
          .json()
          .catch(() => ({}));

        alert(
          payload.message ||
          'Failed to submit beat booking.'
        );
      }

    } catch (error) {

      console.error(
        'Beat booking error:',
        error
      );

      alert(
        'Unable to connect to the booking server.'
      );

    } finally {

      setSubmitting('');

    }
  };


  return (

    <div className="bookings">

      <h1>STANDARD PACKAGES</h1>


      <div className="booking-grid">


        {/* =====================================
            MUSIC RECORDING CARD
        ===================================== */}

        <div className="flip-card-container">

          <div className="flip-card">


            {/* FRONT */}

            <div className="card-front">

              <ul>

                <li className="card-icon">
                  <FontAwesomeIcon
                    icon={faMusic}
                  />
                </li>

                <li>
                  Secular Song - Ksh 4,000/=
                </li>

                <li>
                  Gospel - Ksh 3,500/=
                </li>

                <li className="offer-title">
                  Offer Package
                </li>

                <li className="offer-text">
                  Record 3 songs with us and get one
                  chance to record an extra song.
                </li>

              </ul>

              <span className="flip-hint">
                Hover to book
              </span>

            </div>


            {/* BACK */}

            <div className="card-back">

              <div className="booking-content">

                <h3>Book Music Recording</h3>

                <p className="booking-description">
                  Fill in your details to book a
                  recording session.
                </p>


                <form
                  className="booking-form"
                  onSubmit={handleMusicSubmit}
                >

                  <div className="booking-field">

                    <label htmlFor="music-name">
                      Full Name
                    </label>

                    <input
                      id="music-name"
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={musicForm.name}
                      onChange={handleMusicChange}
                      required
                    />

                  </div>


                  <div className="booking-field">

                    <label htmlFor="music-email">
                      Email / Phone Number
                    </label>

                    <input
                      id="music-email"
                      type="text"
                      name="email"
                      placeholder="Enter your email or phone"
                      value={musicForm.email}
                      onChange={handleMusicChange}
                      required
                    />

                  </div>


                  <div className="booking-field">

                    <label htmlFor="music-genre">
                      Choose Genre
                    </label>

                    <select
                      id="music-genre"
                      name="genre"
                      value={musicForm.genre}
                      onChange={handleMusicChange}
                      required
                    >

                      <option value="">
                        Select genre
                      </option>

                      <option value="Gospel Song">
                        Gospel Song
                      </option>

                      <option value="Secular Song">
                        Secular Song
                      </option>

                    </select>

                  </div>


                  <div className="booking-field">

                    <label htmlFor="music-message">
                      Explain Project
                    </label>

                    <textarea
                      id="music-message"
                      name="message"
                      placeholder="Tell us about your project"
                      value={musicForm.message}
                      onChange={handleMusicChange}
                      required
                    />

                  </div>


                  <button
                    className="booking-button"
                    type="submit"
                    disabled={submitting === 'music'}
                  >

                    {submitting === 'music'
                      ? 'BOOKING...'
                      : 'BOOK SESSION'
                    }

                  </button>

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


        {/* =====================================
            VIDEO SHOOTING CARD
        ===================================== */}

        <div className="flip-card-container">

          <div className="flip-card">


            {/* FRONT */}

            <div className="card-front">

              <ul>

                <li className="card-icon">

                  <FontAwesomeIcon
                    icon={faVideoCamera}
                  />

                </li>

                <li>
                  Video Shooting - Ksh 40,000/=
                </li>

              </ul>

              <span className="flip-hint">
                Hover to book
              </span>

            </div>


            {/* BACK */}

            <div className="card-back">

              <div className="booking-content">

                <h3>Book Video Production</h3>

                <p className="booking-description">
                  Tell us about your video project.
                </p>


                <form
                  className="booking-form"
                  onSubmit={handleVideoSubmit}
                >

                  <div className="booking-field">

                    <label htmlFor="video-name">
                      Full Name
                    </label>

                    <input
                      id="video-name"
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={videoForm.name}
                      onChange={handleVideoChange}
                      required
                    />

                  </div>


                  <div className="booking-field">

                    <label htmlFor="video-email">
                      Email / Phone Number
                    </label>

                    <input
                      id="video-email"
                      type="text"
                      name="email"
                      placeholder="Enter your email or phone"
                      value={videoForm.email}
                      onChange={handleVideoChange}
                      required
                    />

                  </div>


                  <div className="booking-field">

                    <label htmlFor="video-message">
                      Explain Project
                    </label>

                    <textarea
                      id="video-message"
                      name="message"
                      placeholder="Tell us about your video project"
                      value={videoForm.message}
                      onChange={handleVideoChange}
                      required
                    />

                  </div>


                  <button
                    className="booking-button"
                    type="submit"
                    disabled={submitting === 'video'}
                  >

                    {submitting === 'video'
                      ? 'BOOKING...'
                      : 'BOOK SESSION'
                    }

                  </button>

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


        {/* =====================================
            BEAT MAKING CARD
        ===================================== */}

        <div className="flip-card-container">

          <div className="flip-card">


            {/* FRONT */}

            <div className="card-front">

              <ul>

                <li className="card-icon">

                  <FontAwesomeIcon
                    icon={faMusic}
                  />

                </li>

                <li>
                  Beat Making - Ksh 1,500/=
                </li>

              </ul>

              <span className="flip-hint">
                Hover to book
              </span>

            </div>


            {/* BACK */}

            <div className="card-back">

              <div className="booking-content">

                <h3>Book Beat Production</h3>

                <p className="booking-description">
                  Tell us about the beat you need.
                </p>


                <form
                  className="booking-form"
                  onSubmit={handleBeatSubmit}
                >

                  <div className="booking-field">

                    <label htmlFor="beat-name">
                      Full Name
                    </label>

                    <input
                      id="beat-name"
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={beatForm.name}
                      onChange={handleBeatChange}
                      required
                    />

                  </div>


                  <div className="booking-field">

                    <label htmlFor="beat-email">
                      Email / Phone Number
                    </label>

                    <input
                      id="beat-email"
                      type="text"
                      name="email"
                      placeholder="Enter your email or phone"
                      value={beatForm.email}
                      onChange={handleBeatChange}
                      required
                    />

                  </div>


                  <div className="booking-field">

                    <label htmlFor="beat-message">
                      Explain Project
                    </label>

                    <textarea
                      id="beat-message"
                      name="message"
                      placeholder="Tell us about the beat you need"
                      value={beatForm.message}
                      onChange={handleBeatChange}
                      required
                    />

                  </div>


                  <button
                    className="booking-button"
                    type="submit"
                    disabled={submitting === 'beat'}
                  >

                    {submitting === 'beat'
                      ? 'BOOKING...'
                      : 'BOOK SESSION'
                    }

                  </button>

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

      </div>

    </div>
  );
}