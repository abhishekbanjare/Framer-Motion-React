import React from 'react'
import './Header.css'

const Header = () => {
  return (
            <div className='row-container'>
              <div className='logo'>
                 <img src='src/assets/Logo2.jpg' alt='Abhishek' />
              </div>
              <div className='option'>
                  <ul>
                    <li><a href='#Home'>Home</a></li>
                    <li><a href='#Menu'>Menu</a></li>
                    <li><a href='#About'>About</a></li>
                    <li><a href='#Contact'>Contact</a></li>
                  </ul>
              </div>
              
            </div>

// <div className='logo'>
// <img src='src/assets/Logo.jpg' alt='Abhishek' />
// </div>
// <div className='right'>
//  <ul>
//      <li><a href='#Home'>Home</a></li>
//      <li><a href='#Menu'>Menu</a></li>
//      <li><a href='#About'>About</a></li>
//      <li><a href='#Contact'>Contact</a></li>
//  </ul>
// </div>
  )
}

export default Header