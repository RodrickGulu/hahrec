import React from 'react'
import '../css/services.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{
    faVideoCamera,
    faMusic,
    faComments,
    faCalendarWeek
} from '@fortawesome/free-solid-svg-icons';

export default function Services() {
    const navigate = useNavigate();

  function handleClick(event) {

    navigate('/hitafterhit/book');
  }
  return (
    <div className='container-flex m-3 services'>
        <div className='row'>
            <h1>Our Services</h1>
        </div>
        <div className='row production rounded m-2 pt-2'>
            <FontAwesomeIcon icon={faMusic} size='6x'/>
            <h2>Music Production</h2>
            <p>Experience the transformative power of our music production services. Our dedicated team of producers, engineers, and musicians is here to bring your musical vision to life.</p>
            <p>With state-of-the-art studios and cutting-edge technology, we ensure that every element of your music is elevated to new heights.</p>
            <p>From recording and arrangement to mixing and mastering, our meticulous approach guarantees impeccable sound quality and attention to detail.</p>
            <p>We work closely with you, capturing your unique style and genre, to create music that resonates with emotion and captivates listeners.</p>
            <p>Whether you're a solo artist, band, or composer, our tailored music production solutions empower your artistic journey and help you make a lasting impact in the industry.</p>
            <div>
                <button type="submit" className="btn btn-lg btn-outline-light m-4 rounded-pill" onClick={handleClick}><b>Book a Session</b></button>
            </div>
        </div>
        <div className='row rounded mt-5 m-2 pt-2'>
        <FontAwesomeIcon icon={faVideoCamera} size='6x'/>
            <h2>Video Production</h2>
            <div className='col-md m-2'>
                <p>You want to produce a video song? No problem, Hit After Hit is here for you</p>
                <p>From concept to delivery, we ensure every frame showcases your story in high-definition brilliance.</p>
                <div>
                <button type="submit" className="btn btn-lg btn-outline-dark m-4 rounded-pill" onClick={handleClick}><b>Book a Session</b></button>
                </div>
            </div>
        </div>
        <div className='row rounded mt-5 m-2 studio pt-2'>
            <FontAwesomeIcon icon={faComments} size='6x'/>
        <h2>Thoughts from our clients</h2>
            <div className='col-md m-2'>
            <p>Do you need some privacy to work with your producer, some space to think new ideas on your own and your team?</p>
            <p>Hit After Hit Records is also available for rentals.</p>
            <p>We understand about writer's block, and if you need some time to rekindle a spark, Hit After Hit offers a cool place to that.</p>
            <p>Or even maybe, you need a studio for an event, Hit Ater Hit gotcha.</p>
            </div>
        </div>
        <div className='row rounded mt-5 m-2 pt-2'>
            <FontAwesomeIcon icon={faCalendarWeek} size='6x'/>
            <h2>Book a Session</h2>
            <div className='col-md m-2'>
                <p>What are you waiting for? Book a session now below</p>
            </div>
            <div>
                <button type="submit" className="btn btn-lg btn-outline-dark m-4 rounded-pill" onClick={handleClick}><b>Book a Session</b></button>
            </div>
        </div>
    </div>
  )
}
