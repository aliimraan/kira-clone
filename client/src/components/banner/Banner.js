import React from 'react'
import './banner.css'
import {Link} from 'react-router-dom'

function Banner() {
    return (
        <div className="banner">
            <h3>Amplify your team's capabilities</h3>
            <Link to="/form/contact" style={{textDecoration:'none'}}><button>Request a Demo</button></Link>
        </div>
    )
}

export default Banner
