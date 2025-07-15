import React from 'react';
import fullMenuImage from '../assets/About1.png'; // Replace with your actual image file

export default function Menu() {
  return (
    <section className="menu-page">
      <h1 className="menu-title">Our Menu</h1>
      <div className="menu-image-container">
        <img src={fullMenuImage} alt="Full menu" className="full-menu-image" />
      </div>
    </section>
  );
}
