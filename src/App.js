import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useState } from 'react';
import Booking from './components/Booking';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';

function App() {
  const [availableTimes, setAvailableTimes] = useState(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/booking' element={<Booking availableTimes={availableTimes}/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
