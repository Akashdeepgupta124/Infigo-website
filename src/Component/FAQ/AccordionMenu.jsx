import React, { useState } from 'react'
import {menuItems} from '../Assets/data.jsx'
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

function AccordionMenu({menuItems}) {
    const [activeIndex, setActiveIndex] = useState(null)

    const handelClick = (index)=>{
        setActiveIndex(index === activeIndex ? null: index)

    }
    return (
        <div>
            <div className="accordian_menu">
                {menuItems.map((item, index) =>(
                    <div key={index} className="accordian_item">
                        <div className="accordian_header" onClick={()=> handelClick(index)}>
                            {item.title}
                            {activeIndex === index ? <FaMinus className='accordion_icon' /> :  <FaPlus className='accordion_icon'/> }
                        </div>


                        {activeIndex === index && (
                            <div className="accordian_content">{item.content}</div>
                        )}
                        
                        {index !== menuItems.length - 1 && <hr className='seperator'/>}
                    </div>
                ))}
               
               

            </div>
        </div>
    )
}

export default AccordionMenu
