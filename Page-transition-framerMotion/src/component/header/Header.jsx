import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src='/src/component/header/logo.jpg'></img>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header