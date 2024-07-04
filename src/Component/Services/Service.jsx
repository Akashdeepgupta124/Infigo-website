import React from 'react'
import './Service.css'
import {services} from '../Assets/data.jsx'
function Service() {
    return (
        <div>
            <div className="service" id='service'>
                <div className="service_header">
                    <h1>Our Service</h1>
                    <p>The service we offer is especially designed to meet your needs</p>
                </div>
                <div className="service_container">
                    {services.map(({icon, head ,desc, action, link}) =>{
                        return(
                            <div className="service_list">
                                <div className="icon">{icon}</div>
                                <h2>{head}</h2>
                                <p>{desc}</p>
                                <div className="action">
                                    <p>{action}</p>
                                    <h2>{link}</h2>
                                </div>
                            </div>
                        )
                    }
                    )}
                </div>
            </div>
        </div>
    )
}

export default Service
