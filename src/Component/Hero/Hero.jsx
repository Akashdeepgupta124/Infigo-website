import React from 'react'
import { FaCirclePlay } from "react-icons/fa6";
import img from '../Assets/m2.jpg'
import amazon from '../Assets/amazon logo.png'
import facebook from '../Assets/fb logo.png'
import spotify from '../Assets/spotify logo.png'
import Yahoo from '../Assets/yahoo.png'
import stripe from '../Assets/stripe.png'
import airbnb from '../Assets/airbnb.png'

import './Hero.css'
function Hero() {
    return (
        <div>
            <div className="hero">
                <div className="hero_left">
                <p className='gold'>Unlock growth using creativity & data to boost your business</p>
                <h1> we build rapid solutions for you business</h1>
                <p>Lets start something big together, lets increase your revenue using our expert
                    knowledge for your business
                </p>
                <div className="btns">
                    <button>Schedule A Call</button>
                    <button> <FaCirclePlay size='25px' color='gold'/> Watch Demo</button>
                </div>
                </div>
                <div className="hero_right">
                    <img src={img}alt="" />
                </div>
               
            </div>
            <div className="clients">
                    <div className="client_details">
                        <div className="imgs">
                            <img src={amazon} alt="" />
                            <img src={facebook} alt="" />
                            <img src={spotify} alt="" />
                            <img src={Yahoo} alt="" />
                            <img src={stripe} alt="" />
                            <img src={airbnb} alt="" />
                            
                        </div>
                    </div>
                    
                </div>
        </div>
        
        
    )
}

export default Hero
