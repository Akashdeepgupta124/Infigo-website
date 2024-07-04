import React from 'react'
import './More.css'
import rightimage from '../Assets/img2.jpg'

function More() {
    return (
        <div> 
            <div className="more">
                <div className="more_left">
                    <div className="left_container">
                        <h1>Business Has Only Two Function - Marketing And Innovation</h1>
                        <p>Type a very reassuring and encouraging text to keep clients elated and expect the best from you Type a very reassuring and encouraging text to keep clients elated and expect the best from you Type a very reassuring and encouraging text to keep clients elated and expect the best from you</p>
                        <button>Learn More</button>
                    </div>

                </div>
                <div className="more_right">
                    <img src={rightimage} alt="" />

                </div>
            </div>
        </div>
    )
}

export default More
