import React from 'react'

import './FAQ.css'
import AccordionMenu from './AccordionMenu'
import { menuItems } from '../Assets/data'

function Faq() {
    return (
        <div>
            <div className="faq_wrapper">
                <h1>Frequently asked questions</h1>
                < AccordionMenu menuItems={menuItems}/>
                
            </div>
        </div>
    )
}

export default Faq
