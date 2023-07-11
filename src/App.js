import './App.css';
import Bookings from './pages/Bookings';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/hitafterhit' element={<Home/>}/>
        <Route path='/hitafterhit/book' element={<Bookings/>}/>
      </Routes>
    </div>
  );
}

export default App;
