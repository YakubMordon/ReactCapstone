import React from 'react';
import './Footer.css';
import FooterCategory from './FooterCategory';

export default function Footer() {
  const footerCategories = [
    {
      title: "Doormat Navigation", 
      categories: [
        "Home", "About", "Menu", "Reservations", "Order Online", "Login"
      ]
    },
    {
      title: "Contact", 
      categories: [
        "Address", "Phone Number", "Email"
      ]
    },
    {
      title: "Social Media", 
      categories: [
        "Address", "Phone Number", "Email"
      ]
    },
  ]

  return (
    <footer>
      <img className="footer-img" alt="footer-logo" src="https://lemonrestaurant.netlify.app/assets/logo2.png"/>
      <div className='footer-category-container'>
          {footerCategories.map((category, index) => <FooterCategory key={index} header={category.title} categories={category.categories}/>)}
      </div>
    </footer>
  )
}
