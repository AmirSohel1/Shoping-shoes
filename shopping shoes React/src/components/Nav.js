import React from 'react'
import '../App.css';
function Nav() {
  return (
    <div>
      <nav className='container'>
        <div className="logo">
          <img src="https://i.pinimg.com/736x/55/f6/8e/55f68e1fbbfb3a97de3447dea15fbe28.jpg" alt="#" />
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button>Login</button>
      </nav>
    </div>
  )
}

export default Nav
