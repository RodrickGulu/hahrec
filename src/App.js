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
        <Route path='/' element={<Home/>}/>
        <Route path='/book' element={<Bookings/>}/>
        <Route path='/background' element={<Background/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/live' element={<Live/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/huruk' element={<Admin/>}/>
      </Routes>
    </div>
  );
}

export default App;
