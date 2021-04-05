import React from 'react'
import './products.css'

function Products() {
    return (
        <div className="products">
            <div className="heading">Product Features</div>
            <div className="pro_area">
                <div className="cards">
                    <div className="card_logo">
                        <img src="./p1.svg" alt="logo"/>
                    </div>
                    <div className="card_heading">Patented Machine Learning</div>
                    <p>Kira’s artificial intelligence is built using state-of-the-art machine learning techniques by top AI/ML experts.</p>
                    <a href="#"><span>Learn about our Patented Machine Learning →</span></a>
                </div>
                <div className="cards">
                    <div className="card_logo">
                        <img src="./p2.svg" alt="logo"/>
                    </div>
                    <div className="card_heading">Built-In Intelligence</div>
                    <p>Kira comes with over 1000 smart fields, which are machine learning models that efficiently and accurately extract common clauses and data points.</p>
                    <a href="#"><span>Learn about our Built-In Intelligence →</span></a>
                </div>
                <div className="cards">
                    <div className="card_logo">
                        <img src="./p3.svg" alt="logo"/>
                    </div>
                    <div className="card_heading">Quick Study</div>
                    <p>Capture the expertise of your own subject matter experts. Create your own smart fields to find specific clauses and data points unique to your organization.</p>
                    <a href="#"><span>Learn about Quick Study →</span></a>
                </div>
                <div className="cards">
                    <div className="card_logo">
                        <img src="./p4.svg" alt="logo"/>
                    </div>
                    <div className="card_heading">Workflow Manager</div>
                    <p>Kira makes collaboration easy with our user-friendly interface and intuitive workflow features.</p>
                    <a href="#"><span>Learn about Adaptive Workflows →</span></a>
                </div>
            </div>
        </div>
    )
}

export default Products
