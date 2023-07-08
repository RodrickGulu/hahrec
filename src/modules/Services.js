import React from 'react'
import '../css/services.css';

export default function Services() {
  return (
    <div className='container mt-3 services'>
        <div className='row'>
            <h1>Our Services</h1>
        </div>
        <div className='row production'>
            <h2>Music Production</h2>
            <div className='col-sm border rounded m-2'>
                <h4>Music Recording</h4>
                <p>Hit after Hit is a studio that prides itself with providing modern facilities for your recording needs.</p>
                <p>In need of a modern high quality recording services, go no further.</p>
                <div>
                <button type="submit" className="btn btn-lg btn-outline-light m-4"><b>Live sessions</b></button>
            </div>

            </div>
            <div className='col-sm border rounded m-2'>
                <h4>Music Mastrering</h4>
                <p>With our able and talented producer at the wheel, fear nothing.</p>
                <p>We pride ourselves in having one of the best producers of the modern age, so if you have your projects that need mastering, we are your destination.</p>
                <div>
                <button type="submit" className="btn btn-lg btn-outline-light m-4"><b>Live Sessions</b></button>
            </div>
            </div>
            <div className='col-sm border rounded m-2'>
                <h4>Final Product</h4>
                <p>We give you, the artist, all the freedom you need to make the final product exactly as you wish.</p>
                <p>Our producer is a colabarative one and engaging, you dont have to fear about your music being transformed to something you dont like.</p>
                <div>
                <button type="submit" className="btn btn-lg btn-outline-light m-4"><b>Demo Projects</b></button>
            </div>
            </div>
            <div className='col-sm border rounded m-2'>
                <h4>Marketing and Distribution</h4>
                <p>Music is all about marketing and making sure that it is distributed to the right fanbase.</p>
                <p>Here at Hit After Hit, we provide all the necessary support to our artists to make sure their projects are properly marketed and distributed.</p>
                <div>
                <button type="submit" className="btn btn-lg btn-outline-light m-4"><b>Marketing Team</b></button>
            </div>
            </div>
            <div>
                <button type="submit" className="btn btn-lg btn-outline-light m-4"><b>Book a Session</b></button>
            </div>
        </div>
        <div className='row'>
            <h2>Music Classes</h2>
            <div className='col-md'>
                Production Classes
            </div>
            <div className='col-md'>
                Notes and backup classes
            </div>
        </div>
        <div className='row'>
            <h2>Rent a Studio space</h2>
        </div>
        <div className='row'>
            <h2>Book a Session</h2>
            <div>
                <button type="submit" className="btn btn-lg btn-outline-dark m-4"><b>Book a Session</b></button>
            </div>
        </div>
    </div>
  )
}
