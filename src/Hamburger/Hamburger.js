import React, { useState } from 'react';
import './Hamburger.css'; // Assuming you have a CSS file for styling

function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <div className="navbar">
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={isOpen ? 'menu-icon-line open' : 'menu-icon-line'}></div>
          <div className={isOpen ? 'menu-icon-line open2' : 'menu-icon-line'}></div>
          <div className={isOpen ? 'menu-icon-line open3' : 'menu-icon-line'}></div>
        </div>
      </div>

      {/* Responsive Menu */}
      {isOpen && (
        <div className="menu">
          <h3 className='h3tag'>Home</h3>
          <h3 className='h3tag'>Companies</h3>
          <h3 className='h3tag'>What we offer?</h3>
          <h3 className='h3tag'>About Us</h3>
          <h3 className='h3tag'>Hubnex Educate</h3>
          <h3 className='h3tag'>Get in Touch</h3>
        </div>
      )}
    </div>
  );
}

export default Hamburger;
