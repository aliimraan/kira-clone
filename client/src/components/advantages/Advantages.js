import React from 'react'
import './advantages.css'

function Advantages() {
    return (
        <div className="advantages">
           <div className="heading">The Kira Advantage</div>
           <div className="card_area">
                <div className="cards">
                    <div className="image"><img src="./a1.png" alt="image"/></div>
                    <div className="card_heading">Create Efficiencies & Review More In Less Time</div>
                    <div className="card_para">Find clauses and data points you need in a fraction of the time that it traditionally takes.</div>
                </div>
                <div className="cards">
                    <div className="image"><img src="./a2.png" alt="image"/></div>
                    <div className="card_heading">Identify & Mitigate Risks Faster</div>
                    <div className="card_para">Proactively analyze areas of exposure quickly enact upon these potential threats.</div>
                </div>
                <div className="cards">
                    <div className="image"><img src="./a3.png" alt="image"/></div>
                    <div className="card_heading">Spur Profitable Growth. Win New Business.</div>
                    <div className="card_para">Gain a competitive advantage by the fully realizing of contract value and winning new business.</div>
                </div>
           </div>
        </div>
    )
}

export default Advantages
