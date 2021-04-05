import React,{useState} from 'react'
import './contacts.css'

function Contacts() {
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [email,setEmail]=useState('')
    const [organisation,setOrganisation]=useState('')
    const [jobTitle,setJobTitle]=useState('')
    const [phoneNo,setPhoneNo]=useState('')
    return (
        <div className="contacts">
            <div className="banner">
                <h3>Ready to Supercharge Your Contract Analysis?</h3>
            </div>
            <div className="contact_area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className="box1">
                                <div className="image">
                                    <img src="../dashboard.svg" alt="image"/>
                                </div>
                                <h2>Award-winning contract review software</h2>
                                <p>Learn how Kira’s award-winning software can help you save up to 90% of your contract review and analysis time using machine learning.</p>
                                <h3>Trusted by the world's largest Law, Commercial, IT and Professional Service firms</h3>
                                <div className="logo_area">
                                <img src="../c1.svg" alt="image"/>
                                <img src="../c2.svg" alt="image"/>
                                <img src="../c3.svg" alt="image"/>
                                <img src="../c4.svg" alt="image"/>
                                <img src="../c5.svg" alt="image"/>
                                <img src="../c6.svg" alt="image"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="box2">
                                <h3>Sign up for a free demo</h3>
                                <form>
                                    <div className="name_field">
                                        <div className="group">
                                            <div className="label">first name</div>
                                            <input type="text" onChange={(e)=>setFirstName(e.target.value)}/>
                                        </div>
                                        <div className="group">
                                            <div className="label">last name</div>
                                            <input type="text" onChange={(e)=>setLastName(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="allgroup">
                                        <div className="label">Email Address</div>
                                        <input type="email" onChange={(e)=>setEmail(e.target.value)}/>
                                    </div>
                                    <div className="allgroup">
                                        <div className="label">Organization </div>
                                        <input type="text" onChange={(e)=>setOrganisation(e.target.value)}/>
                                    </div>
                                    <div className="allgroup">
                                        <div className="label">Job Title </div>
                                        <input type="text" onChange={(e)=>setJobTitle(e.target.value)}/>
                                    </div>
                                    <div className="allgroup">
                                        <div className="label">Organization Type</div>
                                        <select name="cars" id="cars">
                                            <option value="volvo">---select an organisation---</option>
                                            <option value="volvo">abc</option>
                                            <option value="saab">def</option>
                                            <option value="mercedes">ghi</option>
                                            <option value="audi">jkl</option>
                                        </select>
                                    </div>
                                    <div className="allgroup">
                                        <div className="label">country</div>
                                        <select name="cars" id="cars" >
                                            <option value="volvo">---select an organisation---</option>
                                            <option value="volvo">India</option>
                                            <option value="saab">Srilanka</option>
                                            <option value="mercedes">Russia</option>
                                            <option value="audi">England</option>
                                        </select>
                                    </div>
                                    <div className="allgroup">
                                        <div className="label">phone</div>
                                        <input type="number" onChange={(e)=>setPhoneNo(e.target.value)}/>
                                    </div>
                                    <p>By submitting this request, you agree to Kira Systems using your information to communicate content and partner services. You may review our <a href="#">privacy policy</a> or opt-out by contacting Kira Systems.</p>
                                    <button>Request a Demo</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts
