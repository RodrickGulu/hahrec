import './App.css';
import Background from './pages/Background';
import Bookings from './pages/Bookings';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Live from './pages/Live';
import Gallery from './pages/Gallery';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/hitafterhit' element={<Home/>}/>
        <Route path='/hitafterhit/book' element={<Bookings/>}/>
        <Route path='/hitafterhit/background' element={<Background/>}/>
        <Route path='/hitafterhit/contact' element={<Contact/>}/>
        <Route path='/hitafterhit/live' element={<Live/>}/>
        <Route path='/hitafterhit/gallery' element={<Gallery/>}/>
      </Routes>
    </div>
  );
}

export default App;
