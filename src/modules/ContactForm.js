import {useState, React} from 'react'
import '../css/services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom';
import {
  faComments
} from '@fortawesome/free-solid-svg-icons'

export default function ContactForm() {
  const navigate=useNavigate();
  const [author, setAuthor] = useState('');
  const [message, setText] = useState('');
  const [email, setEmail]= useState('');
  const [commemts, setComments]=useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment={
      author,
      message,
      email,
    };
    setComments([...commemts, newComment]);
    setAuthor('');
    setText('');
    setEmail('');

    const existingComments = JSON.parse(localStorage.getItem('comments')) || [];
    existingComments.push(...commemts,newComment);
    localStorage.setItem('comments', JSON.stringify(existingComments));
    navigate('/hahrec#comments')

  };
  return (
    <div className='container p-5 mt-5 form'>
      <FontAwesomeIcon icon={faComments} size='5x'/>
        <h3>Leave a Comment</h3>
         <form className='mt-4' onSubmit={handleSubmit}>
      <div className='form-floating mb-3 mt-3'>
      <input
    type="text"
    name="name"
    placeholder='Enter your Fullname'
    className="form-control"
    value={author}
    onChange={(e) => setAuthor(e.target.value)}
    required
    />
    <label htmlFor='name'>Full Name</label>
      </div>

      <div className='form-floating mb-3 mt-3'>
      <input
    type="email"
    name="email"
    placeholder='Enter your Email'
    className="form-control"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
    />
    <label htmlFor='email'>Enter your Email</label>
      </div>

      <div className='form-floating mb-3 mt-3'>
      <textarea
    type="text"
    name="message"
    placeholder='Add your comment'
    className="form-control"
    value={message}
    onChange={(e) => setText(e.target.value)}
    required></textarea>
    <label htmlFor='message'>Add your comments</label>
      </div>

      <button type="submit" className="btn btn-lg btn-outline-dark m-4 rounded-pill" style={{color: 'black'}}><b>SUBMIT</b></button>

    </form>
    </div>
  )
}
