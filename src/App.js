import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Booking from './components/Booking';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/booking' element={<Booking />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
