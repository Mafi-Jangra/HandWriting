import React from 'react'
import { ImPen } from "react-icons/im";

import './Info.css'
import image from '../../media/pen.svg'

function Info() {
    return (
        <div className="info">
            <div className="info_about">
                <h3><span>H</span>and<span>W</span>ritting</h3>
                <p>
                    <ImPen className="penIcon"/>
                    Tired of spending hours on manual written assignments? 
                    <strong> Handwriting AI</strong> is the ultimate productivity tool designed to bridge the gap between digital and physical documentation.
                    <br /><br />
                    It seamlessly converts your typed text into realistic handwritten documents, saving you valuable time for more important tasks. Explore various fonts, adjust ink effects, and personalize your output to make it look authentic.
                    
                    <ImPen className="penIcon"/>
                </p>
            </div>
            <div className="info_image">
                <img src={image} alt="pen" />
            </div>
        </div>
    )
}

export default Info
