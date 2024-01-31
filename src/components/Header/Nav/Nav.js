import { useNavigate } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  const navigate = useNavigate();

  return (
    <nav>
        <ul className='navigation-list'>
            <li className='navigation-item' onClick={() => navigate('/')} aria-label="On Click">
                <a>HOME</a>
            </li>
            <li className='navigation-item' aria-label="On Click">
                <a>ABOUT</a>
            </li>
            <li className='navigation-item' aria-label="On Click">
                <a>MENU</a>
            </li>
            <li className='navigation-item' onClick={() => navigate('/booking')} aria-label="On Click">
                <a>RESERVATIONS</a>
            </li>
            <li className='navigation-item' aria-label="On Click">
                <a>ORDER ONLINE</a>
            </li>
            <li className='navigation-item' aria-label="On Click">
                <a>LOGIN</a>
            </li>
        </ul>
    </nav>
  )
}
