import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useReducer, useEffect } from 'react';
import Booking from './components/Booking';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';

export const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return action.payload.availableTimes;

    default:
      return state;
  }
};

export const updateTimes = (selectedDate, availableTimes) => ({
  type: 'UPDATE_TIMES',
  payload: { selectedDate, availableTimes },
});

function App() {
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, []);

  const initializeTimes = async () => {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0]; 

    try {
      const times = await fetchAPI(formattedDate);
      dispatch(updateTimes(formattedDate, times));
    } catch (error) {
      console.error('Error fetching available times:', error);
    }
  };

  useEffect(() => {
    initializeTimes();
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Main initializeTimes={initializeTimes} />}
        />
        <Route
          path='/booking'
          element={<Booking availableTimes={availableTimes} dispatch={dispatch} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
