import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useState } from 'react';
import Booking from './components/Booking';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';

const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

    default:
      return state;
  }
};

const updateTimes = (selectedDate) => ({ type: 'UPDATE_TIMES', payload: { selectedDate } });

function App() {
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, []);

  const initializeTimes = () => {
    dispatch(updateTimes());
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Main initializeTimes={initializeTimes} />} />
        <Route path='/booking' element={<Booking availableTimes={availableTimes} dispatch={dispatch}/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
