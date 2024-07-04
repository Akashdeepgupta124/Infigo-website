import React from 'react'
import { navlinks } from '../Assets/data.jsx'
import './NavBar.css'
function NavBar() {
    return (
       <div>
        <div className="nav">
            <div className="logo">
                <h2>Infigo</h2>

            </div>
            <div className="nav_links">
                <ul>
                    {navlinks.map(item => (
                        <li key={item.id}> 
                            <a href={item.link}>{item.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="btn">
                <button><a href=""></a>Contact Us</button>
            </div>
        </div>
       </div>
    )
}

export default NavBar
