import React from 'react'
import './Hero.css'
import {Link} from 'react-router-dom'

function Hero() {
    return (
        <div className="hero_section">
        <div className="col1"></div>
            <div className="col2">
                    <div className="heading">Enlightening <br/>Enterprises Everywhere</div>
                    <p>Enable your team to truly know what’s in your contracts and documents. Uncover what matters most and reveal new solutions with Kira’s AI-powered contract analysis software.</p>
                    <div className="buttons">
                        <button className="button1">watch kira in action</button>
                        <Link to="/form/contact" style={{textDecoration:'none'}}><button className="button2">
                            Request a demo
                        </button></Link>
                    </div>
            </div>
            <div className="col3">
                <img src="./home.svg" alt="photo"/>
            </div>
        </div>
    )
}

export default Hero
