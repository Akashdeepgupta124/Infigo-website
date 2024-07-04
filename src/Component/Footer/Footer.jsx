import React from 'react'
import './Footer.css'
import fbicon from '../Assets/facebook_icon.png'
import xicon from '../Assets/twitter_icon.png'
import linkicon from '../Assets/linkedin_icon.png'
function Footer() {
    return (
        <div>
            <div className="footer" id='footer'>
                <div className="footer_content">
                    <div className="content_left">
                        <h2>INFIGO</h2>
                        <p>Connect with use and choose the best for your brand</p>
                        <div className="footer_icons">
                            <img src={fbicon} alt="" />
                            <img src={xicon} alt="" />
                            <img src={linkicon} alt="" />

                        </div>

                    </div>
                    <div className="content_centre">
                        <h2>COMPANY</h2>
                        <ul>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Services</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="content_right">
                        <h2>GET IN TOUCH</h2>
                        <ul>
                            <li>+91 9511490316</li>
                            <li>akashdeepgupta124@gmail.com</li>
                        </ul>

                    </div>
                </div>
                <hr />
                <div className="footer_copyright">copyright 2024 @company. All right reserved</div>
            </div>
        </div>
    )
}

export default Footer
