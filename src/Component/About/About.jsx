import React from 'react'
import './About.css'
import aboutimg from '../Assets/img3.jpg'
import {about} from '../Assets/data.jsx'

function About() {
    return (
        <div>
            <div className="about" id='about'>
                <div className="about_left">
                    <img src={ aboutimg} alt="" />
                </div>
                <div className="about_right">
                    <h3>About us</h3>
                    <h1>We give the best solutions to grow up your business</h1>
                    <p className='text'>We have all hands on deck to provide you with the best service that suits
                        your business
                    </p>
                    <div className="about_listing">
                        {about.map(({number, head, text}, index) =>{
                            return(
                                <div className="about_list">
                                    <div className="about_icon">
                                        <h2>{number}</h2>
                                        <div className="design"></div>
                                    </div>
                                    <div className="list_text">
                                        <h2>{head}</h2>
                                        <p>{text}</p>
                                    </div>
                                </div>
                            )
                        })}

                    </div>

                </div>
            </div>
        </div>
    )
}

export default About
