import React from 'react'
import '../css/services.css';
import { useNavigate } from 'react-router-dom';
import CommentList from './CommentList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{
    faVideoCamera,
    faMusic,
    faComments
} from '@fortawesome/free-solid-svg-icons';

export default function Services() {
    const navigate = useNavigate();

  function handleBookSession() {
    navigate('/book');
  }

  return (
    <div className='services-container'>
        <div className='services-header'>
            <h1>Our Services</h1>
            <p className='services-subtitle'>Bringing your creative vision to life with professional production services</p>
        </div>

        {/* Music Production Service */}
        <div className='service-card production' id='music'>
            <div className='service-content'>
                <FontAwesomeIcon icon={faMusic} className='service-icon'/>
                <h2>Music Production</h2>
                <div className='highlight-boxx'>
                <p>Experience the transformative power of our music production services. Our dedicated team of producers, engineers, and musicians is here to bring your musical vision to life.</p>
                <p>With state-of-the-art studios and cutting-edge technology, we ensure that every element of your music is elevated to new heights.</p>
                <p>From recording and arrangement to mixing and mastering, our meticulous approach guarantees impeccable sound quality and attention to detail.</p>
                <p>We work closely with you, capturing your unique style and genre, to create music that resonates with emotion and captivates listeners.</p>
                </div>
            </div>
        </div>

        {/* Video Production Service */}
        <div className='service-card alternative' id='video'>
            <div className='service-content'>
                <FontAwesomeIcon icon={faVideoCamera} className='service-icon'/>
                <h2>Video Production</h2>
                <div className='highlight-box'>
                <p>Looking to produce a professional video song? Hit After Hit is here for you.</p>
                <p>From concept to delivery, we ensure every frame showcases your story in high-definition brilliance with creative cinematography and post-production excellence.</p>
                </div>
            </div>
        </div>

        {/* Client Testimonials */}
        <div className='service-card studio' id='comments'>
            <div className='service-content'>
                <FontAwesomeIcon icon={faComments} className='service-icon'/>
                <h2>What Our Clients Say</h2>
                <CommentList/>
            </div>
        </div>

        {/* Call to Action */}
        <div className='service-cta'>
            <h2>Ready to Get Started?</h2>
            <p>Let's create something amazing together</p>
            <button type="button" className="btn btn-lg btn-primary rounded-pill" onClick={handleBookSession}>
                <b>Book a Session Now</b>
            </button>
        </div>
    </div>
  )
}
