import React from 'react';
import './FooterCategory.css';

export default function FooterCategory({header, categories}) {
  return (
    <div className='category-container'>
        <div className='category-header-container'>
            <p className='category-header'>{header}</p>
        </div>
        <div className='category-body'> 
            <ul className='category-list-container'>
                {categories.map((category, index) => <li key={index}>
                    <a>{category}</a>
                </li>)}
            </ul>
        </div>
    </div>
  )
}
