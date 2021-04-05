import React,{useRef, useState} from 'react'
import './analysis.css'
import { FaArrowDown} from "react-icons/fa";

function Analysis() {
    const toggler=useRef(0)
    const toggleHandler=(e)=>{
        e.target.parentElement.parentElement.children[1].children[0].classList.toggle('active')
    }
    return (
        <div className="analysis">
            <div className="heading">Kira Contract Analysis Software</div>
            <p>Kira makes powerful machine learning artificial intelligence accessible to everyone, through an intuitive user interface that features real-time collaboration and flexible project management</p>
            <div className="faq">
                <div className="box1">
                    <img src="./work1.svg"/>
                </div>
                <div className="box2">
                    <div className="all_notes">
                        <div className="notes_data" ref={toggler}>
                            <div className="notes_heading" onClick={(e)=>{toggleHandler(e)}}>
                                <h4>Kira automatically converts</h4>
                                <span><FaArrowDown/></span>
                            </div>
                            <div className="notes_sub">
                                <p className="para active">Kira automatically converts files into machine readable form and uses our Built-In Intelligence to efficiently and accurately extract common clauses, provisions, and data points. For unique projects, you can use Quick Study to build your own smart fields, our machine learning models, to find what you need.</p>
                            </div>
                        </div>
                        <div className="notes_data" ref={toggler}>
                            <div className="notes_heading" onClick={(e)=>{toggleHandler(e)}}>
                                <h4>Kira automatically converts</h4>
                                <span><FaArrowDown/></span>
                            </div>
                            <div className="notes_sub">
                                <p className="para active">Kira automatically converts files into machine readable form and uses our Built-In Intelligence to efficiently and accurately extract common clauses, provisions, and data points. For unique projects, you can use Quick Study to build your own smart fields, our machine learning models, to find what you need.</p>
                            </div>
                        </div>
                        <div className="notes_data" ref={toggler}>
                            <div className="notes_heading" onClick={(e)=>{toggleHandler(e)}}>
                                <h4>Kira automatically converts</h4>
                                <span><FaArrowDown/></span>
                            </div>
                            <div className="notes_sub">
                                <p className="para active">Kira automatically converts files into machine readable form and uses our Built-In Intelligence to efficiently and accurately extract common clauses, provisions, and data points. For unique projects, you can use Quick Study to build your own smart fields, our machine learning models, to find what you need.</p>
                            </div>
                        </div>
                        <div className="notes_data" ref={toggler}>
                            <div className="notes_heading" onClick={(e)=>{toggleHandler(e)}}>
                                <h4>Kira automatically converts</h4>
                                <span><FaArrowDown/></span>
                            </div>
                            <div className="notes_sub">
                                <p className="para active">Kira automatically converts files into machine readable form and uses our Built-In Intelligence to efficiently and accurately extract common clauses, provisions, and data points. For unique projects, you can use Quick Study to build your own smart fields, our machine learning models, to find what you need.</p>
                            </div>
                        </div>
                        <div className="notes_data" ref={toggler}>
                            <div className="notes_heading" onClick={(e)=>{toggleHandler(e)}}>
                                <h4>Kira automatically converts</h4>
                                <span><FaArrowDown/></span>
                            </div>
                            <div className="notes_sub">
                                <p className="para active">Kira automatically converts files into machine readable form and uses our Built-In Intelligence to efficiently and accurately extract common clauses, provisions, and data points. For unique projects, you can use Quick Study to build your own smart fields, our machine learning models, to find what you need.</p>
                            </div>
                        </div>
                        <div className="notes_data" ref={toggler}>
                            <div className="notes_heading" onClick={(e)=>{toggleHandler(e)}}>
                                <h4>Kira automatically converts</h4>
                                <span><FaArrowDown/></span>
                            </div>
                            <div className="notes_sub">
                                <p className="para active">Kira automatically converts files into machine readable form and uses our Built-In Intelligence to efficiently and accurately extract common clauses, provisions, and data points. For unique projects, you can use Quick Study to build your own smart fields, our machine learning models, to find what you need.</p>
                            </div>
                        </div>
                        <div className="notes_data" ref={toggler}>
                            <div className="notes_heading" onClick={(e)=>{toggleHandler(e)}}>
                                <h4>Kira automatically converts</h4>
                                <span><FaArrowDown/></span>
                            </div>
                            <div className="notes_sub">
                                <p className="para active">Kira automatically converts files into machine readable form and uses our Built-In Intelligence to efficiently and accurately extract common clauses, provisions, and data points. For unique projects, you can use Quick Study to build your own smart fields, our machine learning models, to find what you need.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Analysis
