import React, { useState } from 'react'
import "./Header.css"
function Header() {


  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='head-container'>
      <div className='header-v'>
        <div className='header-con'>
          <div className='hub-inv'>
            <h2>hubnex <span className='spn1'>invest</span></h2>
          </div>


          <div className='hambur-posi'>
            <div className="navbar">
              <div className="menu-icon" onClick={toggleMenu}>
                <div className={isOpen ? 'menu-icon-line open' : 'menu-icon-line'}></div>
                <div className={isOpen ? 'menu-icon-line open2' : 'menu-icon-line'}></div>
                <div className={isOpen ? 'menu-icon-line open3' : 'menu-icon-line'}></div>
              </div>
            </div>
          </div>

          {isOpen && (
            <div className='menu-posi'>
              <div className="menu">
                <h3 className='h3tag'>Home</h3>
                <h3 className='h3tag'>Companies</h3>
                <h3 className='h3tag'>What we offer?</h3>
                <h3 className='h3tag'>About Us</h3>
                <h3 className='h3tag'>Hubnex Educate</h3>
                <h3 className='h3tag'>Get in Touch</h3>
              </div>
            </div>
          )}


          <div className='Home-name'>
            <h3 className='h3tag'>Home</h3>
            <h3 className='h3tag'>Companies</h3>
            <h3 className='h3tag'>What we offer?</h3>
            <h3 className='h3tag'>About Us</h3>
            <h3 className='h3tag'>Hubnex Educate</h3>
            <h3 className='h3tag'>Get in Touch</h3>
          </div>

          <div className='search'>
            <img className='img1' src="/Images/search 1.svg" alt='Image Not Found'/>
          </div>

          <div className='btn-sec'>
            <button className='btn'>SIGN IN</button>
            <button className='btn'>SIGN UP</button>
          </div>
          <div className='big-img'>
              <img className='img-siz' src="/Images/website-hosting-concept-with-circuits 1.svg" alt="Image Not Found" />
          </div>

          <div className='unlock-con'>
            <h1 className='unlock-name'>Unlocking Investment Opportunities with Hubnex Invest</h1>
          </div>

          <div className='empower'>
            <h1 className='empower-name'>Empowering Startup with Technology and  Guidance</h1>
          </div>

          <div className='btn-get-con'>
            <button className='btn-book' type="button">Book Demo</button>
            <button className='btn-get' type="button">Get Started</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Header
