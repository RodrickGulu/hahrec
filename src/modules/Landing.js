import React from 'react'
import '../css/landing.css';
import TypeWriterEffect from 'react-typewriter-effect';
import logo from '../assets/pngwing.com.png'; 
import { useNavigate } from 'react-router-dom';

export default function Landing() {
  const navigate = useNavigate();

  function handleClick(_event) {

    navigate('/hitafterhit/book');
  }
  return (
    <div className='landing container-fluid center pt-4'>
      <div className='container-fluid center in'>
      <img src={logo} alt='logo' height={250}></img>
  
  <div className='row mb-3 mt-2'>
      <h1>HIT AFTER HIT RECORDS</h1>
  </div>

  <div className='row mb-3'>
  <h2>Dedicated to creating good music</h2>
  </div>
  
  <div className='row mb-3'>
  <TypeWriterEffect
  textStyle={{
    color: 'bisque',
    fontWeight: 500,
    fontSize: '1.2em',
  }}
  startDelay={2000}
  cursorColor="#3F3D56"
  multiText={[
    '"Where words fail, music speaks." - Hans Christian Andersen',
    '"Music is the universal language of mankind." - Henry Wadsworth Longfellow',
    '"Music gives a soul to the universe, wings to the mind, flight to the imagination, and life to everything." - Plato',
    '"Music expresses that which cannot be put into words and that which cannot remain silent." - Victor Hugo',
    '"Music is the art of thinking with sounds." - Jules Combarieu',
    '"Without music, life would be a mistake." - Friedrich Nietzsche',
    '"Music is a moral law. It gives soul to the universe, wings to the mind, flight to the imagination, and charm and gaiety to life and to everything." - Plato',
    '"Where words leave off, music begins." - Heinrich Heine',
    '"Music is the mediator between the spiritual and the sensual life." - Ludwig van Beethoven',
    '"Music is the strongest form of magic." - Marilyn Manson',
  ]}
  multiTextDelay={1000}
  typeSpeed={120}
/>
  </div>

  <div className='row mb-3'>
    <div>
    <button type="submit" className="btn btn-lg btn-outline-light m-4 rounded-pill" onClick={handleClick}><b>Book a Session</b></button>
    </div>
    <div>
    <button type="submit" className="btn btn-lg btn-outline-light m-4 rounded-pill page-scroll">
        <a href="#explore" className='text-reset nav-link'>
            <b>Explore Website</b>
        </a>
    </button>
    </div>
  </div>
      </div>
      
    </div>
  )
}
