import { useNavigate } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  const navigate = useNavigate();

  return (
    <nav>
        <ul className='navigation-list'>
            <li className='navigation-item' onClick={() => navigate('/')}>
                <a>HOME</a>
            </li>
            <li className='navigation-item'>
                <a>ABOUT</a>
            </li>
            <li className='navigation-item'>
                <a>MENU</a>
            </li>
            <li className='navigation-item' onClick={() => navigate('/booking')}>
                <a>RESERVATIONS</a>
            </li>
            <li className='navigation-item'>
                <a>ORDER ONLINE</a>
            </li>
            <li className='navigation-item'>
                <a>LOGIN</a>
            </li>
        </ul>
    </nav>
  )
}
