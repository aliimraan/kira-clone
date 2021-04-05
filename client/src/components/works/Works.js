import React from 'react'
import './works.css'
import { FaCircle } from "react-icons/fa";

function Works() {
    return (
        <div className="works">
            <h3>How Kira Works</h3>
            <p>Kira automatically highlights and extracts provisions that are important to you and helps you organize your data for analysis</p>
            <div className="progress_bar">
                <ul>
                    <li>
                        <div className="image">
                            <img src="./w1.svg"/>
                        </div>
                        <div className="icon">
                            <FaCircle/>
                        </div>
                        <div className="title">
                            Import Documents
                        </div>
                    </li>
                    <li>
                        <div className="image">
                            <img src="./w2.svg"/>
                        </div>
                        <div className="icon">
                            <FaCircle/>
                        </div>
                        <div className="title">
                            Import Documents
                        </div>
                    </li>
                    <li>
                        <div className="image">
                            <img src="./w3.svg"/>
                        </div>
                        <div className="icon">
                            <FaCircle/>
                        </div>
                        <div className="title">
                            Import Documents
                        </div>
                    </li>
                    <li>
                        <div className="image">
                            <img src="./w4.svg"/>
                        </div>
                        <div className="icon">
                            <FaCircle/>
                        </div>
                        <div className="title">
                            Import Documents
                        </div>
                    </li>
                    <li>
                        <div className="image">
                            <img src="./w5.svg"/>
                        </div>
                        <div className="icon">
                            <FaCircle/>
                        </div>
                        <div className="title">
                            Import Documents
                        </div>
                    </li>
                </ul>
            </div>
            <button>Learn more about how kira works</button>
        </div>
    )
}

export default Works
