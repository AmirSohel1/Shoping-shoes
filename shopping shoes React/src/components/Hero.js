import React from 'react'
import '../App.css';

export default function Hero() {
  return (
    <main className='hero container'>
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST SHOES.</h1>
        <p>
        YOUR FEET DESERVE THE BEST, AND WE'RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST, AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
        </p>

        <div className="hero-btn">
          <button>Shop now</button>
          <button className='sec-btn'>Category</button>
        </div>

        <div className="shopping">
          <p>Available on</p>
          <div className="brand-icon">
            <img src="https://www.shutterstock.com/image-vector/amazon-initial-logo-isolated-white-600nw-2272856739.jpg" alt="#" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg7if-bmV9wsQI-iMiYNkcwo9lZGdp_eI6Lg&s" alt="@" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="https://contents.mediadecathlon.com/p2153171/61179e52ed0b3a1b4fdbddf2cfd168c5/p2153171.jpg?format=auto&quality=70&f=650x0" alt="#" />
      </div>
    </main>
  )
}
