import React, { useState } from 'react';
import '../css/forms.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import {
  faComments
} from '@fortawesome/free-solid-svg-icons';

export default function ContactForm() {

  const navigate = useNavigate();

  const [author, setAuthor] = useState('');
  const [message, setText] = useState('');
  const [email, setEmail] = useState('');

  const [submitMessage, setSubmitMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleSubmit = async (e) => {

    e.preventDefault();

    if (
      !author.trim() ||
      !message.trim() ||
      !email.trim()
    ) {
      setSubmitMessage(
        'Please fill in all fields.'
      );

      return;
    }


    setIsSubmitting(true);
    setSubmitMessage('');


    try {

      const response = await fetch(
        'https://hahrec-backend.onrender.com/api/comments',
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json'
          },

          body: JSON.stringify({
            author,
            email,
            message
          })
        }
      );


      if (!response.ok) {

        const payload =
          await response
            .json()
            .catch(() => ({}));

        throw new Error(
          payload.message ||
          'Unable to submit comment.'
        );
      }


      // Clear form
      setAuthor('');
      setEmail('');
      setText('');


      setSubmitMessage(
        '✓ Comment submitted successfully! Redirecting...'
      );


      setTimeout(() => {

        navigate('/');

        setIsSubmitting(false);

      }, 2000);


    } catch (error) {

      console.error(
        'Comment submit failed:',
        error
      );

      setSubmitMessage(
        error.message ||
        'Unable to submit comment.'
      );

      setIsSubmitting(false);
    }
  };


  return (

    <div className="comment-form-container">

      {/* Icon */}

      <div className="comment-form-icon">

        <FontAwesomeIcon
          icon={faComments}
        />

      </div>


      {/* Heading */}

      <h3>
        Leave a Comment
      </h3>

      <p className="comment-form-subtitle">
        We would love to hear your thoughts.
      </p>


      {/* Status Message */}

      {submitMessage && (

        <div
          className={
            submitMessage.includes('✓')
              ? 'form-success-message'
              : 'form-error-message'
          }
        >
          {submitMessage}
        </div>

      )}


      {/* Form */}

      <form
        className="comment-form"
        onSubmit={handleSubmit}
      >

        {/* Name */}

        <div className="comment-field">

          <input
            type="text"
            id="comment-name"
            name="name"
            placeholder=" "
            value={author}
            onChange={(e) =>
              setAuthor(e.target.value)
            }
            required
            autoComplete="name"
          />

          <label htmlFor="comment-name">
            Full Name
          </label>

        </div>


        {/* Email */}

        <div className="comment-field">

          <input
            type="email"
            id="comment-email"
            name="email"
            placeholder=" "
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
            autoComplete="email"
          />

          <label htmlFor="comment-email">
            Email Address
          </label>

        </div>


        {/* Message */}

        <div className="comment-field textarea-field">

          <textarea
            id="comment-message"
            name="message"
            placeholder=" "
            value={message}
            onChange={(e) =>
              setText(e.target.value)
            }
            required
          />

          <label htmlFor="comment-message">
            Your Comment
          </label>

        </div>


        {/* Submit Button */}

        <button
          type="submit"
          className="comment-submit-btn"
          disabled={isSubmitting}
        >

          {isSubmitting
            ? 'Submitting...'
            : 'Submit Comment'
          }

        </button>

      </form>

    </div>
  );
}