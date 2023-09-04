import './App.css';
import Background from './pages/Background';
import Bookings from './pages/Bookings';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Live from './pages/Live';
import Gallery from './pages/Gallery';
import Admin from './pages/Admin';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/hahrec' element={<Home/>}/>
        <Route path='/hahrec/book' element={<Bookings/>}/>
        <Route path='/hahrec/background' element={<Background/>}/>
        <Route path='/hahrec/contact' element={<Contact/>}/>
        <Route path='/hahrec/live' element={<Live/>}/>
        <Route path='/hahrec/gallery' element={<Gallery/>}/>
        <Route path='/hahrec/huruk' element={<Admin/>}/>
      </Routes>
    </div>
  );
}

export default App;
