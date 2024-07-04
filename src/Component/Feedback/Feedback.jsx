import React from 'react'
import './Feedback.css'
import {feedback} from '../Assets/data'

function Feedback() {
    return (
        <div> 
            <div className="feedback">
                <h5>Hear from our clients</h5>
                <h3>Here's what our satisfied clients have to say about our work</h3>
                <div className="customers">
                    {feedback.map(({image,icon,name,company,comment}, index) =>{
                        return (
                            <div className="item">
                                <div className="user">
                                    <img src={image} alt="" />
                                    <div className="info">
                                        <h5>{name}</h5>
                                        <p>{company}</p>

                                    </div>
                                </div>
                                <div className="comments">
                                    <h2>{icon}</h2>
                                    <p>{comment}</p>
                                </div>
                                
                            </div>
                        )

                    })}

                </div>

            </div>
        </div>
    )
}

export default Feedback
