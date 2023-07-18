import React from 'react'

export default function ContactForm() {
  return (
    <div className='container class p-5 mt-5 form'>
        <h3>Leave a Comment</h3>
         <form className='mt-4'>
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
    <label htmlFor='email'>Enter your Email</label>
      </div>

      <div className='form-floating mb-3 mt-3'>
      <textarea
    type="text"
    name="message"
    placeholder='Add your comment'
    className="form-control"></textarea>
    <label htmlFor='message'>Add your comments</label>
      </div>

      <button className='btn btn-lg btn-outline-dark l' type='submit'>SUBMIT</button>

    </form>
    </div>
  )
}
