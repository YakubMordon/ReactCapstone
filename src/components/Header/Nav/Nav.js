import React from 'react';
import './Nav.css';

export default function Nav() {
  return (
    <nav>
        <ul className='navigation-list'>
            <li className='navigation-item'>
                <a>HOME</a>
            </li>
            <li className='navigation-item'>
                <a>ABOUT</a>
            </li>
            <li className='navigation-item'>
                <a>MENU</a>
            </li>
            <li className='navigation-item'>
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
