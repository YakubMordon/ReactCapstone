import { useNavigate } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className='hero-container'>
      <div className='hero-text-container'>
        <h1 className='hero-header'>Little Lemon</h1>
        <h3 className='hero-location'>Chicago</h3>
        <p className='hero-description'>
          We are a family owned
          Mediterranean restaurant,
          focused on traditional
          recipes served with a modern
          twist.
        </p>
        <button className='hero-button' onClick={() => navigate('/booking')}>
          Reserve a Table
        </button>
      </div>
      <div className='image-container'>
        <img className='hero-image' alt='hero-image' src='https://assets.bonappetit.com/photos/6283b49957b04102560d8c03/1:1/w_4480,h_4480,c_limit/0622-Big-Queer-Cold-Noodles.jpg'/>
      </div>
    </div>
  )
}
