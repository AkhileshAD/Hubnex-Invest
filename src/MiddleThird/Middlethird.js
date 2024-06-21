import React from 'react'
import './Middlethird.css'
function Middlethird() {
    return (
        <div className='Testimonials-main-con'>

            <div className='Testimonials-div'>
                <h1 className='Testimonials-font'>Testimonials</h1>
            </div>
            <div className='Test-con'>
                <div className='Test-div1'>
                    <img className='test-star-img' src="/Images/Icon.svg" alt="Image Not Found" />
                    <div className='test-h4-div'> <h4 className='Test-h4'>“Partnering with Hubnex Invest was a game-changer for our startup.
                        Their network, resources, and investment have accelerated our growth and opened doors to new
                        opportunities. We're proud to be part of the Hubnex Invest community and grateful
                        for their unwavering support."</h4></div>
                    <div className='varma-img'>  <img className='test-img-size' src="/Images/Ellipse 7.svg" alt="Image Not Found" />
                        <h4 className='Test-h3'>Verma S</h4>

                    </div><h4 className='Test-h3-tag'>Founder C, Startup Z</h4>
                </div>
                <div className='Test-div1'>
                    <img className='test-star-img' src="/Images/Icon.svg" alt="Image Not Found" />
                    <div className='test-h4-div'> <h4 className='Test-h4'>“Hubnex Invest’s support was instrumental in turning our vision into reality. 
                        Their guidance, mentorship,and investment empowered us to overcome 
                        challenges and achieve our goals. We’re grateful for their partnership and support on our Journey to success.”</h4></div>
                    <div className='varma-img'>  <img className='test-img-size' src="/Images/Ellipse 8.svg" alt="Image Not Found" />
                        <h4 className='Test-h3'>Jayasree M</h4>

                    </div><h4 className='Test-h3-tag'>Founder A, Startup X</h4>
                </div>
                <div className='Test-div1'>
                    <img className='test-star-img' src="/Images/Icon.svg" alt="Image Not Found" />
                    <div className='test-h4-div'> <h4 className='Test-h4'>“Partnering with Hubnex Invest was a game-changer for our startup.
                        Their network, resources, and investment have accelerated our growth and opened doors to new
                        opportunities. We're proud to be part of the Hubnex Invest community and grateful
                        for their unwavering support."</h4></div>
                    <div className='varma-img'> 
                         <img className='test-img-size' src="/Images/Ellipse 9 (1).svg" alt="Image Not Found" />
                        <h4 className='Test-h3'>Anirudh H</h4>

                    </div><h4 className='Test-h3-tag'>Founder B, Startup Y</h4>
                </div>
            </div>

            <div className='FA-con'>
                <h1 className='fa-div'>
                    Frequently Asked Questions
                </h1>
            </div>

            <div className='what-invest-con'>
                <h2 className='wht-invest'>What is Hubnex Invest?</h2>
                <p className='line-tag'></p>
                <h2 className='wht-invest'>How does Hubnex Invest support Startup?</h2>
                <p className='line-tag'></p>
                <h2 className='wht-invest'>What type of startups does Hubnex Invest work with?</h2>
                <p className='line-tag'></p>
                <h2 className='wht-invest'>Does Hubnex Invest provide financial investment ?</h2>
                <p className='line-tag'></p>
                <h2 className='wht-invest'>What is the application process for Hubnex Invest?</h2>
                <p className='line-tag'></p>
            </div>

            <div className='btn-fa'>
                <button className='more-fa'> More FAQ’s</button>
            </div>
            <div className='are-you-con'>
                <h1 className='are-you-div'>Are you ready to turn your entrepreneurial dreams into reality?
                    <br /><br /><span className='are-span'>Join our Startup Program</span></h1>
            </div>

            <div className='btn-demo1'>
                <button className='btn-book-demo' type="button">Apply</button>
            </div>

            <div className='for-more-div'>
                <h4 className='for-h4'>For more information or to sign up,
                    our team is ready to assist you and answer any questions you may have.</h4>
            </div>

            <div className='input-box-con'>
                <div className="inputbox">
                    <input required="required" type='email' />
                    <span>First Name*</span>
                    <i></i>
                </div>
                <div className="inputbox">
                    <input required="required" type='email' />
                    <span>Last Name*</span>
                    <i></i>
                </div>
                <div className="inputbox">
                    <input required="required" type='email' />
                    <span>Email*</span>
                    <i></i>
                </div>
                <div className="inputbox">
                    <input required="required" type='email' />
                    <span>Phone Number*</span>
                    <i></i>
                </div>
                <div className="inputbox">
                    <input required="required" type='email' />
                    <span>Message*</span>
                    <i></i>
                </div>
            </div>
           
            <div className='btn-submit'>
                <button className='btn-book-demo' type="button">Submit</button>
            </div>

        </div>
    )
}

export default Middlethird
