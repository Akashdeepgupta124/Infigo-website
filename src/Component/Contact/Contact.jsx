import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div>
            <div className="contact" id='contact'>
                <div className="contact_header">
                    <h2>Get in touch</h2>
                </div>
                <div className="contact_info">
                    <div className="contact_left">
                        <h2>Lets talk about Business</h2>
                        <p>we can provide a remarkable growth to you business and help u acheive ur goal</p>
                        <div className="contact_details">
                            <div className="detail">
                                <p>infigo@gmail.com</p>
                            </div>
                            <div className="detail">
                                <p>+91 9511490316</p>
                            </div>
                            <div className="detail">
                                <p>Delhi, India</p>
                            </div>
                        </div>

                    </div>
                    <div className="contact_right">
                        <div className="conact_input">
                            <div className="text">
                                <input type="text " placeholder='Email' />
                            </div>
                            <div className="text">
                                <input type="text " placeholder='subject' />
                            </div>
                            <div className="message">
                                < textarea cols='30' rows='10' > Message</textarea>
                            </div>
                            <div className="btn">
                                <button>Send Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
