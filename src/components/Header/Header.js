import React from 'react';
import Nav from './Nav';
import './Header.css';

export default function Header() {
  return (
    <header>
        <img className="header-img" alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuRAlSoD580xFRGBc1nIHJgQSNhueJpYsoTYx4FGhl7w&s"/>
        <Nav />
    </header>
  )
}
