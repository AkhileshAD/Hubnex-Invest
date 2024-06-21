import React from "react";
import './Footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <div className="hubnex-in">
        <h1 className="hub">hubnex</h1>
        <h1 className="inv">invest</h1>
      </div>

      <div className="let-us-con">
        <h2 className="let">Let us help you with all-in -one startup program
          and navigate the journey from concept to market success.</h2>
      </div>

      <div className="learn">
        <span>Learn more</span>
        <span>Career</span>
        <span>Browse</span>
        <span>Services</span>
        <span>Events</span>
      </div>

      <div className="learn-1">
        <span>Privacy and Legal</span>
        <span>Privacy Policy</span>
        <span>Governance</span>
        <span>Cookie Notice</span>
      </div>

        <div className="connect-us">
          <h2 className="connect">Connect with Us</h2>
        </div>

        <div className="img-con">
          <img className="linkdin-img" src="/Images/Vector.svg" alt="Image Not Found" />
          <img className="linkdin-img" src="/Images/Vector (5).svg" alt="Image Not Found" />
          <img className="linkdin-img" src="/Images/Vector (6).svg" alt="Image Not Found" />
          <img className="linkdin-img" src="/Images/Vector (7).svg" alt="Image Not Found" />
        </div>

        <div className="get-t">
          <h2 >
            Get in Touch
          </h2>
        </div>

        <div className="g-img">
          <img src="/Images/Group 25.svg" alt="" />
          <img src="/Images/Vector (8).svg" alt="" />
        </div>

        <div className="numb">
          <h4 className="h4-tag">+91 6392750561</h4>
          <h4 className="h4-tag">info@hubnex.in</h4>
        </div>

      
      <hr />
      <div className="copyr">
        <h3 className="h3-t">Copyright 2024Hubnex. All rights Reserved</h3>
      </div>
    </div>
  );
}

export default Footer;
