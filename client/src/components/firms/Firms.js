import React from 'react'
import './Firms.css'
import { FaArrowRight } from "react-icons/fa";

function Firms() {
    return (
        <div className="firms">
            <div className="heading">Made to Empower Your Teams</div>
            <div className="firm_cards">
                <div className="cards">
                    <div className="card_heading">Law Firms</div>
                    <p>Firms can provide greater client value and mitigate risks through an efficient and accurate AI-powered contract analysis.</p>
                    <div className="firm_links">
                        <a href="#"><p>Law Firms<span><FaArrowRight size="15px"/></span></p></a>
                        <a href="#"> <p>Small & Medium Law Firms<span><FaArrowRight size="15px" /></span></p></a>
                    </div>
                </div>
               <div className="cards">
                    <div className="card_heading">Professional Services</div>
                    <p>Professional Services teams can create better client experience and drive insightful and higher-quality services.</p>
                    <div className="firm_links">
                        <a href="#"><p>Audit & Accounting Firms <span><FaArrowRight size="15px"/></span></p></a>
                        <a href="#"> <p>ALSPs <span><FaArrowRight size="15px"/></span></p></a>
                        <a href="#"> <p> Consulting Firms <span><FaArrowRight size="15px"/></span></p></a>
                    </div>
               </div>
               <div className="cards">
                    <div className="card_heading">Corporations</div>
                    <p>Corporate teams across multiple business units are able to make enterprise-wide data-driven decisions and uncover critical insights.</p>
                    <div className="firm_links">
                        <a href="#"><p>Corporations <span><FaArrowRight size="15px"/></span></p></a>
                    </div>
               </div>
            </div>
        </div>
    )
}

export default Firms
